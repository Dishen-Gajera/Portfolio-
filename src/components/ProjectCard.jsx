import React from "react";

// આ Icons છે (તમારે અલગથી install કરવાની જરૂર નથી)
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function ProjectCard({ image, title, description, github, live, tags = [] }) {
  return (
    <div className="group relative w-full h-full">
      {/* Background Glow Effect */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500"></div>

      {/* Main Card */}
      <div className="relative flex flex-col h-full bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-10 opacity-60" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Top Right Badge (Optional) */}
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md rounded-md border border-white/10">
              Project
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
              {title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack Tags (New Feature) */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 text-xs font-medium text-pink-300 bg-pink-900/20 rounded-full border border-pink-700/30"
                >
                  {tag}
                </span>
              ))
            ) : (
              // Default tags if none provided
              <>
                <span className="px-2.5 py-0.5 text-xs font-medium text-blue-300 bg-blue-900/20 rounded-full border border-blue-700/30">
                  React
                </span>
                <span className="px-2.5 py-0.5 text-xs font-medium text-purple-300 bg-purple-900/20 rounded-full border border-purple-700/30">
                  Tailwind
                </span>
              </>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
            {/* GitHub Button */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800 hover:text-white border border-gray-700 hover:border-gray-500 transition-all duration-300 w-1/2 group/btn"
            >
              <GithubIcon />
              <span>Code</span>
            </a>

            {/* Live View Button */}
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-300 w-1/2"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
