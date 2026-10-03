import { CareerLogo } from "./CareerLogo";
import { DateRange } from "./ui/DateRange";
import { HairlineItem, HairlineList } from "./ui/HairlineList";
import { TagList } from "./ui/TagList";

export const CareerEntry = ({ entry }) => (
    <li className="grid gap-4 py-8 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-10">
        <div>
            <p className="text-sm font-medium tabular-nums text-primary"><DateRange start={entry.start} end={entry.end} /></p>
            {entry.employmentType && <p className="mt-1.5 text-xs text-subtle">{entry.employmentType}</p>}
        </div>
        <div className="min-w-0">
            <header className="flex items-start gap-3">
                <CareerLogo entry={entry} compact />
                <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight">{entry.role}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                        {entry.organization}
                        {entry.location && <span className="text-subtle"> · {entry.location}</span>}
                    </p>
                </div>
            </header>
            {entry.summary && <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{entry.summary}</p>}
            {entry.highlights?.length > 0 && (
                <HairlineList label={`Highlights as ${entry.role}`} className="mt-5 max-w-4xl">
                    {entry.highlights.map(({ title, description }) => (
                        <HairlineItem key={title} title={title} as="h4">{description}</HairlineItem>
                    ))}
                </HairlineList>
            )}
            {entry.skills?.length > 0 && <TagList items={entry.skills} label={`Skills used as ${entry.role}`} className="mt-5" />}
        </div>
    </li>
);
