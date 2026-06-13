import { SkillArea } from "@/components/app/sections/skills/Skill-area";
import { skills } from "@/components/app/sections/skills/data";

export const SkillSection = () => {
  return (
    <section className="my-8 space-y-2">
      <h2 className="text-subtitle-sm md:text-subtitle flex gap-2 font-bold">
        Tecnologias
      </h2>

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
