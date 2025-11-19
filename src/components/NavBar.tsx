import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home', { defaultValue: 'Home' }), to: '/' },
    { name: t('nav.services', { defaultValue: 'Services' }), to: '/services' },
    { name: t('nav.references', { defaultValue: 'References' }), to: '/references' },
    { name: t('nav.workingModels', { defaultValue: 'Working Models' }), to: '/working-models' },
    { name: t('nav.aboutUs', { defaultValue: 'About Us' }), to: '/about' },
  ];

  return (
    <nav 
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-50' : ''
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-900">Invest</span>
            </div>

            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-blue-900 underline underline-offset-4' : 'text-blue-900 hover:text-blue-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Link to="/contact">
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  {t('nav.contact', { defaultValue: 'Contact' })}
                </button>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-900 hover:text-blue-700 p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
            <div className="h-full px-6 pt-6 pb-3 flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-4 rounded-md text-lg font-medium border-b border-gray-100 ${
                      isActive ? 'text-blue-900' : 'text-blue-900 hover:bg-blue-50'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  end
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-auto mb-6">
                <button className="w-full bg-blue-900 text-white px-4 py-4 rounded-md text-lg font-medium hover:bg-blue-800 transition-colors">
                  {t('nav.contact', { defaultValue: 'Contact' })}
                </button>
              </Link>
            </div>
          </div>
        )}
    </nav>
  )
}
