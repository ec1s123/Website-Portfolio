import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import { resumeUrl } from "../data/socials";

const reveal = "opacity-0 motion-reduce:animate-none motion-reduce:opacity-100";
const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const HeroSection = () => (
    <section id="home" aria-labelledby="home-title" className="relative flex min-h-[calc(100svh-14rem)] flex-col items-center justify-center px-6 py-16 sm:px-10">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
            <p className={`mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary animate-fade-in ${reveal}`}>Software Engineer · AI & Data</p>
            <h1 id="home-title" className={`text-5xl font-semibold leading-[1.1] tracking-tight animate-fade-in-delay-1 sm:text-7xl lg:text-8xl ${reveal}`}>
                Hey, I’m <span className="text-primary">Adam.</span>
            </h1>
            <p className={`mx-auto mt-7 max-w-2xl text-lg text-balance leading-relaxed text-foreground/75 animate-fade-in-delay-2 sm:text-xl ${reveal}`}>
                I build full-stack software and AI tools. Before that, I was a professional
                VALORANT in-game leader for Team Liquid, 100 Thieves, and Ninjas in Pyjamas.
            </p>
            <p className={`mt-5 text-sm text-foreground/60 text-balance animate-fade-in-delay-2 ${reveal}`}>
                Currently Business Technical Analyst at Auxiliary Digital · St. Louis
            </p>
            <nav aria-label="Explore my website" className={`mt-9 animate-fade-in-delay-3 ${reveal}`}>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link to="/projects" className={`cosmic-button inline-flex min-h-12 items-center gap-2 ${focusRing}`}>
                        See my work <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center gap-2 rounded-full border bg-background/60 px-6 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/5 ${focusRing}`}>
                        <FileText size={16} aria-hidden="true" /> Résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                    </a>
                </div>
                <p className="mt-10 text-sm text-foreground/55">
                    Know me as ec1s?{" "}
                    <Link to="/careers?track=esports" className={`inline-flex min-h-11 items-center gap-1 rounded-sm text-foreground/75 underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary ${focusRing}`}>
                        That’s part of the story <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                </p>
            </nav>
        </div>
    </section>
);
