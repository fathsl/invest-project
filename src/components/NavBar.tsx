import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavBar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close the menu if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setIsOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const navLinks = [
    { name: t("nav.home", { defaultValue: "Home" }), to: "/" },
    { name: t("nav.services", { defaultValue: "Services" }), to: "/services" },
    {
      name: t("nav.references", { defaultValue: "References" }),
      to: "/references",
    },
    {
      name: t("nav.workingModels", { defaultValue: "Working Models" }),
      to: "/working-models",
    },
    { name: t("nav.aboutUs", { defaultValue: "About Us" }), to: "/about" },
    { name: t("nav.contact", { defaultValue: "Contact" }), to: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-sky-950 transition-shadow duration-300 ${
        isScrolled || isOpen ? "shadow-lg shadow-slate-950/30" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* logo.png has wide transparent margins, so crop to the artwork */}
          <Link
            to="/"
            aria-label="Home"
            className="relative block shrink-0 overflow-hidden h-12 lg:h-14 aspect-[410/215] lg:justify-self-start"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="absolute max-w-none"
              style={{ width: "121.95%", left: "-9.756%", top: "-62.79%" }}
            />
          </Link>

          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-1 xl:gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-sky-100/80 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:justify-self-end">
            <LanguageSwitcher variant="dark" />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden text-white p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] z-40 bg-white overflow-y-auto overscroll-contain">
          <div className="min-h-full px-6 pt-2 pb-6 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  `block px-2 py-3 [@media(min-height:700px)]:py-4 text-lg font-medium border-b border-slate-100 ${
                    isActive
                      ? "text-sky-700"
                      : "text-sky-950 hover:text-sky-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-auto pt-6">
              <LanguageSwitcher
                variant="light"
                direction="up"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
