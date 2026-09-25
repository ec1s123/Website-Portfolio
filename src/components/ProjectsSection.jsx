import { Link } from "react-router-dom";
import { projectCaseStudies } from "../data/projectCaseStudies";
import { ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { PremierPredictProject } from "./PremierPredictProject";

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h1>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A selection of my projects, from my capstone to machine learning experiments. Explore the work and check out the code on GitHub!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PremierPredictProject />
                    {projectCaseStudies.map((project) => (
                        <div
                            key={project.slug}
                            className="flex flex-col bg-card rounded-lg overflow-hidden text-left shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.hero.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h2 className="text-xl font-semibold mb-1"><Link to={`/projects/${project.slug}`} className="hover:text-primary">{project.title}</Link></h2>
                                <p className="text-foreground/75 text-sm leading-relaxed mb-4 py-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-2 flex flex-wrap gap-4 justify-between items-center">
                                    <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
                                        View project details <ArrowUpRight size={16} aria-hidden="true" />
                                    </Link>
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                aria-label={`View ${project.title} project post`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}

                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                aria-label={`${project.title} source code on GitHub`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/ec1s123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check Out My Github<ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
