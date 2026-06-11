import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { backend, frontend, database, devops } from "@/constants/technologies";
import Image from "next/image";

export const Skills = () => {
  return (
    <section className="my-8 space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        Tecnologias
      </h2>
      <div className="min-h-24 w-full rounded bg-zinc-900/60 p-4">
        <h3 className="text-subtitle-sm md:text-subtitle mx-4 font-bold">
          Frontend
        </h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 flex-wrap gap-2 p-4 md:grid-cols-4">
          {frontend.map((technology) => (
            <div
              className="flex items-center gap-2 rounded bg-zinc-950/60 p-2"
              key={technology.name}
            >
              <Image
                src={technology.path}
                alt={technology.name}
                width={36}
                height={36}
                className="rounded"
              />
              <div className="text-muted-foreground font-semibold tracking-tight text-sm">
                {technology.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-24 w-full rounded bg-zinc-900/60 p-4">
        <h3 className="text-subtitle-sm md:text-subtitle mx-4 font-bold">
          Backend
        </h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 flex-wrap gap-2 p-4 md:grid-cols-4">
          {backend.map((technology) => (
            <div
              className="flex items-center gap-2 rounded bg-zinc-950/60 p-2"
              key={technology.name}
            >
              <Image
                src={technology.path}
                alt={technology.name}
                width={36}
                height={36}
                className="rounded object-cover"
              />
              <div className="text-muted-foreground font-semibold tracking-tight text-sm">
                {technology.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-24 w-full rounded bg-zinc-900/60 p-4">
        <h3 className="text-subtitle-sm md:text-subtitle mx-4 font-bold">
          Banco de dados & Devops
        </h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 flex-wrap gap-2 p-4 md:grid-cols-4">
          {[...database, ...devops].map((technology) => {
            if (technology.hasOfficialCertification && technology.certificationURL) {
              return (
                <Tooltip key={technology.name}>
                  <TooltipTrigger asChild>
                    <a
                      className="flex items-center gap-2 rounded bg-blue-900/50 animate-pulse p-2"
                      key={technology.name}
                      href={technology.certificationURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={technology.path}
                        alt={technology.name}
                        width={36}
                        height={36}
                        className="rounded object-cover"
                      />
                      <div className="text-muted-foreground font-semibold tracking-tight text-sm">
                        {technology.name}
                      </div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    Ver certificado oficial
                  </TooltipContent>
                </Tooltip>
              )
            } else {
              return (<div
                className="flex items-center gap-2 rounded bg-zinc-950/60 p-2"
                key={technology.name}
              >
                <Image
                  src={technology.path}
                  alt={technology.name}
                  width={36}
                  height={36}
                  className="rounded object-cover"
                />
                <div className="text-muted-foreground font-semibold tracking-tight text-sm">
                  {technology.name}
                </div>
              </div>)
            }
          })}
        </div>
      </div>
    </section>
  );
};
