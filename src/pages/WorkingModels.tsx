import {
  ArrowRight,
  BarChart3,
  Check,
  Clock,
  FileText,
  GraduationCap,
  Handshake,
  MessageSquare,
  Plane,
  Rocket,
  Settings2,
  TrendingUp,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export default function WorkingModels() {
  const { t } = useTranslation();

  const models = [
    {
      id: 1,
      icon: FileText,
      title: t("project-based-cooperation"),
      description: t("project based desc"),
      image: img("1552664730-d307ca884978"),
      features: [
        t("international-market-and-opportunity-analysis"),
        t("investment-or-export"),
        t("partner-identification-and-validation"),
        t("professional-guidance-until-project-completion"),
      ],
      duration: t("fixed-term-project-based"),
      ideal: t("companies-or-investors"),
      pricing: t("fixed-or-milestone-based-pricing"),
    },
    {
      id: 2,
      icon: Users,
      title: t("ongoing-advisory-and-membership-support"),
      description: t("continuous-advisory-support dexc"),
      image: img("1517048676732-d65bc937f952"),
      features: [
        t("continuous-access-to-investment-and-export-opportunities"),
        t("strategic-consulting-and-decision-support"),
        t("priority-access-for-premium-members"),
        t("ongoing-professional-advisory-services"),
      ],
      duration: t("monthly-or-annual-engagement"),
      ideal: t(
        "businesses-and-investors-requiring-long-term-international-guidance",
      ),
      pricing: t("subscription-based-membership-model"),
    },
    {
      id: 3,
      icon: Handshake,
      title: t("success-based-partnership"),
      description: t("sucess partnership desc"),
      image: img("1521791136064-7986c2920216"),
      features: [
        t("shared-success-and-risk-alignment"),
        t("revenue-or-profit-based-compensation"),
        t("long-term-partnership-mindset"),
        t("strong-commitment-to-results"),
      ],
      duration: t("long-term-partnership"),
      ideal: t("investors and companies"),
      pricing: t("success-or-performance-based-fees"),
    },
    {
      id: 4,
      icon: Plane,
      title: t("international-field-support"),
      description: t("international fields support desc"),
      image: img("1540575467063-178a50c2df87"),
      features: [
        t("participation-in-international-fairs-and-events"),
        t("b2b-meetings-and-partner-visits"),
        t("translation-and-local-representation"),
        t("local-market-guidance-and-coordination"),
      ],
      duration: t("short-term-or-mission-based"),
      ideal: t("companies-entering"),
      pricing: t("daily-or-project-based-pricing"),
    },
    {
      id: 5,
      icon: GraduationCap,
      title: t("export-and-investment-training-programs"),
      description: t("export and investment desc"),
      image: img("1531482615713-2afd69097998"),
      features: [
        t("international-trade-and-export-process-training"),
        t("market-research-and-opportunity-analysis-techniques"),
        t("negotiation-skills-and-cultural-awareness"),
        t("online-and-on-site-training-sessions"),
      ],
      duration: t("short-term-programs-or-workshops"),
      ideal: t("companies-and-teams-building-international-expertise"),
      pricing: t("per-session-or-training-package"),
    },
    {
      id: 6,
      icon: Settings2,
      title: t("custom-and-hybrid-solutions"),
      description: t("tailor-made-collaboration-models desc"),
      image: img("1573164713988-8665fc963095"),
      features: [
        t("fully-customized-working-models"),
        t("hybrid-cooperation-structures"),
        t("flexible-payment-options"),
        t("dedicated-expert-team-assignment"),
      ],
      duration: t("flexible"),
      ideal: t("complex-or-multi-market-international-projects"),
      pricing: t("customized-upon-request"),
    },
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: t("initial-consultation"),
      description: t("initial consultation desc"),
    },
    {
      icon: BarChart3,
      title: t("analysis-and-strategy-planning"),
      description: t("market-analysis-opportunity-desc"),
    },
    {
      icon: Rocket,
      title: t("implementation-and-execution"),
      description: t("launching-and-managing-desc"),
    },
    {
      icon: TrendingUp,
      title: t("monitoring-and-optimization"),
      description: t("continuous-tracking-optimization-desc"),
    },
  ];

  const compareHead = [
    t("pages.workingModels.compareModels.table.projectBased"),
    t("pages.workingModels.compareModels.table.continuous"),
    t("pages.workingModels.compareModels.table.successPartnership"),
  ];

  const compareRows: { label: string; values: (string | boolean)[] }[] = [
    {
      label: t("initial-cost"),
      values: [
        t("pages.workingModels.medium"),
        t("pages.workingModels.low"),
        t("pages.workingModels.veryLow"),
      ],
    },
    {
      label: t("pages.workingModels.compareModels.table.flexibility"),
      values: [
        t("pages.workingModels.medium"),
        t("pages.workingModels.high"),
        t("pages.workingModels.high"),
      ],
    },
    {
      label: t("pages.workingModels.compareModels.table.riskSharing"),
      values: [
        t("pages.workingModels.no"),
        t("pages.workingModels.no"),
        t("pages.workingModels.yes"),
      ],
    },
    {
      label: t("pages.workingModels.compareModels.table.longTermSupport"),
      values: [false, true, true],
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900 antialiased">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={img("1504384308090-c894fdcc538d", 2400)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 wrap-break-word">
              {t("our-working-models")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {t("our-working-models-desc")}
            </p>
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {models.map((model, idx) => {
              const Icon = model.icon;
              return (
                <Reveal key={model.id} delay={(idx % 3) * 100} className="h-full">
                  <article className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500">
                    <div className="relative aspect-16/10 overflow-hidden shrink-0">
                      <img
                        src={model.image}
                        alt={model.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                        <Icon className="text-sky-800" size={24} />
                      </div>
                      <div className="absolute top-5 right-5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white">
                        0{model.id}
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-6 sm:p-8">
                      <h3 className="text-2xl font-bold text-slate-950 mb-3 leading-snug">
                        {model.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {model.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                            <Clock size={14} className="text-sky-700" />
                            {t("pages.workingModels.models.duration")}
                          </div>
                          <div className="text-sm font-semibold text-slate-900 leading-snug">
                            {model.duration}
                          </div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                            <Wallet size={14} className="text-sky-700" />
                            {t("pages.workingModels.models.pricing")}
                          </div>
                          <div className="text-sm font-semibold text-slate-900 leading-snug">
                            {model.pricing}
                          </div>
                        </div>
                      </div>

                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.18em] mb-4">
                        {t("pages.workingModels.models.features")}
                      </h4>
                      <ul className="space-y-3 mb-7">
                        {model.features.map((feature, fIdx) => (
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

                      <div className="mt-auto rounded-2xl bg-sky-950 p-5 text-white">
                        <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1.5">
                          {t("pages.workingModels.models.ideal")}
                        </div>
                        <p className="text-sm text-slate-200 leading-snug">{model.ideal}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-slate-950 py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full bg-sky-600/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
              {t("pages.workingModels.processSteps.title")}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {t("pages.workingModels.processSteps.description")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={idx} delay={idx * 100} className="h-full">
                  <div className="relative h-full rounded-3xl bg-white/4 border border-white/10 p-7 backdrop-blur-sm hover:border-cyan-300/40 transition-colors">
                    <span className="absolute top-6 right-7 text-5xl font-bold text-white/10">
                      0{idx + 1}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-300 text-slate-950 flex items-center justify-center mb-6">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-5">
              {t("pages.workingModels.compareModels.title")}
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              {t("pages.workingModels.compareModels.description")}
            </p>
          </Reveal>

          <Reveal>
            {/* phones: one card per model */}
            <div className="md:hidden space-y-4">
              {compareHead.map((head, mIdx) => (
                <div
                  key={mIdx}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
                >
                  <div className="bg-slate-950 px-5 py-4 text-base font-bold text-white">
                    {head}
                  </div>
                  <dl className="divide-y divide-slate-100">
                    {compareRows.map((row, rIdx) => {
                      const v = row.values[mIdx];
                      return (
                        <div
                          key={rIdx}
                          className="flex items-center justify-between gap-4 px-5 py-3.5"
                        >
                          <dt className="text-sm text-slate-500">{row.label}</dt>
                          <dd className="shrink-0 text-sm font-semibold text-slate-900">
                            {typeof v === "boolean" ? (
                              <span
                                className={`inline-flex w-7 h-7 items-center justify-center rounded-full ${
                                  v ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-600"
                                }`}
                              >
                                {v ? <Check size={15} strokeWidth={3} /> : <X size={15} strokeWidth={3} />}
                              </span>
                            ) : (
                              v
                            )}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              ))}
            </div>

            {/* tablet and desktop: table */}
            <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="bg-slate-950 px-6 py-5 text-left font-semibold">
                      {t("pages.workingModels.compareModels.table.feature")}
                    </th>
                    {compareHead.map((h, i) => (
                      <th key={i} className="px-4 sm:px-6 py-5 text-center font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-t border-slate-200 odd:bg-white even:bg-slate-50/70 hover:bg-sky-50/60 transition-colors"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-left font-semibold text-slate-800"
                      >
                        {row.label}
                      </th>
                      {row.values.map((v, i) => (
                        <td key={i} className="px-4 sm:px-6 py-4 text-center text-slate-700">
                          {typeof v === "boolean" ? (
                            <span
                              className={`inline-flex w-8 h-8 items-center justify-center rounded-full ${
                                v ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-600"
                              }`}
                            >
                              {v ? <Check size={16} strokeWidth={3} /> : <X size={16} strokeWidth={3} />}
                            </span>
                          ) : (
                            <span className="font-medium">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-slate-950 px-6 py-14 sm:px-12 sm:py-20 text-center shadow-2xl shadow-slate-900/20">
              <img
                src={img("1486406146926-c627a92ad1ab", 2000)}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-sky-950/80 to-slate-950/90" />
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 max-w-3xl mx-auto leading-tight">
                  {t("choose-the-right-model-for-your-global-growth")}
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                  {t("choose-the-right-model-for-your-global-growth-desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-cyan-200 transition-colors"
                  >
                    {t("apply-for-membership")}
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white px-8 py-4 font-semibold hover:bg-white/15 transition-colors"
                  >
                    {t("contact-our-team")}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 1s ease-out both; }
      `}</style>
    </div>
  );
}
