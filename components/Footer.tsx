import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="#home" className="inline-block mb-4">
                            <img src="/Logo licito.guru IA.png" alt="Licito.guru Logo" className="h-20 w-auto object-contain" />
                        </Link>

                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-slate-800 mb-6">Navegação</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="#home" className="hover:text-primary-cyan transition-colors">Home</Link></li>
                            <li><Link href="#gerador" className="hover:text-primary-cyan transition-colors">Gerador de Documentos</Link></li>
                            <li><Link href="#ia-personalizada" className="hover:text-primary-cyan transition-colors">IA Personalizada</Link></li>
                            <li><Link href="#banco-exclusivo" className="hover:text-primary-cyan transition-colors">Banco Exclusivo</Link></li>
                            <li><Link href="#faq" className="hover:text-primary-cyan transition-colors">Perguntas Frequentes</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-slate-800 mb-6">Contato</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-cyan shrink-0" />
                                <span>Av. Osvaldo Rodrigues Cabral, 1570, Centro<br />Florianópolis – SC, CEP 88015-710</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-cyan shrink-0" />
                                <a href="mailto:contato@licito.guru" className="hover:text-primary-cyan">contato@licito.guru</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-cyan shrink-0">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <a href="https://wa.me/554198002461" target="_blank" className="hover:text-primary-cyan">(41) 98002-461</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex justify-center items-center text-[10px] text-slate-400">
                    <p className="text-center w-full">
                        Direitos Reservados ©️ {new Date().getFullYear()} | Licito.Guru - CNPJ: 59.743.095/0001-86 | Av. Osvaldo Rodrigues Cabral, 1570, Centro, Florianópolis – SC, CEP 88015-710
                    </p>
                </div>
            </div>
        </footer>
    );
}
