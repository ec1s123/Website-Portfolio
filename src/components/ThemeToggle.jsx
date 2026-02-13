import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            return savedTheme === 'dark';
        }

        return true;
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
        <button onClick = {toggleTheme} 
        className = {cn("p-2 rounded-full transition-colors",
            "focus:outline-hidden"
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

