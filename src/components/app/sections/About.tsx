import { Button } from '@/components/ui/button'
import { FileTextIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const About = () => {
  const t = useTranslations('About')

  return (
    <section className="space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        {t('title')}
      </h2>
      <p className="text-sm tracking-tight text-pretty">
        {t('description')}
        <br />
        <Button
          variant="link"
          className="animate-pulse px-0 text-green-500"
          asChild
        >
          <Link href={t('resumeePath')}>
            {t('buttonText')} <FileTextIcon />
          </Link>
        </Button>
      </p>
    </section>
  )
}
