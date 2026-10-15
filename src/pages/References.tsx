import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Globe2,
  MapPin,
  Quote,
  SearchX,
  Star,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

const ALL = "__all__";

export default function References() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(ALL);

  const references = [
    {
      id: 1,
      company: t("global-investment-group"),
      industry: t("investment-and-finance"),
      country: t("international"),
      image: img("1611974789855-9c2a0a7236a3"),
      testimonial: t("testimonial-1"),
      person: t("senior-investment-manager"),
      position: t("investment-director"),
      result: t("access-to-high-yield"),
    },
    {
      id: 2,
      company: t("international-export-company"),
      industry: t("export-and-trade"),
      country: t("europe-middle-east"),
      image: img("1578575437130-527eed3abbec"),
      testimonial: t("testimonial-2"),
      person: t("export-manager"),
      position: t("head-of-international-trade"),
      result: t("successful-entry-into-new-international-markets"),
    },
    {
      id: 3,
      company: t("global-trade-partner"),
      industry: t("international-trade"),
      country: t("multinational"),
      image: img("1600880292203-757bb62b4baf"),
      testimonial: t("testimonial-3"),
      person: t("business-development-lead"),
      position: t("partnership-manager"),
      result: t("long-term-strategic-international-partnership"),
    },
  ];

  const stats = [
    { icon: BarChart3, number: "50+", label: t("successful-international-projects") },
    { icon: Globe2, number: "30+", label: t("countries-and-markets-reached") },
    { icon: Star, number: "%95", label: t("partner-and-member-satisfaction") },
    {
      icon: Briefcase,
      number: "€50M+",
      label: t("total-trade-and-investment-volume-facilitated"),
    },
  ];

  // filter chips are built from the industries that actually have a reference,
  // so no chip ever leads to an empty list
  const industries = Array.from(new Set(references.map((r) => r.industry)));

  const filtered =
    activeTab === ALL
      ? references
      : references.filter((r) => r.industry === activeTab);

  return (
    <div className="w-full bg-white text-slate-900 antialiased">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={img("1521737711867-e3b97375f902", 2400)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 wrap-break-word">
              {t("success-stories-and-trusted-partnerships")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {t("success-stories-and-trusted-partnerships-desc")}
            </p>
          </div>
        </div>
      </section>

      {/* STATS — overlaps the header */}
      <section className="relative z-10 -mt-10 sm:-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/10 p-4 sm:p-7">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-50 flex items-center justify-center mb-4">
                      <Icon className="text-sky-700" size={22} />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-slate-950 mb-1.5">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* filter bar: scrolls sideways inside itself on small screens */}
          <div className="-mx-4 sm:mx-0 px-4 sm:px-0 mb-10 overflow-x-auto sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              role="tablist"
              className="flex sm:flex-wrap items-center gap-2 sm:gap-3 w-max sm:w-auto"
            >
              {[ALL, ...industries].map((industry) => {
                const active = activeTab === industry;
                const count =
                  industry === ALL
                    ? references.length
                    : references.filter((r) => r.industry === industry).length;
                return (
                  <button
                    key={industry}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(industry)}
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {industry === ALL ? t("all") : industry}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        active ? "bg-white/20" : "bg-white text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center py-20 text-slate-400">
              <SearchX size={40} className="mb-4" />
              <button
                onClick={() => setActiveTab(ALL)}
                className="font-semibold text-sky-700 hover:underline"
              >
                {t("all")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((ref, idx) => (
                <Reveal key={ref.id} delay={idx * 100}>
                  <article className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500">
                    <div className="relative aspect-16/10 overflow-hidden shrink-0">
                      <img
                        src={ref.image}
                        alt={ref.company}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                      <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-sky-900">
                        {ref.industry}
                      </div>
                      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                        <h3 className="text-xl font-bold text-white leading-snug">
                          {ref.company}
                        </h3>
                        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-medium text-white">
                          <MapPin size={12} />
                          {ref.country}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-6 sm:p-7">
                      <Quote className="text-sky-200 mb-3" size={32} />
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {ref.testimonial}
                      </p>

                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-11 h-11 rounded-full bg-sky-950 flex items-center justify-center shrink-0">
                          <UserRound className="text-cyan-200" size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-slate-950 text-sm leading-snug">
                            {ref.person}
                          </p>
                          <p className="text-slate-500 text-xs leading-snug">
                            {ref.position}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto flex items-start gap-3 rounded-2xl bg-sky-50 border border-sky-100 p-4">
                        <CheckCircle2 className="text-sky-700 shrink-0 mt-0.5" size={20} />
                        <p className="text-sky-950 text-sm font-semibold leading-snug">
                          {ref.result}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
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
                  {t("become-part-of-our-global-success-network")}
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                  {t("become part desc")}
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
