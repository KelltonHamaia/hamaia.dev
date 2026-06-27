'use client'
import { type Project } from '@/components/app/sections/projects/data'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { useState } from 'react'
import { ProjectSheet } from './Project-sheet'

type Props = {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false)
  return (
    <div
      className="hover:border-border min-h-90 cursor-pointer space-y-2 border-2 border-transparent p-1 opacity-80 transition hover:border-dotted hover:opacity-100"
      onClick={() => setOpenSheet(!openSheet)}
    >
      <div className="relative h-64 overflow-hidden rounded">
        <Image
          alt={project.name}
          src={project.thumbnail}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          fill
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-subtitle font-semibold">{project.name}</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge variant="outline" key={technology}>
              {technology}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>
      <ProjectSheet key={project.name} open={openSheet} project={project} />
    </div>
  )
}
