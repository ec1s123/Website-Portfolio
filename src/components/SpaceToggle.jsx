import { Orbit } from "lucide-react";
import { cn } from "../lib/utils";
import { useSpaceMode } from "../hooks/useSpaceMode";
import { isSpaceSceneSupported } from "../lib/spaceScene";

export const SpaceToggle = ({ className }) => {
    const { enabled, toggle } = useSpaceMode();
    const supported = typeof window !== "undefined" && isSpaceSceneSupported();

    if (!supported) return null;

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={enabled ? "Turn off space backdrop" : "Turn on space backdrop"}
            aria-pressed={enabled}
            title={enabled ? "Space backdrop on" : "Space backdrop (GPU)"}
            className={cn(
                "rounded-full p-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                enabled ? "text-primary" : "text-muted hover:text-foreground",
                className,
            )}
        >
            <Orbit className="h-6 w-6" aria-hidden="true" />
        </button>
    );
};
