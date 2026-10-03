import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { cardLink, eyebrow as eyebrowClass, focusRing } from "../../lib/styles";

// The lead project of a section: media on the left, details on the right; the whole card links
// to the case study. `media` is decorative (alt="" or aria-hidden): the title names the project.
export const FeaturedProject = ({ id, eyebrow, title, path, description, media, mediaClassName = "bg-white", highlights, tags, githubLink }) => (
    <article className="group relative grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
        <div className={`overflow-hidden rounded-md border border-foreground/10 ${mediaClassName}`}>
            <div className="transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none">{media}</div>
        </div>
        <div>
            <p className={eyebrowClass}>{eyebrow}</p>
            <h3 id={id} className="mt-3 text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
                <Link to={path} className={cardLink}>{title}</Link>
            </h3>
            <p className="mt-4 leading-relaxed text-muted">{description}</p>
            {highlights && (
                <dl className="mt-6 grid grid-cols-3 gap-4 border-y py-5">
                    {highlights.map(([value, label], index) => (
                        <div key={label} className="flex flex-col-reverse justify-end gap-1.5">
                            <dt className="text-xs leading-snug text-subtle">{label}</dt>
                            <dd className={`text-2xl font-semibold tracking-tight ${index === 0 ? "text-primary" : ""}`}>{value}</dd>
                        </div>
                    ))}
                </dl>
            )}
            <p className="mt-5 text-xs font-medium text-subtle">{tags.join(" · ")}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                <span aria-hidden="true" className="inline-flex items-center gap-1 text-primary">Read the case study <ArrowUpRight size={16} /></span>
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className={`relative z-10 inline-flex items-center gap-1.5 rounded-sm py-1 text-muted transition-colors hover:text-primary ${focusRing}`}>
                        <Github size={16} aria-hidden="true" /> Source code <span className="sr-only">for {title} (opens in a new tab)</span>
                    </a>
                )}
            </div>
        </div>
    </article>
);
