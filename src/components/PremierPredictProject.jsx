import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";

export const PremierPredictProject = () => (
    <article className="flex flex-col overflow-hidden rounded-lg bg-card text-left shadow-xs card-hover">
        <div className="relative h-48 overflow-hidden">
            <img src="/projects/premier-predict-results.png" alt="Premier Predict match results and confidence dashboard" className="h-full w-full object-cover object-top" loading="lazy" />
            <span className="absolute bottom-3 left-3 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-sm">Capstone project</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
            <h3 className="mb-1 text-xl font-semibold">Premier Predict</h3>
            <p className="mb-4 py-1 text-sm leading-relaxed text-foreground/75">
                Built a Premier League analytics app with a custom NumPy classifier and React dashboard. Processed 8,600+ matches across 23 seasons, improving held-out accuracy by 2.4 percentage points over the baseline.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
                {["React", "Python", "NumPy", "Docker", "Machine Learning"].map((tag) => (
                    <span key={tag} className="rounded-full border px-2 py-1 text-xs font-medium">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
                <Link to="/projects/premier-predict" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
                    View project details <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <a href="https://github.com/ec1s123/Capstone" target="_blank" rel="noopener noreferrer" aria-label="Premier Predict source code on GitHub" className="text-foreground/80 hover:text-primary">
                    <Github size={20} />
                </a>
            </div>
        </div>
    </article>
);
