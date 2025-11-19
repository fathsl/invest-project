import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const { t } = useTranslation();
  const [activeValue, setActiveValue] = useState(0);

  const navigate = useNavigate();

  const values = [
    {
      id: 0,
      title: t("pages.about.values.reliability.title"),
      description: t("pages.about.values.reliability.description"),
      icon: "🤝",
    },
    {
      id: 1,
      title: t("pages.about.values.expertise.title"),
      description: t("pages.about.values.expertise.description"),
      icon: "🎯",
    },
    {
      id: 2,
      title: t("pages.about.values.resultsDriven.title"),
      description: t("pages.about.values.resultsDriven.description"),
      icon: "📈",
    },
    {
      id: 3,
      title: t("pages.about.values.innovation.title"),
      description: t("pages.about.values.innovation.description"),
      icon: "💡",
    },
  ];

  /* const team = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "15+ yıl uluslararası ticaret deneyimi",
    },
    {
      name: "Elif Demir",
      role: "Strateji Direktörü",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Pazar analizi ve giriş stratejileri uzmanı",
    },
    {
      name: "Mehmet Kaya",
      role: "Operasyon Müdürü",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "Lojistik ve saha operasyonları lideri",
    },
    {
      name: "Zeynep Arslan",
      role: "İş Geliştirme Müdürü",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "B2B ilişkiler ve ortaklık geliştirme",
    },
  ]; */

  const milestones = [
    {
      year: "2010",
      title: t("pages.about.milestones.foundation.title"),
      description: t("pages.about.milestones.foundation.description"),
    },
    {
      year: "2015",
      title: t("pages.about.milestones.regionalExpansion.title"),
      description: t("pages.about.milestones.regionalExpansion.description"),
    },
    {
      year: "2018",
      title: t("pages.about.milestones.50Projects.title"),
      description: t("pages.about.milestones.50Projects.description"),
    },
    {
      year: "2020",
      title: t("pages.about.milestones.digitalTransformation.title"),
      description: t(
        "pages.about.milestones.digitalTransformation.description"
      ),
    },
    {
      year: "2024",
      title: t("pages.about.milestones.globalLeader.title"),
      description: t("pages.about.milestones.globalLeader.description"),
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.70)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl animate-fadeIn">
              {t("pages.about.title") || "AB Invest MMC"}
            </h1>
            <p
              className="text-xl text-gray-200 max-w-2xl leading-relaxed animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              {t("pages.about.description") || "AB Invest MMC"}
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t("pages.about.mission.title") || "AB Invest MMC"}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t("pages.about.mission.description") || "AB Invest MMC"}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t("pages.about.vision.title") || "AB Invest MMC"}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t("pages.about.vision.description") || "AB Invest MMC"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t("pages.about.values.title") || "AB Invest MMC"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("pages.about.values.description") || "AB Invest MMC"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveValue(value.id)}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t("pages.about.journey.title") || "AB Invest MMC"}
            </h2>
            <p className="text-xl text-slate-600">
              {t("pages.about.journey.description") || "AB Invest MMC"}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ekibimiz
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Deneyimli profesyonellerden oluşan ekibimizle yanınızdayız
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        </div> */}

      <div className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("pages.about.contact.title") || "AB Invest MMC"}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t("pages.about.contact.description") || "AB Invest MMC"}
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-3"
            >
              {t("pages.about.contact.button") || "AB Invest MMC"}
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

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
      `}</style>
    </section>
  );
}
