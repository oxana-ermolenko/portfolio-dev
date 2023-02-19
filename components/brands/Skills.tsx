import { skills } from "../../lib/common/data";
import Image from "next/image";

export interface ISkills {}

const Skills: React.FC<ISkills> = () => {
  return (
    <section className="dark:bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-col">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <Image className="lg:h-20" src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
