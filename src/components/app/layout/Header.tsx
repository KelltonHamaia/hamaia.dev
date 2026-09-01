import { useTranslations } from 'next-intl'
import Image from 'next/image'
export const Header = () => {
  const t = useTranslations('Header')
  return (
    <header className="flex items-center gap-2">
      <div className="flex-1">
        <h1 className="text-title-sm md:text-title-md lg:text-title font-bold tracking-tighter">
          {t('greeting')}
        </h1>
        <p className="text-subtitle-sm md:text-subtitle">
          {t.rich('tagline', {
            highlight: (chunks) => (
              <span className="text-green-500">{chunks}</span>
            ),
          })}
        </p>
      </div>
      <div className="relative size-36 overflow-hidden rounded transition hover:scale-110">
        <Image
          alt={t('altImage')}
          src={'/images/profile/myself-as-anime.webp'}
          draggable="false"
          className="object-cover"
          fill
          sizes="(min-width: 768px) 160px, 144px"
        />
      </div>
    </header>
  )
}
