import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: "📊",
      title: "Pazar Analizi ve Araştırma",
      titleEn: "Market Analysis & Research",
      description:
        "Hedef pazarların detaylı analizi, rekabet ortamı değerlendirmesi ve fırsat tespiti.",
      descriptionEn:
        "Detailed analysis of target markets, competitive environment assessment and opportunity identification.",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Giriş Stratejisi Geliştirme",
      titleEn: "Entry Strategy Development",
      description:
        "İşletmenize özel, risk minimizasyonlu ve sürdürülebilir pazar giriş stratejileri.",
      descriptionEn:
        "Business-specific, risk-minimized and sustainable market entry strategies.",
    },
    {
      id: 3,
      icon: "🤝",
      title: "İş Ortağı Bulma",
      titleEn: "Business Partner Sourcing",
      description:
        "Güvenilir distribütör, tedarikçi ve iş ortaklarının tespiti ve bağlantı kurulması.",
      descriptionEn:
        "Identification and connection with reliable distributors, suppliers and business partners.",
    },
    {
      id: 4,
      icon: "📋",
      title: "Uyumluluk ve Düzenleme Danışmanlığı",
      titleEn: "Compliance & Regulatory Consulting",
      description:
        "Yerel yasal düzenlemeler, sertifikasyonlar ve uyum süreçlerinde rehberlik.",
      descriptionEn:
        "Guidance on local regulations, certifications and compliance processes.",
    },
    {
      id: 5,
      icon: "🌍",
      title: "Saha Desteği",
      titleEn: "Field Support",
      description:
        "Yurt dışı ziyaretler, fuarlar ve müşteri görüşmelerinde profesyonel destek.",
      descriptionEn:
        "Professional support during overseas visits, trade fairs and client meetings.",
    },
    {
      id: 6,
      icon: "📈",
      title: "Büyüme ve Ölçeklendirme",
      titleEn: "Growth & Scaling",
      description:
        "Mevcut pazarlarda genişleme ve yeni bölgelere açılma stratejileri.",
      descriptionEn:
        "Expansion strategies in existing markets and entry into new regions.",
    },
  ];
  return (
    <section className="min-h-screen bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {t("pages.services.title") || "Hizmetlerimiz"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uluslararası pazarlara açılmak isteyen işletmeler için strateji,
            analiz ve saha desteği sunan profesyonel danışmanlık hizmetleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/5 rounded-2xl transition-all duration-500"></div>

              <div className="relative mb-6">
                <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                <span className="text-blue-500 text-xl">→</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-20 text-center animate-fadeIn"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Uluslararası Pazarlara Hazır mısınız?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Doğru pazara, doğru modelle ve minimum riskle giriş yapmanız için
              profesyonel destek sunuyoruz.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 inline-flex items-center gap-2">
              İletişime Geçin
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
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
