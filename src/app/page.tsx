import { Header } from "@/components/app/layout/Header";
import { About } from "@/components/app/sections/About";
import { Commits } from "@/components/app/sections/Commits";
import { Education } from "@/components/app/sections/Education";
import { Experiences } from "@/components/app/sections/Experiences";
import { Projects } from "@/components/app/sections/Projects";
import { SkillSection } from "@/components/app/sections/skills/Skill-section";

const Page = () => {
  return (
    <main className="container-base">
      <Header />
      <Commits />
      <About />
      <Experiences />
      <Education />
      <SkillSection />
      <Projects />
    </main>
  );
};
export default Page;
