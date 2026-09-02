"use client"

import { Brazil } from "@/components/app/layout/language/flags/Brazil"
import { UnitedStates } from "@/components/app/layout/language/flags/USA"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from '@/i18n/navigation'
import { Settings } from "lucide-react"
import { useLocale } from "next-intl"

export const LanguageMenu = () => {
  const router = useRouter();
  const locale = useLocale();

  const dropDownLabel = locale === "en" ? 'Languages' : 'Idiomas'

  const changeLanguage = (locale: "en" | "pt-BR") => {
    router.replace('/', { locale });
  }

  return (
    <div className='fixed bottom-5 right-5 flex gap-2 z-50'>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button size="icon-lg" variant="secondary" className="group">
            <Settings className="group-hover:rotate-90 transition" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-4">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="px-4 flex items-center">
              {dropDownLabel}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button onClick={() => changeLanguage('pt-BR')} className="px-2 flex justify-start text-muted-foreground" size="sm" variant="ghost"><Brazil />
                Português
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button onClick={() => changeLanguage('en')} className="px-2 flex justify-start text-muted-foreground" size="sm" variant="ghost"><UnitedStates />
                English
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>

  )
}
