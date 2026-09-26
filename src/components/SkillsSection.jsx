import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const skillGroups = [
    {
        title: "Machine learning & data",
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
        title: "Backend & databases",
        skills: ["Node.js", "Express.js", "Java", "SQL", "PostgreSQL", "Drizzle ORM"],
    },
    {
        title: "Frontend",
        skills: ["TypeScript", "JavaScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS", "React Hook Form", "TanStack Query (React Query)", "Axios"],
    },
    {
        title: "Authentication & validation",
        skills: ["JWT", "Role-based access control (RBAC)", "bcrypt", "Zod"],
    },
    {
        title: "Testing & observability",
        skills: ["Vitest", "Winston"],
    },
    {
        title: "Cloud & development tools",
        skills: ["Git", "Docker", "Google Cloud", "BigQuery", "AWS"],
    },
];

const examples = [
    {
        title: "Premier Predict",
        path: "/projects/premier-predict",
        description: "A custom NumPy classifier connected to a React football analytics dashboard.",
        technologies: "Python · NumPy · React · Docker",
    },
    {
        title: "Siamese Face Verification",
        path: "/projects/siamese-face-verification",
        description: "A TensorFlow Siamese network with a webcam face-verification workflow.",
        technologies: "Python · TensorFlow",
    },
    {
        title: "Phishing Detection",
        path: "/projects/phishing-detection",
        description: "A comparison of classification models using cross-validation and feature analysis.",
        technologies: "Python · Scikit-learn · Pandas",
    },
];

export const SkillsSection = () => (
    <section id="skills" aria-labelledby="skills-title" className="relative px-4 py-24">
        <div className="container mx-auto max-w-5xl">
            <header className="mx-auto mb-12 max-w-2xl text-center">
                <h1 id="skills-title" className="mb-4 text-3xl font-bold md:text-4xl">
                    Technologies <span className="text-primary">I’ve used</span>
                </h1>
                <p className="text-base leading-relaxed text-foreground/75">
                    Languages, frameworks, and tools I’ve used in professional work and projects
                    across software development, machine learning, and data analytics.
                </p>
            </header>

            <div className="divide-y divide-border text-left">
                {skillGroups.map(({ title, skills }) => (
                    <section key={title} className="grid gap-4 py-7 first:pt-0 md:grid-cols-[15rem_1fr] md:gap-10">
                        <h2 className="text-base font-semibold leading-7">{title}</h2>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label={title}>
                            {skills.map((skill) => (
                                <li key={skill} className="text-base leading-7 text-foreground/75">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <section aria-labelledby="skills-projects-title" className="mt-12 text-left">
                <h2 id="skills-projects-title" className="text-xl font-semibold">Applied in projects</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    See how I’ve used these technologies, with implementation details, results, and source code.
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {examples.map(({ title, path, description, technologies }) => (
                        <article key={path} className="border-t border-primary/30 pt-5">
                            <h3 className="font-semibold">
                                <Link to={path} className="inline-flex items-start gap-2 rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                    {title}
                                    <ArrowUpRight size={17} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                                </Link>
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/75">{description}</p>
                            <p className="mt-3 text-xs font-medium leading-relaxed text-foreground/65">{technologies}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    </section>
);
