import { useState } from "react";
import { Mic2 } from "lucide-react";
import { careerLogos } from "../data/careerLogos";

export const CareerLogo = ({ entry, compact = false }) => {
    const logo = careerLogos[entry.id];
    const [failedSrc, setFailedSrc] = useState(null);
    const hasLogo = logo && failedSrc !== logo.src;
    const isBroadcast = entry.discipline === "Broadcast";
    const initials = entry.organization.split(/\s+/).slice(0, 2).map((word) => word[0]).join("");

    return (
        <span aria-hidden="true" className={`flex shrink-0 items-center justify-center overflow-hidden border ${compact ? "h-8 w-8 rounded-md p-1" : "h-10 w-10 rounded-xl p-2 sm:h-14 sm:w-14 sm:p-2.5"} ${hasLogo ? (logo.dark ? "border-white/15 bg-slate-900" : "border-slate-200 bg-white") : "border-primary/20 bg-primary/5 text-primary"}`}>
            {hasLogo ? (
                <img src={logo.src} alt="" width="36" height="36" loading="lazy" decoding="async" className="h-full w-full object-contain" onError={() => setFailedSrc(logo.src)} />
            ) : isBroadcast ? <Mic2 size={24} /> : <span className="text-sm font-semibold tracking-wide">{initials}</span>}
        </span>
    );
};
