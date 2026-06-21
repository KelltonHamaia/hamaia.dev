import { SkillArea } from "@/components/app/sections/skills/Skill-area";
import { skills } from "@/components/app/sections/skills/data";
import { AudioControl } from "@/components/app/sections/skills/Audio-controll";

export const SkillSection = () => {
  return (
    <section className="my-8 space-y-2">
      <div className="flex justify-between">
        <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
          Skills
        </h2>
        <AudioControl />
      </div>

      {skills.map(skill => (
        <SkillArea
          title={skill.title}
          technologies={skill.technologies}
          key={skill.title}
        />
      ))}
    </section>
  );
};
