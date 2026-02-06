"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100/50" : "bg-transparent"}`}>
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/Logo licito.guru IA.png" alt="Licito.guru Logo" className="h-16 w-auto object-contain" />
                </div>
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-4">
                    <Link
                        href="https://ai.licito.guru/"
                        className="text-sm font-bold text-slate-700 hover:text-primary-cyan px-6 py-2.5 rounded-full border border-slate-200 hover:border-primary-cyan transition-all"
                    >
                        Login
                    </Link>
                    <Link
                        href="https://api.whatsapp.com/send/?phone=554198002461&text=Gostaria+de+fazer+um+teste+gr%C3%A1tis!&type=phone_number&app_absent=0"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-primary text-slate-900 font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                    >
                        Testar Grátis
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`lg:hidden absolute top-[100%] left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-y-100 py-6" : "opacity-0 scale-y-0 h-0 overflow-hidden"
                    }`}
            >
                <div className="container mx-auto px-6 flex flex-col space-y-4">
                    <Link
                        href="https://ai.licito.guru/"
                        className="w-full text-center text-lg font-bold text-slate-700 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-100 hover:text-primary-cyan transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        href="https://api.whatsapp.com/send/?phone=554198002461&text=Gostaria+de+fazer+um+teste+gr%C3%A1tis!&type=phone_number&app_absent=0"
                        target="_blank"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-center bg-gradient-primary text-slate-900 font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2"
                    >
                        Testar Grátis
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
