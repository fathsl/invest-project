import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="lang" className="text-sm">{t('change_language')}:</label>
      <select
        id="lang"
        onChange={changeLanguage}
        value={i18n.resolvedLanguage}
        className="border rounded px-2 py-1 bg-white text-black"
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        <option value="az">Azərbaycanca</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  )
}
