import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function WorkingModels() {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      title: "Project-Based Cooperation",
      description:
        "A structured, goal-oriented collaboration model focused on a specific international investment or export project with clearly defined scope, timeline, and deliverables.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      icon: "📋",
      features: [
        "International market and opportunity analysis",
        "Investment or export project structuring",
        "Partner identification and validation",
        "Professional guidance until project completion",
      ],
      duration: "Fixed-term (project-based)",
      ideal:
        "Companies or investors seeking support for a specific international project",
      pricing: "Fixed or milestone-based pricing",
    },
    {
      id: 2,
      title: "Ongoing Advisory & Membership Support",
      description:
        "Continuous advisory support providing members with regular access to international opportunities, expertise, and strategic guidance.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      icon: "🤝",
      features: [
        "Continuous access to investment and export opportunities",
        "Strategic consulting and decision support",
        "Priority access for premium members",
        ,
        "Ongoing professional advisory services",
      ],
      duration: "Monthly or annual engagement",
      ideal:
        "Businesses and investors requiring long-term international guidance",
      pricing: "Subscription-based (membership model)",
    },
    {
      id: 3,
      title: "Success-Based Partnership",
      description:
        "A performance-driven collaboration model where success is shared, aligning our interests with the growth and results of your international investment or export activities.",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
      icon: "💼",
      features: [
        "Shared success and risk alignment",
        "Revenue or profit-based compensation",
        "Long-term partnership mindset",
        "Strong commitment to results",
      ],
      duration: "Long-term partnership",
      ideal:
        "Investors and companies seeking shared-risk international expansion",
      pricing: "Success or performance-based fees",
    },
    {
      id: 4,
      title: "International Field Support",
      description:
        "On-the-ground assistance to support your international activities, meetings, and market entry processes.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      icon: "✈️",
      features: [
        "Participation in international fairs and events",
        "B2B meetings and partner visits",
        "Translation and local representation",
        "Local market guidance and coordination",
      ],
      duration: "Short-term or mission-based",
      ideal: "Companies entering new international markets",
      pricing: "Daily or project-based pricing",
    },
    {
      id: 5,
      title: "Export & Investment Training Programs",
      description:
        "Professional training programs designed to strengthen knowledge in international trade, export operations, and investment decision-making.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      icon: "📚",
      features: [
        "International trade and export process training",
        "Market research and opportunity analysis techniques",
        "Negotiation skills and cultural awareness",
        "Online and on-site training sessions",
      ],
      duration: "Short-term programs or workshops",
      ideal: "Companies and teams building international expertise",
      pricing: "Per session or training package",
    },
    {
      id: 6,
      title: " Custom & Hybrid Solutions",
      description:
        "Tailor-made collaboration models combining multiple services to meet unique international investment and export needs.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      icon: "⚙️",
      features: [
        "Fully customized working models",
        "Hybrid cooperation structures",
        "Flexible payment options",
        "Dedicated expert team assignment",
      ],
      duration: "Flexible",
      ideal: "Complex or multi-market international projects",
      pricing: "Customized upon request",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Understanding your goals, expectations, and international ambitions.",
      icon: "💬",
    },
    {
      step: "02",
      title: "Analysis & Strategy Planning",
      description:
        "Market analysis, opportunity assessment, and collaboration model selection.",
      icon: "📊",
    },
    {
      step: "03",
      title: "Implementation & Execution",
      description:
        "Launching and managing the selected working model with expert support.",
      icon: "🚀",
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description:
        "Continuous tracking, optimization, and long-term value creation.",
      icon: "📈",
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="relative py-20 px-6 bg-linear-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Our Working Models
          </h1>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            We offer flexible collaboration models designed to support
            international investment, export development, and long-term global
            partnerships according to your business goals.
          </p>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={model.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                onClick={() =>
                  setSelectedModel(model.id === selectedModel ? null : model.id)
                }
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>

                  <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {model.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {model.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-600">⏱️</span>
                      <span className="text-slate-600">
                        <strong>
                          {t("pages.workingModels.models.duration")}:
                        </strong>{" "}
                        {model.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-600">💰</span>
                      <span className="text-slate-600">
                        <strong>
                          {t("pages.workingModels.models.pricing")}:
                        </strong>{" "}
                        {model.pricing}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      selectedModel === model.id ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="border-t border-slate-200 pt-4 mb-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">
                        {t("pages.workingModels.models.features")}:
                      </p>
                      <ul className="space-y-2">
                        {model.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <svg
                              className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-900 mb-1">
                        {t("pages.workingModels.models.ideal")}:
                      </p>
                      <p className="text-sm text-blue-800">{model.ideal}</p>
                    </div>
                  </div>

                  <button className="w-full mt-4 text-blue-600 font-semibold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                    {selectedModel === model.id
                      ? t("pages.workingModels.models.showLess")
                      : t("pages.workingModels.models.showDetails")}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        selectedModel === model.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t("pages.workingModels.processSteps.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("pages.workingModels.processSteps.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-linear-to-r from-blue-400 to-blue-200 z-0"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>

                  <div className="text-5xl mb-4">{step.icon}</div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t("pages.workingModels.compareModels.title")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("pages.workingModels.compareModels.description")}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">
                    {t("pages.workingModels.compareModels.table.feature")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900">
                    {t("pages.workingModels.compareModels.table.projectBased")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900">
                    {t("pages.workingModels.compareModels.table.continuous")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900">
                    {t(
                      "pages.workingModels.compareModels.table.successPartnership"
                    )}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Initial Cost
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.medium")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.low")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.veryLow")}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {t("pages.workingModels.compareModels.table.flexibility")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.medium")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.high")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.high")}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {t("pages.workingModels.compareModels.table.riskSharing")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.no")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.no")}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {t("pages.workingModels.yes")}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {t(
                      "pages.workingModels.compareModels.table.longTermSupport"
                    )}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">❌</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-linear-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose the Right Model for Your Global Growth
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you seek a single project, long-term advisory, or a
              success-based partnership, we provide flexible working models
              designed for international success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2">
                Apply for Membership
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
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                Contact Our Team
              </button>
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
