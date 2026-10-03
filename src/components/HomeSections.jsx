import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, Send } from "lucide-react";
import { CareerLogo } from "./CareerLogo";
import { ProjectCard } from "./ProjectCard";
import { DateRange } from "./ui/DateRange";
import { SectionHeader } from "./ui/SectionHeader";
import { esportsCareer, esportsPress, formatCareerDate, newestFirst, techCareer } from "../data/careers";
import { findProject } from "../data/projects";
import { professionalProfiles, resumeUrl } from "../data/socials";
import { buttonOutline, buttonPrimary, cardLink, linkPrimary, shell } from "../lib/styles";

const wrapper = `${shell} text-left`;

const allEntries = [...techCareer, ...esportsCareer];
const logoGroups = [
    {
        title: "Software & AI",
        columns: "md:grid-cols-4",
        organizations: [
            { id: "auxiliary-digital" },
            { id: "automate-army" },
            { id: "maryville-ai-engineer", name: "Maryville University" },
            { id: "neuralseek" },
        ],
    },
    {
        title: "Pro esports",
        organizations: [
            { id: "liquid" },
            { id: "100thieves" },
            { id: "nip" },
            { id: "fnatic" },
            { id: "velocity" },
        ],
    },
];

export const LogoStrip = () => (
    <section aria-labelledby="organizations-heading" className="border-y bg-card/40 py-10">
        <div className={wrapper}>
            <h2 id="organizations-heading" className="sr-only">Teams and companies</h2>
            <div className="grid gap-8 md:grid-cols-[4fr_5fr] md:gap-12">
                {logoGroups.map(({ title, columns = "", organizations }) => (
                    <div key={title}>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-subtle">{title}</p>
                        <ul className={`grid grid-cols-5 gap-x-2 gap-y-5 sm:gap-x-4 ${columns}`}>
                            {organizations.map(({ id, name }) => {
                                const entry = allEntries.find((item) => item.id === id);
                                return (
                                    <li key={id} className="flex min-w-0 flex-col items-center gap-2 text-center">
                                        <CareerLogo entry={entry} />
                                        <span className="wrap-break-word text-[11px] leading-snug text-muted sm:text-xs">{name || entry.organization}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const featuredProjects = ["premier-predict", "siamese-face-verification", "phishing-detection"].map(findProject);

export const FeaturedWork = () => (
    <section aria-labelledby="work-heading" className="py-20 md:py-28">
        <div className={wrapper}>
            <SectionHeader id="work-heading" eyebrow="Selected work" title="Things I’ve built." link={{ to: "/projects", label: "All projects" }} />
            <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {featuredProjects.map((project) => (
                    <li key={project.slug}><ProjectCard project={project} /></li>
                ))}
            </ul>
        </div>
    </section>
);

const esportsStats = [
    { value: "8", label: "North American collegiate national championships" },
    { value: "3", label: "UK national championships in Counter-Strike" },
    { value: "300+", label: "Players and students coached and taught" },
];

export const ExperienceSnapshot = () => (
    <section aria-labelledby="experience-heading" className="border-t py-20 md:py-28">
        <div className={wrapper}>
            <SectionHeader id="experience-heading" eyebrow="Experience" title="Engineering, shaped by competition." link={{ to: "/careers", label: "Full career" }} />
            <div className="grid gap-14 md:grid-cols-2 md:gap-16">
                <div>
                    <h3 className="text-lg font-semibold">Software & AI</h3>
                    <ol className="mt-5">
                        {newestFirst(techCareer).map((entry) => (
                            <li key={entry.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t py-4">
                                <div className="min-w-0">
                                    <p className="font-medium">{entry.role}</p>
                                    <p className="text-sm text-muted">{entry.organization}</p>
                                </div>
                                <p className="text-xs tabular-nums text-subtle">
                                    <DateRange start={entry.start} end={entry.end} />
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Pro esports & coaching</h3>
                    <dl className="mt-5 grid grid-cols-3 gap-4 border-t pt-5">
                        {esportsStats.map(({ value, label }) => (
                            <div key={label} className="flex flex-col-reverse justify-end gap-2">
                                <dt className="text-xs leading-snug text-muted">{label}</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-primary lg:text-5xl">{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-8 text-sm leading-7 text-muted">
                        In-game leader for Team Liquid, 100 Thieves, and Ninjas in Pyjamas. I led the fish123
                        roster that became Team Liquid’s first VALORANT lineup, then coached and taught the next
                        generation of players. Reviewing every round, giving direct feedback, and making calls
                        under pressure still shape how I build software with a team.
                    </p>
                    <Link to="/careers?track=esports" className={`mt-4 ${linkPrimary}`}>
                        Esports career <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

const pressOrder = ["ESPN", "Forbes", "ONE Esports", "Esports News UK"];

export const PressSection = () => (
    <section aria-labelledby="press-heading" className="border-t py-20 md:py-28">
        <div className={wrapper}>
            <SectionHeader id="press-heading" eyebrow="Press" title="As featured in." />
            <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {[...esportsPress].sort((a, b) => pressOrder.indexOf(a.publication) - pressOrder.indexOf(b.publication)).map((article) => (
                    <li key={article.url}>
                        <article className="group relative border-t pt-5">
                            <p className="text-2xl font-semibold tracking-tight">{article.publication}</p>
                            <h3 className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-primary">
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className={cardLink}>
                                    {article.title}<ArrowUpRight size={14} className="ml-1 inline align-[-2px]" aria-hidden="true" />
                                    <span className="sr-only"> (opens in a new tab)</span>
                                </a>
                            </h3>
                            <p className="mt-2 text-xs text-subtle"><time dateTime={article.date}>{formatCareerDate(article.date)}</time></p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const linkedinUrl = professionalProfiles.find((profile) => profile.name === "LinkedIn").url;

export const ContactCta = () => (
    <section aria-labelledby="cta-heading" className="border-t py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl px-6">
            <h2 id="cta-heading" className="text-4xl font-semibold tracking-tight sm:text-6xl">Let’s talk<span className="text-primary">.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted text-balance">
                Whether it’s a role, a project, or a question about esports, my inbox is open.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link to="/contact" className={buttonPrimary}>
                    <Send size={17} aria-hidden="true" /> Send a message
                </Link>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={buttonOutline}>
                    <FileText size={16} aria-hidden="true" /> Résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={buttonOutline}>
                    LinkedIn <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                </a>
            </div>
        </div>
    </section>
);
