import { Link } from "react-router-dom";
import { PageHeader } from "../components/ui/PageHeader";
import { buttonPrimary, page } from "../lib/styles";

export const NotFound = () => (
    <article className={page}>
        <PageHeader eyebrow="Error 404" title="Page not found" lead="This page may have moved, or the address may be incorrect.">
            <Link to="/" className={`mt-10 ${buttonPrimary}`}>Back to home</Link>
        </PageHeader>
    </article>
);
