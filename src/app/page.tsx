import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Commits } from "@/components/sections/Commits";
import { Experiences } from "@/components/sections/Experiences";

const Page = () => {
  return (
    <main className="container-base">
      <Header />
      <Commits />
      <About />
      <Experiences />
    </main>
  );
};
export default Page;
