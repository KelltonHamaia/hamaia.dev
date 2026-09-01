import { ProjectCard } from '@/components/app/sections/projects/Project-card'
import { useTranslations } from 'next-intl'
import { z } from 'zod/v4'

export const ProjectSection = () => {
  const t = useTranslations('Projects')
  const projects = z
    .array(
      z.object({
        name: z.string(),
        thumbnail: z.string(),
        type: z.enum(['frontend', 'backend', 'fullstack']),
        description: z.string(),
        technologies: z.array(z.string()),
        demoURL: z.string().optional(),
        repositoryURL: z.string(),
      }),
    )
    .parse(t.raw('items'))

  return (
    <section className="space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        {t('title')}
      </h2>

      <div className="grid w-full grid-cols-1 gap-2 rounded bg-zinc-900/60 p-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
