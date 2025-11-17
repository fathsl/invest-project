import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/85 to-blue-950/85"></div>
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 md:top-20 left-5 md:left-10 w-40 md:w-72 h-40 md:h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">{t('home.hero.badge')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              {t('home.hero.title_main')}
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                {t('home.hero.title_highlight')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button className="group bg-white text-blue-900 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                {t('home.hero.cta_primary')}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-transparent border-2 border-white text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                {t('home.hero.cta_secondary')}
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-14 md:mt-16 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">$2.5B+</div>
                <div className="text-blue-200 text-xs sm:text-sm">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">15+</div>
                <div className="text-blue-200 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">98%</div>
                <div className="text-blue-200 text-xs sm:text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">{t('home.why.title')}</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              {t('home.why.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-900 transition-colors">
                <TrendingUp className="text-blue-900 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{t('home.why.cards.analysis.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('home.why.cards.analysis.body')}
              </p>
            </div>

            <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-900 transition-colors">
                <Shield className="text-blue-900 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{t('home.why.cards.secure.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('home.why.cards.secure.body')}
              </p>
            </div>

            <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-900 transition-colors">
                <Users className="text-blue-900 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{t('home.why.cards.support.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('home.why.cards.support.body')}
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">
                  {t('home.cta.title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  {t('home.cta.subtitle')}
                </p>
                <button className="bg-blue-900 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center gap-2">
                  {t('home.cta.button')}
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">✓</div>
                    <span className="text-sm sm:text-base text-gray-700">No hidden fees or charges</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">✓</div>
                    <span className="text-sm sm:text-base text-gray-700">Instant portfolio tracking</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">✓</div>
                    <span className="text-sm sm:text-base text-gray-700">Expert financial advice</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">✓</div>
                    <span className="text-sm sm:text-base text-gray-700">24/7 customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
          }
          
          .delay-200 {
            animation-delay: 0.2s;
            opacity: 0;
            animation-fill-mode: forwards;
          }
          
          .delay-400 {
            animation-delay: 0.4s;
            opacity: 0;
            animation-fill-mode: forwards;
          }
          
          .delay-600 {
            animation-delay: 0.6s;
            opacity: 0;
            animation-fill-mode: forwards;
          }
        `}</style>
      </section>
    </div>

  )
}
