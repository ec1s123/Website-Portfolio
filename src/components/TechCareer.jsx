import { ArrowUpRight } from "lucide-react";
import { CareerEntry } from "./CareerEntry";
import { careerSources, techCareer, newestFirst } from "../data/careers";
import { linkQuiet } from "../lib/styles";

const roles = newestFirst(techCareer);
const organizationCount = new Set(roles.map((entry) => entry.organization)).size;

export const TechCareer = () => (
    <section id="career-timeline" aria-labelledby="timeline-heading">
        <p className="sr-only" role="status">Tech career selected. {roles.length} roles across {organizationCount} organizations.</p>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
                <h2 id="timeline-heading" className="text-3xl font-semibold tracking-tight">Engineering & technology</h2>
                <p className="mt-2 text-sm text-muted">{roles.length} roles across software engineering, AI, and product, most recent first.</p>
            </div>
            <a href={careerSources.linkedin.url} target="_blank" rel="noopener noreferrer" className={linkQuiet}>
                Full experience on LinkedIn <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
            </a>
        </div>
        <ol aria-label="Roles, most recent first" className="divide-y">
            {roles.map((entry) => <CareerEntry key={entry.id} entry={entry} />)}
        </ol>
    </section>
);
