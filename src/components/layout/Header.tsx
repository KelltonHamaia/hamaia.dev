import Image from "next/image";

export const Header = () => {

  return (
    <header className="flex items-center gap-2">
      <div className="flex-1">
        <h1 className='text-title-sm md:text-title-md lg:text-title tracking-tighter font-bold'>Opa, Kell aqui!</h1>
        <p className="text-subtitle-sm md:text-subtitle">
          Desenvolvedor fullstack na <span className="text-indigo-600">@vexur-startup</span>,
          gosto de estudar e resolver desafios de programação.
        </p>
      </div>
      <div className="relative size-36 md:size-40 rounded-full overflow-hidden ring-4 ring-zinc-900 hover:scale-120 hover:rotate-2 transition">
        <Image
          alt="Minha foto de perfil no estilo do Studio Ghibbli"
          src={'/images/profile/myself-as-anime.webp'}
          draggable='false'
          className="object-cover"
          fill
          sizes="(min-width: 768px) 160px, 144px"
        />
      </div>
    </header>
  );

}
