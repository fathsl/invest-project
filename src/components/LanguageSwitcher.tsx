import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, ChevronDown } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'gb' },
  { code: 'tr', label: 'Türkçe', flag: 'tr' },
  { code: 'az', label: 'Azərbaycanca', flag: 'az' },
  { code: 'ru', label: 'Русский', flag: 'ru' },
]

function Flag({ code, label }: { code: string; label: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      width={22}
      height={16}
      alt={label}
      className="w-5.5 h-4 rounded-xs object-cover shadow-sm shrink-0"
    />
  )
}

export default function LanguageSwitcher({
  variant = 'dark',
  direction = 'down',
  className = '',
}: {
  variant?: 'dark' | 'light'
  direction?: 'down' | 'up'
  className?: string
}) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current =
    LANGUAGES.find((l) => l.code === (i18n.resolvedLanguage || i18n.language)?.slice(0, 2)) ||
    LANGUAGES[0]

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('touchstart', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('touchstart', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const tone =
    variant === 'dark'
      ? 'text-white border-white/25 hover:bg-white/10'
      : 'text-sky-950 border-slate-300 hover:bg-slate-50'

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((o) => !o)}
        className={`w-full inline-flex items-center gap-2.5 rounded-full border pl-3.5 pr-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-300 outline-none ${tone}`}
      >
        <Flag code={current.flag} label={current.label} />
        <span className="flex-1 text-left whitespace-nowrap">{current.label}</span>
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute z-50 min-w-full w-max overflow-hidden rounded-2xl bg-white text-sky-950 shadow-xl shadow-slate-900/20 ring-1 ring-slate-200 py-1 ${
            direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
          } ${variant === 'dark' ? 'right-0' : 'left-0'}`}
        >
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === current.code}>
              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage(l.code)
                  setOpen(false)
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-left hover:bg-sky-50 transition-colors"
              >
                <Flag code={l.flag} label={l.label} />
                <span className="flex-1 whitespace-nowrap">{l.label}</span>
                {l.code === current.code && <Check size={16} className="text-sky-700" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
