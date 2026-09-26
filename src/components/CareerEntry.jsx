import { CareerLogo } from "./CareerLogo";
import { formatCareerDate } from "../data/careers";

export const CareerEntry = ({ entry, latest }) => {
    const details = [entry.description, ...(entry.highlights || [])].filter(Boolean);
    const category = entry.discipline || entry.employmentType;

    return (
        <li className="relative pb-8 pl-6 last:pb-0 sm:pl-8">
            <span aria-hidden="true" className={`absolute -left-[5px] top-6 h-[9px] w-[9px] rounded-full ring-4 ring-background ${latest ? "bg-primary" : "border border-primary/60 bg-background"}`} />
            <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b pb-8 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
                <CareerLogo entry={entry} />
                <div className="min-w-0 space-y-4">
                    <header className="space-y-2">
                        <div className="flex min-h-6 flex-wrap items-center gap-x-3 gap-y-2 text-xs leading-5">
                            <p className="font-medium tabular-nums text-foreground/60">
                                <time dateTime={entry.start}>{formatCareerDate(entry.start)}</time>
                                {" — "}
                                {entry.end ? <time dateTime={entry.end}>{formatCareerDate(entry.end)}</time> : "Present"}
                            </p>
                            {category && <span className="rounded-full border px-2 py-0.5 text-foreground/60">{category}</span>}
                            {!entry.end && <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">Current</span>}
                        </div>
                        <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{entry.organization}</h3>
                        <p className="text-sm font-medium leading-relaxed text-primary sm:text-base">{entry.role}</p>
                        {entry.location && <p className="text-xs leading-relaxed text-foreground/60">{entry.location}</p>}
                    </header>
                    {details.length > 0 && (
                        <div className="space-y-3 text-sm leading-7 text-foreground/70">
                            {details.map((detail) => <p key={detail}>{detail}</p>)}
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};
