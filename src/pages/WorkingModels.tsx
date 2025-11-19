import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function WorkingModels() {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      title: "Proje Bazlı Danışmanlık",
      titleEn: "Project-Based Consulting",
      description:
        "Belirli bir proje veya hedef için kapsamlı danışmanlık hizmeti",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      icon: "📋",
      features: [
        "Pazar araştırması ve analizi",
        "Giriş stratejisi geliştirme",
        "İş ortağı bulma ve değerlendirme",
        "Belirli süre için destek",
      ],
      duration: "3-6 Ay",
      ideal: "İlk defa ihracat yapacak şirketler",
      pricing: "Proje bazlı sabit ücret",
    },
    {
      id: 2,
      title: "Sürekli Danışmanlık",
      titleEn: "Ongoing Advisory",
      description: "Uzun vadeli iş birliği ile sürekli stratejik destek",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      icon: "🤝",
      features: [
        "Aylık stratejik görüşmeler",
        "Pazar gelişmelerinin takibi",
        "Sürekli iş geliştirme desteği",
        "7/24 danışmanlık erişimi",
      ],
      duration: "12+ Ay",
      ideal: "Aktif ihracat yapan büyüyen şirketler",
      pricing: "Aylık abonelik modeli",
    },
    {
      id: 3,
      title: "Başarı Ortaklığı",
      titleEn: "Success Partnership",
      description: "Performans bazlı iş birliği modeli",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
      icon: "💼",
      features: [
        "Sonuç odaklı çalışma",
        "Satış performansına göre ücretlendirme",
        "Aktif saha ve satış desteği",
        "Risk paylaşımı yaklaşımı",
      ],
      duration: "24+ Ay",
      ideal: "Agresif büyüme hedefleyen şirketler",
      pricing: "Başarı komisyonu + düşük sabit ücret",
    },
    {
      id: 4,
      title: "Saha Desteği",
      titleEn: "Field Support",
      description: "Yurt dışı ziyaret ve etkinliklerde profesyonel destek",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      icon: "✈️",
      features: [
        "Fuar katılımı organizasyonu",
        "B2B görüşme düzenleme",
        "Tercümanlık hizmeti",
        "Yerel pazar rehberliği",
      ],
      duration: "Etkinlik bazlı",
      ideal: "Fuarlara katılan veya pazar ziyareti yapan şirketler",
      pricing: "Gün/etkinlik bazlı ücretlendirme",
    },
    {
      id: 5,
      title: "İhracat Eğitimi",
      titleEn: "Export Training",
      description: "Ekip kapasitesini artırmak için eğitim programları",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      icon: "📚",
      features: [
        "İhracat süreçleri eğitimi",
        "Pazar araştırma teknikleri",
        "Müzakere ve kültürel farkındalık",
        "Online ve yüz yüze eğitimler",
      ],
      duration: "1-3 Ay",
      ideal: "İç kaynaklarını güçlendirmek isteyen şirketler",
      pricing: "Eğitim programı başına sabit ücret",
    },
    {
      id: 6,
      title: "Özel Çözümler",
      titleEn: "Custom Solutions",
      description: "İşletmenizin özel ihtiyaçlarına göre tasarlanmış model",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      icon: "⚙️",
      features: [
        "Tamamen özelleştirilebilir",
        "Hibrit çalışma modelleri",
        "Esnek ödeme seçenekleri",
        "Özel ekip ataması",
      ],
      duration: "İhtiyaca göre",
      ideal: "Benzersiz ihtiyaçları olan kurumsal şirketler",
      pricing: "Özel teklif",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "İlk Görüşme",
      description: "İhtiyaçlarınızı anlıyoruz ve hedeflerinizi belirliyoruz",
      icon: "💬",
    },
    {
      step: "02",
      title: "Analiz ve Planlama",
      description: "Pazar analizi yapıyor ve size özel strateji geliştiriyoruz",
      icon: "📊",
    },
    {
      step: "03",
      title: "Uygulama",
      description:
        "Belirlenen stratejileri hayata geçiriyor ve saha desteği sağlıyoruz",
      icon: "🚀",
    },
    {
      step: "04",
      title: "Takip ve Optimizasyon",
      description: "Sonuçları ölçüyor ve süreçleri sürekli iyileştiriyoruz",
      icon: "📈",
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="relative py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm text-blue-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Çalışma Modellerimiz
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Size Uygun Çalışma Modelini Seçin
          </h1>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            İşletmenizin ihtiyaçlarına ve hedeflerine göre esnek çalışma
            modelleri sunuyoruz
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
                        <strong>Süre:</strong> {model.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-600">💰</span>
                      <span className="text-slate-600">
                        <strong>Fiyat:</strong> {model.pricing}
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
                        Özellikler:
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
                        İdeal:
                      </p>
                      <p className="text-sm text-blue-800">{model.ideal}</p>
                    </div>
                  </div>

                  <button className="w-full mt-4 text-blue-600 font-semibold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                    {selectedModel === model.id
                      ? "Daha Az Göster"
                      : "Detayları Gör"}
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
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Adım adım profesyonel destek ile hedeflerinize ulaşın
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
              Modelleri Karşılaştırın
            </h2>
            <p className="text-xl text-slate-600">
              Hangi model sizin için en uygun?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">
                    Özellik
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900">
                    Proje Bazlı
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900">
                    Sürekli
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900">
                    Başarı Ortaklığı
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Başlangıç Maliyeti
                  </td>
                  <td className="px-6 py-4 text-center text-sm">Orta</td>
                  <td className="px-6 py-4 text-center text-sm">Düşük</td>
                  <td className="px-6 py-4 text-center text-sm">Çok Düşük</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">Esneklik</td>
                  <td className="px-6 py-4 text-center text-sm">Orta</td>
                  <td className="px-6 py-4 text-center text-sm">Yüksek</td>
                  <td className="px-6 py-4 text-center text-sm">Yüksek</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Risk Paylaşımı
                  </td>
                  <td className="px-6 py-4 text-center text-sm">Hayır</td>
                  <td className="px-6 py-4 text-center text-sm">Hayır</td>
                  <td className="px-6 py-4 text-center text-sm">Evet</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Uzun Vadeli Destek
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
              Size Özel Çözüm Önerelim
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              İhtiyaçlarınızı değerlendiriyor ve en uygun çalışma modelini
              öneriyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2">
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
                Teklif Alın
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
