import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function WorkingModels() {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      title: t("pages.workingModels.models.projectBased.title"),
      description: t("pages.workingModels.models.projectBased.description"),
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      icon: "📋",
      features: [
        t("pages.workingModels.models.projectBased.features.marketResearch"),
        t("pages.workingModels.models.projectBased.features.entryStrategy"),
        t("pages.workingModels.models.projectBased.features.partnerSearch"),
        t("pages.workingModels.models.projectBased.features.support"),
      ],
      duration: t("pages.workingModels.models.projectBased.duration"),
      ideal: t("pages.workingModels.models.projectBased.ideal"),
      pricing: t("pages.workingModels.models.projectBased.pricing"),
    },
    {
      id: 2,
      title: t("pages.workingModels.models.ongoingAdvisory.title"),
      description: t("pages.workingModels.models.ongoingAdvisory.description"),
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      icon: "🤝",
      features: [
        t("pages.workingModels.models.ongoingAdvisory.features.marketResearch"),
        t("pages.workingModels.models.ongoingAdvisory.features.entryStrategy"),
        t("pages.workingModels.models.ongoingAdvisory.features.partnerSearch"),
        ,
        t("pages.workingModels.models.ongoingAdvisory.features.support"),
      ],
      duration: t("pages.workingModels.models.ongoingAdvisory.duration"),
      ideal: t("pages.workingModels.models.ongoingAdvisory.ideal"),
      pricing: t("pages.workingModels.models.ongoingAdvisory.pricing"),
    },
    {
      id: 3,
      title: t("pages.workingModels.models.successPartnership.title"),
      description: t(
        "pages.workingModels.models.successPartnership.description"
      ),
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
      icon: "💼",
      features: [
        t(
          "pages.workingModels.models.successPartnership.features.marketResearch"
        ),
        t(
          "pages.workingModels.models.successPartnership.features.entryStrategy"
        ),
        t(
          "pages.workingModels.models.successPartnership.features.partnerSearch"
        ),
        t("pages.workingModels.models.successPartnership.features.support"),
      ],
      duration: t("pages.workingModels.models.successPartnership.duration"),
      ideal: t("pages.workingModels.models.successPartnership.ideal"),
      pricing: t("pages.workingModels.models.successPartnership.pricing"),
    },
    {
      id: 4,
      title: t("pages.workingModels.models.fieldSupport.title"),
      description: t("pages.workingModels.models.fieldSupport.description"),
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      icon: "✈️",
      features: [
        t("pages.workingModels.models.fieldSupport.features.fairParticipation"),
        t("pages.workingModels.models.fieldSupport.features.b2bMeeting"),
        t(
          "pages.workingModels.models.fieldSupport.features.translationService"
        ),
        t(
          "pages.workingModels.models.fieldSupport.features.localMarketGuidance"
        ),
      ],
      duration: t("pages.workingModels.models.fieldSupport.duration"),
      ideal: t("pages.workingModels.models.fieldSupport.ideal"),
      pricing: t("pages.workingModels.models.fieldSupport.pricing"),
    },
    {
      id: 5,
      title: t("pages.workingModels.models.exportTraining.title"),
      description: t("pages.workingModels.models.exportTraining.description"),
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      icon: "📚",
      features: [
        t(
          "pages.workingModels.models.exportTraining.features.exportProcessTraining"
        ),
        t(
          "pages.workingModels.models.exportTraining.features.marketResearchTechniques"
        ),
        t(
          "pages.workingModels.models.exportTraining.features.negotiationAndCulturalAwareness"
        ),
        t(
          "pages.workingModels.models.exportTraining.features.onlineAndFaceToFaceTraining"
        ),
      ],
      duration: t("pages.workingModels.models.exportTraining.duration"),
      ideal: t("pages.workingModels.models.exportTraining.ideal"),
      pricing: t("pages.workingModels.models.exportTraining.pricing"),
    },
    {
      id: 6,
      title: t("pages.workingModels.models.customSolutions.title"),
      description: t("pages.workingModels.models.customSolutions.description"),
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      icon: "⚙️",
      features: [
        t(
          "pages.workingModels.models.customSolutions.features.fullyCustomizable"
        ),
        t(
          "pages.workingModels.models.customSolutions.features.hybridWorkingModels"
        ),
        t(
          "pages.workingModels.models.customSolutions.features.flexiblePaymentOptions"
        ),
        t(
          "pages.workingModels.models.customSolutions.features.customTeamAssignment"
        ),
      ],
      duration: t("pages.workingModels.models.customSolutions.duration"),
      ideal: t("pages.workingModels.models.customSolutions.ideal"),
      pricing: t("pages.workingModels.models.customSolutions.pricing"),
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("pages.workingModels.processSteps.firstMeeting.title"),
      description: t(
        "pages.workingModels.processSteps.firstMeeting.description"
      ),
      icon: "💬",
    },
    {
      step: "02",
      title: t("pages.workingModels.processSteps.analysisAndPlanning.title"),
      description: t(
        "pages.workingModels.processSteps.analysisAndPlanning.description"
      ),
      icon: "📊",
    },
    {
      step: "03",
      title: t("pages.workingModels.processSteps.implementation.title"),
      description: t(
        "pages.workingModels.processSteps.implementation.description"
      ),
      icon: "🚀",
    },
    {
      step: "04",
      title: t(
        "pages.workingModels.processSteps.trackingAndOptimization.title"
      ),
      description: t(
        "pages.workingModels.processSteps.trackingAndOptimization.description"
      ),
      icon: "📈",
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="relative py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            {t("pages.workingModels.title")}
          </h1>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            {t("pages.workingModels.description")}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

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
                              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
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
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 z-0"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
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
                    {t("pages.workingModels.compareModels.table.startUpCost")}
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

      <div className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("pages.workingModels.offer.title")}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t("pages.workingModels.offer.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2">
                {t("pages.workingModels.offer.button")}
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
                {t("pages.workingModels.offer.button2")}
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
