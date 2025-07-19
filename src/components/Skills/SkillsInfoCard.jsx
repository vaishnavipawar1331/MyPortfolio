import React from "react";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="w-full">
      <h3 className="text-white text-xl font-semibold mb-6">{heading}</h3>
      <div className="flex flex-col gap-5">
        {skills.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>{item.skills}</span>
              <span>{item.percentage}</span>
            </div>
            <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
              <div
                className="bg-[#cc1eccd7] h-3 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
