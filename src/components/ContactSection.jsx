import { FileText, Github, LinkedinIcon, Mail, MapPin } from "lucide-react";
import { email, professionalProfiles, resumeUrl } from "../data/socials";

const profileUrl = (name) => professionalProfiles.find((profile) => profile.name === name).url;

const channels = [
    { title: "Email", icon: Mail, label: <>{email.split("@")[0]}<wbr />@{email.split("@")[1]}</>, href: `mailto:${email}` },
    { title: "LinkedIn", icon: LinkedinIcon, label: "in/adam-eccles", href: profileUrl("LinkedIn") },
    { title: "GitHub", icon: Github, label: "github.com/ec1s123", href: profileUrl("GitHub") },
    { title: "Location", icon: MapPin, label: "St. Louis, Missouri, USA" },
];

export const ContactSection = () => {
    return (
    <section id="contact" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary"> Touch</span>
            </h1>

            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and collaborations. Whether you have a question, want to work together, or just want to say hi, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {channels.map(({ title, icon, label, href }) => {
                    const Icon = icon;
                    return (
                    <div key={title} className="flex flex-col items-center text-center gap-3">
                        <div className="h-12 w-12 flex items-center justify-center p-3 rounded-full bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        {href ? (
                            <a
                            href={href}
                            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                            className="text-primary hover:underline transition-colors duration-300 break-words"
                            >
                            {label}
                            </a>
                        ) : (
                            <p className="text-primary">{label}</p>
                        )}
                    </div>
                    );
                })}
            </div>

            <div className="mt-14 text-center">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="cosmic-button inline-flex min-h-12 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                    <FileText size={17} aria-hidden="true" /> View my résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
            </div>
        </div>
       </section>
    );
};
