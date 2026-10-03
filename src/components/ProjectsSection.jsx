import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProject } from "./ui/FeaturedProject";
import { PageHeader } from "./ui/PageHeader";
import { SectionHeader } from "./ui/SectionHeader";
import { projects } from "../data/projects";
import { professionalProfiles } from "../data/socials";
import { linkPrimary, linkQuiet, page } from "../lib/styles";

const githubUrl = professionalProfiles.find((profile) => profile.name === "GitHub").url;
const [featured, ...moreProjects] = projects;

// Personal projects only. Work projects live with their roles on the Career page.
export const ProjectsSection = () => (
    <article className={page}>
        <PageHeader
            eyebrow="Adam Eccles / Projects"
            title="Things I’ve built"
            lead="Personal projects, from a full-stack capstone to machine learning experiments. Each case study covers how the project works, what I measured, and the limits of the results."
        />

        <section aria-label="Featured project" className="mt-14 border-t pt-10 md:mt-20 md:pt-14">
            <FeaturedProject
                id="featured-heading"
                eyebrow={`${featured.label} · Featured`}
                title={featured.title}
                path={featured.path}
                description={featured.description}
                media={<img src={featured.image.src} srcSet={featured.image.srcSet} sizes="(min-width: 1024px) 40rem, 100vw" alt="" width={featured.image.width} height={featured.image.height} decoding="async" className="h-auto w-full" />}
                highlights={featured.highlights}
                tags={featured.tags}
                githubLink={featured.githubLink}
            />
        </section>

        <section aria-labelledby="more-heading" className="mt-16 border-t pt-10 md:mt-24 md:pt-14">
            <SectionHeader id="more-heading" eyebrow="Machine learning" title="More projects" />
            <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {moreProjects.map((project) => (
                    <li key={project.slug}><ProjectCard project={project} detailed /></li>
                ))}
            </ul>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t pt-8 md:mt-24">
            <p className="text-sm text-muted">
                More experiments and coursework live on GitHub. Work projects are on my{" "}
                <Link to="/careers" className={`${linkQuiet} py-0 underline decoration-primary/40 underline-offset-4`}>Career page</Link>.
            </p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${linkPrimary} gap-2`}>
                <Github size={16} aria-hidden="true" /> github.com/ec1s123 <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
            </a>
        </div>
    </article>
);
