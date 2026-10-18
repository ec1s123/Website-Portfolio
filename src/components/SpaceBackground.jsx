import { useEffect, useRef, useState } from "react";
import { createSpaceScene, isSpaceSceneSupported } from "../lib/spaceScene";
import { StarBackground } from "./StarBackground";

export const SpaceBackground = ({ subdued = false }) => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);
    const [failed, setFailed] = useState(() => !isSpaceSceneSupported());

    useEffect(() => {
        if (failed) return undefined;

        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const scene = createSpaceScene(canvas);
        if (!scene) {
            setFailed(true);
            return undefined;
        }

        sceneRef.current = scene;
        scene.setStrength(subdued ? 0.55 : 1);
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const applyMotion = () => scene.setReducedMotion(motion.matches);
        applyMotion();
        motion.addEventListener("change", applyMotion);

        const onMove = (event) => {
            if (motion.matches) return;
            const x = (event.clientX / window.innerWidth - 0.5) * 0.22;
            const y = (event.clientY / window.innerHeight - 0.5) * -0.12;
            scene.setLook(x, y + 0.05);
        };
        window.addEventListener("pointermove", onMove, { passive: true });

        scene.start();

        return () => {
            motion.removeEventListener("change", applyMotion);
            window.removeEventListener("pointermove", onMove);
            scene.destroy();
            sceneRef.current = null;
        };
        // subdued is applied in a separate effect after mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [failed]);

    useEffect(() => {
        sceneRef.current?.setStrength(subdued ? 0.55 : 1);
    }, [subdued]);

    if (failed) return <StarBackground subdued={subdued} />;

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 h-full w-full"
        />
    );
};
