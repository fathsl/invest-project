import {
  ArrowRight,
  Eye,
  Handshake,
  Lightbulb,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export default function AboutUs() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Handshake,
      title: t("reliability-and-trust"),
      description: t("reliability and trust desc"),
    },
    {
      icon: Target,
      title: t("expertise-and-professionalism"),
      description: t("exp and profes desc"),
    },
    {
      icon: TrendingUp,
      title: t("results-driven-approach"),
      description: t("result driven desc"),
    },
    {
      icon: Lightbulb,
      title: t("innovation-and-growth"),
      description: t("innov and growth desc"),
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: t("foundation-of-the-platform"),
      description: t("foundation platf desc"),
    },
    {
      year: "2015",
      title: t("regional-expansion"),
      description: t("regional exp desc"),
    },
    {
      year: "2018",
      title: t("pages.about.milestones.50Projects.title"),
      description: t("pages.about.milestones.50Projects.description"),
    },
    {
      year: "2020",
      title: t("pages.about.milestones.digitalTransformation.title"),
      description: t("pages.about.milestones.digitalTransformation.description"),
    },
    {
      year: "2024",
      title: t("pages.about.milestones.globalLeader.title"),
      description: t("pages.about.milestones.globalLeader.description"),
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900 antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={img("1521737711867-e3b97375f902", 2400)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 wrap-break-word">
              {t("ab invest expo")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {t("international invest")}.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <Reveal className="h-full">
              <div className="relative h-72 sm:h-96 lg:h-full min-h-72 overflow-hidden rounded-4xl shadow-2xl shadow-slate-900/15">
                <img
                  src={img("1556761175-4b46a572b786", 1400)}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 to-transparent" />
              </div>
            </Reveal>

            <div className="flex flex-col gap-6 lg:gap-8">
              {[
                {
                  icon: Zap,
                  title: t("our mission"),
                  text: `${t("our mission descript")}.`,
                },
                {
                  icon: Eye,
                  title: t("pages.about.vision.title") || "AB Invest MMC",
                  text: `${t("become leading")}.`,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={(idx + 1) * 120} className="flex-1">
                    <div className="h-full rounded-4xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-7 sm:p-10">
                      <div className="w-14 h-14 rounded-2xl bg-sky-950 flex items-center justify-center mb-6">
                        <Icon className="text-cyan-300" size={26} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                        {item.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-5">
              {t("our-core-values")}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {t(
                "the-principles-that-guide-our-decisions-partnerships-and-long-term-commitment-to-global-success",
              )}
              .
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Reveal key={idx} delay={idx * 100} className="h-full">
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
                      {value.title}
                    </h3>
                    <p className="relative text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative bg-slate-950 py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full bg-sky-600/20 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
              {t("pages.about.journey.title") || "AB Invest MMC"}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {t(
                "key-milestones-that-shaped-our-growth-as-an-international-investment-and-export-platform",
              )}
              .
            </p>
          </Reveal>

          <div className="relative">
            {/* vertical line: left on phones, centered from md up */}
            <div className="absolute top-2 bottom-2 left-5 md:left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-cyan-300/60 via-white/20 to-transparent" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((m, idx) => {
                const left = idx % 2 === 0;
                return (
                  <Reveal key={idx}>
                    <div className="relative pl-14 md:pl-0 md:grid md:grid-cols-2">
                      <span className="absolute left-5 md:left-1/2 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-300 ring-4 ring-slate-950 shadow-[0_0_0_6px_rgba(103,232,249,0.15)]" />
                      <div
                        className={
                          left ? "md:col-start-1 md:pr-14" : "md:col-start-2 md:pl-14"
                        }
                      >
                        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-7 hover:border-cyan-300/40 transition-colors">
                          <div className="inline-block rounded-full bg-cyan-300 text-slate-950 px-4 py-1.5 text-sm font-bold mb-4">
                            {m.year}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                            {m.title}
                          </h3>
                          <p className="text-slate-400 leading-relaxed">{m.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
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
                  {t("lets-build-global-success-together")}
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                  {t(
                    "whether-you-are-an-investor-exporter-or-business-partner-we-invite-you-to-join-our-growing-international-network-and-explore-new-global-opportunities",
                  )}
                  .
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-cyan-200 transition-colors"
                >
                  {t("contact-our-team")}
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
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
