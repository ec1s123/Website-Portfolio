import { cn } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
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
    const scrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () =>  {
        setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        scrollYRef.current = window.scrollY;

        const { style } = document.body;
        const previousPosition = style.position;
        const previousTop = style.top;
        const previousLeft = style.left;
        const previousRight = style.right;
        const previousWidth = style.width;
        const previousOverflow = style.overflow;

        style.position = 'fixed';
        style.top = `-${scrollYRef.current}px`;
        style.left = '0';
        style.right = '0';
        style.width = '100%';
        style.overflow = 'hidden';

        return () => {
            style.position = previousPosition;
            style.top = previousTop;
            style.left = previousLeft;
            style.right = previousRight;
            style.width = previousWidth;
            style.overflow = previousOverflow;

            const previousScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, scrollYRef.current);

            requestAnimationFrame(() => {
                document.documentElement.style.scrollBehavior = previousScrollBehavior;
            });
        };
    }, [isMenuOpen]);

    return (
        <nav className = {cn('fixed w-full z-40',
            isMenuOpen ? 'transition-none' : 'transition-all duration-300',
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
                        'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-none md:hidden',
                        isMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    )}>
                        <div className={cn('absolute top-0 left-0 w-full', isScrolled ? 'py-3' : 'py-5')}>
                            <div className="container flex justify-end">
                                <button
                                    type="button"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Close navigation menu"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

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

                            <div className="flex justify-center">
                                <ThemeToggle className="text-foreground/80 hover:text-primary transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    );
};
