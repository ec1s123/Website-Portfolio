import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { professionalProfiles } from "../data/socials";
import { cardLink, eyebrow, focusRing } from "../lib/styles";

const githubUrl = professionalProfiles.find((profile) => profile.name === "GitHub").url;
const [featured, ...moreProjects] = projects;

export const ProjectsSection = () => (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-16 text-left sm:px-10 md:pb-28 md:pt-24">
        <header>
            <p className={`mb-5 ${eyebrow}`}>Adam Eccles / Projects</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">Things I’ve built<span className="text-primary">.</span></h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/70">
                From a full-stack capstone to machine learning experiments. Each case study covers how
                the project works, what I measured, and the limits of the results.
            </p>
        </header>

        <section aria-labelledby="featured-heading" className="mt-14 border-t pt-10 md:mt-20 md:pt-14">
            <article className="group relative grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
                <div className="overflow-hidden rounded-md border border-foreground/10 bg-white">
                    <img src={featured.image.src} srcSet={featured.image.srcSet} sizes="(min-width: 1024px) 40rem, 100vw" alt="" width={featured.image.width} height={featured.image.height} decoding="async" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none" />
                </div>
                <div>
                    <p className={eyebrow}>{featured.label} · Featured</p>
                    <h2 id="featured-heading" className="mt-3 text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
                        <Link to={featured.path} className={cardLink}>{featured.title}</Link>
                    </h2>
                    <p className="mt-4 leading-relaxed text-foreground/75">{featured.description}</p>
                    <dl className="mt-6 grid grid-cols-3 gap-4 border-y py-5">
                        {featured.highlights.map(([value, label], index) => (
                            <div key={label} className="flex flex-col-reverse justify-end gap-1.5">
                                <dt className="text-xs leading-snug text-foreground/60">{label}</dt>
                                <dd className={`text-2xl font-semibold tracking-tight ${index === 0 ? "text-primary" : ""}`}>{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-5 text-xs font-medium text-foreground/60">{featured.tags.join(" · ")}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                        <span aria-hidden="true" className="inline-flex items-center gap-1 text-primary">Read the case study <ArrowUpRight size={16} /></span>
                        <a href={featured.githubLink} target="_blank" rel="noopener noreferrer" className={`relative z-10 inline-flex items-center gap-1.5 rounded-sm py-1 text-foreground/70 transition-colors hover:text-primary ${focusRing}`}>
                            <Github size={16} aria-hidden="true" /> Source code <span className="sr-only">for {featured.title} (opens in a new tab)</span>
                        </a>
                    </div>
                </div>
            </article>
        </section>

        <section aria-labelledby="more-heading" className="mt-16 border-t pt-10 md:mt-24 md:pt-14">
            <p className={`mb-3 ${eyebrow}`}>Machine learning</p>
            <h2 id="more-heading" className="mb-10 text-3xl font-semibold tracking-tight md:mb-12 md:text-4xl">More projects</h2>
            <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {moreProjects.map((project) => (
                    <li key={project.slug}><ProjectCard project={project} detailed /></li>
                ))}
            </ul>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t pt-8 md:mt-24">
            <p className="text-sm text-foreground/65">More experiments and coursework live on GitHub.</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary hover:underline ${focusRing}`}>
                <Github size={16} aria-hidden="true" /> github.com/ec1s123 <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
            </a>
        </div>
    </article>
);
