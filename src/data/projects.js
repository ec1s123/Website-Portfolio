import { projectCaseStudies } from "./projectCaseStudies.js";

// Card-level summaries shared by the Home and Projects pages.
export const projects = [
    {
        slug: "premier-predict",
        title: "Premier Predict",
        label: "Capstone",
        eyebrow: "Capstone / Machine learning / Sports analytics",
        path: "/projects/premier-predict",
        image: {
            src: "/projects/premier-predict-results-1600.webp",
            srcSet: "/projects/premier-predict-results-800.webp 800w, /projects/premier-predict-results-1600.webp 1600w",
            width: 1600,
            height: 847,
        },
        description: "A Premier League analytics app: a custom NumPy classifier trained on 8,600+ matches, explored through a React dashboard. Beat the baseline by 2.4 percentage points on held-out matches.",
        tags: ["React", "Python", "NumPy", "Docker"],
        githubLink: "https://github.com/ec1s123/Capstone",
        highlights: [
            ["+2.4 pp", "Accuracy over the baseline"],
            ["48.2%", "Held-out accuracy"],
            ["8,600+", "Matches across 23 seasons"],
        ],
    },
    ...projectCaseStudies.map((project) => ({
        slug: project.slug,
        title: project.title,
        eyebrow: project.eyebrow,
        path: `/projects/${project.slug}`,
        image: { src: project.thumbnail || project.image, width: project.hero.width, height: project.hero.height },
        description: project.description,
        tags: project.tags,
        githubLink: project.githubLink,
        postUrl: project.demoUrl,
    })),
];

export const findProject = (slug) => projects.find((project) => project.slug === slug);
