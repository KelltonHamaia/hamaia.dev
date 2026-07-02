import { Footer } from '@/components/app/layout/footer/Footer'
import { Header } from '@/components/app/layout/Header'
import { About } from '@/components/app/sections/About'
import { Commits } from '@/components/app/sections/commits/Commits'
import { Education } from '@/components/app/sections/Education'
import { Experiences } from '@/components/app/sections/experiences/Experiences'
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
      <Footer />
    </main>
  )
}
export default Page
