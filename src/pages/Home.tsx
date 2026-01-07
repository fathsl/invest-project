import {
  ArrowRight,
  Award,
  Brain,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Search,
  Target,
  TrendingUp,
  TrendingUpIcon,
  Truck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const sectionOrder = [
    "home",
    "services",
    "process",
    "about",
    "contact",
  ] as const;

  const getCurrentSectionIndex = () => {
    for (let i = 0; i < sectionOrder.length; i++) {
      if (visibleSections.has(sectionOrder[i])) return i;
    }
    return 0;
  };

  const scrollToSection = (index: number) => {
    const id = sectionOrder[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const scrollToNextSection = () => {
    const current = getCurrentSectionIndex();
    const next = Math.min(current + 1, sectionOrder.length - 1);
    if (next !== current) scrollToSection(next);
  };

  const scrollToPrevSection = () => {
    const current = getCurrentSectionIndex();
    const prev = Math.max(current - 1, 0);
    if (prev !== current) scrollToSection(prev);
  };

  const services = [
    {
      icon: Search,
      title: "Export Promotion",
      subtitle: "International Market Access Solutions",
      description:
        "Supporting local products and services to reach international markets. We provide strategic guidance, market analysis, and connections to help Azerbaijani businesses expand their export potential and succeed globally.",
      features: [
        "International Market Entry Strategy",
        "Export Documentation & Compliance",
        "Trade Partnership Development",
        "Market Research & Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      icon: Handshake,
      title: "Foreign Investment Attraction",
      subtitle: "Capital & Investment Facilitation",
      description:
        "Directing foreign capital to Azerbaijan's economy and improving the investment environment. We connect international investors with high-potential opportunities and facilitate successful investment partnerships.",
      features: [
        "Investment Opportunity Sourcing",
        "Due Diligence Support",
        "Investor Relations Management",
        "Investment Climate Advisory",
      ],
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    },
    {
      icon: Award,
      title: "Digital Business Solutions",
      subtitle: "Technology-Driven Innovation",
      description:
        "Developing and implementing innovative digital tools based on modern technologies. Our AI-powered platforms and digital solutions help businesses transform, scale, and compete in the global marketplace.",
      features: [
        "AI-Integrated B2B Platforms",
        "Digital Transformation Consulting",
        "Virtual Business Portals",
        "Technology Implementation",
      ],
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
    },
    {
      icon: Truck,
      title: "Event & Consulting Services",
      subtitle: "Strategic Business Development",
      description:
        "Professional business event organization, strategic consulting, and comprehensive training services. We create platforms for meaningful connections and provide expert guidance for business growth.",
      features: [
        "Business Event Management",
        "Strategic Consulting Services",
        "Professional Training Programs",
        "Partnership Facilitation",
      ],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
  ];

  const workingModels = [
    {
      icon: FileText,
      title: "Project-Based",
      description:
        "Single project consultation for specific business objectives with defined deliverables and timeline.",
      price: "Custom Quote",
      features: [
        "Market Entry Projects",
        "Investment Facilitation",
        "Export Strategy Development",
        "Digital Platform Integration",
      ],
      ideal:
        "Ideal for: Companies seeking specific market entry or investment opportunities",
    },
    {
      icon: Brain,
      title: "Partnership Retainer (Popular)",
      description:
        "Ongoing strategic partnership for continuous business development and growth support.",
      price: "Contact for Custom Package",
      features: [
        "Continuous Strategic Guidance",
        "Priority Investment Opportunities",
        "Regular Business Matching",
        "Ongoing Digital Support",
      ],
      ideal:
        "Ideal for: Growing businesses and active exporters seeking sustained growth",
      popular: true,
    },
    {
      icon: Globe,
      title: "Comprehensive Solutions",
      description:
        "Full-service package including all consulting, digital, and partnership services.",
      price: "Custom Package",
      features: [
        "Complete Business Development",
        "End-to-End Digital Solutions",
        "Event Participation Access",
        "Dedicated Account Management",
      ],
      ideal:
        "Ideal for: Businesses committed to comprehensive international expansion",
    },
  ];

  const whyChoose = [
    {
      icon: Building2,
      title: "Foreign Investment Expertise",
      description:
        "Proven track record in attracting foreign capital to Azerbaijan with $65M+ successfully facilitated and strategic partnerships across international markets.",
    },
    {
      icon: Globe,
      title: "Digital Innovation Leaders",
      description:
        "Cutting-edge digital platforms with AI integration, supporting 720+ active users and delivering 70% success rate on digital transformation projects.",
    },
    {
      icon: Target,
      title: "Strategic Event Management",
      description:
        "Professional business event organization with 1,200+ annual participants, fostering valuable B2B connections and partnership opportunities.",
    },
    {
      icon: Users,
      title: "Comprehensive Business Support",
      description:
        "End-to-end consulting services from market entry to operational excellence, with 160+ businesses trained and 35+ strategic partnerships established.",
    },
  ];

  const stats = [
    { number: "$65M+", label: "Foreign Capital Attracted", icon: Target },
    { number: "10+", label: "International Contracts Signed", icon: Award },
    {
      number: "1,200+",
      label: "Event Participants Annually",
      icon: TrendingUp,
    },
    { number: "25+", label: "Countries in Our Network", icon: MapPin },
  ];

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.60)), 
                      url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/60 via-slate-900/40 to-slate-900/20"></div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="w-full animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
                <Globe size={16} />
                Your Gateway to Global Markets
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Your Gateway to Investment,
                <span className="block text-blue-400 mt-2">
                  Export & Global Partnerships
                </span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                AB Invest – strategic business, investment, and export platform
                connecting companies, investors, and partners across
                international markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                >
                  Start Your Journey
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Explore Services
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <Icon className="mx-auto mb-2 text-blue-400" size={28} />
                      <div className="text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose AB Invest?
            </h2>
            <p className="text-xl text-slate-600">
              Your trusted partner for international business expansion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-linear-to-b from-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-size-[40px_40px]"></div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible("services")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Export Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end consultancy services tailored to your international
              expansion needs
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative">
                  <div className={`grid lg:grid-cols-12 gap-8 items-center`}>
                    {/* Image Section with Creative Layout */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "" : "lg:col-start-7"
                      } relative group`}
                    >
                      <div className="relative">
                        {/* Decorative Background Elements */}
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${
                            isEven
                              ? "from-blue-600/20 to-purple-600/20"
                              : "from-purple-600/20 to-blue-600/20"
                          } rounded-3xl transform ${
                            isEven ? "rotate-3" : "-rotate-3"
                          } transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105`}
                        ></div>

                        {/* Main Image Container */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02]">
                          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10"></div>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-112.5 object-cover transform transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Floating Icon Badge */}
                          <div className="absolute top-6 left-6 z-20 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                            <Icon className="text-blue-600" size={32} />
                          </div>

                          {/* Bottom Info Bar */}
                          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-linear-to-t from-slate-900 to-transparent">
                            <div className="text-white">
                              <div className="text-sm font-semibold text-blue-300 mb-1">
                                {service.subtitle}
                              </div>
                              <div className="text-2xl font-bold">
                                {service.title}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Decorative Corner Element */}
                        <div
                          className={`absolute ${
                            isEven ? "-right-4 -bottom-4" : "-left-4 -bottom-4"
                          } w-32 h-32 bg-blue-600 rounded-2xl opacity-10 transform ${
                            isEven ? "rotate-12" : "-rotate-12"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven
                          ? "lg:col-start-7"
                          : "lg:col-start-1 lg:row-start-1"
                      }`}
                    >
                      <div className="space-y-6">
                        <div>
                          <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-700 text-sm font-semibold mb-4">
                            Service {idx + 1} of {services.length}
                          </div>
                          <h3 className="text-4xl font-bold text-slate-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold">
                            {service.subtitle}
                          </p>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="pt-4">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                            Key Capabilities
                          </h4>
                          <div className="space-y-3">
                            {service.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                              >
                                <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 transform group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                                  <CheckCircle2
                                    className="text-white"
                                    size={14}
                                  />
                                </div>
                                <span className="text-slate-700 font-medium">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <button className="group/btn inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Learn More
                            <ArrowRight
                              size={18}
                              className="transform group-hover/btn:translate-x-1 transition-transform"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line Between Services */}
                  {idx < services.length - 1 && (
                    <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-px h-16 bg-linear-to-b from-slate-300 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="py-20 bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible("process")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible Working Models
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the collaboration model that best fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>

            {workingModels.map((model, idx) => {
              const Icon = model.icon;
              return (
                <div
                  key={idx}
                  className={`relative group transition-all duration-500 ${
                    model.popular ? "md:-translate-y-8" : "hover:-translate-y-4"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${
                      model.popular
                        ? "from-blue-600/40 to-purple-600/40"
                        : "from-blue-600/20 to-purple-600/20"
                    } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border transition-all duration-500 ${
                      model.popular
                        ? "border-blue-400 shadow-2xl shadow-blue-600/20"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    {model.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                          <Award size={16} />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="mb-6 relative">
                      <div
                        className={`w-16 h-16 bg-linear-to-br ${
                          model.popular
                            ? "from-blue-600 to-purple-600"
                            : "from-blue-600/80 to-blue-700/80"
                        } rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                      >
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {model.title}
                    </h3>
                    <p className="text-slate-300 mb-4 min-h-12">
                      {model.description}
                    </p>
                    <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                      {model.price}
                    </div>

                    <div className="space-y-3 mb-6">
                      {model.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="w-5 h-5 bg-blue-600/30 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transform group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                            <CheckCircle2 className="text-blue-400" size={14} />
                          </div>
                          <span className="text-slate-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/10 mb-6">
                      <p className="text-sm text-slate-400 italic">
                        {model.ideal}
                      </p>
                    </div>

                    <button
                      className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                        model.popular
                          ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/60"
                          : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
                      }`}
                    >
                      Choose Plan
                    </button>
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-300 mb-6">
              Not sure which model fits your needs?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Free Consultation
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible("about")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                About AB Invest
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Your Trusted Partner in International Business Growth
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                AB Invest & Export & Partners MMC is a professional consultancy
                firm specializing in foreign investment attraction, export
                promotion, and digital business innovation. Based in Baku,
                Azerbaijan, we serve as a strategic bridge connecting local
                businesses with international markets and foreign investors with
                Azerbaijan's growing economy.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our mission is to increase export opportunities, attract foreign
                investment, and strengthen local-international business
                cooperation through cutting-edge digital solutions. We combine
                deep local market knowledge with global business expertise to
                deliver measurable results and sustainable economic growth.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, number: "$65M+", label: "Capital Attracted" },
                  {
                    icon: Globe,
                    number: "10+",
                    label: "International Contracts",
                  },
                  {
                    icon: TrendingUpIcon,
                    number: "22+",
                    label: "B2B Partnerships",
                  },
                  {
                    icon: Users,
                    number: "720+",
                    label: "Platform Users",
                  },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-linear-to-br from-slate-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                    >
                      <Icon
                        className="text-blue-600 mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        size={32}
                      />
                      <div className="text-3xl font-bold text-slate-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Team collaboration"
                    className="w-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    Our Core Values
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Innovation",
                        desc: "Leveraging technology for competitive advantage",
                      },
                      {
                        title: "Partnership",
                        desc: "Building sustainable business relationships",
                      },
                      {
                        title: "Excellence",
                        desc: "Delivering high-quality results consistently",
                      },
                      {
                        title: "Growth",
                        desc: "Driving economic diversification and development",
                      },
                    ].map((value, idx) => (
                      <div
                        key={idx}
                        className="group/value flex items-start gap-4 pb-4 border-b border-white/20 last:border-0 last:pb-0 transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0 transform group-hover/value:rotate-12 group-hover/value:scale-110 transition-all duration-300">
                          <span className="text-sm font-bold">{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{value.title}</h4>
                          <p className="text-blue-100 text-sm">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible("contact")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ready to Expand Globally?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed in
              international markets
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-10 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Send us a message
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Full Name", type: "text", placeholder: "John Doe" },
                  {
                    label: "Email",
                    type: "email",
                    placeholder: "john@company.com",
                  },
                  {
                    label: "Company",
                    type: "text",
                    placeholder: "Your Company Name",
                  },
                  {
                    label: "Phone",
                    type: "tel",
                    placeholder: "+1 (555) 000-0000",
                  },
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your expansion plans..."
                  ></textarea>
                </div>

                <button
                  onClick={() =>
                    alert(
                      "Thank you for your interest! We will contact you soon."
                    )
                  }
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  Send Message
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-10 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", info: "info@abinvest.com" },
                    { icon: Phone, title: "Phone", info: "+994 XX XXX XX XX" },
                    { icon: MapPin, title: "Office", info: "Baku, Azerbaijan" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="text-blue-600" size={22} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-slate-600">{item.info}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-blue-600 rounded-xl p-10 text-white shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Free Consultation</h3>
                    <p className="text-blue-100">30-minute strategy session</p>
                  </div>
                </div>
                <p className="text-blue-100 mb-6">
                  Get a complimentary consultation to discuss your international
                  expansion goals and discover how we can help.
                </p>
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          aria-label="Scroll up"
          onClick={scrollToPrevSection}
          className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 active:scale-95 transition"
        >
          <ChevronDown className="rotate-180 text-slate-600" size={22} />
        </button>
        <button
          aria-label="Scroll down"
          onClick={scrollToNextSection}
          className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 active:scale-95 transition"
        >
          <ChevronDown className="text-slate-600" size={22} />
        </button>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out backwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .bg-grid-slate-100 {
          background-image: linear-gradient(to right, rgb(241 245 249 / 0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, rgb(241 245 249 / 0.3) 1px, transparent 1px);
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}
