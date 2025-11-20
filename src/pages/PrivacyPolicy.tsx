import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<number>(0);

  const sections = [
    {
      id: 0,
      icon: "📋",
      title: t("pages.privacyPolicy.Introduction"),
      description: t("pages.privacyPolicy.IntroductionDescription"),
      content: t("pages.privacyPolicy.IntroductionContent"),
    },
    {
      id: 1,
      icon: "📊",
      title: t("pages.privacyPolicy.InformationWeCollect"),
      description: t("pages.privacyPolicy.InformationWeCollectDescription"),
      content: t("pages.privacyPolicy.InformationWeCollectContent"),
    },
    {
      id: 2,
      icon: "🔍",
      title: t("pages.privacyPolicy.UseOfYourInformation"),
      description: t("pages.privacyPolicy.UseOfYourInformationDescription"),
      content: t("pages.privacyPolicy.UseOfYourInformationContent"),
    },
    {
      id: 3,
      icon: "🛡️",
      title: t("pages.privacyPolicy.DataSecurity"),
      description: t("pages.privacyPolicy.DataSecurityDescription"),
      content: t("pages.privacyPolicy.DataSecurityContent"),
    },
    {
      id: 4,
      icon: "👥",
      title: t("pages.privacyPolicy.ThirdPartyDisclosure"),
      description: t("pages.privacyPolicy.ThirdPartyDisclosureDescription"),
      content: t("pages.privacyPolicy.ThirdPartyDisclosureContent"),
    },
    {
      id: 5,
      icon: "✉️",
      title: t("pages.privacyPolicy.ContactUs"),
      description: t("pages.privacyPolicy.ContactUsDescription"),
      content: t("pages.privacyPolicy.ContactUsContent"),
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.70)), url('https://images.unsplash.com/photo-1516321318423-f06f70e504b9?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl animate-fadeIn">
              {t("pages.privacyPolicy.title")}
            </h1>
            <p
              className="text-xl text-gray-200 max-w-2xl leading-relaxed animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              {t("pages.privacyPolicy.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-600 text-center">
            <span className="font-semibold text-slate-900">
              {t("pages.privacyPolicy.updated")}:
            </span>{" "}
            {t("pages.privacyPolicy.updatedDate")}
          </p>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: "🔐",
                title: t("pages.privacyPolicy.secure"),
                desc: t("pages.privacyPolicy.secureDescription"),
              },
              {
                icon: "👁️",
                title: t("pages.privacyPolicy.transparent"),
                desc: t("pages.privacyPolicy.transparentDescription"),
              },
              {
                icon: "⚖️",
                title: t("pages.privacyPolicy.compliant"),
                desc: t("pages.privacyPolicy.compliantDescription"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
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

      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t("pages.privacyPolicy.policyDetails")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("pages.privacyPolicy.policyDetailsDescription")}
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
                  <div className="px-6 pb-6 pt-0 border-t border-slate-200 bg-gradient-to-br from-slate-50 to-white animate-expandDown">
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

      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("pages.privacyPolicy.yourPrivacyRights")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="text-3xl">🗂️</div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {t("pages.privacyPolicy.accessYourData")}
                    </h3>
                    <p className="text-blue-100">
                      {t("pages.privacyPolicy.accessYourDataDescription")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">✏️</div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {t("pages.privacyPolicy.correctInformation")}
                    </h3>
                    <p className="text-blue-100">
                      {t("pages.privacyPolicy.correctInformationDescription")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🗑️</div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {t("pages.privacyPolicy.deleteYourData")}
                    </h3>
                    <p className="text-blue-100">
                      {t("pages.privacyPolicy.deleteYourDataDescription")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">⛔</div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {t("pages.privacyPolicy.optOut")}
                    </h3>
                    <p className="text-blue-100">
                      {t("pages.privacyPolicy.optOutDescription")}
                    </p>
                  </div>
                </div>
              </div>
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
              {t("pages.privacyPolicy.contactPrivacyTeam")}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t("pages.privacyPolicy.contactPrivacyTeamDescription")}
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-3">
              {t("pages.privacyPolicy.contactPrivacyTeamButton")}
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
            max-height: 500px;
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
