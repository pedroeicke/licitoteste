"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

type SectionLink = {
    href: string;
    label: string;
};

export default function LGPDSectionNav({ sections }: { sections: SectionLink[] }) {
    const sectionIds = useMemo(() => sections.map((section) => section.href.replace("#", "")), [sections]);
    const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

    useEffect(() => {
        let frame = 0;

        const updateActiveSection = () => {
            const scrollOffset = 240;
            const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
            let currentId = sectionIds[0] ?? "";

            for (const sectionId of sectionIds) {
                const element = document.getElementById(sectionId);

                if (!element) {
                    continue;
                }

                if (element.getBoundingClientRect().top <= scrollOffset) {
                    currentId = sectionId;
                }
            }

            setActiveId(pageBottom ? sectionIds[sectionIds.length - 1] ?? currentId : currentId);
        };

        const requestUpdate = () => {
            window.cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(updateActiveSection);
        };

        requestUpdate();
        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        window.addEventListener("hashchange", requestUpdate);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);
            window.removeEventListener("hashchange", requestUpdate);
        };
    }, [sectionIds]);

    return (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Nesta página</p>
            <nav className="space-y-2">
                {sections.map((section) => {
                    const id = section.href.replace("#", "");
                    const isActive = activeId === id;

                    return (
                        <Link
                            key={section.href}
                            href={section.href}
                            aria-current={isActive ? "true" : undefined}
                            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                                isActive
                                    ? "bg-white text-primary-cyan shadow-sm ring-1 ring-primary-cyan/25"
                                    : "text-slate-600 hover:bg-white hover:text-primary-cyan"
                            }`}
                        >
                            <span>{section.label}</span>
                            <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "translate-x-0.5 text-primary-cyan" : ""}`} />
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
