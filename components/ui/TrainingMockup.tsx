import { UploadCloud, FileType, CheckCircle, Database, Lock, RefreshCw } from "lucide-react";

export default function TrainingMockup() {
    return (
        <div className="bg-slate-50 flex flex-col h-[400px] w-full font-sans text-sm">
            {/* Dashboard Header */}
            <div className="p-6 bg-white border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-800">Base de Conhecimento</h3>
                <p className="text-slate-500 text-xs">Gerencie os documentos que a IA utiliza como referência.</p>
            </div>

            <div className="p-6 space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-white hover:border-primary-cyan/50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <UploadCloud className="text-primary-cyan" />
                    </div>
                    <p className="font-medium text-slate-600">Arraste seus editais e contratos aqui</p>
                    <p className="text-xs text-slate-400">PDF, DOCX (Máx. 50MB)</p>
                </div>

                {/* File List */}
                <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Documentos Processados</div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                            <FileType size={16} />
                        </div>
                        <div className="flex-1">
                            <div className="font-bold text-slate-700 text-xs truncate">Edital_Padrao_Pregao.pdf</div>
                            <div className="text-[10px] text-slate-400">Processado há 2h</div>
                        </div>
                        <div className="text-primary-green">
                            <CheckCircle size={16} />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <FileType size={16} />
                        </div>
                        <div className="flex-1">
                            <div className="font-bold text-slate-700 text-xs truncate">Nota_Tecnica_05_2023.docx</div>
                            <div className="text-[10px] text-slate-400">Aprendendo...</div>
                        </div>
                        <div className="text-primary-cyan animate-spin">
                            <RefreshCw size={14} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Badge */}
            <div className="mt-auto p-4 bg-slate-100 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500">
                <Lock size={12} />
                <span>Ambiente Criptografado Ponta-a-Ponta</span>
            </div>
        </div>
    );
}
