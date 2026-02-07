import { FileText, Check, ChevronRight, Wand2 } from "lucide-react";

export default function GeneratorMockup() {
    return (
        <div className="bg-slate-50 flex flex-col h-[400px] w-full font-sans text-sm">
            {/* App Header */}
            <div className="h-12 border-b border-slate-200 flex items-center px-4 justify-between bg-white">
                <div className="flex items-center gap-2">
                    <FileText className="text-primary-cyan w-5 h-5" />
                    <span className="font-bold text-slate-700">Novo Documento: Termo de Referência</span>
                </div>
                <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-500 font-medium">Rascunho</div>
                    <div className="px-3 py-1 rounded-full bg-primary-green/10 text-primary-green text-xs font-bold flex items-center gap-1">
                        <Wand2 size={10} /> IA Ativa
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Steps */}
                <div className="w-1/3 border-r border-slate-200 bg-slate-50 p-4 space-y-4 hidden sm:block">
                    <div className="space-y-1">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Etapas</div>
                        <div className="flex items-center gap-2 text-primary-cyan bg-cyan-50 p-2 rounded-lg border border-cyan-100">
                            <Check size={14} />
                            <span className="font-medium text-dark-blue">Objeto</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 p-2">
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300"></div>
                            <span>Justificativa</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 p-2">
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300"></div>
                            <span>Especificação</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 p-2">
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300"></div>
                            <span>Obrigações</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-slate-50 p-6 relative">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Descrição do Objeto</label>
                            <div className="p-3 bg-white border border-slate-200 rounded-lg text-slate-700">
                                Aquisição de 50 (cinquenta) microcomputadores portáteis (notebooks) para atender às necessidades do setor administrativo...
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Critérios de Aceitação</label>
                            <div className="p-3 bg-white border border-primary-cyan rounded-lg text-slate-700 shadow-sm ring-1 ring-primary-cyan/20">
                                <p className="typing-effect">Os equipamentos devem possuir garantia mínima de 36 (trinta e seis) meses on-site...</p>
                                <span className="inline-block w-1.5 h-4 bg-primary-cyan ml-1 animate-pulse align-middle"></span>
                            </div>
                            <div className="absolute -right-2 -top-2 bg-primary-cyan text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                Gerando...
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
                                Próxima Etapa <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
