import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function WorkingModels() {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      title: t("project-based-cooperation"),
      description: t("project based desc"),
      image:
        "https://www.shutterstock.com/image-photo/group-business-executives-suit-brainstorming-260nw-2635598865.jpg",
      icon: "📋",
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
      title: t("ongoing-advisory-and-membership-support"),
      description: t("continuous-advisory-support dexc"),
      image:
        "https://www.shutterstock.com/image-photo/call-center-man-computer-microphone-260nw-2488684449.jpg",
      icon: "🤝",
      features: [
        t("continuous-access-to-investment-and-export-opportunities"),
        t("strategic-consulting-and-decision-support"),
        t("priority-access-for-premium-members"),
        ,
        t("ongoing-professional-advisory-services"),
      ],
      duration: t("monthly-or-annual-engagement"),
      ideal: t(
        "businesses-and-investors-requiring-long-term-international-guidance"
      ),
      pricing: t("subscription-based-membership-model"),
    },
    {
      id: 3,
      title: t("success-based-partnership"),
      description: "t('sucess partnership desc')",
      image:
        "https://www.shutterstock.com/image-photo/startup-company-employee-team-stacking-260nw-2641481201.jpg",
      icon: "💼",
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
      title: t("international-field-support"),
      description: t("international fields support desc"),
      image:
        "https://www.shutterstock.com/image-photo/soldier-working-ai-intelligence-on-260nw-2514086933.jpg",
      icon: "✈️",
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
      title: t("export-and-investment-training-programs"),
      description: t("export and investment desc"),
      image:
        "https://www.shutterstock.com/image-photo/happy-corporate-business-people-meeting-260nw-2627958437.jpg",
      icon: "📚",
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
      title: t("custom-and-hybrid-solutions"),
      description: t("tailor-made-collaboration-models desc"),
      image:
        "https://www.shutterstock.com/image-photo/global-software-development-coding-solutions-260nw-2700835771.jpg",
      icon: "⚙️",
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
      step: "01",
      title: t("initial-consultation"),
      description: t("initial consultation desc"),
      icon: "💬",
    },
    {
      step: "02",
      title: t("analysis-and-strategy-planning"),
      description: t("market-analysis-opportunity-desc"),
      icon: "📊",
    },
    {
      step: "03",
      title: t("implementation-and-execution"),
      description: t("launching-and-managing-desc"),
      icon: "🚀",
    },
    {
      step: "04",
      title: t("monitoring-and-optimization"),
      description: t("continuous-tracking-optimization-desc"),
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
            {t("our-working-models")}
          </h1>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            {t("our-working-models-desc")}
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
                    {t("initial-cost")}
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
              {t("choose-the-right-model-for-your-global-growth")}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t("choose-the-right-model-for-your-global-growth-desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2">
                {t("apply-for-membership")}
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
                {t("contact-our-team")}
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
