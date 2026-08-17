import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

export const About = () => {

  return (
    <section className="space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle font-bold flex gap-2">Sobre mim</h2>
      <p className="text-sm text-pretty tracking-tight">
        Trabalho criando e mantendo sistemas utilizando Node.js, Vue.js, React, TypeScript e Neo4J.
        Tenho interesse especial por arquitetura de software (acho muito massa), modelagem de dados e construção de APIs,
        mas também gosto bastante da parte visual e interativa do frontend.
        Nas horas vagas, provavelmente estou estudando alguma tecnologia nova ou algum idioma, jogando alguma coisa, assistindo animes ou tomando café.
        <br />
        Ah sim, e você pode ver
        <Button variant="link" className="text-green-500 px-1 animate-pulse" asChild>
          <Link href='/docs/kellton_hamaia_curriculo_pt.pdf'>
            meu currículo aqui <FileTextIcon /></Link>
        </Button>
      </p>
    </section>
  );
}
