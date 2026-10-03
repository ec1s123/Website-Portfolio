import { cn } from "../../lib/utils";

// Pills for tools and skills attached to a role or project.
export const TagList = ({ items, label, className }) => (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
        {items.map((item) => (
            <li key={item} className="rounded-full border px-2.5 py-1 text-xs text-muted">{item}</li>
        ))}
    </ul>
);
