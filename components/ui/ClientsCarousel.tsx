"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";

const DEFAULT_CLIENTS = [
    "Prefeitura de São Paulo",
    "Governo do Paraná",
    "Secretaria de Saúde",
    "Tribunal de Justiça",
    "Câmara Municipal",
    "Prefeitura de Curitiba",
    "Governo de Santa Catarina",
    "Ministério Público",
];

interface ClientsCarouselProps {
    logos?: string[];
}

export default function ClientsCarousel({ logos = [] }: ClientsCarouselProps) {
    const hasLogos = logos.length > 0;
    const items = hasLogos ? logos : DEFAULT_CLIENTS;

    return (
        <div className="w-full overflow-hidden py-10 relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <motion.div
                className="flex gap-16 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                }}
            >
                {/* Duplicate list to create seamless loop */}
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 transition-opacity cursor-default"
                    >
                        {hasLogos ? (
                            <div className="relative w-32 h-16 flex items-center justify-center">
                                <Image
                                    src={item}
                                    alt="Client Logo"
                                    width={128}
                                    height={64}
                                    className="object-contain max-h-full max-w-full"
                                />
                            </div>
                        ) : (
                            <>
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Building2 className="text-slate-400 w-6 h-6" />
                                </div>
                                <span className="text-xl font-bold text-slate-700 whitespace-nowrap">
                                    {item}
                                </span>
                            </>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
