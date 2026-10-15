import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Reveal from "../components/Reveal";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const fieldClass =
  "w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(false);

    try {
      await emailjs.send(
        "service_pu8p4cv",
        "template_qcjrunn",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          to_email: "contact.abinvest2026@gmail.com",
        },
        "wtMNx7iLZuXKk4N1N",
      );

      setSubmitted(true);
      setFormData(EMPTY_FORM);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("pages.contact.contactInfo.address.title"),
      details: ["Baku, Azerbaijan"],
      link: null,
    },
    {
      icon: Mail,
      title: t("pages.contact.contactInfo.email.title"),
      details: ["contact.abinvest2026@gmail.com"],
      link: "mailto:contact.abinvest2026@gmail.com",
    },
    {
      icon: Phone,
      title: t("pages.contact.contactInfo.phone.title"),
      details: ["+994516581598"],
      link: "tel:+994516581598",
    },
    {
      icon: Clock,
      title: t("pages.contact.contactInfo.workingHours.title"),
      // "Mon - Fri: 09:00 - 18:00 Sat: 10:00 - 14:00" -> one line per time range
      details: t("pages.contact.contactInfo.workingHours.details")
        .split(/(?<=\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2})\s+/)
        .filter(Boolean),
      link: null,
    },
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

  const serviceOptions = [
    ["market-analysis", "marketAnalysis"],
    ["entry-strategy", "entryStrategy"],
    ["partner-sourcing", "partnerSourcing"],
    ["field-support", "fieldSupport"],
    ["training", "training"],
    ["other", "other"],
  ];

  const label = "block text-sm font-semibold text-slate-700 mb-2";

  return (
    <div className="w-full bg-white text-slate-900 antialiased">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={img("1497366216548-37526070297c", 2400)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 wrap-break-word">
              {t("pages.contact.title")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {t("pages.contact.description")}
            </p>
          </div>
        </div>
      </section>

      {/* INFO CARDS — overlap the header */}
      <section className="relative z-10 -mt-16 sm:-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Reveal key={idx} delay={idx * 80} className="h-full">
                  <div className="h-full rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/10 p-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-950 flex items-center justify-center mb-5">
                      <Icon className="text-cyan-300" size={22} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, dIdx) => (
                      <p
                        key={dIdx}
                        className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-nowrap"
                      >
                        {info.link && dIdx === 0 ? (
                          <a
                            href={info.link}
                            className="hover:text-sky-700 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="contact-form" className="py-16 sm:py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            <Reveal className="lg:col-span-3">
              <div className="h-full rounded-4xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
                  {t("pages.contact.sendMessage.title")}
                </h2>
                <p className="text-slate-600 mb-8">
                  {t("pages.contact.sendMessage.description")}
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                      <Check size={32} strokeWidth={3} />
                    </div>
                    <p className="text-xl font-bold text-slate-950 mb-6">
                      {t("pages.contact.sendMessage.sent")}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {t("pages.contact.sendMessage.send")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={label}>
                          {t("pages.contact.sendMessage.name")} *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={fieldClass}
                          placeholder={t("pages.contact.sendMessage.namePlaceholder")}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={label}>
                          {t("pages.contact.sendMessage.email")} *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={fieldClass}
                          placeholder={t("pages.contact.sendMessage.emailPlaceholder")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className={label}>
                          {t("pages.contact.sendMessage.phone")}
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={fieldClass}
                          placeholder="+994516581598"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className={label}>
                          {t("pages.contact.sendMessage.company")}
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                          className={fieldClass}
                          placeholder={t("pages.contact.sendMessage.companyPlaceholder")}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className={label}>
                        {t("pages.contact.sendMessage.service")}
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`${fieldClass} appearance-none pr-11`}
                        >
                          <option value="">
                            {t("pages.contact.sendMessage.servicePlaceholder")}
                          </option>
                          {serviceOptions.map(([value, key]) => (
                            <option key={value} value={value}>
                              {t(`pages.contact.sendMessage.${key}`)}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={18}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={label}>
                        {t("pages.contact.sendMessage.message")} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`${fieldClass} resize-none`}
                        placeholder={t("pages.contact.sendMessage.messagePlaceholder")}
                      />
                    </div>

                    {error && (
                      <p
                        role="alert"
                        className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-700"
                      >
                        Failed to send message. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 text-white px-8 py-4 font-semibold hover:bg-sky-800 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                    >
                      {sending ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        <>
                          {t("pages.contact.sendMessage.send")}
                          <ArrowRight
                            size={20}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
              <Reveal delay={120} className="flex-1">
                <div className="relative overflow-hidden rounded-4xl h-72 lg:h-full lg:min-h-72 shadow-xl shadow-slate-900/10">
                  <img
                    src={img("1497366216548-37526070297c", 1200)}
                    alt="Office"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <div className="flex items-center gap-2 mb-2 text-cyan-300">
                      <MapPin size={18} />
                      <span className="font-semibold">Baku, Azerbaijan</span>
                    </div>
                    <p className="text-sm text-slate-300">
                      {t("pages.contact.sendMessage.locationDescription")}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="rounded-4xl bg-linear-to-br from-sky-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl shadow-sky-900/20">
                  <h3 className="text-xl font-bold mb-5">
                    {t("pages.contact.sendMessage.socialMedia")}
                  </h3>
                  <a
                    href="https://www.instagram.com/aahmadova_a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/15 pl-2 pr-6 py-2 font-semibold hover:bg-white/20 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full bg-linear-to-tr from-amber-400 via-pink-500 to-fuchsia-600 flex items-center justify-center">
                      <FaInstagram size={18} />
                    </span>
                    Instagram
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-4">
              {t("pages.contact.faqs.title")}
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              {t("pages.contact.faqs.description")}
            </p>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <details
                  className="group rounded-2xl bg-white border border-slate-200/80 shadow-sm open:shadow-lg open:border-sky-200 transition-all"
                  open={idx === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 font-bold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-colors group-open:bg-sky-950 group-open:text-white">
                      <ChevronDown
                        size={18}
                        className="transition-transform duration-300 group-open:rotate-180"
                      />
                    </span>
                  </summary>
                  <p className="px-5 sm:px-6 pb-6 -mt-1 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4">{t("pages.contact.faqs.button")}</p>
            <a
              href="mailto:contact.abinvest2026@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 text-white px-6 py-3 font-semibold hover:bg-sky-800 transition-colors"
            >
              {t("pages.contact.faqs.buttonView")}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-slate-950 px-6 py-14 sm:px-12 sm:py-20 text-center shadow-2xl shadow-slate-900/20">
              <img
                src={img("1486406146926-c627a92ad1ab", 2000)}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-sky-950/80 to-slate-950/90" />
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 max-w-3xl mx-auto leading-tight">
                  {t("pages.contact.callToAction.title")}
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                  {t("pages.contact.callToAction.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+994516581598"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-cyan-200 transition-colors"
                  >
                    <Phone size={18} />
                    {t("pages.contact.callToAction.phone")}
                  </a>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white px-8 py-4 font-semibold hover:bg-white/15 transition-colors"
                  >
                    {t("pages.contact.callToAction.online")}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 1s ease-out both; }
      `}</style>
    </div>
  );
}
