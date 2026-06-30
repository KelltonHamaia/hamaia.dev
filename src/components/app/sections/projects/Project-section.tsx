import { ProjectCard } from '@/components/app/sections/projects/Project-card'
import { data } from '@/components/app/sections/projects/data'

export const ProjectSection = () => {
  return (
    <section className="space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        Projetos
      </h2>
      <div className="grid w-full grid-cols-1 gap-2 rounded bg-zinc-900/60 p-8 md:grid-cols-2">
        {data.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
