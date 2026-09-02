'use client'

import { Brazil } from '@/components/app/layout/language/flags/Brazil'
import { UnitedStates } from '@/components/app/layout/language/flags/USA'
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from '@/i18n/navigation'
import { Settings } from 'lucide-react'
import { useLocale } from 'next-intl'

export const LanguageMenu = () => {
  const router = useRouter()
  const locale = useLocale()

  const dropDownLabel = locale === 'en' ? 'Languages' : 'Idiomas'

  const changeLanguage = (locale: 'en' | 'pt-BR') => {
    router.replace('/', { locale })
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 flex gap-2">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button size="icon-lg" variant="secondary" className="group">
            <Settings className="transition group-hover:rotate-90" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-4">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="flex items-center px-4">
              {dropDownLabel}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                onClick={() => changeLanguage('pt-BR')}
                className="text-muted-foreground flex justify-start px-2"
                size="sm"
                variant="ghost"
              >
                <Brazil />
                Português
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => changeLanguage('en')}
                className="text-muted-foreground flex justify-start px-2"
                size="sm"
                variant="ghost"
              >
                <UnitedStates />
                English
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
