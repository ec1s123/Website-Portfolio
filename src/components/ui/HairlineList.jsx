import { Children } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { focusRing } from "../../lib/styles";
import { cn } from "../../lib/utils";

// Column count follows the item count so no item sits alone in a row.
const columns = (count) => {
    if (count === 3) return "lg:grid-cols-3";
    if (count > 1) return "sm:grid-cols-2";
    return "";
};

// A grid of short titled items, each marked by a primary hairline on its left edge.
// `wide` items take a full row and don't count toward the column choice.
export const HairlineList = ({ label, className, children }) => {
    const items = Children.toArray(children);
    const regular = items.filter((child) => !child.props?.wide).length;
    return (
        <ul aria-label={label} className={cn("grid gap-x-8 gap-y-6", columns(regular || items.length), className)}>
            {children}
        </ul>
    );
};

// Linked item title: `to` for pages on this site, `href` for other sites (opens in a new tab).
// The arrow stays attached to the last word when the title wraps.
export const HairlineLink = ({ to, href, children }) => {
    const className = `rounded-sm transition-colors hover:text-primary ${focusRing}`;
    const arrow = <ArrowUpRight size={14} className="ml-1 inline align-[-2px] text-primary" aria-hidden="true" />;
    return to
        ? <Link to={to} className={className}>{children}{arrow}</Link>
        : <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}{arrow}<span className="sr-only"> (opens in a new tab)</span></a>;
};

// `as` sets the title's heading level so it nests correctly under the section heading.
export const HairlineItem = ({ title, as = "h3", eyebrow, meta, wide = false, children }) => {
    const Heading = as;
    return (
        <li className={cn("min-w-0 border-l-2 border-primary/40 pl-4", wide && "col-span-full max-w-3xl")}>
            {eyebrow && <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
            <Heading className="text-sm font-semibold leading-6">{title}</Heading>
            {children && <div className="mt-1 text-sm leading-6 text-muted">{children}</div>}
            {meta && <p className="mt-2 text-xs text-subtle">{meta}</p>}
        </li>
    );
};
