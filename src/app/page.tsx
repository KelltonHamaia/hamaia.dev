import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Commits } from "@/components/sections/Commits";

const Page = () => {
  return (
    <main className="container-base">
      <Header />
      <Commits />
      <About />
    </main>
  );
};
export default Page;
