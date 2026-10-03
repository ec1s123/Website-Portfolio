import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { CareerLogo } from "./CareerLogo";
import { esportsCareer, esportsPress, formatCareerDate, newestFirst, techCareer } from "../data/careers";
import { projectCaseStudies } from "../data/projectCaseStudies";
import { email, professionalProfiles, resumeUrl } from "../data/socials";

const wrapper = "mx-auto max-w-6xl px-6 text-left sm:px-10";
const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
// Stretches a link over its card so the whole card is clickable.
const cardLink = "after:absolute after:inset-0 after:rounded-md focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-primary";

const SectionHeader = ({ id, eyebrow, title, link }) => (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-12">
        <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        </div>
        {link && (
            <Link to={link.to} className={`inline-flex items-center gap-1 rounded-sm py-2 text-sm font-medium text-primary hover:underline ${focusRing}`}>
                {link.label} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
        )}
    </div>
);

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
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">{title}</p>
                        <ul className={`grid grid-cols-5 gap-x-2 gap-y-5 sm:gap-x-4 ${columns}`}>
                            {organizations.map(({ id, name }) => {
                                const entry = allEntries.find((item) => item.id === id);
                                return (
                                    <li key={id} className="flex min-w-0 flex-col items-center gap-2 text-center">
                                        <CareerLogo entry={entry} />
                                        <span className="break-words text-[11px] leading-snug text-foreground/75 sm:text-xs">{name || entry.organization}</span>
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

const caseStudy = (slug) => {
    const project = projectCaseStudies.find((item) => item.slug === slug);
    return {
        title: project.title,
        path: `/projects/${slug}`,
        image: { src: project.thumbnail || project.image, width: project.hero.width, height: project.hero.height },
        description: project.description,
        tags: project.tags,
    };
};

const featuredProjects = [
    {
        title: "Premier Predict",
        label: "Capstone",
        path: "/projects/premier-predict",
        image: { src: "/projects/premier-predict-results-800.webp", width: 800, height: 423 },
        description: "A Premier League analytics app: a custom NumPy classifier trained on 8,600+ matches, explored through a React dashboard. Beat the baseline by 2.4 percentage points on held-out matches.",
        tags: ["React", "Python", "NumPy", "Docker"],
    },
    caseStudy("siamese-face-verification"),
    caseStudy("phishing-detection"),
];

export const FeaturedWork = () => (
    <section aria-labelledby="work-heading" className="py-20 md:py-28">
        <div className={wrapper}>
            <SectionHeader id="work-heading" eyebrow="Selected work" title="Things I’ve built." link={{ to: "/projects", label: "All projects" }} />
            <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {featuredProjects.map(({ title, label, path, image, description, tags }) => (
                    <li key={path}>
                        <article className="group relative flex h-full flex-col">
                            <div className="aspect-video overflow-hidden rounded-md border border-foreground/10 bg-white">
                                <img src={image.src} alt="" width={image.width} height={image.height} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
                            </div>
                            <div className="mt-5 flex items-center gap-3">
                                <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                                    <Link to={path} className={cardLink}>{title}</Link>
                                </h3>
                                {label && <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-medium text-primary">{label}</span>}
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/70">{description}</p>
                            <p className="mt-auto pt-4 text-xs font-medium text-foreground/60">{tags.join(" · ")}</p>
                        </article>
                    </li>
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

const currentRole = (entry) => entry.progression ? newestFirst(entry.progression)[0].role : entry.role;
const firstRole = (entry) => entry.progression && newestFirst(entry.progression).at(-1).role;

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
                                    <p className="font-medium">{currentRole(entry)}</p>
                                    <p className="text-sm text-foreground/65">{entry.organization}</p>
                                    {firstRole(entry) && <p className="mt-0.5 text-xs text-foreground/55">Began as {firstRole(entry)}</p>}
                                </div>
                                <p className="text-xs tabular-nums text-foreground/55">
                                    <time dateTime={entry.start}>{formatCareerDate(entry.start)}</time>
                                    {" — "}
                                    {entry.end ? <time dateTime={entry.end}>{formatCareerDate(entry.end)}</time> : "Present"}
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
                                <dt className="text-xs leading-snug text-foreground/65">{label}</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-primary lg:text-5xl">{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-8 text-sm leading-7 text-foreground/70">
                        In-game leader for Team Liquid, 100 Thieves, and Ninjas in Pyjamas. I led the fish123
                        roster that became Team Liquid’s first VALORANT lineup, then coached and taught the next
                        generation of players. Reviewing every round, giving direct feedback, and making calls
                        under pressure still shape how I build software with a team.
                    </p>
                    <Link to="/careers?track=esports" className={`mt-4 inline-flex items-center gap-1 rounded-sm py-2 text-sm font-medium text-primary hover:underline ${focusRing}`}>
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
                            <h3 className="mt-3 text-sm leading-relaxed text-foreground/75 transition-colors group-hover:text-primary">
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className={cardLink}>
                                    {article.title}<ArrowUpRight size={14} className="ml-1 inline align-[-2px]" aria-hidden="true" />
                                    <span className="sr-only"> (opens in a new tab)</span>
                                </a>
                            </h3>
                            <p className="mt-2 text-xs text-foreground/55"><time dateTime={article.date}>{formatCareerDate(article.date)}</time></p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const linkedinUrl = professionalProfiles.find((profile) => profile.name === "LinkedIn").url;
const outlineButton = `inline-flex min-h-12 items-center gap-2 rounded-full border bg-background/60 px-6 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/5 ${focusRing}`;

export const ContactCta = () => (
    <section aria-labelledby="cta-heading" className="border-t py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl px-6">
            <h2 id="cta-heading" className="text-4xl font-semibold tracking-tight sm:text-6xl">Let’s talk<span className="text-primary">.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/70 text-balance">
                Whether it’s a role, a project, or a question about esports, my inbox is open.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${email}`} className={`cosmic-button inline-flex min-h-12 items-center gap-2 ${focusRing}`}>
                    <Mail size={17} aria-hidden="true" /> Email me
                </a>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                    <FileText size={16} aria-hidden="true" /> Résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                    LinkedIn <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                </a>
            </div>
        </div>
    </section>
);
