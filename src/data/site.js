import { projectCaseStudies } from "./projectCaseStudies.js";

export const siteUrl = "https://www.ec1s.com";

// Also the route list for the generated sitemap (see vite.config.js).
export const pageTitles = {
    "/": "Software Engineer",
    "/about": "About",
    "/careers": "Career",
    "/skills": "Skills",
    "/projects": "Projects",
    "/projects/premier-predict": "Premier Predict — Capstone",
    ...Object.fromEntries(projectCaseStudies.map((project) => [`/projects/${project.slug}`, project.title])),
    "/contact": "Contact",
};
