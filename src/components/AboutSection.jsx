import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "./ui/PageHeader";
import { professionalProfiles, socialProfiles } from "../data/socials";
import { linkPrimary, linkQuiet, page } from "../lib/styles";

export const AboutSection = () => (
    <article className={page}>
            <PageHeader eyebrow="Adam Eccles / About" title={<>From leading teams<br className="hidden sm:block" /> to <span className="text-primary">building software</span></>} />

            <div className="mt-14 grid items-start gap-10 border-t pt-10 md:mt-20 md:grid-cols-[1.15fr_1fr] md:pt-14 lg:gap-16">
                <div className="contents md:block">
                    <div className="order-1">
                        <h2 className="mb-4 text-xl font-semibold tracking-tight">From requirements to working software</h2>
                        <p className="leading-7 text-muted">
                            I’m Adam, a software engineer with a background in professional esports
                            and an interest in data analytics, machine learning, and AI.
                        </p>
                        <p className="mt-4 leading-7 text-muted">
                            As a Business Technical Analyst, I gather requirements, write user stories,
                            and help engineers work through how features should behave. I enjoy asking
                            questions, making sense of different needs, and giving the team a clear
                            direction.
                        </p>
                        <p className="mt-4 leading-7 text-muted">
                            I’m also hands-on with the engineering: building frontend interfaces,
                            writing backend APIs, and connecting them into working applications.
                            My favourite part is figuring out how to solve a problem and implementing
                            the solution myself, learning as I go.
                        </p>
                    </div>
                    <div className="order-3 md:mt-9">
                        <h2 className="mb-4 text-xl font-semibold tracking-tight">Before software, esports</h2>
                        <p className="leading-7 text-muted">
                            I competed professionally in Counter-Strike and VALORANT. Alongside playing
                            and leading teams, I coached players and taught strategy, team dynamics,
                            and in-game leadership.
                        </p>
                        <p className="mt-4 leading-7 text-muted">
                            Coaching taught me to give specific feedback, adapt how I explain an idea,
                            and help people improve together. Those habits still shape how I work
                            with a team.
                        </p>
                        <Link to="/careers" className={`mt-3 ${linkPrimary}`}>
                            Explore my career <ArrowUpRight size={17} aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="order-4 md:mt-9">
                        <h2 className="mb-4 text-xl font-semibold tracking-tight">Away from the screen</h2>
                        <p className="leading-7 text-muted">
                            You’ll usually find me at the gym, rock climbing, or gaming. I also enjoy
                            creating content and sharing what I’ve learned.
                        </p>
                    </div>
                </div>

                    <figure className="order-2 md:sticky md:top-28">
                        <img src="/projects/about-portrait-1200.webp" srcSet="/projects/about-portrait-640.webp 640w, /projects/about-portrait-1200.webp 1200w" sizes="(min-width: 768px) 45vw, 100vw" alt="Adam Eccles in a Maryville esports jersey, looking back toward the camera" width="1200" height="1200" className="aspect-[4/5] w-full object-cover object-[50%_35%]" />
                        <figcaption className="mt-3 text-sm text-subtle">A chapter of my life in competitive esports.</figcaption>
                    </figure>
            </div>

            <nav aria-label="Contact and social profiles" className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-6">
                <Link to="/contact" className={linkPrimary}>
                    Get in touch <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                {[...professionalProfiles, ...socialProfiles].map(({ name, url }) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={linkQuiet}>
                        {name}<ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                ))}
            </nav>
    </article>
);
