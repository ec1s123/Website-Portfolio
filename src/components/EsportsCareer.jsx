import { ArrowUpRight } from "lucide-react";
import { CareerLogo } from "./CareerLogo";
import { HairlineItem, HairlineLink, HairlineList } from "./ui/HairlineList";
import { careerSources, esportsCareer, esportsPress, newestFirst, formatCareerDate } from "../data/careers";
import { linkQuiet } from "../lib/styles";

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
            <h2 id="playing-heading" className="mb-10 text-3xl font-semibold tracking-tight">Teams & competition</h2>
            <div className="divide-y">
                {eras.map(({ game, source, achievement, summary }) => {
                    const teams = newestFirst(esportsCareer.filter((entry) => entry.discipline === game));
                    const years = `${teams.at(-1).start.slice(0, 4)}–${teams[0].end.slice(0, 4)}`;
                    return (
                        <section key={game} aria-label={`${game} career`} className="grid gap-5 py-8 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-10">
                            <header>
                                <p className="text-sm font-medium tabular-nums text-primary">{years}</p>
                                <h3 className="mt-2 text-xl font-semibold tracking-tight">{game}</h3>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={`mt-2 ${linkQuiet}`}>
                                    Full playing history <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                                </a>
                            </header>
                            <div>
                                <p className="text-sm font-semibold text-primary">{achievement}</p>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{summary}</p>
                                <ul aria-label={`${game} teams, most recent first`} className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {teams.map((team) => (
                                        <li key={team.id} className="flex items-center gap-2.5 text-sm">
                                            <CareerLogo entry={team} compact />
                                            <span>{team.organization}{team.role.includes("Trial") && <span className="text-xs text-subtle"> (trial)</span>}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    );
                })}
            </div>
        </section>

        <section aria-labelledby="beyond-playing-heading" className="mt-8 border-t pt-10">
            <h2 id="beyond-playing-heading" className="mb-8 text-3xl font-semibold tracking-tight">Beyond playing</h2>
            <HairlineList className="max-w-4xl">
                <HairlineItem title="Coaching & teaching" meta="2024–2026">
                    Assistant coach at Maryville and lead VALORANT instructor at the Saudi Esports Academy. Taught 50+ students live and 300+ players and students through online academies.
                </HairlineItem>
                <HairlineItem title="Broadcast & analysis" meta="2021–2026">
                    Selected analyst and colour-casting appearances across VCT, Red Bull Home Ground, VCL Northern Europe, and Intel Monsters Reloaded.
                </HairlineItem>
            </HairlineList>
        </section>

        <section aria-labelledby="press-heading" className="mt-16 border-t pt-10">
            <h2 id="press-heading" className="mb-8 text-3xl font-semibold tracking-tight">Selected coverage & interviews</h2>
            <HairlineList className="max-w-4xl">
                {esportsPress.map((article) => (
                    <HairlineItem
                        key={article.url}
                        eyebrow={article.publication}
                        title={<HairlineLink href={article.url}>{article.title}</HairlineLink>}
                        meta={<>{article.author} · {article.dateLabel && `${article.dateLabel} `}<time dateTime={article.date}>{formatCareerDate(article.date)}</time></>}
                    >
                        {article.description}
                    </HairlineItem>
                ))}
            </HairlineList>
        </section>
    </div>
);
