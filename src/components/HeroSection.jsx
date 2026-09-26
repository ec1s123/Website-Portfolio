import { Link } from "react-router-dom";

export const HeroSection = () => (
    <section id="home" aria-labelledby="home-title" className="relative flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center px-4">
        <div className="container z-10 mx-auto max-w-4xl text-center">
            <div className="space-y-6">
                <h1 id="home-title" className="text-4xl font-bold tracking-tight md:text-6xl">
                    <span className="opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100">Hello, my name is </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1 motion-reduce:animate-none motion-reduce:opacity-100">Adam </span>
                    <span className="ml-2 opacity-0 animate-fade-in-delay-2 motion-reduce:animate-none motion-reduce:opacity-100">Eccles</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-foreground/75 opacity-0 animate-fade-in-delay-3 motion-reduce:animate-none motion-reduce:opacity-100 md:text-xl">
                    I’m a former esports pro turned software developer, building frontend and backend
                    applications and helping teams turn ideas into useful products.
                </p>
                <nav aria-label="Explore my portfolio" className="pt-4 opacity-0 animate-fade-in-delay-4 motion-reduce:animate-none motion-reduce:opacity-100">
                    <Link to="/projects" className="cosmic-button inline-flex min-h-11 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                        View My Projects
                    </Link>
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                        {[
                            { label: "About me", to: "/about" },
                            { label: "Career", to: "/careers" },
                            { label: "Skills", to: "/skills" },
                            { label: "Contact", to: "/contact" },
                        ].map(({ label, to }) => (
                            <Link key={to} to={to} className="inline-flex min-h-11 items-center rounded-sm px-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                {label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    </section>
);
