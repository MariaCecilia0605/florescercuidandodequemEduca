import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from "recharts";
import { 
  CheckCircle2, 
  Users, 
  Target, 
  BarChart3, 
  MessageCircle,
  Calendar,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Heart,
  Smile,
  ShieldCheck,
  AlertTriangle,
  Scale,
  FileText,
  X,
  LogIn,
  TrendingUp,
  DollarSign,
  Activity,
  Award,
  Linkedin,
  Mail
} from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white rounded-[24px] shadow-2xl w-full max-w-md relative z-10 overflow-hidden border border-brand-beige"
      >
        <div className="p-5 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-serif text-brand-ink pr-8">{title}</h3>
            <button onClick={onClose} className="p-1.5 hover:bg-brand-beige rounded-full transition-colors">
              <X size={20} className="text-slate-400" />
            </button>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3">
            {children}
          </div>
          <div className="mt-10">
            <Button onClick={onClose} className="w-full">Entendi, obrigado</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden ${className}`}>
    <div className="max-w-6xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", variant = "primary", onClick, href }: { children: React.ReactNode, className?: string, variant?: "primary" | "outline" | "terracotta", onClick?: () => void, href?: string }) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-500 flex items-center justify-center gap-2 text-base relative overflow-hidden group cursor-pointer";
  const variants = {
    primary: "bg-brand-terracotta text-white shadow-[0_10px_20px_-5px_rgba(187,111,87,0.3)]",
    terracotta: "bg-brand-terracotta text-white",
    outline: "border-2 border-brand-terracotta text-brand-terracotta bg-transparent"
  };
  
  const content = (
    <>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a 
        href={href}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center p-5 rounded-2xl text-left transition-all duration-300 ${isOpen ? 'bg-brand-peach/20 shadow-sm' : 'bg-white hover:bg-brand-beige'}`}
      >
        <h3 className="text-base md:text-lg font-serif text-brand-ink">
          {question}
        </h3>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="text-brand-terracotta" /> : <Plus className="text-slate-400" />}
        </div>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="px-6 py-3 text-slate-600 text-base leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Ana Paula Silva",
      role: "Diretora Pedagógica",
      content: "O programa trouxe um respiro necessário para nossa equipe. Hoje vejo professores mais presentes e um clima escolar muito mais leve.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Ricardo Mendes",
      role: "Coordenador de Ensino",
      content: "A abordagem humana e não invasiva fez toda a diferença. Não foi apenas mais uma formação, foi um processo de cura coletiva.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Mariana Costa",
      role: "Professora de Ensino Médio",
      content: "Pela primeira vez me senti vista pela instituição. O suporte emocional me deu forças para continuar minha vocação com alegria.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-6 snap-x no-scrollbar">
      {testimonials.map((t, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className="min-w-[300px] md:min-w-[360px] bg-white p-8 rounded-[32px] shadow-sm border border-brand-beige snap-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-peach" referrerPolicy="no-referrer" />
            <div>
              <h4 className="font-serif text-base text-brand-ink">{t.name}</h4>
              <p className="text-xs text-slate-400">{t.role}</p>
            </div>
          </div>
          <p className="text-base italic text-slate-600 leading-relaxed">“{t.content}”</p>
        </motion.div>
      ))}
    </div>
  );
};

const PartnershipCarousel = () => {
  const partners = [
    "Educação 360", "Escola do Futuro", "Instituto Ser", "Rede Viva", "Mente Aberta", "Cuidado Ativo"
  ];

  return (
    <div className="w-full overflow-hidden bg-brand-beige/30 py-8">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 items-center whitespace-nowrap"
      >
        {[...partners, ...partners].map((p, i) => (
          <span key={i} className="text-xl md:text-2xl font-serif text-slate-400 opacity-50 uppercase tracking-widest">
            {p}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Blob = ({ className = "", color = "bg-brand-peach" }: { className?: string, color?: string }) => (
  <div className={`absolute blur-3xl opacity-20 pointer-events-none ${color} ${className}`} />
);

export default function App() {
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"law" | "risk" | "solution" | null>(null);

  const openModal = (type: "law" | "risk" | "solution") => {
    setActiveModal(type);
    setIsComplianceModalOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-brand-terracotta selection:text-white">
      <Modal 
        isOpen={isComplianceModalOpen} 
        onClose={() => setIsComplianceModalOpen(false)}
        title={
          activeModal === "law" ? "O que diz a Nova NR-1?" :
          activeModal === "risk" ? "Os Riscos da Não Adequação" :
          "Nossa Solução de Compliance"
        }
      >
        {activeModal === "law" && (
          <>
            <p>A NR-1 (Norma Regulamentadora nº 1) é a base da segurança e saúde no trabalho (SST) no Brasil. A partir de <strong>maio de 2026</strong>, ela exigirá obrigatoriamente a gestão de riscos psicossociais no Programa de Gerenciamento de Riscos (PGR).</p>
            <p>Para instituições de ensino, isso significa que é obrigatório identificar, avaliar e controlar fatores de estresse, assédio e exaustão emocional no ambiente escolar.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mapeamento de riscos psicossociais no PGR.</li>
              <li>Prevenção ao Burnout e exaustão docente.</li>
              <li>Protocolos de combate ao assédio e estresse crônico.</li>
            </ul>
          </>
        )}
        {activeModal === "risk" && (
          <>
            <p>Ignorar a nova legislação expõe sua escola a vulnerabilidades significativas:</p>
            <div className="grid gap-4">
              <div className="bg-brand-terracotta/5 p-4 rounded-2xl border border-brand-terracotta/10">
                <h4 className="font-bold text-brand-terracotta mb-1">Passivo Jurídico</h4>
                <p className="text-sm">Risco de multas pesadas e interdições por descumprimento das normas de SST (NR-1).</p>
              </div>
              <div className="bg-brand-terracotta/5 p-4 rounded-2xl border border-brand-terracotta/10">
                <h4 className="font-bold text-brand-terracotta mb-1">Fuga de Talentos</h4>
                <p className="text-sm">Aumento do turnover e afastamentos por Burnout em equipes que não possuem gestão de riscos psicossociais.</p>
              </div>
              <div className="bg-brand-terracotta/5 p-4 rounded-2xl border border-brand-terracotta/10">
                <h4 className="font-bold text-brand-terracotta mb-1">Dano à Reputação</h4>
                <p className="text-sm">Perda de confiança de pais e alunos que buscam instituições com valores humanos e éticos.</p>
              </div>
            </div>
          </>
        )}
        {activeModal === "solution" && (
          <>
            <p>Nossa consultoria transforma a obrigação legal em um diferencial competitivo e humano para sua escola.</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-brand-ink" />
                </div>
                <p><strong>Auditoria de Riscos:</strong> Mapeamos os fatores psicossociais da sua escola para inclusão no PGR.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-brand-ink" />
                </div>
                <p><strong>Gestão de SST:</strong> Adequação completa à Nova NR-1 com foco em saúde mental e bem-estar.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-brand-ink" />
                </div>
                <p><strong>Canais de Escuta:</strong> Implementamos protocolos de escuta ativa validados por especialistas.</p>
              </div>
            </div>
          </>
        )}
      </Modal>

      <Modal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        title="Acesso à Plataforma"
      >
        <div className="space-y-6">
          <p className="text-slate-600">Área exclusiva para instituições parceiras. Acesse seus planejamentos e conteúdos de suporte.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail Institucional</label>
              <input type="email" className="w-full px-4 py-3 rounded-2xl border border-brand-beige focus:ring-2 focus:ring-brand-terracotta outline-none transition-all" placeholder="exemplo@escola.com.br" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
              <input type="password" className="w-full px-4 py-3 rounded-2xl border border-brand-beige focus:ring-2 focus:ring-brand-terracotta outline-none transition-all" placeholder="••••••••" />
            </div>
          </div>
          <Button className="w-full">Entrar na Plataforma</Button>
          <p className="text-center text-sm text-slate-400">Esqueceu sua senha? Entre em contato com seu consultor.</p>
        </div>
      </Modal>

      <Modal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Iniciar Acolhimento"
      >
        <form 
          action="https://hook.us2.make.com/jugqoqtb5fx3q3srtf0mmedmo7wufyce" 
          method="POST"
          className="space-y-3"
        >
          <p className="text-slate-600 text-xs">Preencha os dados abaixo para iniciarmos nossa parceria e agendarmos seu diagnóstico institucional.</p>
          <div className="space-y-2">
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">Nome Completo</label>
              <input 
                required
                name="nome"
                type="text" 
                className="w-full px-3 py-2 rounded-lg border border-brand-beige focus:ring-2 focus:ring-brand-terracotta outline-none transition-all text-sm" 
                placeholder="Seu nome" 
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">E-mail Institucional</label>
              <input 
                required
                name="email"
                type="email" 
                className="w-full px-3 py-2 rounded-lg border border-brand-beige focus:ring-2 focus:ring-brand-terracotta outline-none transition-all text-sm" 
                placeholder="exemplo@escola.com.br" 
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">WhatsApp</label>
              <input 
                required
                name="whatsapp"
                type="tel" 
                className="w-full px-3 py-2 rounded-lg border border-brand-beige focus:ring-2 focus:ring-brand-terracotta outline-none transition-all text-sm" 
                placeholder="(00) 00000-0000" 
              />
            </div>
          </div>
          <Button className="w-full py-2.5 text-sm" onClick={() => {}}>
            Continuar para Diagnóstico
          </Button>
          <p className="text-center text-xs text-slate-400">Ao continuar, você concorda com nossa política de privacidade e termos de acolhimento.</p>
        </form>
      </Modal>

      {/* Navigation (Organic & Floating) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white/90 backdrop-blur-xl px-8 py-4 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 font-serif text-xl text-brand-ink flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-brand-terracotta animate-pulse" />
            Cuidando de Quem Educa
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="hidden lg:flex bg-white/90 backdrop-blur-xl px-3 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 gap-2"
          >
            <a href="#diagnostico" className="px-6 py-3 rounded-full hover:bg-brand-beige transition-all duration-300 text-sm font-medium text-brand-ink hover:scale-105">Diagnóstico</a>
            <a href="#programa" className="px-6 py-3 rounded-full hover:bg-brand-beige transition-all duration-300 text-sm font-medium text-brand-ink hover:scale-105">O Programa</a>
            <a href="#urgencia-legal" className="px-6 py-3 rounded-full hover:bg-brand-beige transition-all duration-300 text-sm font-medium text-brand-ink hover:scale-105">Urgência Legal</a>
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="px-6 py-3 rounded-full bg-brand-terracotta text-white shadow-lg shadow-brand-terracotta/20 transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Adequação
            </button>
            <div className="w-px bg-slate-200 mx-2" />
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="px-6 py-3 rounded-full hover:bg-brand-beige transition-all duration-300 text-sm font-medium text-brand-ink flex items-center gap-2 hover:scale-105"
            >
              <LogIn size={18} className="text-brand-terracotta" />
              Login
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section - Focused on NR-1 Urgency & Vanessa Felipe */}
      <Section id="urgencia-legal" className="pt-40 pb-24 bg-[#FFFBEB] relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-terracotta/20 via-brand-terracotta to-brand-terracotta/20" />
        <Blob className="w-[800px] h-[800px] -top-60 -left-60 organic-shape-1 bg-brand-peach/30" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-brand-terracotta/10 text-brand-terracotta px-5 py-1.5 rounded-full text-xs font-bold border border-brand-terracotta/20 uppercase tracking-widest">
              <ShieldCheck size={16} />
              <span>Urgência Legal</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif leading-tight text-brand-ink uppercase tracking-tight">
                Atualização da NR-1: <span className="italic text-brand-terracotta block">sua empresa está preparada?</span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed font-light max-w-xl">
                Os <strong>riscos psicossociais</strong> agora fazem parte dos riscos ocupacionais — e isso muda completamente o jogo dentro das organizações.
              </p>
              <p className="text-2xl font-serif italic text-brand-ink leading-relaxed">
                Não é mais discurso. É gestão, cultura e resultado.
              </p>
            </div>

            <div className="pt-8 border-t border-brand-terracotta/10 space-y-6">
              <div>
                <h2 className="text-3xl font-serif text-brand-ink mb-2">Vanessa Felipe</h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  Gestora e consultora educacional com mais de <strong>26 anos de experiência</strong> na área escolar, atuando em diferentes funções que perpassam desde a sala de aula até a gestão escolar.
                </p>
              </div>
              <p className="text-lg text-slate-500 leading-relaxed italic max-w-xl">
                Especialista em formação de professores e equipes pedagógicas, com foco em desenvolvimento humano e saúde mental corporativa.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                onClick={() => setIsLeadModalOpen(true)}
                className="px-10 py-5 text-lg shadow-2xl shadow-brand-terracotta/30"
              >
                Quero um Diagnóstico de Conformidade <ArrowRight size={22} />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex flex-col items-center lg:items-end gap-8"
          >
            {/* Fluid & Organic Image Style */}
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-terracotta/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob-slow blur-2xl" />
              <div className="overflow-hidden relative z-10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] max-w-[340px] bg-white shadow-2xl border-4 border-white">
                <img 
                  src="https://i.postimg.cc/NMBR8bPv/Captura-de-tela-2026-04-09-195002.png" 
                  alt="Vanessa Felipe" 
                  className="w-full h-auto block hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Organic Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-peach/30 rounded-full blur-xl animate-bounce-slow" />
            </div>

            {/* Compact Legal Card - Restored to Hero */}
            <div className="bg-white p-6 md:p-8 rounded-[40px] shadow-2xl shadow-brand-terracotta/5 border border-brand-beige relative overflow-hidden w-full max-w-md">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <FileText size={100} className="text-brand-terracotta" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-serif mb-3 text-brand-ink">Segurança Jurídica: <span className="italic text-brand-terracotta">A Resolução Completa</span></h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Contratar nossos serviços elimina a complexidade da implementação, garantindo conformidade total e um ambiente seguro.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    { title: "Protocolos de Escuta Ativa" },
                    { title: "Treinamento Estratégico" },
                    { title: "Ambiente Seguro" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-brand-ink" />
                      </div>
                      <div className="flex items-center">
                        <h4 className="font-bold text-brand-ink text-sm">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => setIsLeadModalOpen(true)}
                  className="w-full bg-brand-ink text-white hover:bg-brand-ink/90 shadow-xl shadow-brand-ink/20 py-3 h-auto"
                >
                  Quero adequar minha instituição agora
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Partnerships Carousel */}
      <PartnershipCarousel />

      {/* Data Impact Section - Interactive Charts */}
      <Section className="bg-brand-beige/30 pt-24 pb-32">
        <Blob className="w-[700px] h-[700px] -bottom-40 -right-40 organic-shape-2 bg-brand-terracotta/10" />
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight uppercase tracking-tighter">
            O impacto da saúde mental <span className="text-brand-terracotta italic normal-case block md:inline">em números reais</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            A negligência com o bem-estar emocional não é apenas um problema humano, é um gargalo econômico e operacional crítico.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20 relative">
          {/* Chart 1: Afastamentos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-[40px] shadow-xl border border-brand-beige flex flex-col h-[450px]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                <Activity className="text-yellow-600" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-600">546 mil</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Afastamentos em 2025</p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: '2022', value: 380 },
                  { name: '2023', value: 440 },
                  { name: '2024', value: 490 },
                  { name: '2025', value: 546 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                  />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {[0, 1, 2, 3].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#eab308' : '#fef08a'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-slate-500 italic text-center">Projeção de crescimento de afastamentos por transtornos mentais.</p>
          </motion.div>

          {/* Chart 2: Custo Anual */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-[40px] shadow-xl border border-brand-beige flex flex-col h-[450px]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <DollarSign className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-600">R$ 468 bi</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Custo Anual no Brasil</p>
              </div>
            </div>
            <div className="flex-1 w-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Custo Saúde Mental', value: 468 },
                        { name: 'Outros Custos', value: 1200 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#dc2626" />
                      <Cell fill="#fee2e2" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-red-600">28%</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">do PIB em perdas</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 italic text-center">Impacto financeiro direto e indireto na economia brasileira.</p>
          </motion.div>

          {/* Chart 3: Burnout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-[40px] shadow-xl border border-brand-beige flex flex-col h-[450px]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">30%</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Trabalhadores com Burnout</p>
              </div>
            </div>
            <div className="flex-1 w-full flex flex-col justify-center gap-4">
              {[
                { label: 'Burnout', value: 30, color: 'bg-green-600' },
                { label: 'Ansiedade', value: 45, color: 'bg-green-400' },
                { label: 'Estresse Crônico', value: 72, color: 'bg-green-200' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="text-brand-ink">{item.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500 italic text-center">Dados alarmantes sobre a saúde emocional no trabalho.</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-2xl md:text-3xl font-serif text-brand-ink leading-relaxed font-light">
            Esses números não são apenas estatísticas. Eles representam pessoas, famílias e o futuro da sua instituição.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={() => setIsLeadModalOpen(true)}
              className="px-10 py-5"
            >
              Quero proteger minha equipe agora
            </Button>
          </div>
        </div>
      </Section>

      {/* Solution Section - Organic & Human */}
      <Section className="bg-white py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight uppercase tracking-tight text-center">
            Existe uma forma mais humana de <span className="italic text-brand-terracotta normal-case block">acolher sua equipe</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light text-center">
            O <strong>Cuidando de Quem Educa</strong> é uma parceria estratégica criada para ajudar escolas a apoiar emocionalmente sua equipe de forma prática e contínua.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              "Sem soluções genéricas.",
              "Sem ações isoladas.",
              "Cada passo é pensado para a sua realidade."
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-peach flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="text-brand-ink" size={32} />
                </div>
                <span className="text-slate-700 font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-brand-beige/10 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-tighter">O que dizem os gestores</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light italic">
            Resultados reais de quem já transformou o ambiente escolar conosco.
          </p>
        </div>
        <TestimonialCarousel />
      </Section>

      {/* Process Section - Cards with rhythm */}
      <Section id="programa" className="bg-brand-green/10 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-tight">
            Um caminho claro para transformar sua escola
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Você não precisa mais improvisar ou apagar incêndios todos os dias.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Diagnóstico dos Riscos Psicossociais (DRPS)", 
              desc: "Aplicação de escalas para avaliação do clima organizacional, estresse ocupacional, assédio e comprometimento.",
              icon: BarChart3,
              color: "bg-white"
            },
            { 
              title: "Plano de ação personalizado", 
              desc: "Nada pronto ou genérico — tudo adaptado à sua realidade.",
              icon: Target,
              color: "bg-brand-beige"
            },
            { 
              title: "Implementação acompanhada", 
              desc: "Formações, mentorias e suporte contínuo.",
              icon: Users,
              color: "bg-white"
            },
            { 
              title: "Entrega de Relatórios e Evidências", 
              desc: "Documentação da implementação para comprovar a adequação à NR-1.",
              icon: FileText,
              color: "bg-brand-beige"
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`${step.color} p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-brand-terracotta/20`}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-terracotta/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <step.icon className="text-brand-terracotta" size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-4 leading-tight">{step.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section - Alternating & Fluid */}
      <Section className="bg-white py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-tighter">Vantagens de implementar a NR-1 AGORA</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Segurança Jurídica",
              desc: "Evita multas e processos trabalhistas garantindo a conformidade legal.",
              icon: ShieldCheck,
              shape: "organic-shape-1",
              color: "bg-brand-beige"
            },
            {
              title: "Cultura e Performance",
              desc: "Melhora o clima organizacional, reduz turnover e aumenta a produtividade dos colaboradores.",
              icon: TrendingUp,
              shape: "organic-shape-2",
              color: "bg-brand-green/20"
            },
            {
              title: "Reputação e Valor",
              desc: "Torna a empresa referência em bem-estar e demonstra responsabilidade social e corporativa.",
              icon: Award,
              shape: "organic-shape-3",
              color: "bg-brand-beige"
            }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              onClick={() => setIsLeadModalOpen(true)}
              className={`p-12 ${benefit.shape} ${benefit.color} text-center flex flex-col items-center justify-center min-h-[400px] hover:scale-105 transition-transform duration-700 cursor-pointer`}
            >
              <benefit.icon className="text-brand-terracotta mb-8" size={48} />
              <h3 className="text-3xl font-serif mb-6 leading-tight">{benefit.title}</h3>
              <p className="text-lg text-slate-700 leading-relaxed font-light">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section - Breathable & Emotional */}
      <Section id="diagnostico" className="pb-32">
        <div className="bg-brand-peach/20 rounded-[60px] p-12 md:p-20 relative overflow-hidden border border-brand-peach/30">
          <Blob className="w-[600px] h-[600px] -top-40 -right-40 bg-brand-terracotta/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight uppercase tracking-tight">
              Comece pelo <span className="italic text-brand-terracotta normal-case block">primeiro passo</span>
            </h2>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-light">
              Em um diagnóstico institucional, você vai entender com clareza o que está afetando sua equipe e como mudar isso com segurança.
            </p>
            <div className="flex flex-col items-center gap-4 mb-12">
              {[
                "Diagnóstico e classificação dos Riscos Psicossociais",
                "Ações contínuas de promoção e prevenção à saúde mental"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-lg font-medium text-brand-ink bg-white/50 px-6 py-2 rounded-full border border-brand-terracotta/10">
                  <Smile className="text-brand-terracotta" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => setIsLeadModalOpen(true)}
                className="px-16 py-7 text-xl shadow-[0_25px_50px_-12px_rgba(187,111,87,0.5)] hover:shadow-[0_35px_70px_-15px_rgba(187,111,87,0.6)] group"
              >
                <Sparkles className="text-white/80 group-hover:text-white transition-colors animate-pulse" size={24} />
                <span>Iniciar Parceria e Diagnóstico</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center uppercase tracking-tight">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            <FAQItem 
              question="Serve para minha realidade?" 
              answer="Sim. O processo é adaptado para cada escola, respeitando seu contexto e desafios únicos." 
            />
            <FAQItem 
              question="É algo pontual ou contínuo?" 
              answer="É um acompanhamento contínuo. Acreditamos que a mudança real acontece no processo, não em eventos isolados." 
            />
            <FAQItem 
              question="Preciso parar a rotina da escola?" 
              answer="Não. As ações são integradas ao dia a dia da equipe, respeitando o ritmo da instituição." 
            />
          </div>
        </div>
      </Section>

      {/* Quem Sou Section - Human-Centric & Professional */}
      <Section id="quem-sou" className="bg-[#FDFBFA] py-16">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Component */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative group lg:pr-8"
          >
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <img 
                src="https://i.postimg.cc/NMBR8bPv/Captura-de-tela-2026-04-09-195002.png" 
                alt="Vanessa felipe - A voz por trás do propósito" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Component */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 text-[#1A1A1A]"
          >
            <div className="space-y-2">
              <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-[10px] block">
                A voz por trás do propósito
              </span>
              <h2 className="text-2xl md:text-3xl font-serif leading-tight">
                Muito prazer, sou <span className="text-[#D4AF37] italic">Vanessa Felipe.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base font-light leading-relaxed text-slate-700">
              <p>
                Minha jornada na educação não começou em escritórios de consultoria, mas no pulsar diário das salas de aula. São <strong>26 anos como pedagoga e gestora pedagógica</strong>, vivendo a escola em todas as suas nuances.
              </p>
              
              <div className="relative py-1">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]/30 rounded-full" />
                <blockquote className="italic text-[#D4AF37] pl-4 text-lg md:text-xl font-serif leading-snug">
                  "Não existe aprendizado de qualidade sem saúde mental."
                </blockquote>
              </div>

              <p>
                Hoje, sou a ponte. Ajudo instituições a superarem o desafio da <strong>Nova NR-1</strong> e a construírem culturas de acolhimento onde gestores, professores e famílias permaneçam inteiros.
              </p>
            </div>

            <p className="text-base font-medium text-[#1A1A1A] pt-2 border-t border-slate-100 italic">
              Cuidar das pessoas não é abrir mão da excelência; é torná-la sustentável.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#F5E6DA] text-[#334155] py-16 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Branding */}
            <div className="space-y-6">
              <div className="text-3xl font-serif font-bold text-brand-ink">Cuidando de Quem Educa</div>
              <p className="text-slate-600 leading-relaxed max-w-xs">
                Transformando escolas através do cuidado com as pessoas e conformidade com a NR-1.
              </p>
            </div>

            {/* Column 2: Consultoria */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-brand-terracotta">Consultoria</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta/40" />
                  Adequação NR-1 (Maio 2026)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta/40" />
                  treinamentos e formações docentes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta/40" />
                  Diagnóstico de Cultura Escolar
                </li>
              </ul>
            </div>

            {/* Column 3: Contato & Social */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-brand-terracotta">Contato & Social</h4>
              <div className="space-y-4">
                <a href="mailto:vanceci.felipe@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-brand-terracotta transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <Mail size={16} />
                  </div>
                  <span>vanceci.felipe@gmail.com</span>
                </a>
                
                <div className="flex gap-4 pt-2">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-brand-terracotta transition-all shadow-sm hover:shadow-md">
                    <Linkedin size={20} />
                  </a>
                </div>

                <div className="flex gap-3 pt-4">
                  <a 
                    href="https://wa.me/5561999258798?text=%22Ol%C3%A1%2C%20Vanessa%20Felipe!%20Gostaria%20de%20agendar%20uma%20conversa%20r%C3%A1pida%20para%20falarmos%20sobre%20Sa%C3%BAde%20Mental%20Corporativa%20na%20minha%20institui%C3%A7%C3%A3o.%20Como%20podemos%20iniciar%20um%20diagn%C3%B3stico%3F%22" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-brand-terracotta transition-all shadow-sm hover:shadow-md"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-brand-terracotta transition-all shadow-sm hover:shadow-md"
                  >
                    <Calendar size={18} /> Agendar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
            <p>© 2026 Cuidando de Quem Educa. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-terracotta transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-brand-terracotta transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5561999258798?text=%22Ol%C3%A1%2C%20Vanessa%20Felipe!%20Gostaria%20de%20agendar%20uma%20conversa%20r%C3%A1pida%20para%20falarmos%20sobre%20Sa%C3%BAde%20Mental%20Corporativa%20na%20minha%20institui%C3%A7%C3%A3o.%20Como%20podemos%20iniciar%20um%20diagn%C3%B3stico%3F%22"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>

    </div>
  );
}
