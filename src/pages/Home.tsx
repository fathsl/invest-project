import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Brain,
  Building2,
  Check,
  ChevronDown,
  FileText,
  Globe,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Search,
  Target,
  Truck,
  Users,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

const IMAGES = {
  hero: img("1486406146926-c627a92ad1ab", 2400),
  export: img("1578575437130-527eed3abbec"),
  investment: img("1454165804606-c3d57bc86b40"),
  digital: img("1551288049-bebda4e38f71"),
  events: img("1540575467063-178a50c2df87"),
  about: img("1522071820081-009f0129c71c", 1400),
};

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 ${
        dark ? "text-cyan-300" : "text-sky-700"
      }`}
    >
      <span className={`h-px w-8 ${dark ? "bg-cyan-300" : "bg-sky-700"}`} />
      {children}
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState(0);

  const sectionOrder = ["home", "services", "process", "about", "contact"] as const;

  const scrollToSection = (index: number) => {
    const el = document.getElementById(sectionOrder[index]);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const services = [
    {
      icon: Search,
      title: t("export-promotion"),
      subtitle: t("international-market-access-solutions"),
      description: t("international-market-access-solutions desc"),
      features: [
        t("international-market-entry-strategy"),
        t("export-documentation-and-compliance"),
        t("trade-partnership-development"),
        t("market-research-and-analysis"),
      ],
      image: IMAGES.export,
    },
    {
      icon: Handshake,
      title: t("foreign-investment-attraction"),
      subtitle: t("capital-and-investment-facilitation"),
      description: t("capital-and-investment-facilitation des"),
      features: [
        t("investment-opportunity-sourcing"),
        t("due-diligence-support"),
        t("investor-relations-management"),
        t("investment-climate-advisory"),
      ],
      image: IMAGES.investment,
    },
    {
      icon: Award,
      title: t("digital-business-solutions"),
      subtitle: t("technology-driven-innovation"),
      description: t("technology-driven-innovation desc"),
      features: [
        t("ai-integrated-b2b-platforms"),
        t("digital-transformation-consulting"),
        t("virtual-business-portals"),
        t("technology-implementation"),
      ],
      image: IMAGES.digital,
    },
    {
      icon: Truck,
      title: t("event-and-consulting-services"),
      subtitle: t("strategic-business-development"),
      description: t("strategic-business-development desc"),
      features: [
        t("business-event-management"),
        t("strategic-consulting-services"),
        t("professional-training-programs"),
        t("partnership-facilitation"),
      ],
      image: IMAGES.events,
    },
  ];

  const workingModels = [
    {
      icon: FileText,
      title: t("project-based"),
      description: t("project-based-desc"),
      price: t("custom-quote"),
      features: [
        t("market-entry-projects"),
        t("investment-facilitation"),
        t("export-strategy-development"),
        t("digital-platform-integration"),
      ],
      ideal: t(
        "ideal-for-companies-seeking-specific-market-entry-or-investment-opportunities",
      ),
    },
    {
      icon: Brain,
      title: t("partnership-retainer-popular"),
      description: t("partnership-retainer-popular desc"),
      price: t("contact-for-custom-package"),
      features: [
        t("continuous-strategic-guidance"),
        t("priority-investment-opportunities"),
        t("regular-business-matching"),
        t("ongoing-digital-support"),
      ],
      ideal: t(
        "ideal-for-growing-businesses-and-active-exporters-seeking-sustained-growth",
      ),
      popular: true,
    },
    {
      icon: Globe,
      title: t("comprehensive-solutions"),
      description: t("full-service-package-desc"),
      price: t("custom-package"),
      features: [
        t("complete-business-development"),
        t("end-to-end-digital-solutions"),
        t("event-participation-access"),
        t("dedicated-account-management"),
      ],
      ideal: t(
        "ideal-for-businesses-committed-to-comprehensive-international-expansion",
      ),
    },
  ];

  const whyChoose = [
    {
      icon: Building2,
      title: t("foreign-investment-expertise"),
      description: t("foreign-investment-expertise-desc"),
    },
    {
      icon: Globe,
      title: t("digital-innovation-leaders"),
      description: t("Digital Innovation Leaders desc"),
    },
    {
      icon: Target,
      title: t("strategic-event-management"),
      description: t("strategic-event-management-desc"),
    },
    {
      icon: Users,
      title: t("comprehensive-business-support"),
      description: t("Comprehensive Business Support desc"),
    },
  ];

  const coreValues = [
    {
      title: t("innovation"),
      desc: t("leveraging-technology-for-competitive-advantage"),
    },
    {
      title: t("partnership"),
      desc: t("building-sustainable-business-relationships"),
    },
    {
      title: t("excellence"),
      desc: t("delivering-high-quality-results-consistently"),
    },
    {
      title: t("growth"),
      desc: t("driving-economic-diversification-and-development"),
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.4;
      let active = 0;
      sectionOrder.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) active = i;
      });
      setCurrentSection(active);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputClass =
    "w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400";

  return (
    <div className="w-full bg-white text-slate-900 antialiased">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden bg-slate-950 scroll-mt-16"
      >
        <img
          src={IMAGES.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[kenburns_24s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="absolute -top-40 -left-40 w-150 h-150 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl animate-fadeInUp">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-medium text-cyan-200 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              {t("your-gateway-to-global-markets")}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8 wrap-break-word">
              {t("your-gateway-to-investment")}
              <span className="block mt-2 bg-linear-to-r from-sky-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                {t("export-and-global-partnerships")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              {t("export global partnership desc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-cyan-200 transition-colors shadow-xl shadow-sky-950/40"
              >
                {t("start-your-journey")}
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-md text-white px-8 py-4 font-semibold hover:bg-white/15 transition-colors"
              >
                {t("explore-services")}
              </a>
            </div>
          </div>
        </div>

        <a
          href="#services"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex h-12 w-8 items-start justify-center rounded-full border border-white/30 pt-2"
        >
          <span className="h-2 w-1 rounded-full bg-white animate-bounce" />
        </a>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
                {t("why-choose-ab-invest")}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {t("your-trusted-partner-for-international-business-expansion")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/80 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-slate-950 hover:border-slate-950 hover:shadow-2xl hover:shadow-sky-900/20">
                    <span className="absolute top-6 right-7 text-5xl font-bold text-slate-200 group-hover:text-white/10 transition-colors">
                      0{idx + 1}
                    </span>
                    <div className="relative w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-8 transition-colors group-hover:bg-cyan-400 group-hover:border-cyan-400">
                      <Icon
                        className="text-sky-700 group-hover:text-slate-950 transition-colors"
                        size={26}
                      />
                    </div>
                    <h3 className="relative text-xl font-bold text-slate-950 group-hover:text-white mb-3 transition-colors">
                      {item.title}
                    </h3>
                    <p className="relative text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-16 sm:py-20 lg:py-32 bg-slate-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mb-10 sm:mb-16">
            <Eyebrow>{t("our-services")}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-5">
              {t("comprehensive-export-solutions")}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {t("end-to-end-consultancy-services")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Reveal key={idx} delay={(idx % 2) * 120}>
                  <article className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                      <div className="absolute top-5 left-5 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                          <Icon className="text-sky-800" size={24} />
                        </div>
                      </div>
                      <div className="absolute top-5 right-5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white">
                        {t("service")} {idx + 1} {t("of")} {services.length}
                      </div>
                      <div className="absolute bottom-5 left-6 right-6">
                        <div className="text-sm font-medium text-cyan-200 mb-1">
                          {service.subtitle}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-7 md:p-9">
                      <p className="text-slate-600 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.18em] mb-4">
                        {t("key-capabilities")}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-9">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                              <Check className="text-sky-700" size={12} strokeWidth={3} />
                            </span>
                            <span className="text-slate-700 text-sm font-medium leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#contact"
                        className="mt-auto group/btn inline-flex items-center gap-2 self-start rounded-full bg-slate-950 text-white pl-6 pr-2 py-2 font-semibold hover:bg-sky-800 transition-colors"
                      >
                        {t("home.hero.cta_secondary")}
                        <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover/btn:rotate-45">
                          <ArrowUpRight size={18} />
                        </span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKING MODELS */}
      <section
        id="process"
        className="scroll-mt-16 relative py-16 sm:py-20 lg:py-32 bg-slate-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full bg-sky-600/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
            <Eyebrow dark>{t("how-we-work")}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
              {t("flexible-working-models")}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {t("choose-the-collaboration-model-that-best-fits-your-business-needs")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {workingModels.map((model, idx) => {
              const Icon = model.icon;
              return (
                <Reveal key={idx} delay={idx * 120} className="h-full">
                  <div
                    className={`relative h-full flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                      model.popular
                        ? "bg-linear-to-b from-sky-500/25 to-sky-900/20 border border-cyan-300/50 shadow-2xl shadow-sky-500/20"
                        : "bg-white/4 border border-white/10 hover:border-white/25 backdrop-blur-sm"
                    }`}
                  >
                    {model.popular && (
                      <div className="absolute -top-4 left-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 text-slate-950 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                        <Award size={14} />
                        {t("most-popular")}
                      </div>
                    )}

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 ${
                        model.popular
                          ? "bg-cyan-300 text-slate-950"
                          : "bg-white/10 text-cyan-300"
                      }`}
                    >
                      <Icon size={26} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6 min-h-16">
                      {model.description}
                    </p>

                    <div className="text-2xl font-bold text-white pb-6 mb-6 border-b border-white/10">
                      {model.price}
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {model.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <Check
                            className="text-cyan-300 mt-0.5 shrink-0"
                            size={18}
                            strokeWidth={2.5}
                          />
                          <span className="text-slate-300 text-sm leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-slate-500 leading-relaxed mb-8">
                      {model.ideal}
                    </p>

                    <a
                      href="#contact"
                      className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full py-3.5 font-semibold transition-colors ${
                        model.popular
                          ? "bg-white text-slate-950 hover:bg-cyan-200"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {t("choose-plan")}
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-20 text-center">
            <p className="text-slate-400 mb-6">{t("not-sure-which-model-fits-your-needs")}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-cyan-200 transition-colors"
            >
              {t("schedule-a-free-consultation")}
              <ArrowRight size={20} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-16 relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-4xl bg-sky-100" />
              <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-slate-900/20 aspect-4/5 sm:aspect-5/4 lg:aspect-4/5">
                <img
                  src={IMAGES.about}
                  alt="Team collaboration"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <Eyebrow>{t("about-ab-invest")}</Eyebrow>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-8">
                {t("your-trusted-partner-in-international-business-growth")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                {t("about-ab-invest desc1")}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {t("about-ab-invest desc2")}
              </p>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.18em] mb-5">
                {t("our-core-values")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((value, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 transition-all duration-300 hover:bg-sky-950 hover:border-sky-950 group"
                  >
                    <div className="text-sm font-bold text-sky-700 group-hover:text-cyan-300 mb-2 transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="font-bold text-slate-950 group-hover:text-white mb-1 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-300 leading-snug transition-colors">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-16 relative py-16 sm:py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            <Eyebrow>{t("get-in-touch")}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-5">
              {t("ready-to-expand-globally")}
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              {t("lets-discuss-how-we-can-help")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            <Reveal className="lg:col-span-3">
              <div className="h-full rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-950 mb-8">
                  {t("send-us-a-message")}
                </h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: t("full-name"), type: "text", placeholder: "John Doe" },
                      { label: t("email"), type: "email", placeholder: "john@company.com" },
                      { label: t("company"), type: "text", placeholder: "Your Company Name" },
                      { label: t("phone"), type: "tel", placeholder: "+1 (555) 000-0000" },
                    ].map((field, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          className={inputClass}
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {t("message")}
                    </label>
                    <textarea
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your expansion plans..."
                    />
                  </div>

                  <button
                    onClick={() =>
                      alert("Thank you for your interest! We will contact you soon.")
                    }
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 text-white px-8 py-4 font-semibold hover:bg-sky-800 transition-colors"
                  >
                    {t("send-message")}
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
              <Reveal delay={120}>
                <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-slate-950 mb-8">
                    {t("contact-information")}
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: t("pages.contact.contactInfo.email.title"),
                        info: "contact.abinvest2026@gmail.com",
                      },
                      { icon: Phone, title: t("phone"), info: "+994516581598" },
                      { icon: MapPin, title: t("office"), info: "Baku, Azerbaijan" },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center shrink-0">
                            <Icon className="text-sky-700" size={22} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm text-slate-500 mb-0.5">{item.title}</h4>
                            <p className="font-semibold text-slate-900 wrap-anywhere">
                              {item.info}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240} className="flex-1">
                <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-sky-900 to-slate-950 p-6 sm:p-8 md:p-10 text-white shadow-xl shadow-sky-900/20">
                  <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-cyan-400/20 blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <Award className="text-cyan-300" size={26} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{t("pages.references.button")}</h3>
                        <p className="text-cyan-200 text-sm">
                          {t("30-minute-strategy-session")}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-7">{t("get")}</p>
                    <button className="w-full rounded-full bg-white text-slate-950 px-6 py-3.5 font-semibold hover:bg-cyan-200 transition-colors">
                      {t("schedule-now")}
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATOR */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <button
          aria-label="Scroll up"
          disabled={currentSection === 0}
          onClick={() => scrollToSection(Math.max(currentSection - 1, 0))}
          className="w-11 h-11 rounded-full bg-slate-950/90 backdrop-blur-md text-white shadow-lg border border-white/10 flex items-center justify-center hover:bg-sky-800 disabled:opacity-0 disabled:pointer-events-none active:scale-95 transition"
        >
          <ChevronDown className="rotate-180" size={20} />
        </button>
        <button
          aria-label="Scroll down"
          disabled={currentSection === sectionOrder.length - 1}
          onClick={() =>
            scrollToSection(Math.min(currentSection + 1, sectionOrder.length - 1))
          }
          className="w-11 h-11 rounded-full bg-slate-950/90 backdrop-blur-md text-white shadow-lg border border-white/10 flex items-center justify-center hover:bg-sky-800 disabled:opacity-0 disabled:pointer-events-none active:scale-95 transition"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes kenburns {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.9s ease-out backwards; }
      `}</style>
    </div>
  );
}
