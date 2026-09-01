import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { z } from 'zod/v4'
import { AwardIcon } from 'lucide-react'

export const Education = () => {
  const t = useTranslations('Education')
  const educationItems = z
    .array(
      z.object({
        type: z.string('Field [type] is required'),
        name: z.string('Field [name] is required'),
        image: z.string('Field [image] is required'),
        altImage: z.string('Field [altImage] is required'),
        start: z.number('Field [start] is required'),
        end: z.number('Field [end] is required'),
        duration: z.string('Field [duration] is required'),
        award: z.string('Field [award] is required').optional(),
      }),
    )
    .parse(t.raw('items'))

  return (
    <section className="my-8 space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        {t('title')}
      </h2>
      <div className="space-y-4">
        {educationItems.map((education) => (
          <div className="flex gap-4" key={education.type}>
            <div className="relative size-12 overflow-clip rounded-lg">
              <Image
                src={education.image}
                alt={education.altImage}
                className="object-cover"
                sizes="48px"
                fill
              />
            </div>
            <div className="flex flex-1 flex-col justify-between pr-8">
              <div className="block md:flex">
                <p className="flex-1">{education.name}</p>
                <p className="text-muted-foreground hidden md:block">
                  {education.start} - {education.end}
                </p>
              </div>
              <div className="text-muted-foreground block text-sm md:flex">
                <p className="flex-1">
                  {education.type} {education.award}
                </p>
                <p className="">{education.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
