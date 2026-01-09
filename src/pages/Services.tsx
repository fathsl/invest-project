import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const { t } = useTranslation();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      image:
        "https://www.shutterstock.com/image-photo/financial-technology-concept-fintech-online-260nw-2112385907.jpg",
      title: t("global-investment-opportunities"),
      description: t(
        "we-provide-members-with-early-access-to-carefully-selected-international-investment-projects-designed-to-generate-long-term-value-and-sustainable-growth"
      ),
      features: [
        t("access-to-vetted-international-investment-projects"),
        t("early-stage-and-exclusive-deal-opportunities"),
        t("risk-assessment-and-opportunity-evaluation"),
      ],
    },
    {
      id: 2,
      image:
        "https://www.shutterstock.com/image-photo/aerial-view-top-cargo-plane-260nw-2541816961.jpg",
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
      image:
        "https://www.shutterstock.com/image-photo/business-administration-businessman-handshake-on-260nw-2671260781.jpg",
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
      image:
        "https://www.shutterstock.com/image-photo/container-truck-ship-port-business-260nw-2522912609.jpg",
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
      image:
        "https://www.shutterstock.com/image-photo/professional-team-call-center-agents-260nw-2682370159.jpg",
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
      image:
        "https://www.shutterstock.com/image-photo/icons-representing-social-media-interaction-260nw-2666991357.jpg",
      title: t("networking-and-global-community"),
      description: t("networking-and-global-community des"),
      features: [
        t("international-networking-opportunities"),
        t("invitations-to-events-and-webinars"),
        t("access-to-a-global-business-community"),
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(30, 64, 175) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t("our-services")}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("our-services des")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {service.id}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-slate-500"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    {t("pages.services.detailButton") || "Hizmetlerimiz"}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-blue-600 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            {
              number: "50+",
              label: t("successful-international-projects"),
            },
            {
              number: "30+",
              label: t("countries-and-markets-covered"),
            },
            {
              number: "100%",
              label: t("trusted-partnerships-and-client-satisfaction"),
            },
            {
              number: "15+",
              label: t("years-of-experience-in-global-trade-and-investment"),
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          className="text-center animate-fadeIn"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-white">
                {t("ready-to-expand-your-business-globally")}
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {t("ready-to-expand-your-business-globally desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                  {t("apply-for-membership-0")}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  {t("pages.services.stat6") || "Years of Experience"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
      `}</style>
    </section>
  );
}
