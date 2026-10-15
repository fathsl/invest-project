import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      image: img("1590283603385-17ffb3a7f29f"),
      title: t("global-investment-opportunities"),
      description: t(
        "we-provide-members-with-early-access-to-carefully-selected-international-investment-projects-designed-to-generate-long-term-value-and-sustainable-growth",
      ),
      features: [
        t("access-to-vetted-international-investment-projects"),
        t("early-stage-and-exclusive-deal-opportunities"),
        t("risk-assessment-and-opportunity-evaluation"),
      ],
    },
    {
      id: 2,
      image: img("1494412574643-ff11b0a5c1c3"),
      title: t("export-and-trade-development"),
      description: t("export-and-trade-development-desc"),
      features: [
        t("identification-of-export-markets"),
        t("access-to-export-deals-and-trade-opportunities"),
        t("support-in-cross-border-trade-development"),
      ],
    },
    {
      id: 3,
      image: img("1521791136064-7986c2920216"),
      title: t("strategic-business-partnerships"),
      description: t("strategic-business-partnerships-desc"),
      features: [
        t("partner-identification-and-matchmaking"),
        t("building-win-win-cooperation-models"),
        t("long-term-partnership-development"),
      ],
    },
    {
      id: 4,
      image: img("1542744173-8e7e53415bb0"),
      title: t("international-trade-and-investment-consulting"),
      description: t("international-trade-and-investment-consulting-desc"),
      features: [
        t("international-market-expertise"),
        t("investment-and-trade-strategy-consulting"),
        t("professional-guidance-and-insights"),
      ],
    },
    {
      id: 5,
      image: img("1573497019940-1c28c88b4f3e"),
      title: t("member-support-and-advisory"),
      description: t("member support desc"),
      features: [
        t("dedicated-expert-support"),
        t("personalized-advisory-for-premium-members"),
        t("ongoing-guidance-throughout-projects"),
      ],
    },
    {
      id: 6,
      image: img("1528605248644-14dd04022da1"),
      title: t("networking-and-global-community"),
      description: t("networking-and-global-community des"),
      features: [
        t("international-networking-opportunities"),
        t("invitations-to-events-and-webinars"),
        t("access-to-a-global-business-community"),
      ],
    },
  ];

  const stats = [
    { number: "50+", label: t("successful-international-projects") },
    { number: "30+", label: t("countries-and-markets-covered") },
    { number: "100%", label: t("trusted-partnerships-and-client-satisfaction") },
    { number: "15+", label: t("years-of-experience-in-global-trade-and-investment") },
  ];

  return (
    <div className="w-full bg-white text-slate-900 antialiased">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={img("1436491865332-7a61a109cc05", 2400)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 wrap-break-word">
              {t("our-services")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {t("our-services des")}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => {
              return (
                <Reveal
                  key={service.id}
                  delay={(idx % 3) * 100}
                  className="h-full"
                >
                  <article
                    className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500"
                  >
                    <div className="relative overflow-hidden shrink-0 aspect-16/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-sky-900 font-bold shadow-lg">
                        0{service.id}
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-6 sm:p-8">
                      <h3 className="text-2xl font-bold text-slate-950 mb-3 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
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

                      <Link
                        to="/contact"
                        className="mt-auto group/btn inline-flex items-center gap-2 self-start rounded-full bg-slate-950 text-white pl-6 pr-2 py-2 text-sm font-semibold hover:bg-sky-800 transition-colors"
                      >
                        {t("pages.services.detailButton") || "Hizmetlerimiz"}
                        <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover/btn:rotate-45">
                          <ArrowUpRight size={16} />
                        </span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-sky-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_56px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:divide-x lg:divide-white/10">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100} className="lg:px-8 first:lg:pl-0">
                <div className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-slate-300 leading-snug">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
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
                  {t("ready-to-expand-your-business-globally")}
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                  {t("ready-to-expand-your-business-globally desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-cyan-200 transition-colors"
                  >
                    {t("apply-for-membership-0")}
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white px-8 py-4 font-semibold hover:bg-white/15 transition-colors"
                  >
                    {t("pages.services.stat6") || "Years of Experience"}
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
