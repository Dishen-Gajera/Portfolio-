import React from "react";
import dp from "../assets/dp.jpg"; // Ensure path is correct
import ProjectCard from "./ProjectCard";
import viewtube from "../assets/viewtube.png";
import dgchat from "../assets/dgchat.png";

function Projects({ styles }) {
  // Array of project data for cleaner code
  const projectData = [
    {
      id: 1,
      title: "ViewTube – AI Powered Video Streaming Platform",
      description:
        "ViewTube is a YouTube-like video streaming platform with features such as video & shorts posting, voice and text search, AI-based recommendations using Gemini API, creator analytics, revenue estimation, playlists, subscriptions, and personalized user history",
      github: "https://github.com/Dishen-Gajera/ViewTube",
      live: "https://viewtube-frontend-e6fw.onrender.com/",
      image: viewtube,
      tags: ["React", "Node", "Express", "Mongodb", "Gemni-api", "Tailwind"],
    },
    {
      id: 2,
      title: "DG Chat – Live Chat & Image Sharing App",
      description:
        "A real-time chat application built with the MERN stack featuring live messaging, image sharing, emoji support, and real-time online status using Socket.io",
      github: "https://github.com/Dishen-Gajera/chatapk",
      live: "https://chatapk-frontend.onrender.com/",
      image: dgchat,
      tags: ["React", "Node", "Express", "Mongodb", "Socket-io", "Tailwind"],
    },
  ];

  return (
    <section
      className={`w-full py-20 bg-black border-t border-gray-900 relative overflow-hidden ${styles}`}
    >
      {/* Optional: Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are a few past projects I've worked on. Each one presented
            unique challenges and learning opportunities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              github={project.github}
              live={project.live}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
