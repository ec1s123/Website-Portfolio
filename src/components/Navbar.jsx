import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Career", to: "/careers" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
];
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
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left text-lg font-bold text-primary sm:text-xl">
                    <span className="text-foreground">Adam Eccles</span> Portfolio
                </Link>
                <div className="hidden items-center gap-5 lg:flex">
                    {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>{item.name}</NavLink>)}
                    <ThemeToggle />
                </div>
                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="rounded px-2 py-2 text-sm text-primary lg:hidden">
                    {isMenuOpen ? "Close" : "Menu"}
                </button>
                {isMenuOpen && (
                    <div id="mobile-navigation" className="fixed inset-x-0 top-20 flex h-[calc(100dvh-5rem)] flex-col items-center gap-8 overflow-y-auto bg-background px-6 py-10 lg:hidden">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass} onClick={() => setIsMenuOpen(false)}>{item.name}</NavLink>)}
                        <ThemeToggle />
                    </div>
                )}
            </nav>
        </header>
    );
};
