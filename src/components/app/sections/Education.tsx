import Image from "next/image";

export const Education = () => {
  return (
    <section className="my-8 space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        Educação
      </h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="relative size-12 overflow-clip rounded-lg">
            <Image
              src={"/images/education/logo-ifpr.webp"}
              alt={"Logo da instituição Instituto Federal do Paraná"}
              className="object-cover"
              sizes="48px"
              fill
            />
          </div>
          <div className="flex flex-1 flex-col justify-between pr-8">
            <div className="block md:flex">
              <p className="flex-1">Tecnologia em Sistemas para a Internet</p>
              <p className="text-muted-foreground hidden md:block">
                2022 - 2025
              </p>
            </div>
            <div className="text-muted-foreground block md:flex text-sm">
              <p className="flex-1">Graduação: Tecnólogo</p>
              <p className="hidden md:block">3 anos</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative size-12 overflow-clip rounded-lg">
            <Image
              src={"/images/education/logo-ifpr.webp"}
              alt={"Logo da instituição Instituto Federal do Paraná"}
              className="object-cover"
              sizes="48px"
              fill
            />
          </div>
          <div className="flex flex-1 flex-col justify-between pr-8">
            <div className="block md:flex">
              <p className="flex-1">
                Ensino médio integrado ao curso técnico de informática
              </p>
              <p className="text-muted-foreground hidden md:block">
                2018 - 2022
              </p>
            </div>
            <div className="text-muted-foreground block md:flex text-sm">
              <p className="flex-1">Ensino médio - Técnico em informática</p>
              <p className="hidden md:block">4 anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
