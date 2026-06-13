"use client"
import { type Skill } from "@/components/app/sections/skills/data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

type Props = {
  skill: Skill;
};

const SkillContent = ({ skill }: Props) => {
  return (
    <>
      <Image
        src={skill.path}
        alt={skill.name}
        width={36}
        height={36}
        className="rounded"
        draggable="false"
      />
      <div className="text-muted-foreground text-sm font-semibold tracking-tight cursor-default">
        {skill.name}
      </div>
    </>
  );
};

export const SkillItem = ({ skill }: Props) => {

  const playAudioOnHover = async () => {
    try {
      const audio = new Audio('/audio/on-hover-audio.opus')
      audio.volume = 0.1
      audio.pause()
      audio.currentTime = 0
      await audio.play()
    } catch (error) {
      console.log(error)
    }
  }

  const certification = skill.certification;
  if (!certification) {
    return (
      <div className="flex items-center gap-2 rounded bg-zinc-950/60 hover:ring-2 hover:ring-zinc-900 p-2" onMouseEnter={playAudioOnHover}>
        <SkillContent skill={skill} />
      </div>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild onMouseEnter={playAudioOnHover}>
        <a
          className="flex animate-pulse items-center gap-2 rounded bg-blue-950/60 hover:ring-2 hover:ring-blue-900 p-2"
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SkillContent skill={skill} />
        </a>
      </TooltipTrigger>
      <TooltipContent>Ver certificação oficial</TooltipContent>
    </Tooltip>
  );
};
