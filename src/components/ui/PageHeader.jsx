import { eyebrow as eyebrowClass } from "../../lib/styles";

// Top of every page except Home and the case studies. The title gets the primary-colored period.
export const PageHeader = ({ eyebrow, title, lead, children }) => (
    <header>
        <p className={`mb-5 ${eyebrowClass}`}>{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {title}<span className="text-primary">.</span>
        </h1>
        {lead && <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted">{lead}</p>}
        {children}
    </header>
);
