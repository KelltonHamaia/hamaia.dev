export type Project = {
  name: string
  thumbnail: string
  type: 'frontend' | 'backend' | 'fullstack'
  description: string
  technologies: string[]
  demoURL?: string
  repositoryURL: string
}
