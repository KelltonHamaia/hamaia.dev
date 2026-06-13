import {
  Accordion, AccordionTrigger, AccordionContent, AccordionItem
} from '@/components/ui/accordion'
import Image from 'next/image';

export const Experiences = () => {
  return (
    <section className="my-8 space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle font-bold flex gap-2">Experiência Profissional</h2>
      <Accordion
        type="single"
        collapsible
        defaultValue="vexur"
      >
        <AccordionItem value="vexur">
          <AccordionTrigger className='flex gap-4 hover:no-underline'>
            <div className="relative size-12 rounded-lg overflow-clip">
              <Image
                src={'/images/companies/vexur.webp'}
                alt={'Logo da empresa Vexur'}
                className='object-cover'
                sizes="48px"
                fill
              />
            </div>
            <div className='flex-1 flex flex-col justify-between gap-2'>
              <div className='block md:flex'>
                <p className='flex-1'>Vexur</p>
                <p className='hidden md:block text-muted-foreground'>Setembro 2024 - O momento</p>
              </div>
              <div className='block md:flex text-muted-foreground'>
                <p className='flex-1'>Desenvolvedor Fullstack</p>
                <p className='hidden md:block'>1 ano 10 meses</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='h-fit text-muted-foreground space-y-2'>
            <div className='flex flex-col md:hidden text-muted-foreground'>
              <span>Setembro 2024 - O momento</span>
              <span>1 ano 10 meses</span>
            </div>
            <div>
              Atuo com desenvolvimento e manutenção de APIs com Node.js, TypeScript, Express e Fastify, além de aplicações web em Vue.js e React.
              Trabalhei com modelagem de dados em Neo4j, integrações entre sistemas e processos de importação e exportação de dados.
              Entre as principais contribuições, reestruturei o sistema de anexos das comunicações por e-mail,
              criando uma solução reutilizável e escalável que eliminou a necessidade de manutenção manual para novos anexos.
              Também liderei a migração dos visualizadores de comunicação de Vue 2 para React,
              modernizando a aplicação e facilitando sua evolução e manutenção.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
