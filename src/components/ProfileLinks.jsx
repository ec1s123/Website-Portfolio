import { Github, Linkedin } from "lucide-react";
import { professionalProfiles } from "../data/socials";
import { cn } from "../lib/utils";

const icons = { GitHub: Github, LinkedIn: Linkedin };

export const ProfileLinks = ({ className, size = 20 }) => (
    <ul className={cn("flex items-center gap-1", className)}>
        {professionalProfiles.map(({ name, url }) => {
            const Icon = icons[name];
            return (
                <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        <Icon size={size} aria-hidden="true" />
                    </a>
                </li>
            );
        })}
    </ul>
);
