import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function References() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  const references = [
    {
      id: 1,
      company: "Global Investment Group",
      industry: "Investment & Finance",
      country: "International",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80",
      testimonial:
        "“Through AB Invest Export и Партнеры MMC, we gained access to exclusive international investment opportunities that significantly improved our portfolio performance.”",
      person: "Senior Investment Manager",
      position: "Investment Director",
      result: "Access to high-yield international investment opportunities",
    },
    {
      id: 2,
      company: "International Export Company",
      industry: "Export & Trade",
      country: "Europe / Middle East",
      logo: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
      testimonial:
        "“Thanks to the expertise and global network of AB Invest Export, we successfully entered new markets and increased our export volume by over 30%.”",
      person: "Export Manager",
      position: "Head of International Trade",
      result: "Successful entry into new international markets",
    },
    {
      id: 3,
      company: "Global Trade Partner",
      industry: "International Trade",
      country: "Multinational",
      logo: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&q=80",
      testimonial:
        "“The partnership with AB Invest Export allowed us to build strong, reliable business relationships across multiple countries.”",
      person: "Business Development Lead",
      position: "Partnership Manager",
      result: "Long-term strategic international partnership",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Successful International Projects",
      icon: "📊",
    },
    { number: "30+", label: "Countries & Markets Reached", icon: "🌍" },
    {
      number: "%95",
      label: "Partner & Member Satisfaction",
      icon: "⭐",
    },
    {
      number: "€50M+",
      label: "Total Trade & Investment Volume Facilitated",
      icon: "💼",
    },
  ];

  const industries = [
    "all",
    "Investment & Finance",
    "Export & Trade",
    "Manufacturing & Industry",
    "Energy & Sustainability",
    "Healthcare & Pharmaceuticals",
    "Automotive & Logistics",
  ];

  const filteredReferences =
    activeTab === "all"
      ? references
      : references.filter((ref) => ref.industry === activeTab);

  return (
    <section className="min-h-screen bg-white">
      <div className="relative py-20 px-6 bg-linear-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Success Stories & Trusted Partnerships
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are proud to support investors and companies in expanding
            globally through successful investment projects, export growth, and
            long-term international partnerships.
          </p>
        </div>
      </div>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveTab(industry)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === industry
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {industry === t("pages.references.industry.all")
                  ? t("pages.references.industry.all")
                  : industry}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReferences.map((ref, index) => (
              <div
                key={ref.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={ref.logo}
                    alt={ref.company}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {ref.industry}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    <span>🌍</span> {ref.country}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {ref.company}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                    "{ref.testimonial}"
                  </p>

                  <div className="border-t border-slate-100 pt-4 mb-4">
                    <p className="font-semibold text-slate-900 text-sm">
                      {ref.person}
                    </p>
                    <p className="text-slate-500 text-xs">{ref.position}</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-2">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-blue-900 text-sm font-semibold">
                      {ref.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {t("pages.references.title") || "Trusted Brands"}
          </h2>
          <p className="text-slate-600 mb-12">
            {t("pages.references.description") ||
              "Valuable business partners we have worked with together"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <div className="w-full h-16 bg-slate-100 rounded flex items-center justify-center text-slate-400 font-semibold">
                  LOGO {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-linear-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become Part of Our Global Success Network
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join AB Invest Export и Партнеры MMC and gain access to a trusted
              international network, exclusive investment opportunities, and
              export-driven growth solutions.
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
      `}</style>
    </section>
  );
}
