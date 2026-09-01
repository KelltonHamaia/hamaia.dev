import { data } from '@/components/app/layout/footer/data'
import { FooterCard } from '@/components/app/layout/footer/Footer-card'
import { useTranslations } from 'next-intl'

export const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <section className="my-8 space-y-2 text-center">
      <h2 className="text-subtitle-sm md:text-subtitle font-bold">
        {t('title')}
      </h2>
      <p className="text-muted-foreground mx-auto max-w-2xl text-pretty">
        {t('description')}
      </p>

      <div className="mx-auto mt-6 grid max-w-fit grid-cols-2 gap-2">
        {data.map((contact) => (
          <FooterCard key={contact.title} contact={contact} />
        ))}
      </div>
    </section>
  )
}
