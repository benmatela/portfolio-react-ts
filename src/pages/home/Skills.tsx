import React from "react";
import { Domains } from "../../components/Domains";
import { SkillProgress } from "../../components/SkillProgress";

export const Skills = () => {
  const domains = [
    {
      id: "01",
      name: "Frontend",
      description: "ReactJs, Tailwind, Bootstrap, Angular, CSS",
    },
    {
      id: "02",
      name: "Backend",
      description: "NodeJs, C#, Firebase Functions, MongoDB",
    },
    {
      id: "03",
      name: "DevOps",
      description: "Firebase, Digital Ocean, Linux, Docker",
    },
  ];
  const skills = [
    { name: "Angular", yrsOfExp: 5 },
    { name: "React", yrsOfExp: 3 },
    { name: "TypeScript", yrsOfExp: 5 },
    { name: "JavaScript", yrsOfExp: 5 },
    { name: "CSharp", yrsOfExp: 3 },
    { name: "Bootstrap", yrsOfExp: 4 },
    { name: "Tailwind", yrsOfExp: 2 },
    { name: "NodeJs", yrsOfExp: 3 },
    { name: "Firebase", yrsOfExp: 3 },
  ];

  return (
    <section id="skills">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-8 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Skills and Experience
          </h2>
          <div className="">
            <Domains domains={domains} />
          </div>
        </div>

        <div className="flex flex-col space-y-12 md:w-1/2">
        <div className="md:pt-2"></div>
          <div className="pt-4">
            <SkillProgress skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
};
