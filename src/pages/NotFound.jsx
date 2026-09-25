import { Link } from "react-router-dom";

export const NotFound = () => (
    <section className="px-6 py-24 text-center">
        <p className="mb-3 text-sm font-semibold text-primary">404</p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="mb-8 text-foreground/70">This page may have moved, or the address may be incorrect.</p>
        <Link to="/" className="cosmic-button">Back to home</Link>
    </section>
);
