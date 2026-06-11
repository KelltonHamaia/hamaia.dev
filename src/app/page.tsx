import { Header } from "@/components/app/layout/Header";
import { About } from "@/components/app/sections/About";
import { Commits } from "@/components/app/sections/Commits";
import { Education } from "@/components/app/sections/Education";
import { Experiences } from "@/components/app/sections/Experiences";
import { Skills } from "@/components/app/sections/Skills";

const Page = () => {
  return (
    <main className="container-base">
      <Header />
      <Commits />
      <About />
      <Experiences />
      <Education />
      <Skills />
    </main>
  );
};
export default Page;
