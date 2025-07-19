import React from "react";

const SkillsCard = ({ iconUrl, title, isActive, onClick }) => {
  return (
    <div
      className={`relative w-full h-[100px] flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300  md:mt-3
        ${
          isActive
            ? "bg-[#cc1eccd7] shadow-lg text-white"
            : "border border-[#cc1eccd7] bg-transparent hover:bg-[#cc1eccd7]"
        }`}
      onClick={onClick}
    >
      {/* Floating Icon */}
      <div
        className={`absolute top-[-18px] left-4 w-9 h-9 p-1 rounded-md bg-[#1e1b2e] flex items-center justify-center
          ${
            isActive ? "bg-white/10" : "bg-[#1e1b2e] border border-[#cc1eccd7]"
          }`}
      >
        <img
          src={iconUrl}
          alt={title}
          className="w-6 h-6 object-contain "
          style={{
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>

      {/* Title */}
      <span className="text-lg font-medium">{title}</span>
    </div>
  );
};

export default SkillsCard;
