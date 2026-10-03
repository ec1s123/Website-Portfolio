import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { cardLink } from "../lib/styles";

const iconLink = "relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-subtle transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// `detailed` adds the category eyebrow plus source and post links.
export const ProjectCard = ({ project, detailed = false }) => {
    const { title, label, eyebrow, path, image, description, tags, githubLink, postUrl } = project;

    return (
        <article className="group relative flex h-full flex-col">
            <div className="aspect-video overflow-hidden rounded-md border border-foreground/10 bg-white">
                <img src={image.src} srcSet={image.srcSet} sizes="(min-width: 1024px) 22rem, (min-width: 768px) 50vw, 100vw" alt="" width={image.width} height={image.height} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
            </div>
            {detailed && eyebrow && <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow.split(" / ")[0]}</p>}
            <div className={`${detailed && eyebrow ? "mt-2" : "mt-5"} flex flex-wrap items-center gap-x-3 gap-y-1`}>
                <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                    <Link to={path} className={cardLink}>{title}</Link>
                </h3>
                {label && <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-medium text-primary">{label}</span>}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            <div className="mt-auto flex items-end justify-between gap-4 pt-4">
                <p className="text-xs font-medium leading-relaxed text-subtle">
                    {tags.map((tag, index) => <Fragment key={tag}>{index > 0 && " · "}<span className="whitespace-nowrap">{tag}</span></Fragment>)}
                </p>
                {detailed && (
                    <div className="-mb-2 -mr-2 flex shrink-0">
                        {postUrl && (
                            <a href={postUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} project post on LinkedIn (opens in a new tab)`} className={iconLink}>
                                <ExternalLink size={17} aria-hidden="true" />
                            </a>
                        )}
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} source code on GitHub (opens in a new tab)`} className={iconLink}>
                                <Github size={17} aria-hidden="true" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};
