import React from "react";

export const SkillProgress = (props: any) => {
  return props.skills.map((skill: any, index: number) => {
    return (
      <div key={skill.name} className="w-full bg-gray-200 rounded-full mb-3">
        <div
          style={{ width: +(skill.yrsOfExp * 20) + "%" }}
          className="bg-orange-600 text-xs font-medium text-orange-100 text-center p-0.5 leading-none rounded-l-full"
        >
          {skill.name} <span className="pl-5">{skill.yrsOfExp} yr(s)</span>
        </div>
      </div>
    );
  });
};
