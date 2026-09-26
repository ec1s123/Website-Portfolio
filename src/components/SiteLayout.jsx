import { projectCaseStudies } from "../data/projectCaseStudies";
import { useEffect, useRef } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StarBackground } from "./StarBackground";

const titles = {
    ...Object.fromEntries(projectCaseStudies.map((project) => [`/projects/${project.slug}`, project.title])),
    "/": "Software Engineer",
    "/about": "About",
    "/careers": "Career",
    "/skills": "Skills",
    "/projects": "Projects",
    "/projects/premier-predict": "Premier Predict — Capstone",
    "/contact": "Contact",
};

export const SiteLayout = () => {
    const { pathname, hash } = useLocation();
    const mainRef = useRef(null);
    // Preserve links to the former single-page sections.
    const legacyPath = pathname === "/" && ["#home", "#about", "#skills", "#projects", "#contact"].includes(hash)
        ? (hash === "#home" ? "/" : `/${hash.slice(1)}`)
        : null;

    useEffect(() => {
        document.title = `Adam Eccles | ${titles[pathname] || "Page not found"}`;
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        mainRef.current?.focus({ preventScroll: true });
    }, [pathname]);

    if (legacyPath) return <Navigate to={legacyPath} replace />;

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
            <StarBackground subdued={pathname === "/about"} />
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:p-3">Skip to content</a>
            <Navbar key={pathname} />
            <div className="relative z-10 flex min-h-screen flex-col pt-20">
                <main id="main-content" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};
