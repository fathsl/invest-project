import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: t("services.Market Analysis and Research"),
      description:
         t("services.Market Analysis and Research Description"),
      features: [
        t("services.Market Analysis and Research Features 1"),
        t("services.Market Analysis and Research Features 2"),
        t("services.Market Analysis and Research Features 3"),
      ],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: t("services.Entry Strategy Development"),
      description:
         t("services.Entry Strategy Development Description"),
      features: [
        t("services.Entry Strategy Development Features 1"),
        t("services.Entry Strategy Development Features 2"),
        t("services.Entry Strategy Development Features 3"),
      ],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      title: t("services.Business Partner Sourcing"),
      description:
         t("services.Business Partner Sourcing Description"),
      features: [
        t("services.Business Partner Sourcing Features 1"),
        t("services.Business Partner Sourcing Features 2"),
        t("services.Business Partner Sourcing Features 3"),
      ],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      title: t("services.Compliance & Regulatory Consulting"),
      description:
         t("services.Compliance & Regulatory Consulting Description"),
      features: [
        "Yasal Uyumluluk",
        "Sertifikasyon Desteği",
        "Gümrük Danışmanlığı",
      ],
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      title: t("services.Field Support"),
      description:
         t("services.Field Support Description"),
      features: ["Fuar Organizasyonu", "B2B Görüşmeleri", "Yerel Rehberlik"],
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: t("services.Growth & Scaling"),
      description:
         t("services.Growth & Scaling Description"),
      features: [
        "Büyüme Stratejisi",
        "Operasyonel Verimlilik",
        "Çok Bölgeli Yönetim",
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
            {t("pages.services.title") || "Hizmetlerimiz"}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Uluslararası pazarlara açılmak isteyen işletmeler için strateji,
            analiz ve saha desteği sunan profesyonel danışmanlık hizmetleri
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

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
                        className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
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
                    Detaylı Bilgi
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
            { number: "50+", label: "Başarılı Proje" },
            { number: "30+", label: "Ülke Deneyimi" },
            { number: "100%", label: "Müşteri Memnuniyeti" },
            { number: "15+", label: "Yıllık Deneyim" },
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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Uluslararası Pazarlara Hazır mısınız?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Doğru pazara, doğru modelle ve minimum riskle giriş yapmanız
                için profesyonel destek sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                  Ücretsiz Danışmanlık
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
                  İletişime Geçin
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
