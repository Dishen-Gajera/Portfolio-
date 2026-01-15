import React from "react";
import cv from '../assets/cv.pdf';
import dp from "../assets/dp.jpg"; // Ensure path is correct

function About({ styles }) {
  return (
    <section
      className={`w-full py-20 bg-black border-t border-gray-900 relative overflow-hidden ${styles}`}
    >
      {/* Subtle background glow effect situated behind the text area */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full max-w-4xl bg-purple-900/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* --- MOBILE HEADING (Visible only on Mobile, appears above photo) --- */}
        <h2 className="md:hidden block text-4xl font-bold mb-12 text-white text-center">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="flex justify-center md:justify-start relative">
            {/* The image container with neon glow border and shadow */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-transform duration-500 hover:scale-[1.02]">
              {/* Optional: A subtle gradient overlay on the image for better blending */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-10"></div>
              <img
                src={dp}
                alt="Dishen Gajera"
                className="w-full h-full object-cover relative z-0"
              />
            </div>
            {/* Decorative background element behind image */}
            <div className="absolute -bottom-4 md:-left-4 w-full h-full border-2 border-blue-500/20 rounded-2xl -z-10"></div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="flex flex-col text-left">
            {/* --- DESKTOP HEADING (Hidden on mobile, Visible on Desktop) --- */}
            <h2 className="hidden md:block text-4xl md:text-5xl font-bold mb-6 text-white text-left">
              About{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
                Me
              </span>
            </h2>

            <h3 className="text-2xl font-semibold text-gray-200 mb-4 md:text-left text-center">
              Dishen Gajera
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Hello! I am currently pursuing my{" "}
              <strong className="text-white">
                Master of Computer Applications (MCA)
              </strong>
              . As an enthusiastic fresher in the tech landscape, I am deeply
              passionate about building dynamic web solutions.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My core focus is on the{" "}
              <strong className="text-purple-400">MERN Stack</strong> (MongoDB,
              Express, React, Node.js). I love the process of turning complex
              backend logic into clean, user-friendly frontend experiences. I am
              always eager to learn new technologies and collaborate on
              innovative projects.
            </p>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <HighlightBox
                title="MCA Student"
                desc="Marwadi University"
                border="blue"
              />
              <HighlightBox
                title="MERN Developer"
                desc="Full-Stack Focus"
                border="purple"
              />
              <HighlightBox
                title="Fresher"
                desc="Ready to Work"
                border="pink"
              />
              <HighlightBox
                title="Quick Learner"
                desc="Adaptive & Curious"
                border="blue"
              />
            </div>

            {/* Optional CTA Button */}
            <div className="flex md:justify-start justify-center">
              <a  href={cv} download={"Dishen_Resume.pdf"} className="px-8 py-3 rounded-full font-bold text-white bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] cursor-pointer">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Small helper component for the highlight boxes to keep code clean
function HighlightBox({ title, desc, border }) {
  const borderColors = {
    blue: "border-blue-500/30 hover:border-blue-500",
    purple: "border-purple-500/30 hover:border-purple-500",
    pink: "border-pink-500/30 hover:border-pink-500",
  };

  return (
    <div
      className={`p-4 bg-gray-900/50 rounded-xl border ${borderColors[border]} transition-colors duration-300`}
    >
      <h4 className="text-white font-bold">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}

export default About;
