import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Hamaia.dev',
  description:
    'Opa, beleza? Kell aqui! Atualmente trabalho com Node, Vue.js, Typescript e Neo4J pela @Vexur.',
  authors: {
    name: 'Kellton Makito Hamaia Arai',
    url: 'https://github.com/KelltonHamaia',
  },
  openGraph: {
    images:
      'https://raw.githubusercontent.com/KelltonHamaia/codelandia-desafio-09/main/public/images/banner/opengraph-banner.webp',
    authors: ['Kellton Makito Hamaia Arai'],
  },
  robots: {
    follow: true,
    index: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        'h-full',
        'antialiased',
        'font-sans',
        inter.variable,
        'dark',
      )}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
