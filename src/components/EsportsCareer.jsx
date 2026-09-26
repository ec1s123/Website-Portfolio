import { ArrowUpRight } from "lucide-react";
import { CareerLogo } from "./CareerLogo";
import { careerSources, esportsCareer, esportsPress, newestFirst, formatCareerDate } from "../data/careers";

const eras = [
    {
        game: "VALORANT",
        source: careerSources.valorant,
        achievement: "8 North American collegiate national championships",
        summary: "Player, captain, and in-game leader across Europe, North America, and India. Led fish123 into Team Liquid’s first VALORANT roster; retired from professional play in April 2026.",
    },
    {
        game: "Counter-Strike",
        source: careerSources.counterstrike,
        achievement: "3 UK national championships",
        summary: "Competed in the UK scene and the televised Gfinity Elite Series. Joined Fnatic Academy after winning GAMERZ, before moving into VALORANT in 2020.",
    },
];

export const EsportsCareer = () => (
    <div id="career-timeline">
        <p className="sr-only" role="status">Esports career selected. Two game eras, coaching and broadcast highlights, and four articles.</p>
        <section aria-labelledby="playing-heading">
            <h2 id="playing-heading" className="mb-8 text-3xl font-semibold tracking-tight">Teams & competition</h2>
            <div className="divide-y">
                {eras.map(({ game, source, achievement, summary }) => {
                    const teams = newestFirst(esportsCareer.filter((entry) => entry.discipline === game));
                    const years = `${teams.at(-1).start.slice(0, 4)}–${teams[0].end.slice(0, 4)}`;
                    return (
                        <section key={game} aria-label={`${game} career`} className="grid gap-5 py-8 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-10">
                            <header>
                                <p className="text-sm font-medium tabular-nums text-primary">{years}</p>
                                <h3 className="mt-2 text-2xl font-semibold">{game}</h3>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 py-2 text-sm text-foreground/65 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                    Full playing history <ArrowUpRight size={14} aria-hidden="true" />
                                </a>
                            </header>
                            <div>
                                <p className="text-sm font-semibold text-primary">{achievement}</p>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70">{summary}</p>
                                <ul aria-label={`${game} teams, most recent first`} className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {teams.map((team) => (
                                        <li key={team.id} className="flex items-center gap-2.5 text-sm">
                                            <CareerLogo entry={team} compact />
                                            <span>{team.organization}{team.role.includes("Trial") && <span className="text-xs text-foreground/55"> (trial)</span>}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    );
                })}
            </div>
        </section>

        <section aria-labelledby="beyond-playing-heading" className="mt-8 border-t pt-8">
            <h2 id="beyond-playing-heading" className="text-2xl font-semibold tracking-tight">Beyond playing</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2 md:gap-10">
                <div>
                    <h3 className="font-semibold">Coaching & teaching <span className="ml-2 text-sm font-normal text-foreground/55">2024–2026</span></h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">Assistant coach at Maryville and lead VALORANT instructor at the Saudi Esports Academy. Taught 50+ students live and 300+ players and students through online academies.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Broadcast & analysis <span className="ml-2 text-sm font-normal text-foreground/55">2021–2026</span></h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">Selected analyst and colour-casting appearances across VCT, Red Bull Home Ground, VCL Northern Europe, and Intel Monsters Reloaded.</p>
                </div>
            </div>
        </section>

        <section aria-labelledby="press-heading" className="mt-10 border-t pt-8">
            <h2 id="press-heading" className="text-2xl font-semibold tracking-tight">Selected coverage & interviews</h2>
            <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {esportsPress.map((article) => (
                    <article key={article.url}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{article.publication}</p>
                        <h3 className="font-medium leading-relaxed">
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 rounded-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                {article.title}<ArrowUpRight size={16} className="mt-1 shrink-0" aria-hidden="true" />
                            </a>
                        </h3>
                        <p className="mt-2 text-xs text-foreground/55">{article.author} · {article.dateLabel && `${article.dateLabel} `}<time dateTime={article.date}>{formatCareerDate(article.date)}</time></p>
                    </article>
                ))}
            </div>
        </section>
    </div>
);
