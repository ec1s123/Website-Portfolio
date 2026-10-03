import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { eyebrow as eyebrowClass, linkPrimary } from "../../lib/styles";

// Heading for a major section within a page, with an optional eyebrow and "see more" link.
export const SectionHeader = ({ id, eyebrow, title, description, link }) => (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-12">
        <div>
            {eyebrow && <p className={`mb-3 ${eyebrowClass}`}>{eyebrow}</p>}
            <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {description && <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{description}</p>}
        </div>
        {link && (
            <Link to={link.to} className={linkPrimary}>
                {link.label} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
        )}
    </div>
);
