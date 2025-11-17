import { ChevronDown, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { i18n } = useTranslation()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = useMemo(() => ([
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'az', name: 'Azərbaycanca', flag: '🇦🇿' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ]), [])

  const currentLang = useMemo(() => {
    const found = languages.find(l => l.code === i18n.resolvedLanguage)
    return found ?? languages[0]
  }, [i18n.resolvedLanguage, languages])

  const handleLanguageChange = (language: {code: string}) => {
    i18n.changeLanguage(language.code)
    setIsLanguageOpen(false)
  };

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-2xl font-bold">Invest</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed max-w-md">
              Your trusted partner in building wealth through strategic investments. We provide expert guidance and innovative solutions for your financial future.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                <Mail size={18} />
                <span className="text-sm">contact@invest.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                <Phone size={18} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                <MapPin size={18} />
                <span className="text-sm">123 Financial Street, NY 10001</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Company
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#press" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#blog" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#investment" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Investment Plans
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Portfolio Management
                </a>
              </li>
              <li>
                <a href="#advisory" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Financial Advisory
                </a>
              </li>
              <li>
                <a href="#retirement" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Retirement Planning
                </a>
              </li>
              <li>
                <a href="#wealth" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Wealth Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Resources
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#guides" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Investment Guides
                </a>
              </li>
              <li>
                <a href="#terms" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-blue-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-blue-200 text-sm">
                Subscribe to our newsletter for the latest investment insights and market trends.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-300 text-sm">
              2024 Invest. All rights reserved.
            </div>

            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 border border-white/20"
              >
                <span className="text-2xl">{currentLang.flag}</span>
                <span className="text-sm font-medium">{currentLang.name}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-2xl py-2 min-w-[200px] border border-gray-200">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-blue-50 transition-colors ${
                        currentLang.code === language.code ? 'bg-blue-50' : ''
                      }`}
                    >
                      <span className="text-2xl">{language.flag}</span>
                      <span className="text-gray-900 font-medium">{language.name}</span>
                      {currentLang.code === language.code && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-6 text-sm text-blue-300">
              <a href="#terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}