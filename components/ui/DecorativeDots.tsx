"use client";

import { motion } from "framer-motion";

interface DecorativeDotsProps {
    width?: number;
    height?: number;
    className?: string;
    color?: "cyan" | "green" | "slate";
}

export default function DecorativeDots({
    width = 5,
    height = 5,
    className = "",
    color = "cyan"
}: DecorativeDotsProps) {

    // Create a grid of dots
    // Improved deterministic aesthetics: specific filled positions based on grid dimensions
    // to avoid clumping and look "designed"
    const dots = [];

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            const i = r * width + c;
            // A pseudo-random but fixed pattern that looks nice and sparse
            // Fills roughly 1 in 8 dots, avoiding edges sometimes for better look
            const isFilled = ((r * 3 + c * 7) % 11 === 0) || ((r * 2 + c * 5) % 17 === 0);

            dots.push({ id: i, isFilled });
        }
    }

    // Define styles based on color prop, defaulting to brand Cyan
    const borderClass = color === "green" ? "border-primary-green" :
        color === "slate" ? "border-slate-300" :
            "border-primary-cyan";

    // User requested "always gradient" -> applying brand gradient for the main cyan theme
    const bgClass = color === "green" ? "bg-primary-green" :
        color === "slate" ? "bg-slate-300" :
            "bg-gradient-to-br from-primary-cyan to-primary-green";

    return (
        <div
            className={`grid gap-3 ${className}`}
            style={{ gridTemplateColumns: `repeat(${width}, min-content)` }}
        >
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: dot.id * 0.05, duration: 0.5, ease: "backOut" }}
                    viewport={{ once: true }}
                    className="w-3 h-3 flex items-center justify-center"
                >
                    {dot.isFilled ? (
                        <div className={`w-3 h-3 rounded-full ${bgClass} shadow-sm`} />
                    ) : (
                        <div className={`w-3 h-3 rounded-full border-[2.5px] ${borderClass} bg-transparent`} />
                    )}
                </motion.div>
            ))}
        </div>
    );
}
