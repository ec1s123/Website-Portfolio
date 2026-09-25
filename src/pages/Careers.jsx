import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, Gamepad2 } from "lucide-react";
import { careerSources, esportsCareer, esportsPress, techCareer, newestFirst, formatCareerDate } from "../data/careers";

export const Careers = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const track = searchParams.get("track") === "esports" ? "esports" : "tech";
    const isEsports = track === "esports";
    const entries = newestFirst(isEsports ? esportsCareer : techCareer);
    const sources = isEsports ? [careerSources.valorant, careerSources.counterstrike] : [careerSources.linkedin];

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
                <p className="text-xs uppercase tracking-widest text-foreground/55">Most recent first</p>
            </div>

            {isEsports && (
                <section aria-label="Esports career highlights" className="mb-12 border-b pb-10 md:mb-16">
                    <dl className="grid gap-8 sm:grid-cols-3">
                        <div><dt className="mb-3 text-sm text-foreground/65">UK CS:GO national titles</dt><dd className="text-4xl font-semibold tracking-tight text-primary">3</dd></div>
                        <div><dt className="mb-3 text-sm text-foreground/65">Students taught in eight weeks</dt><dd className="text-4xl font-semibold tracking-tight">50+</dd></div>
                        <div><dt className="mb-3 text-sm text-foreground/65">Academy players coached</dt><dd className="text-4xl font-semibold tracking-tight">10+</dd></div>
                    </dl>
                </section>
            )}

            {isEsports && (
                <section aria-labelledby="press-heading" className="mb-12 border-b pb-10 md:mb-16">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">In the press / 2020</p>
                    <h2 id="press-heading" className="text-3xl font-semibold tracking-tight">From fish123 to Team Liquid.</h2>
                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
                        {esportsPress.map((article) => (
                            <article key={article.url} className="border-t pt-5">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{article.publication}</p>
                                <h3 className="text-xl font-medium leading-snug">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-3 rounded-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                        {article.title}<ArrowUpRight size={18} className="mt-1 shrink-0" aria-hidden="true" />
                                    </a>
                                </h3>
                                <p className="mt-3 text-xs text-foreground/55">{article.author} · <time dateTime={article.date}>{formatCareerDate(article.date)}</time></p>
                                {article.description && <p className="mt-4 text-sm leading-relaxed text-foreground/65">{article.description}</p>}
                            </article>
                        ))}
                    </div>
                </section>
            )}

            <section id="career-timeline" aria-labelledby="timeline-heading" className="grid items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
                <div className="md:sticky md:top-28">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{isEsports ? "Competition & leadership" : "Engineering & technology"}</p>
                    <h2 id="timeline-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">{isEsports ? "Beyond the server." : "Building what’s next."}</h2>
                    <p className="mt-5 text-sm leading-relaxed text-foreground/65">{isEsports ? "From team captain and in-game leader to coach, instructor, and colour caster. My playing career took me across Europe, North America, and India, representing organizations including Team Liquid, 100 Thieves, Ninjas in Pyjamas, and Fnatic Academy." : "My work in software development, machine learning, and AI, alongside the projects that put those skills into practice."}</p>
                    <div className="mt-6 flex flex-col items-start gap-3">
                        {sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">{source.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
                    </div>
                </div>

                <div className="min-w-0">
                    <p className="sr-only" role="status">{isEsports ? "Esports" : "Tech"} timeline selected. {entries.length} entries.</p>
                    {entries.length > 0 ? (
                        <ol className="ml-2 border-l border-primary/25">
                            {entries.map((entry, index) => (
                                <li key={entry.id} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
                                    <span aria-hidden="true" className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ring-4 ring-background ${index === 0 ? "bg-primary" : "bg-background border border-primary/60"}`} />
                                    <div className="border-b pb-8">
                                        <p className="mb-3 text-xs font-medium tracking-wide text-foreground/60"><time dateTime={entry.start}>{formatCareerDate(entry.start)}</time> — {entry.end ? <time dateTime={entry.end}>{formatCareerDate(entry.end)}</time> : "Present"}</p>
                                        <div className="flex flex-wrap items-center gap-3"><h3 className="text-2xl font-semibold tracking-tight">{entry.organization}</h3>{!entry.end && <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">Current</span>}{entry.discipline && <span className="rounded-full border px-2.5 py-1 text-[11px] text-foreground/60">{entry.discipline}</span>}</div>
                                        <p className="mt-2 font-medium text-primary">{entry.role}</p>
                                        {(entry.employmentType || entry.location) && <p className="mt-2 text-xs leading-relaxed text-foreground/60">{[entry.employmentType, entry.location].filter(Boolean).join(" · ")}</p>}
                                        {entry.description && <p className="mt-4 text-sm leading-relaxed text-foreground/70">{entry.description}</p>}
                                        {entry.highlights && <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-foreground/70">{entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div className="border-y py-10">
                            <h3 className="text-2xl font-semibold">Explore my work</h3>
                            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/65">Find my professional experience on LinkedIn, or explore the applications and machine learning projects I’ve built.</p>
                            <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">View projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
                        </div>
                    )}
                </div>
            </section>

            {!isEsports && (
                <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t pt-8">
                    <p className="text-sm text-foreground/65">See the technical work behind my portfolio.</p>
                    <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Explore projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
                </div>
            )}
        </article>
    );
};
