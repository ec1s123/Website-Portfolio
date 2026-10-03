// Vercel serverless function behind the contact form. The recipient address lives only in
// the CONTACT_TO_EMAIL environment variable, so it never reaches the browser or the repo.
//
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      API key from https://resend.com
//   CONTACT_TO_EMAIL    Where messages are delivered
//   CONTACT_FROM_EMAIL  Optional sender, e.g. "Portfolio <contact@ec1s.com>" once the domain is
//                       verified in Resend. Defaults to Resend's test sender, which only
//                       delivers to the email address on your Resend account.

import { validateContact } from "../src/lib/contactValidation.js";

const MIN_FILL_MS = 1500; // Measured from page load; people need longer than this to fill the form.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

// Best-effort only: each function instance keeps its own memory. Use a Vercel Firewall
// rate-limit rule on /api/contact for enforcement across instances.
const recentByIp = new Map();

const isRateLimited = (ip) => {
    const now = Date.now();
    const recent = (recentByIp.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);
    recent.push(now);
    recentByIp.set(ip, recent);
    return recent.length > RATE_MAX;
};

const isSameOrigin = (req) => {
    const origin = req.headers.origin;
    if (!origin) return false;
    try {
        return new URL(origin).host === req.headers.host;
    } catch {
        return false;
    }
};

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed." });
    }
    if (!isSameOrigin(req)) return res.status(403).json({ error: "Forbidden." });

    let body = req.body || {};
    if (typeof body === "string") {
        try {
            body = JSON.parse(body || "{}");
        } catch {
            return res.status(400).json({ error: "Invalid request." });
        }
    }
    if (!body || typeof body !== "object") return res.status(400).json({ error: "Invalid request." });

    // Bots fill the hidden field or submit instantly; pretend it worked so they move on.
    if (body.company || Number(body.elapsedMs) < MIN_FILL_MS) return res.status(200).json({ ok: true });

    const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) return res.status(429).json({ error: "Too many messages. Please try again later." });

    const { name, email, message, errors } = validateContact(body);
    if (Object.keys(errors).length) return res.status(400).json({ error: "Please check the form.", fields: errors });

    const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
        console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL.");
        return res.status(500).json({ error: "The contact form isn’t set up yet." });
    }

    const failed = () => res.status(502).json({ error: "Your message couldn’t be sent. Please try again later." });
    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                from: CONTACT_FROM_EMAIL || "Portfolio contact <onboarding@resend.dev>",
                to: [CONTACT_TO_EMAIL],
                reply_to: email,
                subject: `Portfolio message from ${name}`,
                text: `${message}\n\n—\nFrom: ${name} <${email}>\nSent via ec1s.com`,
            }),
        });
        if (!response.ok) {
            console.error("Resend rejected the message:", response.status, await response.text());
            return failed();
        }
    } catch (error) {
        console.error("Couldn’t reach Resend:", error);
        return failed();
    }
    return res.status(200).json({ ok: true });
}
