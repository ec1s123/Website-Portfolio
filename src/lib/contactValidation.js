// Shared by the contact form and the /api/contact function so both apply the same rules.
export const CONTACT_LIMITS = { name: 100, email: 254, message: 5000 };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export const validateContact = (input) => {
    const name = clean(input?.name, CONTACT_LIMITS.name).replace(/[\r\n]+/g, " ");
    const email = clean(input?.email, CONTACT_LIMITS.email);
    const message = clean(input?.message, CONTACT_LIMITS.message);
    const errors = {};
    if (!name) errors.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";
    if (message.length < 10) errors.message = "Please write a message of at least 10 characters.";
    return { name, email, message, errors };
};
