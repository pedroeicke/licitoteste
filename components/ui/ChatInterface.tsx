"use client";

import { motion } from "framer-motion";
import { Bot, User, FileText, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ChatInterface() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev < 4 ? prev + 1 : 0));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-slate-50 p-6 h-[400px] flex flex-col font-sans text-sm">
            <div className="flex-1 space-y-6 overflow-hidden">

                {/* User Message */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-end gap-3"
                >
                    <div className="bg-white text-slate-700 p-3 rounded-2xl rounded-tr-sm shadow-sm border border-slate-100 max-w-[80%]">
                        Preciso de um Termo de Referência para aquisição de notebooks i7.
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <User size={16} className="text-slate-500" />
                    </div>
                </motion.div>

                {/* AI Response 1 - Thinking/Typing */}
                {step >= 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30">
                            <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 max-w-[85%] space-y-2">
                            <p className="text-slate-700">Com certeza. Para garantir conformidade com a Lei 14.133/2021, preciso de alguns detalhes:</p>
                            <ul className="space-y-2 mt-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <li className="flex items-center gap-2 text-slate-600">
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${step >= 2 ? "bg-primary-green border-primary-green" : "border-slate-300"}`}>
                                        {step >= 2 && <CheckCircle size={10} className="text-slate-900" />}
                                    </div>
                                    Qual a quantidade estimada?
                                </li>
                                <li className="flex items-center gap-2 text-slate-600">
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${step >= 2 ? "bg-primary-green border-primary-green" : "border-slate-300"}`}>
                                        {step >= 2 && <CheckCircle size={10} className="text-slate-900" />}
                                    </div>
                                    Haverá garantia estendida?
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}

                {/* User Response 2 */}
                {step >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end gap-3"
                    >
                        <div className="bg-white text-slate-700 p-3 rounded-2xl rounded-tr-sm shadow-sm border border-slate-100 max-w-[80%]">
                            São 50 unidades com garantia de 3 anos on-site.
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                            <User size={16} className="text-slate-500" />
                        </div>
                    </motion.div>
                )}

                {/* AI Final Response - Generating */}
                {step >= 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30">
                            <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 max-w-[85%]">
                            <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                                <FileText className="text-indigo-500" />
                                <div>
                                    <div className="font-bold text-slate-800 text-sm">TR_Notebooks_i7.docx</div>
                                    <div className="text-xs text-slate-500">Gerado com sucesso • 142KB</div>
                                </div>
                                <button className="ml-auto text-xs font-bold text-indigo-600 hover:underline">Baixar</button>
                            </div>
                        </div>
                    </motion.div>
                )}

            </div>

            {/* Input Area Mockup */}
            <div className="mt-4 pt-4 border-t border-slate-200 relative">
                <div className="h-10 bg-white border border-slate-200 rounded-full px-4 flex items-center text-slate-400">
                    Digite sua mensagem...
                </div>
                <div className="absolute right-2 top-6 w-6 h-6 bg-primary-cyan rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50">
                    <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-slate-900 border-b-[3px] border-b-transparent ml-0.5"></div>
                </div>
            </div>
        </div>
    );
}
