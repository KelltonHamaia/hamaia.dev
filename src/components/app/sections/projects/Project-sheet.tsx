'use client'

import { type Project } from '@/components/app/sections/projects/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/useIsMobile'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  open: boolean
  project: Project
}

export const ProjectSheet = ({ open, project }: Props) => {
  const isMobile = useIsMobile()
  const side = isMobile ? 'bottom' : ('right' as const)

  return (
    <Sheet open={open}>
      <SheetContent className="pb-16 lg:min-w-120 lg:pb-0" side={side}>
        <SheetHeader className="space-y-4">
          <SheetTitle className="text-subtitle font-semibold">
            Projeto: {project.name}
          </SheetTitle>
          <div className="flex flex-col space-y-2">
            <div className="relative h-64 overflow-hidden rounded">
              <Image
                alt={project.name}
                src={project.thumbnail}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              {project.technologies.map((technology) => (
                <Badge variant="outline" key={technology}>
                  {technology}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              {project.description}
            </p>
          </div>
          <SheetFooter className="p-0">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {project.demoURL && (
                <Button variant="outline" asChild className="rounded" disabled>
                  <a
                    href={project.demoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver projeto
                  </a>
                </Button>
              )}
              <Button
                variant="outline"
                asChild
                className={`rounded ${!project.demoURL ? 'col-span-full' : ''}`}
              >
                <Link
                  href={project.repositoryURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver repositório
                </Link>
              </Button>
            </div>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
