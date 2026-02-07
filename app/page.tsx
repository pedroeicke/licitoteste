"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getLogos } from "@/app/actions";
import Button from "@/components/ui/Button";
import MockupWindow from "@/components/ui/MockupWindow";
import ChatInterface from "@/components/ui/ChatInterface";

import TrainingMockup from "@/components/ui/TrainingMockup";
import ClientsCarousel from "@/components/ui/ClientsCarousel";
import DecorativeDots from "@/components/ui/DecorativeDots";
import {
  Copy, Database, Settings, ShieldCheck, ChevronDown, ChevronRight,
  CheckCircle, FileText, Cpu, PenTool,
  GitBranch, Layers,
  BookOpen, GraduationCap, Scale,
  Plus, Minus,
  Mail, MapPin, Phone, MessageCircle
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    getLogos().then(setLogos);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const customVideoRef = useRef<HTMLVideoElement>(null);
  const consultingVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
    if (customVideoRef.current) {
      customVideoRef.current.playbackRate = 2.0; // Acelerar video 2x
    }
    // Consulting video speed reset to 1x (default)
  }, []);

  return (
    <div className="overflow-hidden">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 px-6 bg-slate-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-primary-cyan/10 to-blue-100/20 rounded-full blur-[80px]"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-[80px]"></div>
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-full blur-[80px]"></div>
        </div>



        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Decorative Dots Hero */}
          <div className="absolute top-0 -left-24 opacity-60 hidden xl:block">
            <DecorativeDots width={4} height={6} color="cyan" />
          </div>
          <div
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
              Parece mágica. <br /> <span className="text-gradient">É tecnologia.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary-cyan leading-relaxed">
              Ganhe tempo e qualidade nas licitações e contratos.
            </h2>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed pt-2">
              Obtenha respostas precisas e documentos técnicos com agilidade incomparável.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="https://api.whatsapp.com/send/?phone=554198002461&text=Quero+agendar+uma+Demonstra%C3%A7%C3%A3o!&type=phone_number&app_absent=0" target="_blank">Agende uma Demonstração</Button>
              <Button href="#gerador" variant="outline">Ver Módulos</Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-1000"
          >
            {/* Realistic App Mockup */}
            <div className="relative transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-cyan/30 to-primary-green/30 rounded-[30px] blur-2xl -z-10 translate-y-4"></div>

              <MockupWindow className="shadow-2xl shadow-cyan-900/10 h-auto aspect-[4/3] md:h-[500px]">
                <div className="relative w-full h-full bg-slate-900 overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/placeholder-video-poster.jpg" // Optional: You can remove or update this
                  >
                    <source src="/herovideo.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  {/* Overlay to ensure text readability if needed, or just let the video shine */}

                </div>
              </MockupWindow>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-6 top-0 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/30">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Base Jurídica</div>
                  <div className="text-xs text-primary-cyan font-semibold">Atualizada 2025</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-300">
          <ChevronDown />
        </div>
      </section>

      {/* =========================================
          MODULES OVERVIEW
      ========================================= */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossa Tecnologia</h2>
            <p className="text-slate-500 max-w-4xl mx-auto">
              Módulos desenvolvidos para gerar segurança jurídica e agilidade nos processos licitatorios
            </p>
          </div>

          {/* Decorative Dots Modules */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-40 hidden xl:block">
            <DecorativeDots width={3} height={8} color="green" />
          </div>
          <div className="absolute -right-16 top-20 opacity-30 hidden xl:block">
            <DecorativeDots width={6} height={3} color="cyan" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Module 1 */}
            <div className="group glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 neon-hover">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Copy className="text-primary-cyan w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gerador de Documentos</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Respondendo poucas perguntas, você gera documentos técnicos com agilidade.
              </p>
              <Link href="#gerador" className="text-primary-cyan font-semibold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Saiba mais <ChevronRight size={14} />
              </Link>
            </div>

            {/* Module 2 */}
            <div className="group glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 neon-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="bg-primary-cyan/20 text-primary-cyan text-[10px] font-bold px-2 py-1 rounded-full uppercase border border-primary-cyan/20">Destaque</span>
              </div>
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="text-primary-green w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">IA Customizável</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A licito.guru IA pode ser customizada para seu órgão, com seus documentos técnicos e normas internas, tudo isso customizado com a identidade do seu órgão.
              </p>
              <Link href="#ia-personalizada" className="text-primary-cyan font-semibold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Saiba mais <ChevronRight size={14} />
              </Link>
            </div>

            {/* Module 3 */}
            <div className="group glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 neon-hover">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-indigo-500 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Módulo Consultoria</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Tire dúvidas jurídicas ou operacionais sobre licitações e contratos e obtenha respostas claras e justificadas quando quiser.
              </p>
              <Link href="#modulo-consultoria" className="text-primary-cyan font-semibold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Saiba mais <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
           GERADOR SECTION
      ========================================= */}
      <section id="gerador" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-gradient-primary text-slate-900 font-bold tracking-wider uppercase text-xs mb-4 inline-block px-3 py-1 rounded-full">Módulo gerador de documentos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Semanas de trabalho <br />
                <span className="text-gradient">em poucos minutos.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Basta responder algumas perguntas e a nossa IA faz todo o trabalho, entregando documentos completos, consistentes e alinhados à legislação vigente.
                <br /><br />
                Mais agilidade, menos burocracia e total conformidade com a lei.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 md:auto-cols-max gap-x-0 gap-y-4 mb-8 -ml-2">
                {[
                  "Estudo Técnico Preliminar - ETP",
                  "Documento de Formalização de Demanda (DFD)",
                  "Termo de Referência - TR",
                  "Documento do Edital",
                  "Ata",
                  "Mapa de Riscos",
                  "Contrato"
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-primary-cyan shrink-0" />
                    <span className={doc.includes("(DFD)") ? "whitespace-nowrap text-[13px] md:text-sm" : ""}>{doc}</span>
                  </div>
                ))}
              </div>
              <Button href="https://api.whatsapp.com/send/?phone=554198002461&text=Quero+agendar+uma+Demonstra%C3%A7%C3%A3o!&type=phone_number&app_absent=0" target="_blank">Solicitar Demonstração</Button>
            </div>

            {/* Right side Graphics */}
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-[2rem] opacity-30 blur-xl"></div>
              <MockupWindow className="relative z-10 shadow-2xl border-slate-200/60">
                <div className="relative w-full aspect-[1920/950] bg-slate-900 overflow-hidden">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover object-bottom scale-[1.01]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/videos2.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </MockupWindow>

              {/* Badge */}
              <div className="absolute -left-6 bottom-10 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow z-20">
                <div className="bg-primary-cyan/10 p-2 rounded-lg">
                  <CheckCircle className="text-primary-cyan w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Lei 14.133</div>
                  <div className="text-[10px] text-slate-500">Compliance Automático</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          IA PERSONALIZADA SECTION
      ========================================= */}
      <section id="ia-personalizada" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-green-200 to-emerald-100 rounded-[2rem] opacity-30 blur-xl"></div>
            <MockupWindow className="relative z-10 shadow-2xl border-slate-200/60 h-[300px] md:h-auto">
              <div className="relative w-full h-full md:aspect-[1920/950] bg-slate-900 overflow-hidden">
                <video
                  ref={customVideoRef}
                  className="w-full h-full object-cover object-bottom scale-[1.01]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videocustom.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </MockupWindow>
          </div>

          <div className="order-1 md:order-2">
            <span className="bg-gradient-primary text-slate-900 font-bold tracking-wider uppercase text-xs mb-4 inline-block px-3 py-1 rounded-full">Customização</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Sua IA, Suas Regras. <br />
              <span className="text-gradient">Totalmente Customizável.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              A licito.guru IA pode ser customizada para o seu órgão, com os seus editais, contratos, documentos técnicos, pareceres jurídicos e normas internas, tudo isso customizado com a identidade do seu órgão.
            </p>
            <Button href="https://api.whatsapp.com/send/?phone=554198002461&text=Tenho+interesse+em+uma+IA+Exclusiva+para+meu+%C3%B3rg%C3%A3o!&type=phone_number&app_absent=0" target="_blank">Peça sua IA Exclusiva</Button>
          </div>
        </div>
      </section>

      {/* =========================================
           MODULO CONSULTORIA SECTION
      ========================================= */}
      <section id="modulo-consultoria" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-gradient-primary text-slate-900 font-bold tracking-wider uppercase text-xs mb-4 inline-block px-3 py-1 rounded-full">Módulo Consultoria</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tire suas dúvidas <br />
              <span className="text-gradient">na hora.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              O servidor pode tirar dúvidas jurídicas ou operacionais sobre licitações e contratos e obter respostas claras e justificadas quando quiser.
            </p>
            <Button href="https://api.whatsapp.com/send/?phone=554198002461&text=Gostaria+de+conhecer+o+m%C3%B3dulo+de+Consultoria!&type=phone_number&app_absent=0" target="_blank">Conhecer Consultoria</Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-l from-cyan-200 to-blue-200 rounded-[2rem] opacity-30 blur-xl"></div>
            <MockupWindow className="relative z-10 shadow-2xl border-slate-200/60 h-auto">
              <div className="relative w-full bg-slate-900 overflow-hidden">
                <video
                  ref={consultingVideoRef}
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/herovideo.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </MockupWindow>
          </div>
        </div>
      </section>

      {/* =========================================
          BANCO EXCLUSIVO SECTION
      ========================================= */}
      <section id="banco-exclusivo" className="pt-24 pb-0 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Text Content */}
            <div className="space-y-8 pb-0 md:pb-24">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary-cyan/30 bg-primary-cyan/10 text-primary-cyan text-xs font-bold uppercase tracking-wider">
                Curadoria Especializada
              </div>

              <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
                IA especializada com <br />
                <span className="text-primary-cyan">Banco de Dados Exclusivo</span>
              </h2>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  Reúne a jurisprudência do Tribunal de Contas da União, a regulamentação federal e as obras do
                  <strong className="text-white"> Professor Joel de Menezes Niebuhr</strong>, maior referência nacional em licitações e contratos.
                </p>
                <p>
                  A licito.guru IA foi treinada diretamente pelo <strong className="text-white">Professor Gustavo Schiefler</strong> e sua equipe.
                  Por trás da tecnologia está a experiência e o filtro de um time altamente especializado.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <BookOpen className="text-primary-cyan mb-2" />
                  <span className="text-white font-bold text-sm">Obras Doutrinárias</span>
                  <span className="text-slate-400 text-xs text-xs">Conteúdo integral dos livros</span>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Scale className="text-primary-green mb-2" />
                  <span className="text-white font-bold text-sm">Jurisprudência TCU</span>
                  <span className="text-slate-400 text-xs">Decisões selecionadas</span>
                </div>
              </div>
            </div>

            {/* Founders Image */}
            <div className="relative flex justify-center items-end h-full">
              {/* Glow behind image */}
              <div className="absolute w-[90%] h-[90%] bg-primary-cyan/20 blur-[120px] rounded-full -z-10 top-10"></div>

              <img
                src="/JOEL E GUSTAVO.png"
                alt="Professores Joel de Menezes Niebuhr e Gustavo Schiefler"
                className="w-full max-w-2xl relative z-10 block -mb-8 md:-mb-10 lg:-mb-14 hover:scale-[1.02] transition-transform duration-500 origin-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CLIENTS SECTION
      ========================================= */}
      <section id="clientes" className="pt-4 pb-16 md:py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 mb-8 text-center">

          <h2 className="text-4xl font-bold text-slate-900">Quem confia na gente</h2>
        </div>
        <ClientsCarousel logos={logos} />
      </section>



      {/* =========================================
          CONTACT SECTION
      ========================================= */}


      {/* =========================================
           CONTACT SECTION
       ========================================= */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Vamos conversar?
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Agende uma demonstração gratuita e descubra como a IA <br /> pode revolucionar o setor de compras do seu órgão.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone className="text-primary-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Contato</h4>
                    <a href="tel:554832047194" className="text-lg font-bold text-primary-cyan hover:underline block">
                      (48) 3204-7194
                    </a>
                    <a href="https://wa.me/554198002461" target="_blank" className="text-sm text-slate-500 hover:text-slate-700 hover:underline flex items-center gap-1 mt-1">
                      Fale com a gente no WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail className="text-primary-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">E-mail</h4>
                    <p className="text-slate-500 mb-2">Fale com nossa equipe</p>
                    <a href="mailto:contato@licito.guru" className="text-lg font-bold text-primary-cyan hover:underline">
                      contato@licito.guru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                    <MapPin className="text-primary-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Escritório</h4>
                    <p className="text-slate-500">
                      Av. Osvaldo Rodrigues Cabral, 1570, Centro<br />
                      Florianópolis – SC, CEP 88015-710
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-6 md:p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-green/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

              <h3 className="text-2xl font-bold mb-6 text-slate-800 relative z-10">Agende sua Demonstração</h3>
              <form className="space-y-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Seu nome" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="org" className="block text-sm font-semibold text-slate-700 mb-2">Órgão / Empresa</label>
                    <input type="text" id="org" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Ex: Prefeitura de..." />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2">Cargo</label>
                    <input type="text" id="role" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Ex: Pregoeiro" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">E-mail Corporativo</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="seu@email.com.br" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="(41) 9XXXX-XXXX" />
                </div>
                <div>
                  <label htmlFor="msg" className="block text-sm font-semibold text-slate-700 mb-2">Mensagem (Opcional)</label>
                  <textarea id="msg" rows={3} className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Conte suas necessidades em licitações..."></textarea>
                </div>

                <button type="button" className="w-full bg-gradient-primary text-slate-900 font-bold py-4 rounded-full shadow-lg hover:shadow-cyan-400/30 transition-all hover:scale-[1.02] transform">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>


      </section>

      {/* =========================================
          FAQ SECTION
      ========================================= */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Perguntas Frequentes</h2>
          <p className="text-center text-slate-600 mb-12">Tire suas dúvidas sobre a plataforma líder em IA para licitações.</p>

          <div className="space-y-4">
            {[
              { q: "Posso personalizar a IA?", a: "Sim. A IA pode ser personalizada para atender às necessidades específicas do seu órgão, integrando sistemas e customizando respostas." },
              { q: "Quais documentos são gerados?", a: "ETP, DFD, Termo de Referência, Mapa de Risco, Ata, Edital e Contrato." },
              { q: "Como faço para começar?", a: "Agende uma demonstração e receba instruções para contratação, configuração e treinamento inicial." },
              { q: "A IA está atualizada com a legislação vigente?", a: "Sim, a IA é constantemente treinada para refletir mudanças legislativas, garantindo segurança jurídica." },
              { q: "Quantos usuários podem acessar a plataforma?", a: "Nos planos disponiveis, o número de usuários é ilimitado, permitindo que toda a equipe utilize a ferramenta sem restrições." },
              { q: "Como é feito o suporte técnico?", a: "Oferecemos suporte técnico especializado, disponível para sanar dúvidas ou resolver problemas, garantindo uma experiência de uso tranquila e eficiente." }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>


      {/* =========================================
           PURPOSE SECTION
       ========================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-6">
              O propósito da licito.guru é vencer a <span className="text-gradient">insegurança jurídica</span> e a <span className="text-gradient">burocracia</span> nas licitações e nos contratos.
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-10">
              Vem fazer parte desse movimento!
            </h3>
            <Button href="https://api.whatsapp.com/send/?phone=554198002461&text=Quero+agendar+uma+Demonstra%C3%A7%C3%A3o!&type=phone_number&app_absent=0" target="_blank">Agende uma Demonstração Agora</Button>
          </div>
        </div>
      </section>

    </div >
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-slate-800 text-lg">{question}</span>
        {isOpen ? <Minus className="text-primary-cyan shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
          {answer}
        </div>
      </div>
    </div>
  );
}
