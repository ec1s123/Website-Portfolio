import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { CONTACT_LIMITS, validateContact } from "../lib/contactValidation";
import { buttonPrimary, focusRing } from "../lib/styles";

const fields = [
    { name: "name", label: "Name", type: "text", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email", hint: "So I can reply. It’s never shared." },
    { name: "message", label: "Message", multiline: true },
];
const inputClass = "mt-2 block w-full rounded-md border bg-card px-4 py-3 text-base text-foreground transition-colors placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 aria-[invalid=true]:border-red-500 dark:aria-[invalid=true]:border-red-400";
const errorClass = "mt-2 text-sm text-red-600 dark:text-red-400";
const fallbackError = "Your message couldn’t be sent. Please try again later.";

export const ContactForm = () => {
    const [status, setStatus] = useState("idle");
    const [fieldErrors, setFieldErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [sender, setSender] = useState("");
    const startedAt = useRef(0);
    const formRef = useRef(null);
    const confirmationRef = useRef(null);

    useEffect(() => {
        if (status === "idle") startedAt.current = Date.now();
        if (status === "sent") confirmationRef.current?.focus();
    }, [status]);

    const clearError = (event) => {
        const { name } = event.target;
        if (!fieldErrors[name]) return;
        setFieldErrors((current) => {
            const next = { ...current };
            delete next[name];
            return next;
        });
    };

    const submit = async (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
        const { name, errors } = validateContact(data);
        setFormError("");
        if (Object.keys(errors).length) {
            setFieldErrors(errors);
            formRef.current.querySelector(`[name="${Object.keys(errors)[0]}"]`)?.focus();
            return;
        }

        setStatus("sending");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, elapsedMs: Date.now() - startedAt.current }),
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok) {
                setFieldErrors(result.fields || {});
                throw new Error(result.error || fallbackError);
            }
            setSender(name);
            setStatus("sent");
        } catch (error) {
            setFormError(error.message || fallbackError);
            setStatus("error");
        }
    };

    if (status === "sent") {
        return (
            <div className="rounded-md border border-primary/30 bg-primary/5 p-6 sm:p-8">
                <CheckCircle2 size={28} className="text-primary" aria-hidden="true" />
                <h3 ref={confirmationRef} tabIndex={-1} className="mt-4 text-2xl font-semibold tracking-tight outline-none">Thanks, {sender}. Message sent.</h3>
                <p className="mt-2 leading-relaxed text-muted">It’s on its way to my inbox, and I’ll reply to the email address you gave.</p>
                <button type="button" onClick={() => setStatus("idle")} className={`mt-6 cursor-pointer rounded-sm text-sm font-medium text-primary hover:underline ${focusRing}`}>
                    Send another message
                </button>
            </div>
        );
    }

    const sending = status === "sending";

    return (
        <form ref={formRef} onSubmit={submit} noValidate className="relative space-y-6">
            {fields.map(({ name, label, type, autoComplete, hint, multiline }) => {
                const error = fieldErrors[name];
                const describedBy = [hint && `${name}-hint`, error && `${name}-error`].filter(Boolean).join(" ") || undefined;
                const shared = { id: `contact-${name}`, name, required: true, maxLength: CONTACT_LIMITS[name], onInput: clearError, disabled: sending, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy, className: inputClass };
                return (
                    <div key={name}>
                        <label htmlFor={`contact-${name}`} className="text-sm font-medium">{label}</label>
                        {multiline ? <textarea {...shared} rows={6} className={`${inputClass} resize-y`} /> : <input {...shared} type={type} autoComplete={autoComplete} />}
                        {hint && !error && <p id={`${name}-hint`} className="mt-2 text-xs text-subtle">{hint}</p>}
                        {error && <p id={`${name}-error`} className={errorClass}>{error}</p>}
                    </div>
                );
            })}

            {/* Honeypot: hidden from people and assistive tech; bots tend to fill it in. */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
                <label htmlFor="contact-company">Company</label>
                <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={sending} className={`${buttonPrimary} cursor-pointer disabled:cursor-wait disabled:opacity-70`}>
                    {sending ? <Loader2 size={17} className="animate-spin" aria-hidden="true" /> : <Send size={17} aria-hidden="true" />}
                    {sending ? "Sending…" : "Send message"}
                </button>
            </div>
            <p role="alert" className={formError ? errorClass : "sr-only"}>{formError}</p>
        </form>
    );
};
