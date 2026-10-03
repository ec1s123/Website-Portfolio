import { ArrowUpRight } from "lucide-react";
import { CareerLogo } from "./CareerLogo";
import { careerSources, techCareer, newestFirst, formatCareerDate } from "../data/careers";

const areas = [
    {
        title: "Software & product",
        organizations: ["auxiliary-digital", "automate-army"],
        focus: "From requirements to working software",
        summary: "Combine business analysis with frontend and backend development at Auxiliary Digital. Previously built an operations platform at Automate Army with a TypeScript API, PostgreSQL data layer, BigQuery analytics, and Next.js reporting tools.",
    },
    {
        title: "Machine learning, AI & research",
        organizations: ["maryville-ai-engineer", "neuralseek"],
        focus: "Turning research into practical AI tools",
        summary: "Combined AI research with hands-on engineering at Maryville, building learning assistants, course-specific agents, and machine learning pipelines to understand student conversations and evaluate answer quality. At NeuralSeek, built and deployed a custom AI agent and completed L1–L3 AI certifications.",
    },
];

export const TechCareer = () => (
    <section id="career-timeline" aria-labelledby="timeline-heading">
        <p className="sr-only" role="status">Tech career selected. Two areas of experience across four organizations.</p>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 id="timeline-heading" className="text-3xl font-semibold tracking-tight">Engineering & technology</h2>
            <a href={careerSources.linkedin.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-2 text-sm text-foreground/65 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                Full experience on LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
        </div>
        <div className="divide-y">
            {areas.map(({ title, organizations, focus, summary }) => {
                const entries = newestFirst(techCareer.filter((entry) => organizations.includes(entry.id)));
                const startYear = entries.map((entry) => entry.start.slice(0, 4)).sort()[0];
                const endYear = entries[0].end?.slice(0, 4) || "Present";
                const years = startYear === endYear ? startYear : `${startYear}–${endYear}`;

                return (
                    <section key={title} aria-label={`${title} career`} className="grid gap-5 py-8 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-10">
                        <header>
                            <p className="text-sm font-medium tabular-nums text-primary">{years}</p>
                            <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
                        </header>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-primary">{focus}</p>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70">{summary}</p>
                            <ul aria-label={`${title} organizations, most recent first`} className="mt-5 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                                {entries.map((entry) => (
                                    <li key={entry.id} className="flex items-start gap-2.5 text-sm">
                                        <CareerLogo entry={entry} compact />
                                        <div className="min-w-0">
                                            <h4 className="font-medium">{entry.organization}</h4>
                                            <p className="mt-1 text-xs text-foreground/55">
                                                <time dateTime={entry.start}>{formatCareerDate(entry.start)}</time>
                                                {" — "}
                                                {entry.end ? <time dateTime={entry.end}>{formatCareerDate(entry.end)}</time> : "Present"}
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-foreground/70">
                                                {entry.progression ? entry.progression.map((position) => position.role).join(" → ") : entry.role}
                                                {entry.employmentType && ` · ${entry.employmentType}`}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                );
            })}
        </div>
    </section>
);
