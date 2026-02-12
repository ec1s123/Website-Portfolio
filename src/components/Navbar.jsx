import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () =>  {
        setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className = {cn('fixed w-full z-40 transition-all duration-300', 
            isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5')}>

                <div className = 'container flex items-center justify-between'>
                    <a 
                    className = 'text-xl font-bold text-primary flex text-center'
                    href = '#home'
                    > 
                        <span>
                            <span className = "text-glow text-foreground">Adam Eccles</span> Portfolio 
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className = 'hidden md:flex items-center space-x-6'>
                        {navItems.map((item, key) => (
                            <a key={key} href= {item.href} className = 'text-foreground/80 hover:text-primary transition-colors duration-300'> {item.name}</a>

                        ))}

                        <ThemeToggle className="text-foreground/80 hover:text-primary transition-colors duration-300" />

                    </div>

                    <button
                        type="button"
                        className="md:hidden text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>

                    {/* Mobile Navigation */}
                    <div className = {cn(
                        'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
                        isMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    )}>

                        <button
                            type="button"
                            className="absolute top-6 right-6 text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            Close
                        </button>

                        <div className = 'flex flex-col space-y-8'>
                            {navItems.map((item, key) => (
                                <a
                                    key={key}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>

                            ))}
                        </div>
                    </div>
                </div>
            </nav>
    );
};
