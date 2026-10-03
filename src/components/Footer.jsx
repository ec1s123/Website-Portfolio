import { Link } from "react-router-dom";
import { FileText, Mail } from "lucide-react";
import { ProfileLinks } from "./ProfileLinks";
import { resumeUrl } from "../data/socials";

const textLink = "inline-flex min-h-10 items-center gap-1.5 rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const Footer = () => (
    <footer className="border-t px-4 py-6 text-sm text-muted">
        <div className="container flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Adam Eccles, All Rights Reserved.</p>
            <nav aria-label="Contact and profiles" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                <Link to="/contact" className={textLink}><Mail size={16} aria-hidden="true" /> Contact</Link>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                    <FileText size={16} aria-hidden="true" /> Résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
                <ProfileLinks size={18} />
            </nav>
        </div>
    </footer>
);
