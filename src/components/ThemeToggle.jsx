import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") return true;
        if (savedTheme === "light") return false;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);


    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return ( 
        <button
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDarkMode}
        className = {cn("p-2 rounded-full transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            , className
        )}> 
            {" "}
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-300" /> 
                ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                )} 
        </button>
    );
};

