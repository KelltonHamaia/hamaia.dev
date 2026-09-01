import { data } from '@/components/app/sections/experiences/data'
import { ExperienceItem } from '@/components/app/sections/experiences/Experience'
import { useTranslations } from 'next-intl'

export const Experiences = () => {
  const t = useTranslations('Experiences')
  return (
    <section className="my-8 space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        {t('title')}
      </h2>

      {JSON.stringify(t, null, 4)}

      {data.map((experience, index) => (
        <ExperienceItem
          key={experience.company}
          experience={experience}
          isFirst={index === 0}
        />
      ))}
    </section>
  )
}
