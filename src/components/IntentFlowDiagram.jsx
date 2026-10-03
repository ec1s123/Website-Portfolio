import { ArrowRight, CornerDownRight, RotateCcw, ScanSearch } from "lucide-react";

// System diagram for the Conversation Intent Review Platform case study.

const lanes = [
    {
        label: "Training",
        steps: ["Conversation archives", "Parse and prepare text", "Human-labeled dataset", "Train and evaluate classifier", { text: "Model artifact", accent: true }],
    },
    {
        label: "Batch review",
        steps: ["CSV or ZIP batch", "FastAPI preprocessing and inference", "Archived run artifacts", { text: "React and TypeScript review workspace", accent: true }, "Corrected label export"],
    },
];

const connections = [
    { icon: CornerDownRight, text: "The model artifact powers batch inference in the FastAPI service." },
    { icon: RotateCcw, text: "Corrected labels return to the labeled dataset for the next training cycle." },
    { icon: ScanSearch, text: "Uncertainty sampling uses the model and the parsed text to send the most ambiguous conversations to labeling." },
];

const nodeClass = (accent) => `rounded-md border text-center leading-snug ${accent ? "border-primary/60 bg-primary/10 font-medium" : "bg-background"}`;
const stepParts = (step) => (typeof step === "string" ? { text: step } : step);

export const IntentFlowDiagram = () => (
    <figure>
        <div className="rounded-md border bg-card/60 p-5 sm:p-8">
            <div className="space-y-8">
                {lanes.map(({ label, steps }) => (
                    <div key={label}>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{label}</p>
                        <ol aria-label={`${label} flow`} className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
                            {steps.map((step, index) => {
                                const { text, accent } = stepParts(step);
                                return (
                                    <li key={text} className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row">
                                        {index > 0 && <ArrowRight size={16} className="shrink-0 rotate-90 text-subtle lg:rotate-0" aria-hidden="true" />}
                                        <span className={`${nodeClass(accent)} flex w-full items-center justify-center px-3 py-3 text-sm lg:h-full`}>{text}</span>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                ))}
            </div>
            <ul aria-label="How the flows connect" className="mt-8 grid gap-4 border-t pt-6 md:grid-cols-3">
                {connections.map(({ icon, text }) => {
                    const Icon = icon;
                    return (
                        <li key={text} className="flex gap-3 text-sm leading-6 text-muted">
                            <Icon size={16} className="mt-1 shrink-0 text-primary" aria-hidden="true" />{text}
                        </li>
                    );
                })}
            </ul>
        </div>
        <figcaption className="mt-4 text-xs leading-relaxed text-subtle">How the pieces fit together: one flow trains the classifier, the other scores new batches and sends corrections back.</figcaption>
    </figure>
);
