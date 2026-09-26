import { CareerLogo } from "./CareerLogo";
import { formatCareerDate, newestFirst } from "../data/careers";

export const CareerEntry = ({ entry }) => {
    const details = [entry.description, ...(entry.highlights || [])].filter(Boolean);

    return (
        <li className="grid gap-5 py-8 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-10">
            <div>
                <p className="text-sm font-medium tabular-nums text-primary">
                    <time dateTime={entry.start}>{formatCareerDate(entry.start)}</time>
                    {" — "}
                    {entry.end ? <time dateTime={entry.end}>{formatCareerDate(entry.end)}</time> : "Present"}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug">{entry.role}</p>
                {entry.employmentType && <p className="mt-3 text-xs text-foreground/60">{entry.employmentType}</p>}
            </div>
            <div className="min-w-0">
                <header className="flex items-center gap-3">
                    <CareerLogo entry={entry} compact />
                    <h3 className="text-xl font-semibold leading-snug tracking-tight">{entry.organization}</h3>
                </header>
                {entry.progression && (
                    <ol aria-label="Role progression, most recent first" className="mt-4 max-w-2xl space-y-5">
                        {newestFirst(entry.progression).map((position) => (
                            <li key={position.role}>
                                <p className="mb-1 text-xs text-foreground/55">
                                    <time dateTime={position.start}>{formatCareerDate(position.start)}</time>
                                    {" — "}
                                    <time dateTime={position.end}>{formatCareerDate(position.end)}</time>
                                    {" · "}{position.employmentType}
                                </p>
                                <h4 className="text-sm font-semibold">
                                    {position.role}
                                </h4>
                                <p className="mt-1 text-sm leading-7 text-foreground/70">{position.description}</p>
                            </li>
                        ))}
                    </ol>
                )}
                {details.length > 0 && (
                    <div className="mt-3 max-w-2xl space-y-3 text-sm leading-7 text-foreground/70">
                        {details.map((detail) => <p key={detail}>{detail}</p>)}
                    </div>
                )}
                {entry.location && <p className="mt-3 text-xs text-foreground/55">{entry.location}</p>}
            </div>
        </li>
    );
};
