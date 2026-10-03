import { EsportsCareer } from "../components/EsportsCareer";
import { TechCareer } from "../components/TechCareer";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, Gamepad2 } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { linkPrimary, page } from "../lib/styles";

export const Careers = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const track = searchParams.get("track") === "esports" ? "esports" : "tech";
    const isEsports = track === "esports";

    const selectTrack = (value) => {
        const next = new URLSearchParams(searchParams);
        next.set("track", value);
        setSearchParams(next);
    };

    return (
        <article className={page}>
            <PageHeader
                eyebrow="Adam Eccles / Career"
                title={<>Two paths.<br />One drive</>}
                lead="From competing as ec1s to building in technology. Explore the teams, roles, and experiences along the way."
            />

            <div className="my-12 flex flex-wrap items-center justify-between gap-6 border-b pb-8 md:my-16">
                <div role="group" aria-label="Choose career timeline" className="inline-flex gap-1 rounded-full border bg-card p-1.5">
                    {[{ id: "tech", label: "Tech" }, { id: "esports", label: "Esports" }].map(({ id, label }) => (
                        <button key={id} type="button" aria-pressed={track === id} aria-controls="career-timeline" onClick={() => selectTrack(id)} className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-8 ${track === id ? "bg-primary text-primary-foreground" : "text-muted hover:bg-primary/10 hover:text-foreground"}`}>
                            {id === "tech" ? <BriefcaseBusiness size={17} aria-hidden="true" /> : <Gamepad2 size={17} aria-hidden="true" />}{label}
                        </button>
                    ))}
                </div>
                <p className="text-xs uppercase tracking-widest text-subtle">{isEsports ? "Teams & career highlights" : "Roles & career highlights"}</p>
            </div>

            {isEsports ? <EsportsCareer /> : <TechCareer />}

            {!isEsports && (
                <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t pt-8">
                    <p className="text-sm text-muted">See the technical work behind my portfolio.</p>
                    <Link to="/projects" className={linkPrimary}>Explore projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
                </div>
            )}
        </article>
    );
};
