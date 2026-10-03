import { ArrowUpRight, FileText, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { professionalProfiles, resumeUrl, socialProfiles } from "../data/socials";
import { eyebrow, focusRing } from "../lib/styles";

const profiles = [...professionalProfiles, ...socialProfiles];
const outlineButton = `inline-flex min-h-12 items-center gap-2 rounded-full border bg-background/60 px-6 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/5 ${focusRing}`;

export const ContactSection = () => (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-16 text-left sm:px-10 md:pb-28 md:pt-24">
        <header>
            <p className={`mb-5 ${eyebrow}`}>Adam Eccles / Contact</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">Let’s talk<span className="text-primary">.</span></h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/70">
                Whether it’s a role, a project, or a question about esports, send a message below
                and it’ll land straight in my inbox.
            </p>
        </header>

        <div className="mt-14 grid gap-14 border-t pt-10 md:mt-20 md:grid-cols-[3fr_2fr] md:gap-16 md:pt-14">
            <section aria-labelledby="message-heading">
                <h2 id="message-heading" className={`mb-6 ${eyebrow}`}>Send a message</h2>
                <ContactForm />
            </section>

            <div className="space-y-12">
                <section aria-labelledby="profiles-heading">
                    <h2 id="profiles-heading" className={eyebrow}>Elsewhere</h2>
                    <ul className="mt-4 divide-y border-y">
                        {profiles.map(({ name, handle, url }) => (
                            <li key={url}>
                                <a href={url} target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-between gap-4 py-4 ${focusRing}`}>
                                    <span className="font-medium transition-colors group-hover:text-primary">{name}</span>
                                    <span className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors group-hover:text-primary">
                                        {handle} <ArrowUpRight size={14} aria-hidden="true" />
                                    </span>
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <div className="space-y-6">
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                        <FileText size={16} aria-hidden="true" /> View my résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                    </a>
                    <p className="flex items-center gap-2 text-sm text-foreground/65">
                        <MapPin size={16} className="text-primary" aria-hidden="true" /> Based in St. Louis, Missouri, USA
                    </p>
                </div>
            </div>
        </div>
    </article>
);
