import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { IntentFlowDiagram } from "../components/IntentFlowDiagram";
import { CaseStudyHeader, CaseStudySection, NumberedList } from "../components/ui/CaseStudy";
import { caseStudyPage, linkPrimary, linkQuiet, linkUnderline } from "../lib/styles";

// Work project at Maryville (see the AI Agent & ML Engineer role in data/careers.js).
// Copy follows Adam's write-up. All examples are synthetic; no organization data appears here.

const built = [
    { title: "Data ingestion and preparation", description: "Python scripts retrieve archived conversations, parse transcript formats, aggregate message-level records, and prepare conversation-level inputs for labeling and inference." },
    { title: "Model training and evaluation", description: "A scikit-learn pipeline combines unigram/bigram TF-IDF features with class-balanced logistic regression. The workflow supports stratified holdout evaluation or cross-validation, optional macro-F1 grid search, classification reports, confusion matrices, and model export." },
    { title: "Batch inference API", description: "A FastAPI service accepts CSV files or ZIP archives of transcripts, preprocesses text, scores conversations, and writes input, processed-data, prediction, and summary artifacts into separate run folders." },
    { title: "Analyst review interface", description: "A React/TypeScript workspace connects batch submission with label counts, confidence filters, conversation inspection, human relabeling, review notes, and CSV export." },
    { title: "Feedback loop", description: "Uncertainty sampling ranks unlabeled examples using probability margins and confidence, with optional per-category caps. Annotation merging supports another training iteration." },
];

const decisions = [
    { decision: "TF-IDF with logistic regression", benefit: "A compact baseline with inspectable features and a straightforward retraining path.", tradeoff: "Limited semantic understanding; comparative performance and latency need measurement." },
    { decision: "Score the opening customer message, preserve the full conversation", benefit: "Keeps the model input focused while giving reviewers context.", tradeoff: "Greetings and evolving intent require additional review; parsing depends on transcript format." },
    { decision: "Rank by confidence and probability margin", benefit: "Surfaces ambiguous predictions for labeling.", tradeoff: "Raw model scores are uncalibrated; thresholds need validation." },
    { decision: "Require review for greetings and rows below a chosen threshold", benefit: "Encodes a review policy directly in the analyst workflow.", tradeoff: "Higher-confidence rows may still be accepted without human verification." },
    { decision: "Store artifacts by batch run on the filesystem", benefit: "Keeps the local workflow transparent and easy to inspect.", tradeoff: "Shared access, retention, concurrency, and persistent annotation state need further engineering." },
];

const transcript = [
    { speaker: "Customer", text: "Hi there!" },
    { speaker: "Agent", text: "Hello! How can I help today?" },
    { speaker: "Customer", text: "I can’t sign in. Can you help me reset my password?" },
];

const ReviewExample = () => (
    <figure>
        <div className="grid overflow-hidden rounded-md border bg-card/60 md:grid-cols-[3fr_2fr]">
            <div className="p-5 sm:p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-subtle">Conversation</p>
                <ol className="space-y-3">
                    {transcript.map(({ speaker, text }, index) => (
                        <li key={text} className={`max-w-[85%] rounded-md border px-3 py-2 text-sm leading-6 ${speaker === "Agent" ? "ml-auto bg-background" : "bg-primary/10 border-primary/30"}`}>
                            <span className="block text-xs text-subtle">{speaker}{index === 0 && " · scored message"}</span>
                            {text}
                        </li>
                    ))}
                </ol>
            </div>
            <dl className="space-y-4 border-t p-5 text-sm sm:p-6 md:border-l md:border-t-0">
                <div>
                    <dt className="text-xs uppercase tracking-widest text-subtle">Model prediction</dt>
                    <dd className="mt-1 font-mono text-muted line-through decoration-subtle">greeting</dd>
                </div>
                <div>
                    <dt className="text-xs uppercase tracking-widest text-subtle">Analyst label</dt>
                    <dd className="mt-1 font-mono font-medium text-primary">account_access</dd>
                </div>
                <div>
                    <dt className="text-xs uppercase tracking-widest text-subtle">Status</dt>
                    <dd className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-medium text-primary"><Check size={12} aria-hidden="true" /> Reviewed</dd>
                </div>
            </dl>
        </div>
        <figcaption className="mt-4 text-xs leading-relaxed text-subtle">Synthetic example. The labels are fixtures, not live model predictions.</figcaption>
    </figure>
);

export const ConversationIntent = () => (
    <article className={caseStudyPage}>
        <CaseStudyHeader
            eyebrow="Professional work / Applied ML / Human-in-the-loop review"
            title="Conversation Intent Review Platform"
            intro="An end-to-end platform for classifying support conversations and turning uncertain predictions into reviewable decisions."
            action={<Link to="/careers" className={linkUnderline}>See the role <ArrowUpRight size={16} aria-hidden="true" /></Link>}
            metadata={[
                ["Built at", "Maryville University"],
                ["Model", "TF-IDF + logistic regression"],
                ["Built with", "Python · FastAPI · React · TypeScript"],
                ["Examples shown", "Synthetic data"],
            ]}
        />

        <IntentFlowDiagram />

        <CaseStudySection id="problem-heading" label="01 / The problem" title="Intent doesn’t always show up in the first message." className="mt-16 md:mt-24">
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>Conversation archives are difficult to categorize consistently by hand. An opening message can also hide the user’s actual intent: a conversation that begins with a greeting may become a substantive support request several turns later.</p>
                <p>The engineering challenge was to connect automated classification with a usable review process that preserves that context. The workflow connects transcript ingestion, model training, a batch prediction API, and an analyst interface where people inspect context, correct labels, and export data for the next training cycle.</p>
            </div>
        </CaseStudySection>

        <CaseStudySection id="built-heading" label="02 / What I built" title="From raw transcripts to the next training cycle.">
            <NumberedList items={built} />
        </CaseStudySection>

        <section aria-labelledby="decisions-heading" className="border-t py-12 md:py-16">
            <p className="mb-3 text-xs font-medium uppercase text-primary">03 / Engineering decisions</p>
            <h2 id="decisions-heading" className="mb-10 text-3xl font-semibold tracking-tight">Every choice has a tradeoff.</h2>
            <table className="hidden w-full text-left text-sm md:table">
                <thead>
                    <tr className="border-b text-xs uppercase tracking-widest text-subtle">
                        <th scope="col" className="w-1/3 pb-3 pr-8 font-medium">Decision</th>
                        <th scope="col" className="w-1/3 pb-3 pr-8 font-medium">Benefit</th>
                        <th scope="col" className="w-1/3 pb-3 font-medium">Tradeoff</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {decisions.map(({ decision, benefit, tradeoff }) => (
                        <tr key={decision} className="align-top">
                            <th scope="row" className="py-5 pr-8 font-semibold leading-6">{decision}</th>
                            <td className="py-5 pr-8 leading-6 text-muted">{benefit}</td>
                            <td className="py-5 leading-6 text-muted">{tradeoff}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className="divide-y border-t md:hidden">
                {decisions.map(({ decision, benefit, tradeoff }) => (
                    <li key={decision} className="py-5">
                        <h3 className="font-semibold leading-6">{decision}</h3>
                        <dl className="mt-3 space-y-3 text-sm leading-6">
                            <div><dt className="text-xs uppercase tracking-widest text-subtle">Benefit</dt><dd className="mt-1 text-muted">{benefit}</dd></div>
                            <div><dt className="text-xs uppercase tracking-widest text-subtle">Tradeoff</dt><dd className="mt-1 text-muted">{tradeoff}</dd></div>
                        </dl>
                    </li>
                ))}
            </ul>
        </section>

        <CaseStudySection id="example-heading" label="04 / In practice" title="A greeting that was really a password reset.">
            <p className="mb-8 text-base leading-relaxed text-muted md:text-lg">
                An opening greeting is followed by a password-reset request. An analyst can inspect the whole conversation,
                change the label from <code className="font-mono text-foreground">greeting</code> to <code className="font-mono text-foreground">account_access</code>,
                and mark it reviewed. The interface keeps the original model prediction alongside the human label, making the
                correction explicit in the export.
            </p>
            <ReviewExample />
        </CaseStudySection>

        <CaseStudySection id="demonstrates-heading" title="What this demonstrates">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
                <p>Carrying an ML feature across the data pipeline, model lifecycle, API contract, and frontend interaction. I translated ambiguous model outputs into a concrete human review workflow and built the tooling needed to feed corrections back into training.</p>
                <p>On the software side, the strongest evidence is the integration work: consistent prediction artifacts, context-preserving preprocessing, review policy in the UI, and a repeatable batch workflow. On the ML side, I can talk through class imbalance, evaluation design, confidence margins, and the limits of opening-message classification.</p>
            </div>
        </CaseStudySection>

        <CaseStudySection id="limits-heading" title="Results and limits">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
                <p>The implemented result is a connected local workflow for batch scoring, review, correction, and export, plus training tools for iterative labeling. I don’t claim production deployment, measured analyst time savings, independently validated accuracy, calibrated probabilities, or large-scale throughput.</p>
                <p>Next steps would be an independent evaluation split or nested cross-validation for tuned models, persistent review state, authenticated artifact access, constrained upload and model handling, and bounded or paginated review responses.</p>
            </div>
        </CaseStudySection>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t pt-8">
            <Link to="/projects" className={linkQuiet}>← Back to projects</Link>
            <Link to="/careers" className={linkPrimary}>See the role on my career page <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
    </article>
);
