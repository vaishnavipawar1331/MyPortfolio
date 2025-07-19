import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import SkillsCard from "./SkillsCard";
import SkillsInfoCard from "./SkillsInfoCard";

const Skills = () => {
  const [selectSkill, setSelectSkill] = useState(SkillsInfo[0]);

  const handleSelectSkill = (data) => {
    setSelectSkill(data);
  };

  return (
    <section
      id="skills"
      className="bg-[#050414] rounded-xl shadow-lg px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 mt-10"
    >
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 text-center">
        Technical Skills
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-[#cc1eccd7] mx-auto"></div>

      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/* Left - Tabs */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-4 text-white sm:mt-10">
          {SkillsInfo.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>

        {/* Right - Skill Bars */}
        <div className="w-full lg:w-1/2">
          <SkillsInfoCard
            heading={selectSkill.title}
            skills={selectSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
