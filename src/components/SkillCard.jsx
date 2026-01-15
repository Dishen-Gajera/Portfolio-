import React from "react";

function SkillCard({ icon, name }) {
  return (
    <div
      className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 
                 flex flex-col items-center justify-center gap-4
                 transition-all duration-300 ease-in-out
                 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2 cursor-pointer"
    >
      {/* Icon Container with Glow Effect on Hover */}
      <div className="relative">
        {/* Subtle background glow behind the icon */}
        <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <img
          src={icon}
          alt={name}
          /* Adds a colored drop-shadow to the icon itself on hover */
          className="w-16 h-16 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        />
      </div>

      {/* Skill Name */}
      <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
        {name}
      </h3>
    </div>
  );
}

export default SkillCard;
