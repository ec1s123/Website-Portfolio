import { EsportsCareer } from "../components/EsportsCareer";
import { CareerEntry } from "../components/CareerEntry";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, Gamepad2 } from "lucide-react";
import { careerSources, techCareer, newestFirst } from "../data/careers";

export const Careers = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const track = searchParams.get("track") === "esports" ? "esports" : "tech";
    const isEsports = track === "esports";
    const entries = newestFirst(techCareer);

    const selectTrack = (value) => {
        const next = new URLSearchParams(searchParams);
        next.set("track", value);
        setSearchParams(next);
    };

    return (
        <article className="mx-auto max-w-6xl px-6 pb-20 pt-16 text-left sm:px-10 md:pb-28 md:pt-24">
            <header>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Adam Eccles / Career</p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">Two paths.<br />One drive<span className="text-primary">.</span></h1>
                <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/70">From competing as ec1s to building in technology. Explore the teams, roles, and experiences along the way.</p>
            </header>

            <div className="my-12 flex flex-wrap items-center justify-between gap-6 border-b pb-8 md:my-16">
                <div role="group" aria-label="Choose career timeline" className="inline-flex gap-1 rounded-full border bg-card p-1.5">
                    {[{ id: "tech", label: "Tech" }, { id: "esports", label: "Esports" }].map(({ id, label }) => (
                        <button key={id} type="button" aria-pressed={track === id} aria-controls="career-timeline" onClick={() => selectTrack(id)} className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-8 ${track === id ? "bg-primary text-primary-foreground" : "text-foreground/65 hover:bg-primary/10 hover:text-foreground"}`}>
                            {id === "tech" ? <BriefcaseBusiness size={17} aria-hidden="true" /> : <Gamepad2 size={17} aria-hidden="true" />}{label}
                        </button>
                    ))}
                </div>
                <p className="text-xs uppercase tracking-widest text-foreground/55">{isEsports ? "Teams & career highlights" : "Most recent first"}</p>
            </div>

            {isEsports ? <EsportsCareer /> : (
                <section id="career-timeline" aria-labelledby="timeline-heading">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <h2 id="timeline-heading" className="text-3xl font-semibold tracking-tight">Engineering & technology</h2>
                        <a href={careerSources.linkedin.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-2 text-sm text-foreground/65 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                            Full experience on LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    </div>
                    <p className="sr-only" role="status">Tech career selected. {entries.length} organizations, most recent first.</p>
                    <ol className="divide-y">
                        {entries.map((entry) => <CareerEntry key={entry.id} entry={entry} />)}
                    </ol>
                </section>
            )}

            {!isEsports && (
                <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t pt-8">
                    <p className="text-sm text-foreground/65">See the technical work behind my portfolio.</p>
                    <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Explore projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
                </div>
            )}
        </article>
    );
};
