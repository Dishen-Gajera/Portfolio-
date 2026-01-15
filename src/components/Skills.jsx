import React, { useState } from "react";
import SkillCard from "./SkillCard";

// Expanded Icon Set
const icons = {
  // --- MERN / Core Web ---
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  // CHANGED: Using a white version of Express icon for dark mode visibility
  express: "https://img.icons8.com/ios/50/ffffff/express-js.png",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  // CHANGED: Using the original Tailwind SVG so it shows up correctly
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  // --- Programming Languages & Others ---
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  csharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  github: "https://img.icons8.com/ios-glyphs/90/ffffff/github.png",
  dsa: "https://img.icons8.com/ios-filled/50/ffffff/tree-structure.png",
};

function Skills({ styles }) {
  // State to toggle between showing top skills or all skills
  const [showAll, setShowAll] = useState(false);

  // Full list of skills
  const skillsData = [
    // --- PRIMARY SKILLS (Visible Initially) ---
    { id: 1, name: "React.js", icon: icons.react },
    { id: 2, name: "Node.js", icon: icons.node },
    { id: 3, name: "Express.js", icon: icons.express },
    { id: 4, name: "MongoDB", icon: icons.mongodb },
    { id: 5, name: "JavaScript", icon: icons.javascript },
    { id: 6, name: "Java", icon: icons.java },
    { id: 7, name: "GitHub", icon: icons.github },
    { id: 8, name: "DSA", icon: icons.dsa },

    { id: 9, name: "HTML5", icon: icons.html },
    { id: 10, name: "CSS3", icon: icons.css },

    // --- SECONDARY SKILLS (Hidden Initially) ---
    { id: 11, name: "Tailwind CSS", icon: icons.tailwind }, // MOVED HERE
    { id: 12, name: "Python", icon: icons.python },
    { id: 13, name: "C++", icon: icons.cpp },
    { id: 14, name: "C#", icon: icons.csharp },
    { id: 15, name: "Android", icon: icons.android },
    { id: 16, name: "Dart", icon: icons.dart },
    { id: 17, name: "PHP", icon: icons.php },
    { id: 18, name: "RDBMS (SQL)", icon: icons.mysql },
    { id: 19, name: "Bootstrap", icon: icons.bootstrap },
    { id: 20, name: "C", icon: icons.c },
  ];

  // Logic: If showAll is true, show everything. If false, show only the first 8 items.
  const displayedSkills = showAll ? skillsData : skillsData.slice(0, 8);

  return (
    <section
      className={`w-full py-20 bg-black border-t border-gray-900 relative overflow-hidden ${styles}`}
    >
      {" "}
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[100px] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive list of the technologies, languages, and tools I
            have worked with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-500 ease-in-out">
          {displayedSkills.map((skill) => (
            <SkillCard key={skill.id} name={skill.name} icon={skill.icon} />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full font-bold text-white 
                       bg-linear-to-r from-blue-600 via-purple-600 to-pink-500
                       shadow-[0_0_15px_rgba(236,72,153,0.5)]
                       transition-all duration-300
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] cursor-pointer"
          >
            {showAll ? "Show Less" : "View All Skills"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
