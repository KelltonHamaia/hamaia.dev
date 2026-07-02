import { type Experience } from '@/components/app/sections/experiences/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getDurationBetweenDates, getIntervalBetweenDates } from '@/utils/format-date'
import Image from 'next/image'


type Props = {
  experience: Experience
}
export const ExperienceItem = ({ experience }: Props) => {
  const dateRange = getDurationBetweenDates(experience.period.startedAt, experience.period.endedAt)
  const duration = getIntervalBetweenDates(experience.period.startedAt, experience.period.endedAt)
  return (
    <Accordion type="single" collapsible defaultValue="vexur">
      <AccordionItem value="vexur">
        <AccordionTrigger className="flex gap-4 hover:no-underline">
          <div className="relative size-12 overflow-clip rounded-lg">
            <Image
              src={experience.url}
              alt={`Logo da empresa ${experience.company}`}
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
              <p className="flex-1">{experience.role}</p>
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
            {experience.description} Abaixo estão as minhas principais contribuições:
          </div>

          <ul className='list-inside list-none'>
            {experience.keyContributions.map(contribution => (
              <li className='my-3' key={contribution.name}>
                <p><span className='text-foreground'>{contribution.name}</span>: <br />{contribution.description}</p>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );

}
