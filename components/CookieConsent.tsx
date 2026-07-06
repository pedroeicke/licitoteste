"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "licitoguru-cookie-consent";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const consent = window.localStorage.getItem(STORAGE_KEY);
            if (!consent) {
                setVisible(true);
            }
        } catch {
            setVisible(true);
        }
    }, []);

    const accept = () => {
        try {
            window.localStorage.setItem(STORAGE_KEY, new Date().toISOString());
        } catch {
            // ignore storage errors (e.g. private mode) and just close the banner
        }
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-label="Aviso de cookies"
            aria-live="polite"
            className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6"
        >
            <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:gap-6 sm:p-5">
                <div className="flex items-start gap-3">
                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-cyan/10 sm:flex">
                        <Cookie className="h-5 w-5 text-primary-cyan" />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                        Utilizamos cookies essenciais para manter sua sessão ativa e garantir o funcionamento do sistema.
                        Ao continuar, você concorda com nossa{" "}
                        <a
                            href="/documentos/politica-de-privacidade.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-primary-cyan underline underline-offset-2 hover:text-dark-blue"
                        >
                            Política de Privacidade
                        </a>
                        .
                    </p>
                </div>
                <button
                    type="button"
                    onClick={accept}
                    className="shrink-0 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-bold text-dark-blue shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-100"
                >
                    Aceitar
                </button>
            </div>
        </div>
    );
}
