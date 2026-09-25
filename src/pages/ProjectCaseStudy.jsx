import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { projectCaseStudies } from "../data/projectCaseStudies";
import { NotFound } from "./NotFound";

const ProjectFigure = ({ figure, priority = false }) => (
    <figure className="min-w-0">
        <a href={figure.src} target="_blank" rel="noopener noreferrer" aria-label={`View image full size: ${figure.alt} (opens in a new tab)`} className="block overflow-hidden rounded-md border border-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <img src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} loading={priority ? "eager" : "lazy"} decoding="async" className="h-auto max-h-[42rem] w-full bg-white object-contain" />
        </a>
        <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-2 text-xs leading-relaxed text-foreground/60">
            <span className="max-w-3xl">{figure.caption}</span>
            <span className="inline-flex items-center gap-1">Select image to enlarge <ArrowUpRight size={14} aria-hidden="true" /></span>
        </figcaption>
    </figure>
);

export const ProjectCaseStudy = () => {
    const { slug } = useParams();
    const project = projectCaseStudies.find((item) => item.slug === slug);
    if (!project) return <NotFound />;

    return (
        <article className="mx-auto max-w-6xl px-6 pb-20 pt-10 text-left sm:px-10 md:pb-28 md:pt-16">
            <Link to="/projects" className="inline-block text-sm text-foreground/60 transition-colors hover:text-primary">← All projects</Link>
            <header className="pb-10 pt-12 md:pb-14 md:pt-20">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{project.eyebrow}</p>
                <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">{project.title}<span className="text-primary">.</span></h1>
                <div className="mt-8 grid items-start gap-8 md:grid-cols-[1fr_auto] md:gap-16">
                    <p className="max-w-2xl text-xl leading-relaxed text-foreground/75 md:text-2xl">{project.intro}</p>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 border-b border-primary pb-2 text-sm font-medium text-primary hover:text-foreground"><Github size={18} aria-hidden="true" /> Explore the code <ArrowUpRight size={16} aria-hidden="true" /></a>
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t pt-6 text-sm md:grid-cols-4">
                    {project.metadata.map(([label, value]) => <div key={label}><dt className="mb-2 text-xs uppercase tracking-widest text-foreground/50">{label}</dt><dd>{value}</dd></div>)}
                </dl>
            </header>

            <ProjectFigure figure={project.hero} priority />

            <section aria-labelledby="overview-heading" className="grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:gap-16 md:py-24">
                <div><p className="mb-3 text-xs font-medium text-primary">01 / THE PROJECT</p><h2 id="overview-heading" className="text-3xl font-semibold tracking-tight">{project.overviewTitle}</h2></div>
                <div className="space-y-5 text-base leading-relaxed text-foreground/75 md:text-lg">{project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>

            <section aria-labelledby="metrics-heading" className="border-y py-10 md:py-14">
                <div className="flex flex-wrap items-baseline justify-between gap-3"><h2 id="metrics-heading" className="text-2xl font-semibold tracking-tight">{project.metricsTitle}</h2><p className="text-xs uppercase tracking-widest text-foreground/55">{project.metricsContext}</p></div>
                <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                    {project.metrics.map(([label, value], index) => <div key={label}><dt className="mb-3 text-sm text-foreground/65">{label}</dt><dd className={`text-4xl font-semibold tracking-tight lg:text-5xl ${index === 0 ? "text-primary" : ""}`}>{value}</dd></div>)}
                </dl>
                <p className="mt-8 max-w-3xl text-sm leading-relaxed text-foreground/65">{project.metricsNote}</p>
            </section>

            <section aria-labelledby="workflow-heading" className="py-16 md:py-24">
                <p className="mb-3 text-xs font-medium text-primary">02 / THE WORKFLOW</p>
                <h2 id="workflow-heading" className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">{project.experienceTitle}</h2>
                <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {project.workflow.map(([title, description], index) => <li key={title} className="border-t pt-5"><p className="mb-4 text-xs text-primary">0{index + 1}</p><h3 className="mb-3 text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-foreground/70">{description}</p></li>)}
                </ol>
                {project.figures.map((figure) => <div key={figure.src} className="mt-14 md:mt-20"><h3 className="mb-5 text-xl font-medium">{figure.title}</h3><ProjectFigure figure={figure} /></div>)}
            </section>

            <section aria-labelledby="engineering-heading" className="grid gap-8 border-t py-12 md:grid-cols-[1fr_2fr] md:gap-16 md:py-16">
                <div><p className="mb-3 text-xs font-medium text-primary">03 / THE ENGINEERING</p><h2 id="engineering-heading" className="text-3xl font-semibold tracking-tight">Inside the implementation.</h2></div>
                <ol className="space-y-8">{project.engineering.map(([title, description], index) => <li key={title} className="grid grid-cols-[1.5rem_1fr] gap-4"><span className="pt-1 text-xs text-foreground/45">0{index + 1}</span><div><h3 className="mb-2 text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-foreground/70">{description}</p></div></li>)}</ol>
            </section>

            <section aria-labelledby="evaluation-heading" className="grid gap-8 border-t py-12 md:grid-cols-[1fr_2fr] md:gap-16">
                <h2 id="evaluation-heading" className="text-xl font-semibold">Evaluation context</h2>
                <div className="space-y-4 text-sm leading-relaxed text-foreground/65">
                    {project.evaluation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <a href={`${project.githubLink}/blob/main/${project.notebook}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">View the implementation and saved outputs <ArrowUpRight size={14} aria-hidden="true" /></a>
                    {project.extraSource && <p><a href={project.extraSource.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{project.extraSource.label}</a></p>}
                </div>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-5 border-t pt-8">
                <Link to="/projects" className="text-sm font-medium hover:text-primary">← Back to projects</Link>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">View source on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
        </article>
    );
};
