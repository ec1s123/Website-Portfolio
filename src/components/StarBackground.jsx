import { useEffect, useState } from "react";
import { createStarfield } from "../lib/starfield";

const meteors = [
    { x: 22, y: 8, duration: 7.3, delay: -1.1 },
    { x: 64, y: 14, duration: 8.7, delay: -5.4 },
    { x: 94, y: 23, duration: 9.1, delay: -2.8 },
    { x: 42, y: 31, duration: 7.9, delay: -6.3 },
    { x: 78, y: 40, duration: 10.3, delay: -4.2 },
    { x: 18, y: 49, duration: 8.3, delay: -7.1 },
    { x: 56, y: 57, duration: 9.7, delay: -3.5 },
    { x: 90, y: 65, duration: 7.7, delay: -5.9 },
    { x: 34, y: 75, duration: 10.1, delay: -8.6 },
    { x: 70, y: 84, duration: 8.9, delay: -0.7 },
];

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        let frame;
        const update = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                setStars(createStarfield(window.innerWidth, window.innerHeight));
            });
        };
        update();
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("resize", update);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div aria-hidden="true" className="starfield fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <span
                    key={star.id}
                    className={["star", star.twinkle ? "star-twinkle" : "", star.prominent ? "star-prominent" : ""].filter(Boolean).join(" ")}
                    style={{
                        width: star.size,
                        height: star.size,
                        left: star.x,
                        top: star.y,
                        "--star-opacity": star.opacity,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}
            {meteors.map((meteor, index) => (
                <span
                    key={index}
                    className="meteor"
                    style={{
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDuration: `${meteor.duration}s`,
                        animationDelay: `${meteor.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};
