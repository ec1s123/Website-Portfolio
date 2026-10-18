import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useSpaceMode } from "../hooks/useSpaceMode";

export const ThemeToggle = ({ className }) => {
    const { enabled: spaceOn, setEnabled: setSpaceOn } = useSpaceMode();
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") return true;
        if (savedTheme === "light") return false;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        // Space backdrop is a dark scene; keep tokens readable while it is on.
        const dark = spaceOn || isDarkMode;
        if (dark) {
            document.documentElement.classList.add("dark");
            if (!spaceOn) localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode, spaceOn]);

    const toggleTheme = () => {
        if (spaceOn && isDarkMode) {
            // Leaving dark while space is on would make body copy unreadable.
            setSpaceOn(false);
            setIsDarkMode(false);
            return;
        }
        setIsDarkMode((prev) => !prev);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode || spaceOn ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode || spaceOn}
            className={cn(
                "rounded-full p-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                className,
            )}
        >
            {isDarkMode || spaceOn ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};
