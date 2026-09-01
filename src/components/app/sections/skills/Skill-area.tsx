import { type Skill } from '@/components/app/sections/skills/data'
import { SkillItem } from '@/components/app/sections/skills/Skill-item'
import { useTranslations } from 'next-intl'

type Props = {
  skillKey: string
  technologies: Skill[]
}
export const SkillArea = ({ technologies, skillKey }: Props) => {
  const t = useTranslations('Skills')

  return (
    <div className="min-h-24 w-full rounded bg-zinc-900/60 p-4">
      <h3 className="text-subtitle-sm md:text-subtitle mx-4 font-bold">
        {t(`${skillKey}`)}
      </h3>
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-2 p-4 md:grid-cols-4">
        {technologies.map((technology) => (
          <SkillItem skill={technology} key={technology.name} />
        ))}
      </div>
    </div>
  )
}
