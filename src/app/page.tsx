import { Header } from "@/components/layout/Header";
import { Commits } from "@/components/sections/Commits";

const Page = () => {
  return (
    <main className="container-base">
      <Header />
      <Commits />
    </main>
  );
};
export default Page;
