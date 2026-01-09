import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: t("pages.contact.contactInfo.address.title"),
      details: [t("pages.contact.contactInfo.address.details")],
      link: null,
    },
    {
      icon: "📧",
      title: t("pages.contact.contactInfo.email.title"),
      details: ["contact.abinvest2026@gmail.com", "destek@abinvest.com"],
      link: "mailto:contact.abinvest2026@gmail.com",
    },
    {
      icon: "📞",
      title: t("pages.contact.contactInfo.phone.title"),
      details: ["+994516581598"],
      link: "tel:+902121234567",
    },
    {
      icon: "⏰",
      title: t("pages.contact.contactInfo.workingHours.title"),
      details: [t("pages.contact.contactInfo.workingHours.details")],
      link: null,
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#", color: "bg-blue-600" },
    { name: "Twitter", icon: "🐦", url: "#", color: "bg-sky-500" },
    { name: "Facebook", icon: "📘", url: "#", color: "bg-blue-700" },
    { name: "Instagram", icon: "📸", url: "#", color: "bg-pink-600" },
  ];

  const faqs = [
    {
      question: t("pages.contact.faqs.question1"),
      answer: t("pages.contact.faqs.answer1"),
    },
    {
      question: t("pages.contact.faqs.question2"),
      answer: t("pages.contact.faqs.answer2"),
    },
    {
      question: t("pages.contact.faqs.question3"),
      answer: t("pages.contact.faqs.answer3"),
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="relative py-20 px-6 bg-linear-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            {t("pages.contact.title")}
          </h1>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            {t("pages.contact.description")}
          </p>
        </div>
      </div>

      <div className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center group"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 text-sm mb-1">
                    {info.link && idx === 0 ? (
                      <a
                        href={info.link}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {t("pages.contact.sendMessage.title")}
              </h2>
              <p className="text-slate-600 mb-8">
                {t("pages.contact.sendMessage.description")}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        {t("pages.contact.sendMessage.name")} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder={t(
                          "pages.contact.sendMessage.namePlaceholder"
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        {t("pages.contact.sendMessage.email")} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder={t(
                          "pages.contact.sendMessage.emailPlaceholder"
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        {t("pages.contact.sendMessage.phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="+994516581598"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        {t("pages.contact.sendMessage.company")}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder={t(
                          "pages.contact.sendMessage.companyPlaceholder"
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t("pages.contact.sendMessage.service")}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    >
                      <option value="">
                        {t("pages.contact.sendMessage.servicePlaceholder")}
                      </option>
                      <option value="market-analysis">
                        {t("pages.contact.sendMessage.marketAnalysis")}
                      </option>
                      <option value="entry-strategy">
                        {t("pages.contact.sendMessage.entryStrategy")}
                      </option>
                      <option value="partner-sourcing">
                        {t("pages.contact.sendMessage.partnerSourcing")}
                      </option>
                      <option value="field-support">
                        {t("pages.contact.sendMessage.fieldSupport")}
                      </option>
                      <option value="training">
                        {t("pages.contact.sendMessage.training")}
                      </option>
                      <option value="other">
                        {t("pages.contact.sendMessage.other")}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t("pages.contact.sendMessage.message")} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      placeholder={t(
                        "pages.contact.sendMessage.messagePlaceholder"
                      )}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4 ${
                      submitted
                        ? "bg-green-600 text-white"
                        : "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-xl"
                    }`}
                  >
                    {submitted ? (
                      <>
                        <svg
                          className="w-6 h-6"
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
                        {t("pages.contact.sendMessage.sent")}
                      </>
                    ) : (
                      <>
                        {t("pages.contact.sendMessage.send")}
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
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg h-64 flex items-center justify-center border border-slate-200">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-slate-600 font-semibold">
                    {t("pages.contact.sendMessage.location")}
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    {t("pages.contact.sendMessage.locationDescription")}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t("pages.contact.sendMessage.socialMedia")}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} text-white rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-md`}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t("pages.contact.faqs.title")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("pages.contact.faqs.description")}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="text-blue-600 shrink-0">❓</span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              {t("pages.contact.faqs.button")}
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              {t("pages.contact.faqs.buttonView")}
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-linear-to-r from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("pages.contact.callToAction.title")}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            {t("pages.contact.callToAction.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl">
              {t("pages.contact.callToAction.phone")}
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 border-2 border-white/30">
              {t("pages.contact.callToAction.online")}
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
