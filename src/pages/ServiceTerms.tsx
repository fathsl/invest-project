import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<number>(0);

  const sections = [
    {
      id: 0,
      icon: "📜",
      title: t("pages.serviceTerms.AgreementToTerms"),
      description: t("pages.serviceTerms.AgreementToTermsDescription"),
      content: t("pages.serviceTerms.AgreementToTermsContent"),
    },
    {
      id: 1,
      icon: "✔️",
      title: t("pages.serviceTerms.UseLicense"),
      description: t("pages.serviceTerms.UseLicenseDescription"),
      content: t("pages.serviceTerms.UseLicenseContent"),
    },
    {
      id: 2,
      icon: "⚠️",
      title: t("pages.serviceTerms.Disclaimer"),
      description: t("pages.serviceTerms.DisclaimerDescription"),
      content: t("pages.serviceTerms.DisclaimerContent"),
    },
    {
      id: 3,
      icon: "⚖️",
      title: t("pages.serviceTerms.Limitations"),
      description: t("pages.serviceTerms.LimitationsDescription"),
      content: t("pages.serviceTerms.LimitationsContent"),
    },
    {
      id: 4,
      icon: "📋",
      description: t("pages.serviceTerms.AccuracyOfMaterialsDescription"),
      content: t("pages.serviceTerms.AccuracyOfMaterialsContent"),
    },
    {
      id: 5,
      icon: "🔗",
      title: t("pages.serviceTerms.Links"),
      description: t("pages.serviceTerms.LinksDescription"),
      content: t("pages.serviceTerms.LinksContent"),
    },
    {
      id: 6,
      icon: "⚕️",
      title: t("pages.serviceTerms.Modifications"),
      description: t("pages.serviceTerms.ModificationsDescription"),
      content: t("pages.serviceTerms.ModificationsContent"),
    },
    {
      id: 7,
      icon: "📜",
      title: t("pages.serviceTerms.GoverningLaw"),
      description: t("pages.serviceTerms.GoverningLawDescription"),
      content: t("pages.serviceTerms.GoverningLawContent"),
    },
    {
      id: 8,
      icon: "🚫",
      title: t("pages.serviceTerms.ProhibitedActivities"),
      description: t("pages.serviceTerms.ProhibitedActivitiesDescription"),
      content: t("pages.serviceTerms.ProhibitedActivitiesContent"),
    },
    {
      id: 9,
      icon: "👥",
      title: t("pages.serviceTerms.UserAccounts"),
      description: t("pages.serviceTerms.UserAccountsDescription"),
      content: t("pages.serviceTerms.UserAccountsContent"),
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.70)), url('https://images.unsplash.com/photo-1554224311-beee415c15c7?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl animate-fadeIn">
              {t("pages.serviceTerms.title")}
            </h1>
            <p
              className="text-xl text-gray-200 max-w-2xl leading-relaxed animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              {t("pages.serviceTerms.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-600 text-center">
            <span className="font-semibold text-slate-900">
              {t("pages.serviceTerms.updated")}:
            </span>{" "}
            {t("pages.serviceTerms.updatedDate")} |
            <span className="font-semibold text-slate-900 ml-4">
              {t("pages.serviceTerms.lastUpdated")}:
            </span>{" "}
            {t("pages.serviceTerms.lastUpdatedDate")}
          </p>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: "⚖️",
                title: t("pages.serviceTerms.legal"),
                desc: t("pages.serviceTerms.legalDescription"),
              },
              {
                icon: "📋",
                title: t("pages.serviceTerms.clear"),
                desc: t("pages.serviceTerms.clearDescription"),
              },
              {
                icon: "🛡️",
                title: t("pages.serviceTerms.protected"),
                desc: t("pages.serviceTerms.protectedDescription"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 text-center"
                style={{
                  animation: `slideUp 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 border border-slate-200 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {t("pages.serviceTerms.quickSummary")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {t("pages.serviceTerms.quickSummaryYouCan")}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t("pages.serviceTerms.quickSummaryYouCanDescription")}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">❌</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {t("pages.serviceTerms.quickSummaryYouCannot")}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t("pages.serviceTerms.quickSummaryYouCannotDescription")}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">🔄</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {t("pages.serviceTerms.quickSummaryCanChange")}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t("pages.serviceTerms.quickSummaryCanChangeDescription")}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">📢</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {t("pages.serviceTerms.quickSummaryYourResponsibility")}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t(
                    "pages.serviceTerms.quickSummaryYourResponsibilityDescription"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t("pages.serviceTerms.fullTermsConditions")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("pages.serviceTerms.fullTermsConditionsDescription")}
            </p>
          </div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg"
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? -1 : section.id
                    )
                  }
                  className="w-full p-6 flex items-start justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-4 text-left flex-1">
                    <div className="text-4xl pt-2">{section.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                      expandedSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === section.id && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-200 bg-slate-50 animate-expandDown">
                    <p className="text-slate-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-l-4 border-slate-900 rounded-lg p-8 shadow-md">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">⚠️</div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("pages.serviceTerms.importantNotice")}
                </h3>
                <p className="text-slate-700">
                  {t("pages.serviceTerms.importantNoticeDescription")}
                </p>
                <p className="text-slate-700">
                  {t("pages.serviceTerms.importantNoticeDescription2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                {t("pages.serviceTerms.ourRights")}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.ourRightsModify")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.ourRightsChange")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.ourRightsRemove")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.ourRightsTerminate")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">👤</span>
                {t("pages.serviceTerms.yourRights")}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.yourRightsUse")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.yourRightsAccess")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.yourRightsAccount")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span className="text-slate-700">
                    {t("pages.serviceTerms.yourRightsContact")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("pages.serviceTerms.questionsAboutOurTerms")}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t("pages.serviceTerms.questionsAboutOurTermsDescription")}
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-3">
              {t("pages.serviceTerms.questionsAboutOurTermsButton")}
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

        @keyframes expandDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 800px;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }

        .animate-expandDown {
          animation: expandDown 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
