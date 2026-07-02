import { data } from '@/components/app/sections/experiences/data'
import { ExperienceItem } from '@/components/app/sections/experiences/Experience'

export const Experiences = () => {
  return (
    <section className="my-8 space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        Experiência Profissional
      </h2>

      {data.map(experience => (
        <ExperienceItem
          key={experience.company}
          experience={experience}
        />
      ))}
    </section>
  )
}
