import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { CaseStudyHeader } from "../components/ui/CaseStudy";
import { caseStudyPage, linkUnderline } from "../lib/styles";

const screenshots = [
    {
        src: "/projects/premier-predict-results.webp",
        preview: "/projects/premier-predict-results-1600.webp",
        title: "Match results & confidence",
        caption: "Explore completed fixtures, outcome probabilities, and prediction breakdowns.",
        alt: "Premier Predict results dashboard with confidence highlights and a table of scores, model picks, and prediction outcomes.",
        width: 2996,
        height: 1586,
    },
    {
        src: "/projects/premier-predict-talking-points.webp",
        preview: "/projects/premier-predict-talking-points-1600.webp",
        title: "Team-performance insights",
        caption: "Turn actual versus expected points into club-level talking points.",
        alt: "Talking points dashboard comparing Sunderland and Tottenham's actual points with model expectations.",
        width: 2850,
        height: 1586,
    },
    {
        src: "/projects/premier-predict-fixtures.webp",
        preview: "/projects/premier-predict-fixtures-1600.webp",
        title: "Upcoming fixture outlook",
        caption: "Browse fixtures and heuristic projections based on team profiles and form.",
        alt: "Upcoming fixtures dashboard with gameweek filters, match probabilities, and a Leeds versus Burnley outlook panel.",
        width: 3012,
        height: 1588,
    },
];

const highlights = [
    {
        title: "Custom ML implementation",
        description: "Implemented multinomial logistic regression directly in NumPy with softmax probabilities, cross-entropy optimization, mini-batch training, L2 regularization, and Adam-style updates.",
    },
    {
        title: "Data quality and feature engineering",
        description: "Combined historical CSVs, handled inconsistent encodings and row widths, normalized club names, removed duplicate fixtures, and converted bookmaker odds into probabilities with the market margin removed.",
    },
    {
        title: "Time-aware evaluation",
        description: "Trained on older seasons and held out the latest season. Fit preprocessing on training data only and excluded post-match statistics from model inputs.",
    },
    {
        title: "Probabilities into product features",
        description: "Translated home, draw, and away probabilities into expected points, actual versus expected standings, club performance summaries, and model-versus-market disagreements.",
    },
    {
        title: "Training separated from delivery",
        description: "Python generates CSV and JSON artifacts consumed by React. The dashboard runs without an inference server, using a multi-stage Docker build and Nginx to serve the frontend.",
    },
];

const Screenshot = ({ screenshot, priority = false }) => (
    <figure className="min-w-0">
        <a
            href={screenshot.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${screenshot.title.toLowerCase()} full size (opens in a new tab)`}
            className="group block overflow-hidden rounded-md border border-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
            <img
                src={screenshot.preview}
                srcSet={`${screenshot.preview} 1600w, ${screenshot.src} ${screenshot.width}w`}
                sizes="(min-width: 1152px) 1072px, 100vw"
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                className="h-auto w-full"
            />
        </a>
        <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-2 text-xs leading-relaxed text-subtle">
            <span>{screenshot.caption}</span>
            <span className="inline-flex items-center gap-1">Select image to enlarge <ArrowUpRight size={14} aria-hidden="true" /></span>
        </figcaption>
    </figure>
);

export const PremierPredict = () => (
    <article className={caseStudyPage}>
        <CaseStudyHeader
            eyebrow="Capstone / Machine learning / Sports analytics"
            title="Premier Predict"
            intro="From raw match data to a clearer picture of the Premier League. A custom ML pipeline, brought to life in an interactive dashboard."
            action={<a href="https://github.com/ec1s123/Capstone" target="_blank" rel="noopener noreferrer" className={linkUnderline}><Github size={18} aria-hidden="true" /> Explore the code <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>}
            metadata={[
                ["Project", "Capstone application"],
                ["Dataset", "8,600+ matches · 23 seasons"],
                ["Built with", "React · Python · NumPy"],
                ["Delivery", "Docker · Nginx"],
            ]}
        />

        <Screenshot screenshot={screenshots[0]} priority />

        <section aria-labelledby="overview-heading" className="grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:gap-16 md:py-24">
            <div>
                <p className="mb-3 text-xs font-medium text-primary">01 / THE PROJECT</p>
                <h2 id="overview-heading" className="text-3xl font-semibold tracking-tight">Turning probabilities<br className="hidden md:block" /> into perspective.</h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>I built Premier Predict for my capstone to connect the full machine learning workflow to a usable product: cleaning historical data, engineering features, training a classifier, and presenting the results in React.</p>
                <p>The dashboard makes those probabilities explorable. Users can review match outcomes, compare model expectations with bookmaker markets, and examine where actual league standings diverge from expected points.</p>
            </div>
        </section>

        <section aria-labelledby="results-heading" className="border-y py-10 md:py-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 id="results-heading" className="text-2xl font-semibold tracking-tight">Measured on unseen matches.</h2>
                <p className="text-xs uppercase tracking-widest text-subtle">Chronological holdout · 332 matches</p>
            </div>
            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                <div><dt className="mb-3 text-sm text-muted">Accuracy gain over baseline</dt><dd className="text-4xl font-semibold tracking-tight text-primary lg:text-5xl">+2.4 <span className="text-xl">pp</span></dd></div>
                <div><dt className="mb-3 text-sm text-muted">Held-out model accuracy</dt><dd className="text-4xl font-semibold tracking-tight lg:text-5xl">48.2%</dd></div>
                <div><dt className="mb-3 text-sm text-muted">Log loss · baseline → model</dt><dd className="text-3xl font-semibold tracking-tight lg:text-4xl">1.069 → 1.037</dd></div>
            </dl>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">Outperformed the team/date baseline on both accuracy and log loss, with preprocessing fit only on training data and post-match statistics excluded from the model inputs.</p>
        </section>

        <section aria-labelledby="product-heading" className="py-16 md:py-24">
            <p className="mb-3 text-xs font-medium text-primary">02 / THE EXPERIENCE</p>
            <h2 id="product-heading" className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">Explore the story behind the score.</h2>
            <div className="space-y-14 md:space-y-20">
                {screenshots.slice(1).map((screenshot, index) => (
                    <div key={screenshot.src}>
                        <div className="mb-5 flex items-baseline gap-4">
                            <span className="text-xs text-primary">0{index + 1}</span>
                            <h3 className="text-xl font-medium">{screenshot.title}</h3>
                        </div>
                        <Screenshot screenshot={screenshot} />
                    </div>
                ))}
            </div>
        </section>

        <section aria-labelledby="engineering-heading" className="grid gap-8 border-t py-12 md:grid-cols-[1fr_2fr] md:gap-16 md:py-16">
            <div>
                <p className="mb-3 text-xs font-medium text-primary">03 / THE ENGINEERING</p>
                <h2 id="engineering-heading" className="text-3xl font-semibold tracking-tight">Built end to end.</h2>
            </div>
            <ol className="space-y-8">
                {highlights.map(({ title, description }, index) => (
                    <li key={title} className="grid grid-cols-[1.5rem_1fr] gap-4">
                        <span className="pt-1 text-xs text-subtle">0{index + 1}</span>
                        <div><h3 className="mb-2 text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-muted">{description}</p></div>
                    </li>
                ))}
            </ol>
        </section>

        <section aria-labelledby="evaluation-heading" className="grid gap-8 border-t py-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2 id="evaluation-heading" className="text-xl font-semibold">Evaluation context</h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
                <p>The custom classifier achieved 48.2% accuracy, within 0.9 percentage points of the bookmaker benchmark’s 49.1%, compared with 45.8% for the team/date baseline on the same held-out evaluation.</p>
                <p>Historical dashboard predictions come from a model refit on all available matches, so displayed dashboard accuracy is separate from these held-out results. Upcoming fixtures use a separate heuristic based on team profiles and form.</p>
            </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t pt-8">
            <Link to="/projects" className="text-sm font-medium hover:text-primary">← Back to projects</Link>
            <a href="https://github.com/ec1s123/Capstone" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">View source on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
    </article>
);
