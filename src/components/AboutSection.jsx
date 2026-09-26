import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { socialProfiles } from "../data/socials";

const textLink = "inline-flex items-center gap-1.5 py-2 font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const AboutSection = () => (
    <section id="about" aria-labelledby="about-title" className="relative px-4 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl text-left">
            <header className="mb-10 max-w-3xl sm:mb-14">
                <p className="mb-5 text-sm font-semibold tracking-wide text-primary">About me</p>
                <h1 id="about-title" className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
                    From leading teams<br className="hidden sm:block" /> to <span className="text-primary">building software.</span>
                </h1>
            </header>

            <div className="grid items-start gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div className="contents md:block">
                    <div className="order-1">
                        <h2 className="mb-4 text-xl font-semibold">From requirements to working software</h2>
                        <p className="leading-7 text-foreground/75">
                            I’m Adam, a software developer with a background in professional esports
                            and an interest in data analytics, machine learning, and AI.
                        </p>
                        <p className="mt-4 leading-7 text-foreground/75">
                            As a Business Technical Analyst, I gather requirements, write user stories,
                            and help engineers work through how features should behave. I enjoy asking
                            questions, making sense of different needs, and giving the team a clear
                            direction.
                        </p>
                        <p className="mt-4 leading-7 text-foreground/75">
                            I’m also hands-on with the engineering: building frontend interfaces,
                            writing backend APIs, and connecting them into working applications.
                            My favourite part is figuring out how to solve a problem and implementing
                            the solution myself, learning as I go.
                        </p>
                    </div>
                    <div className="order-3 md:mt-9">
                        <h2 className="mb-4 text-xl font-semibold">Before software, esports</h2>
                        <p className="leading-7 text-foreground/75">
                            I competed professionally in Counter-Strike and VALORANT. Alongside playing
                            and leading teams, I coached players and taught strategy, team dynamics,
                            and in-game leadership.
                        </p>
                        <p className="mt-4 leading-7 text-foreground/75">
                            Coaching taught me to give specific feedback, adapt how I explain an idea,
                            and help people improve together. Those habits still shape how I work
                            with a team.
                        </p>
                        <Link to="/careers" className={`${textLink} mt-3 text-primary`}>
                            Explore my career <ArrowUpRight size={17} aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="order-4 md:mt-9">
                        <h2 className="mb-4 text-xl font-semibold">Away from the screen</h2>
                        <p className="leading-7 text-foreground/75">
                            You’ll usually find me at the gym, rock climbing, or gaming. I also enjoy
                            creating content and sharing what I’ve learned.
                        </p>
                    </div>
                </div>

                    <figure className="order-2 md:sticky md:top-28">
                        <img src="/projects/image.png" alt="Adam Eccles in a Maryville esports jersey, looking back toward the camera" width="2048" height="2048" className="aspect-[4/5] w-full object-cover object-[50%_35%]" />
                        <figcaption className="mt-3 text-sm text-foreground/60">A chapter of my life in competitive esports.</figcaption>
                    </figure>
            </div>

            <nav aria-label="Contact and social profiles" className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-6 text-sm">
                <Link to="/contact" className={`${textLink} text-primary`}>
                    Get in touch <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                {socialProfiles.map(({ name, url }) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={`${textLink} text-foreground/70`}>
                        {name}<ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                ))}
            </nav>
        </div>
    </section>
);
