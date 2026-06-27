export type Project = {
  name: string
  thumbnail: string
  type: 'frontend' | 'backend' | 'fullstack'
  description: string
  technologies: string[]
  demoURL?: string
  repositoryURL: string
}

export const data: Project[] = [
  {
    name: 'Ani.me',
    thumbnail: '/images/projects/ani-me.webp',
    type: 'frontend',
    description:
      "Minha resolução do desafio 29 da comunicade 'codelândia' do discord, onde deve ser desenvolvido um layout para um site de animes.",
    technologies: [
      'React',
      'Next.js (app Router)',
      'Tailwindcss',
      'Zustand',
      'ShadcnUI',
    ],
    demoURL: 'https://challenge-ani-me.vercel.app/',
    repositoryURL: 'https://github.com/KelltonHamaia/ani.me',
  },
]
