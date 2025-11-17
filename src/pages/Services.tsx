import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-2">{t('pages.services.title')}</h2>
      <p className="text-gray-700">{t('pages.services.body')}</p>
    </section>
  )
}
