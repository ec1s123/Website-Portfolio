import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ProfileLinks } from "./ProfileLinks";
import { resumeUrl } from "../data/socials";

const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Career", to: "/careers" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
];
const resumeClass = "inline-flex min-h-10 items-center gap-1.5 rounded-full border border-primary/40 px-4 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const linkClass = ({ isActive }) => `rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 ${isActive ? "text-primary font-semibold" : "text-foreground/80"}`;

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMenuOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };
        const desktop = window.matchMedia("(min-width: 1024px)");
        const closeOnDesktop = () => { if (desktop.matches) setIsMenuOpen(false); };
        window.addEventListener("keydown", closeOnEscape);
        desktop.addEventListener("change", closeOnDesktop);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", closeOnEscape);
            desktop.removeEventListener("change", closeOnDesktop);
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b bg-background/95 backdrop-blur-md">
            <nav aria-label="Main navigation" className="container flex min-h-20 items-center justify-between gap-4">
                <Link to="/" aria-label="Adam — home" onClick={() => setIsMenuOpen(false)} className="rounded-sm text-left text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-3xl">
                    adam<span className="text-primary">.</span>
                </Link>
                <div className="hidden items-center gap-6 text-sm lg:flex">
                    {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>{item.name}</NavLink>)}
                    <div className="flex items-center gap-3 border-l pl-5">
                        <ProfileLinks size={18} />
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={resumeClass}>
                            <FileText size={15} aria-hidden="true" /> Résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                        </a>
                        <ThemeToggle />
                    </div>
                </div>
                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="rounded px-2 py-2 text-sm text-primary lg:hidden">
                    {isMenuOpen ? "Close" : "Menu"}
                </button>
                {isMenuOpen && (
                    <div id="mobile-navigation" className="fixed inset-x-0 top-20 flex h-[calc(100dvh-5rem)] flex-col items-center gap-8 overflow-y-auto bg-background px-6 py-10 lg:hidden">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass} onClick={() => setIsMenuOpen(false)}>{item.name}</NavLink>)}
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={resumeClass}>
                            <FileText size={15} aria-hidden="true" /> Résumé <span className="sr-only">(PDF, opens in a new tab)</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <ProfileLinks />
                            <ThemeToggle />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
