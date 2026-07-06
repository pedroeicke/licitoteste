import type { Metadata } from "next";
import type { ReactNode } from "react";
import LGPDSectionNav from "@/components/LGPDSectionNav";
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  Landmark,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LGPD | licito.guru",
  description: "Página de proteção de dados pessoais da licito.guru, em atendimento à Lei Geral de Proteção de Dados Pessoais.",
};

const duties = [
  "Receber reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências.",
  "Orientar os colaboradores e os contratados no cumprimento das práticas necessárias à privacidade de dados pessoais.",
  "Quando provocado, entregar o Relatório de Impacto de Proteção aos Dados Pessoais, na forma da lei, com o apoio técnico das áreas jurídica e tecnológica da entidade.",
  "Atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados – ANPD, cumprindo com atribuições que possam vir a ser estabelecidas pela ANPD.",
  "Informar, quando obrigatório, à Autoridade Nacional de Proteção de Dados – ANPD a comunicação ou o uso compartilhado de dados pessoais de pessoas naturais ou jurídicas de direito privado.",
  "Atender às normas complementares da Autoridade Nacional de Proteção de Dados – ANPD.",
  "Informar à Autoridade Nacional de Proteção de Dados – ANPD e aos titulares dos dados pessoais eventuais incidentes de privacidade de dados pessoais, dentro da execução de um plano de respostas a incidentes.",
  "Elaborar e acompanhar a execução do Plano de Adequação à Lei Geral de Proteção de Dados.",
  "Realizar e manter atualizado o mapeamento, inventário e análise de riscos do tratamento dos dados pessoais.",
  "Aprovar, prover condições e promover ações para efetividade do Plano de Adequação de Proteção de Dados – ANPD.",
  "Elaborar o Relatório de Impacto de Proteção aos Dados Pessoais, com o apoio técnico da área de tecnologia da empresa, quando necessário.",
  "Fornecer aos operadores termos de uso, manuais de instruções e treinamento.",
  "Monitorar e supervisionar o cumprimento da Lei Federal nº 13.709/2018 na empresa.",
  "Sugerir políticas, fluxos, providências e propostas de regulamentação a serem adotadas com vistas à implantação das diretrizes previstas na Lei Federal nº 13.709/2018.",
  "Auxiliar, conscientizar e divulgar a Lei Federal nº 13.709/2018 junto aos colaboradores, visando estimular a mudança de cultura necessária para adequação à norma.",
  "Aprovar a comunicação de incidentes à Autoridade Nacional de Proteção de Dados Pessoais e aos titulares dos dados pessoais pelo encarregado.",
  "Constituir Comitê de proteção de dados especial, quando necessário.",
];

const dutyLabels = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
];

const rights = [
  "Confirme se seus dados pessoais estão sendo processados e acessar as informações sobre o tratamento desses dados.",
  "Realize a correção de dados pessoais incompletos, inexatos ou desatualizados.",
  "Anonimize, bloqueie ou elimine os dados pessoais desnecessários, excessivos ou tratados em desconformidade com a Lei Federal nº 13.709/2018.",
  "Receba seus dados pessoais em formato estruturado, interoperável e de uso comum, facilitando a portabilidade para outro fornecedor de serviço.",
  "Elimine os dados pessoais tratados com base no seu consentimento, exceto em situações em que a legislação exige a retenção desses dados.",
  "Fornaça acesso à informação sobre com quem os dados pessoais foram compartilhados e sua base legal.",
  "Realize a revisão de decisões tomadas unicamente com base em processamento automatizado de dados pessoais que afetem seus interesses.",
];

const rightLabels = ["I", "II", "III", "IV", "V", "VI", "VIII"];

const sections = [
  { href: "#visao-geral", label: "Visão geral" },
  { href: "#encarregado", label: "Encarregado de Dados" },
  { href: "#direitos", label: "Direitos do Titular" },
  { href: "#legislacao", label: "Legislação e Documentos" },
  { href: "#implementacao", label: "Implementação" },
];

const LAST_UPDATED = "26 de junho de 2026";

const legislation = [
  {
    label: "LGPD – Lei nº 13.709/2018",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
  },
  {
    label: "Normas e orientações emitidas pela Autoridade Nacional de Proteção de Dados – ANPD",
    href: "https://www.gov.br/anpd/pt-br",
  },
];

const documents = [
  {
    label: "Termos de Uso",
    description: "Condições gerais de acesso, navegação e uso da plataforma.",
    href: "/documentos/termos-de-uso.pdf",
  },
  {
    label: "Política de Privacidade",
    description: "Como tratamos, protegemos e compartilhamos seus dados pessoais.",
    href: "/documentos/politica-de-privacidade.pdf",
  },
  {
    label: "Política de Cookies",
    description: "Uso de cookies e tecnologias semelhantes no site e na plataforma.",
    href: "/documentos/politica-de-cookies.pdf",
  },
];

export default function LGPDPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary" />
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white text-dark-blue font-bold tracking-wider uppercase text-xs mb-5 px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-primary-cyan" />
                LGPD 13.709/2018
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark-blue leading-tight mb-6">
                Proteção de Dados <span className="text-gradient block sm:inline">Pessoais</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                A licito.guru, em atendimento ao que determina a Lei Federal nº 13.709, de 14 de agosto de 2018,
                a Lei Geral de Proteção de Dados Pessoais (LGPD), apresenta sua página de Proteção de Dados Pessoais.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 shadow-sm">
                <CalendarClock className="h-4 w-4 text-primary-cyan" />
                Última atualização: {LAST_UPDATED}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary-cyan/10 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary-cyan" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Marco legal</p>
                  <p className="text-2xl font-bold text-dark-blue">2018</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                A LGPD protege os direitos fundamentais de liberdade e privacidade e orienta o tratamento adequado de dados pessoais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LGPDSectionNav sections={sections} />
          </aside>

          <div className="space-y-8">
            <ContentSection id="visao-geral" icon={FileText} title="Lei Geral de Proteção de Dados Pessoais (LGPD) 13.709/2018">
              <p>
                A Lei Geral de Proteção de Dados – LGPD dispõe sobre o tratamento de dados pessoais, por pessoa natural
                ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais
                de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural. Dados pessoais
                são as informações relacionadas a pessoa natural identificada ou identificável.
              </p>
              <p>
                Antes de iniciar qualquer tipo de tratamento de dados pessoais, isto é, qualquer atividade que utiliza um
                dado pessoal, o agente de tratamento deve se certificar que a finalidade da operação está registrada de
                forma clara e explícita, e que os propósitos especificados e informados ao titular dos dados. A principal
                finalidade do tratamento pela licito.guru está relacionada à execução de contrato e legítimo interesse do
                controlador, devidamente previstas em lei, regulamentos ou respaldadas em contratos.
              </p>
              <p>
                A LGPD tem como objetivo garantir o tratamento adequado de dados pessoais, primando pela segurança e
                proteção de dados, a proteção aos direitos fundamentais de liberdade e de privacidade e o livre
                desenvolvimento da personalidade da pessoa natural.
              </p>
              <p>
                O compartilhamento de dados pessoais dentro da finalidade da licito.guru, está previsto na lei e dispensa
                o consentimento específico.
              </p>
              <p>
                Essas e outras questões fundamentais devem ser observadas pelos órgãos e entidades da administração
                pública, no sentido de assegurar a conformidade do tratamento de dados pessoais de acordo com as hipóteses
                legais e princípios da LGPD. Nesse sentido, foi elaborada a política de privacidade e de proteção de dados
                pessoais e política de cookies, e está em fase de elaboração a política de resposta à incidente de dados e
                Cartilha de Proteção de Dados Pessoais.
              </p>
            </ContentSection>

            <ContentSection id="encarregado" icon={UserCheck} title="Encarregado de Dados">
              <p>
                A gestão da matéria de proteção de dados pessoais pela licito.guru é desenvolvida pelo Encarregado de
                Dados, cujas funções são:
              </p>
              <NumberedList items={duties} labels={dutyLabels} />
              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-5">
                <p className="font-bold text-dark-blue mb-3">Canal de atendimento do DPO</p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Caso não tenha encontrado as informações que buscava ou deseje esclarecer dúvidas sobre o tratamento dos
                  dados pessoais pela licito.guru, entre em contato com o Ivanice Tressoldi por meio do endereço de e-mail
                  dpo@licitoguru.com e telefone 049 991050445.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:dpo@licitoguru.com"
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 hover:text-primary-cyan hover:border-primary-cyan transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    dpo@licitoguru.com
                  </a>
                  <a
                    href="tel:5549991050445"
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 hover:text-primary-cyan hover:border-primary-cyan transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (49) 99105-0445
                  </a>
                </div>
              </div>
            </ContentSection>

            <ContentSection id="direitos" icon={CheckCircle2} title="Direitos do Titular">
              <p>
                A LGPD assegura a toda pessoa natural a titularidade de seus dados pessoais, garantidos os direitos
                fundamentais de liberdade, de intimidade e de privacidade. Para que o titular possa executar os seus direitos, poderá
                solicitar que a licito.guru:
              </p>
              <NumberedList items={rights} labels={rightLabels} />
              <p>
                Os direitos do titular podem ser exercidos através de solicitação ao DPO, nos contatos acima.
              </p>
              <p>
                Quando do exercício dos direitos pelo titular, poderão ser solicitados documento e informações para
                confirmação de sua identidade.
              </p>
            </ContentSection>

            <ContentSection id="legislacao" icon={Landmark} title="Legislação e Documentos">
              <p>Mais informações podem ser obtidas na legislação aplicável:</p>
              <div className="grid grid-cols-1 gap-3">
                {legislation.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-primary-cyan/50 hover:bg-white hover:shadow-md hover:shadow-cyan-900/5"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-primary-cyan ring-1 ring-slate-200 transition-colors duration-300 group-hover:ring-primary-cyan/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="flex-1 text-sm sm:text-base font-bold leading-snug text-dark-blue">{item.label}</p>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors duration-300 group-hover:text-primary-cyan" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="text-base font-bold text-dark-blue">Documentos da licito.guru</p>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                  Documentos oficiais sobre o uso da plataforma e o tratamento de dados pessoais. Todos abrem em uma
                  nova aba, em formato PDF.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {documents.map((doc) => (
                  <a
                    key={doc.href}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-primary-cyan/50 hover:bg-white hover:shadow-md hover:shadow-cyan-900/5"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary-cyan ring-1 ring-slate-200 transition-colors duration-300 group-hover:ring-primary-cyan/30">
                        <FileText className="h-5 w-5" />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base font-bold leading-snug text-dark-blue">{doc.label}</p>
                        <p className="mt-0.5 text-xs sm:text-sm text-slate-500 leading-snug">{doc.description}</p>
                      </div>
                      <Download className="h-4 w-4 shrink-0 text-slate-300 transition-colors duration-300 group-hover:text-primary-cyan" />
                    </div>
                  </a>
                ))}
              </div>
            </ContentSection>

            <ContentSection id="implementacao" icon={ClipboardCheck} title="Implementação da LGPD na licito.guru">
              <p>
                A licito.guru atua continuamente para adequar as suas atividades à LGPD e as orientações da Autoridade
                Nacional de Proteção de Dados – ANPD, estando atento os dados pessoais coletados, bem como os fluxos de
                tratamento dos mesmos.
              </p>
              <p>
                Atualmente, a Encarregada de Dados está trabalhando na realização do inventário de dados pessoais,
                identificação de potenciais riscos nos processos de tratamento dos dados, bem como, na elaboração do Plano
                de Adequação à LGPD da empresa.
              </p>
            </ContentSection>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContentSection({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 bg-white border border-slate-200 rounded-lg shadow-sm p-5 sm:p-6 md:p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-11 h-11 rounded-lg bg-primary-cyan/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-primary-cyan" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-primary-cyan mb-1">LGPD</p>
          <h2 className="text-xl sm:text-2xl font-bold text-dark-blue leading-tight break-words">{title}</h2>
        </div>
      </div>
      <div className="space-y-5 text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}

function NumberedList({ items, labels }: { items: string[]; labels?: string[] }) {
  return (
    <ol className="grid grid-cols-1 gap-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 rounded-lg bg-slate-50 border border-slate-100 p-4">
          <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-gradient-primary px-2 text-xs font-bold text-dark-blue">
            {labels?.[index] ?? index + 1}
          </span>
          <span className="text-sm sm:text-base text-slate-600 leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
}
