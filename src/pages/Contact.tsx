import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-2">{t('pages.contact.title')}</h2>
      <p className="text-gray-700">{t('pages.contact.body')}</p>
    </section>
  )
}
