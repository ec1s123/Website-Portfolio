import { Link } from "react-router-dom";
import { linkQuiet } from "../../lib/styles";

// Shared building blocks for /projects/* case-study pages.

export const CaseStudyHeader = ({ eyebrow, title, intro, action, metadata }) => (
    <>
        <Link to="/projects" className={linkQuiet}>← All projects</Link>
        <header className="pb-10 pt-10 md:pb-14 md:pt-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">{title}<span className="text-primary">.</span></h1>
            <div className="mt-8 grid items-start gap-8 md:grid-cols-[1fr_auto] md:gap-16">
                <p className="max-w-2xl text-xl leading-relaxed text-muted md:text-2xl">{intro}</p>
                {action}
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t pt-6 text-sm md:grid-cols-4">
                {metadata.map(([label, value]) => (
                    <div key={label}><dt className="mb-2 text-xs uppercase tracking-widest text-subtle">{label}</dt><dd>{value}</dd></div>
                ))}
            </dl>
        </header>
    </>
);

// A numbered section: label and title on the left, content on the right (stacked on phones).
export const CaseStudySection = ({ id, label, title, children, className = "" }) => (
    <section aria-labelledby={id} className={`grid gap-8 border-t py-12 md:grid-cols-[1fr_2fr] md:gap-16 md:py-16 ${className}`}>
        <div>
            {label && <p className="mb-3 text-xs font-medium uppercase text-primary">{label}</p>}
            <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance">{title}</h2>
        </div>
        <div className="min-w-0">{children}</div>
    </section>
);

// For content that really is a sequence (pipeline stages, steps). Numbers encode the order.
export const NumberedList = ({ items }) => (
    <ol className="space-y-8">
        {items.map(({ title, description }, index) => (
            <li key={title} className="grid grid-cols-[1.5rem_1fr] gap-4">
                <span className="pt-1 text-xs tabular-nums text-subtle">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="mb-2 text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-muted">{description}</p></div>
            </li>
        ))}
    </ol>
);
