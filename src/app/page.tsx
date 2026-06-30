import { Header } from '@/components/app/layout/Header'
import { About } from '@/components/app/sections/About'
import { Commits } from '@/components/app/sections/commits/Commits'
import { Contact } from '@/components/app/sections/contact/Contact'
import { Education } from '@/components/app/sections/Education'
import { Experiences } from '@/components/app/sections/Experiences'
import { ProjectSection } from '@/components/app/sections/projects/Project-section'
import { SkillSection } from '@/components/app/sections/skills/Skill-section'

const Page = () => {
  return (
    <main className="container-base">
      <Header />
      <Commits />
      <About />
      <Experiences />
      <Education />
      <SkillSection />
      <ProjectSection />
      <Contact />
    </main>
  )
}
export default Page
