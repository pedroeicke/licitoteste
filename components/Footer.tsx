import Link from "next/link";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
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
                                <Phone className="w-5 h-5 text-primary-cyan shrink-0" />
                                <a href="tel:554832047194" className="hover:text-primary-cyan">(48) 3204-7194</a>
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
