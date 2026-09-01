import { type Experience } from '@/components/app/sections/experiences/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  getDurationBetweenDates,
  getIntervalBetweenDates,
} from '@/utils/format-date'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { z } from 'zod/v4'

type Props = {
  experience: Experience
  isFirst: boolean
}
export const ExperienceItem = ({ experience, isFirst }: Props) => {
  const locale = useLocale()

  const dateRange = getDurationBetweenDates(
    experience.period.startedAt,
    experience.period.endedAt,
    locale,
  )
  const duration = getIntervalBetweenDates(
    experience.period.startedAt,
    experience.period.endedAt,
    locale,
  )

  const t = useTranslations('Experiences')
  const companyData = z
    .object({
      role: z.string('Field [role] is missing'),
      description: z.string('Field [description] is missing'),
      altCompanyImage: z.string('Field [altCompanyImage] is missing'),
      mainContribuitions: z.array(
        z.object({
          key: z.string('Field [key] is missing'),
          name: z.string('Field [name] is missing'),
          description: z.string('Field [description] is missing'),
        }),
      ),
    })
    .parse(t.raw(experience.company))

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={isFirst ? experience.company : undefined}
    >
      <AccordionItem value={experience.company}>
        <AccordionTrigger className="flex gap-4 hover:no-underline">
          <div className="relative size-12 overflow-clip rounded-lg">
            <Image
              src={experience.url}
              alt={companyData.altCompanyImage}
              className="object-cover"
              sizes="48px"
              fill
            />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-2">
            <div className="block md:flex">
              <p className="flex-1">{experience.company}</p>
              <p className="text-muted-foreground hidden md:block">
                {dateRange}
              </p>
            </div>
            <div className="text-muted-foreground block md:flex">
              <p className="flex-1">{companyData.role}</p>
              <p className="hidden md:block">{duration}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground h-fit space-y-2">
          <div className="text-muted-foreground flex flex-col md:hidden">
            <span>{dateRange}</span>
            <span>{duration}</span>
          </div>
          <div className="tracking-tight md:pr-8">
            {companyData.description}
          </div>
          <ul className="list-inside list-none">
            {companyData.mainContribuitions.map((contribution) => (
              <li className="my-3" key={contribution.key}>
                <p>
                  <span className="text-foreground">{contribution.name}</span>:{' '}
                  <br />
                  {contribution.description}
                </p>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
