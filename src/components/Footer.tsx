import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = useMemo(
    () => [
      { code: "en", name: "English", flag: "🇺🇸" },
      { code: "tr", name: "Türkçe", flag: "🇹🇷" },
      { code: "az", name: "Azərbaycanca", flag: "🇦🇿" },
      { code: "ru", name: "Русский", flag: "🇷🇺" },
    ],
    []
  );

  const currentLang = useMemo(() => {
    const found = languages.find((l) => l.code === i18n.resolvedLanguage);
    return found ?? languages[0];
  }, [i18n.resolvedLanguage, languages]);

  const handleLanguageChange = (language: { code: string }) => {
    i18n.changeLanguage(language.code);
    setIsLanguageOpen(false);
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">AB</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">AB Invest</h3>
                <p className="text-xs text-slate-400">Export Partner MMC</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner in international business expansion.
              Professional consultancy services for global market entry.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Export Consultancy",
                "Business Development",
                "International Branding",
                "Logistics & Operations",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <ChevronDown className="rotate-[-90deg]" size={14} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", link: "#about" },
                { name: "Working Models", link: "#process" },
                { name: "Contact", link: "#contact" },
                { name: "Careers", link: "#contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <ChevronDown className="rotate-[-90deg]" size={14} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Connect With Us</h4>
            <p className="text-slate-400 text-sm mb-6">
              Stay updated with our latest insights and market intelligence
            </p>
            <div className="flex gap-3 mb-6">
              {[
                { icon: "in", label: "LinkedIn" },
                { icon: "✉", label: "Email" },
                { icon: "🌐", label: "Website" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  title={social.label}
                  className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <a
                href="tel:+994XXXXXXXXX"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} />
                +994 XX XXX XX XX
              </a>
              <a
                href="mailto:info@abinvest.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} />
                info@abinvest.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 AB Invest - Export Partner MMC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
