import { HairlineItem, HairlineLink, HairlineList } from "./ui/HairlineList";
import { PageHeader } from "./ui/PageHeader";
import { page } from "../lib/styles";

const skillGroups = [
    {
        title: "Machine learning & data",
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
        title: "Backend & databases",
        skills: ["Node.js", "Express.js", "Python", "FastAPI", "Java", "SQL", "PostgreSQL", "SQLite", "Drizzle ORM", "Redis", "BullMQ"],
    },
    {
        title: "Frontend",
        skills: ["TypeScript", "JavaScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS", "shadcn/ui", "React Hook Form", "TanStack Query (React Query)", "TanStack Table", "Zustand", "Axios"],
    },
    {
        title: "Authentication & validation",
        skills: ["JWT", "Refresh token rotation", "Role-based access control (RBAC)", "bcrypt", "Field-level encryption", "Zod"],
    },
    {
        title: "Testing & observability",
        skills: ["Vitest", "Supertest", "Playwright", "Bruno", "Winston", "Pino"],
    },
    {
        title: "Cloud & development tools",
        skills: ["Git", "Docker", "Google Cloud", "Cloud Build", "BigQuery", "AWS"],
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
    <article className={page}>
        <PageHeader
            eyebrow="Adam Eccles / Skills"
            title="Technologies I’ve used"
            lead="Languages, frameworks, and tools from professional work and projects across software development, machine learning, and data analytics."
        />

        <div className="mt-14 divide-y border-t md:mt-20">
            {skillGroups.map(({ title, skills }) => (
                <section key={title} aria-labelledby={`skills-${title}`} className="grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:gap-10">
                    <h2 id={`skills-${title}`} className="font-semibold leading-7">{title}</h2>
                    <ul aria-label={title} className="flex flex-wrap gap-x-6 gap-y-2">
                        {skills.map((skill) => <li key={skill} className="leading-7 text-muted">{skill}</li>)}
                    </ul>
                </section>
            ))}
        </div>

        <section aria-labelledby="skills-projects-heading" className="mt-8 border-t pt-10">
            <h2 id="skills-projects-heading" className="text-3xl font-semibold tracking-tight">Applied in projects</h2>
            <p className="mb-8 mt-2 text-sm text-muted">See how I’ve used these technologies, with implementation details, results, and source code.</p>
            <HairlineList>
                {examples.map(({ title, path, description, technologies }) => (
                    <HairlineItem
                        key={path}
                        title={<HairlineLink to={path}>{title}</HairlineLink>}
                        meta={technologies}
                    >
                        {description}
                    </HairlineItem>
                ))}
            </HairlineList>
        </section>
    </article>
);
