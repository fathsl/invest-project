import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe,
  Handshake,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Search,
  Shield,
  Target,
  TrendingUp,
  TrendingUpIcon,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const services = [
    {
      icon: Search,
      title: "Export Consultancy",
      subtitle: "Strategic Market Entry & Analysis",
      description:
        "Comprehensive market research, competitor analysis, and strategic entry planning for international markets.",
      features: [
        "Target Market Analysis",
        "Competitor Research",
        "Entry Strategy Development",
        "Regulatory Compliance",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      icon: Handshake,
      title: "Business Development",
      subtitle: "Partner & Distributor Network",
      description:
        "Connect with the right partners, distributors, and master dealers to expand your market reach.",
      features: [
        "Partner Identification",
        "Franchise Development",
        "Market Feasibility Studies",
        "Network Building",
      ],
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    },
    {
      icon: Award,
      title: "International Branding",
      subtitle: "Global Brand Strategy & Positioning",
      description:
        "Strategic brand positioning and digital visibility consulting for international market success.",
      features: [
        "Brand Strategy",
        "Market Positioning",
        "Digital Marketing",
        "Corporate Identity",
      ],
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
    },
    {
      icon: Truck,
      title: "Logistics & Operations",
      subtitle: "Supply Chain & Compliance Solutions",
      description:
        "End-to-end logistics planning including customs, taxation, and transportation management.",
      features: [
        "Customs Solutions",
        "Tax Optimization",
        "Supply Chain Management",
        "Documentation Support",
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
        "Single project consultation with defined deliverables and timeline",
      price: "Custom Quote",
      features: [
        "Defined Project Scope",
        "Clear Deliverables",
        "Fixed Timeline",
        "One-time Investment",
      ],
      ideal: "Ideal for: Market entry projects, feasibility studies",
    },
    {
      icon: Brain,
      title: "Monthly Retainer",
      description:
        "Ongoing strategic partnership for continuous growth and support",
      price: "From €2,500/mo",
      features: [
        "Unlimited Consultations",
        "Priority Support",
        "Monthly Reports",
        "Strategic Planning Sessions",
      ],
      ideal: "Ideal for: Established exporters, growing businesses",
      popular: true,
    },
    {
      icon: Globe,
      title: "Country Packages",
      description:
        "Specialized market entry packages tailored to specific countries",
      price: "Custom Package",
      features: [
        "Market-Specific Research",
        "Local Partnerships",
        "Regulatory Navigation",
        "On-ground Support",
      ],
      ideal: "Ideal for: Targeted market expansion",
    },
  ];

  const whyChoose = [
    {
      icon: Building2,
      title: "European Business Culture",
      description:
        "We bring European standards of professionalism, transparency, and business ethics to every engagement.",
    },
    {
      icon: Globe,
      title: "Extensive Global Network",
      description:
        "Access to established partnerships and networks across Europe, Asia, and the Middle East.",
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description:
        "Successfully guided 50+ companies into international markets with measurable results.",
    },
    {
      icon: Users,
      title: "Expert Multilingual Team",
      description:
        "Professional consultants fluent in multiple languages with deep local market knowledge.",
    },
  ];

  const stats = [
    { number: "50+", label: "Successful Market Entries", icon: Target },
    { number: "15+", label: "Years of Experience", icon: Award },
    { number: "€100M+", label: "Client Revenue Generated", icon: TrendingUp },
    { number: "25+", label: "Countries Covered", icon: Globe },
  ];

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

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

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <section
        id="home"
        className="relative pt-32 pb-20 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Globe size={16} />
                Your Gateway to Global Markets
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Expand Your Business
                <span className="block text-blue-600">Across Borders</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                AB Invest – Export Partner MMC provides comprehensive
                consultancy services for companies seeking international growth.
                From market analysis to partner connections, we ensure your
                success in global markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                >
                  Start Your Journey
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-slate-400 transition-colors"
                >
                  Explore Services
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="text-center">
                      <Icon className="mx-auto mb-2 text-blue-600" size={28} />
                      <div className="text-3xl font-bold text-slate-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="relative animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Business professionals"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">98%</div>
                    <div className="text-sm text-slate-600">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services">
            <ChevronDown className="text-slate-400" size={32} />
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible("services")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
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

          <div className="space-y-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-blue-600" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">
                          {service.title}
                        </h3>
                        <p className="text-blue-600 font-semibold mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-blue-600 flex-shrink-0 mt-0.5"
                            size={20}
                          />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-50">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible("process")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Flexible Working Models
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the collaboration model that best fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workingModels.map((model, idx) => {
              const Icon = model.icon;
              return (
                <div
                  key={idx}
                  className={`relative bg-white rounded-xl p-8 transition-all duration-300 ${
                    model.popular
                      ? "shadow-xl border-2 border-blue-600 scale-105"
                      : "shadow-sm border border-slate-200 hover:shadow-lg"
                  }`}
                >
                  {model.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {model.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{model.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-6">
                    {model.price}
                  </div>

                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2
                          className="text-blue-600 flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-600 italic">
                      {model.ideal}
                    </p>
                  </div>

                  <button
                    className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                      model.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
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
                Your Trusted Partner in International Expansion
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                AB Invest – Export Partner MMC is a professional consultancy
                firm specializing in helping businesses enter and succeed in
                international markets. With a European-based business culture
                and extensive network, we provide strategic guidance, market
                analysis, and on-ground support.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our mission is simple: enable companies to enter the right
                markets, with the right model, and with minimum risk. We combine
                local market expertise with global business acumen to deliver
                measurable results.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, number: "15+", label: "Years Experience" },
                  { icon: Globe, number: "25+", label: "Countries" },
                  { icon: Users, number: "50+", label: "Success Stories" },
                  {
                    icon: TrendingUpIcon,
                    number: "€100M+",
                    label: "Revenue Generated",
                  },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl">
                      <Icon className="text-blue-600 mb-3" size={32} />
                      <div className="text-3xl font-bold text-slate-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-xl w-full mb-8"
              />

              <div className="bg-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Integrity",
                      desc: "Transparent and honest in all dealings",
                    },
                    {
                      title: "Excellence",
                      desc: "Consistently delivering high-quality results",
                    },
                    {
                      title: "Partnership",
                      desc: "Your success is our success",
                    },
                    {
                      title: "Innovation",
                      desc: "Creative solutions for complex challenges",
                    },
                  ].map((value, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 pb-4 border-b border-blue-500 last:border-0 last:pb-0"
                    >
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
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
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
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
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out backwards;
        }
      `}</style>
    </div>
  );
}
