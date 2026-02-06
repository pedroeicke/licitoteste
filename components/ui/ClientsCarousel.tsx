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
                            <div className="relative w-48 h-24 md:w-36 md:h-18 flex items-center justify-center">
                                <Image
                                    src={item}
                                    alt="Client Logo"
                                    fill
                                    sizes="(max-width: 768px) 192px, 144px"
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <>
                                <div className="w-14 h-14 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Building2 className="text-slate-400 w-7 h-7 md:w-6 md:h-6" />
                                </div>
                                <span className="text-2xl md:text-xl font-bold text-slate-700 whitespace-nowrap">
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
