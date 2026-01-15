import React from "react";
import Navbar from "./Navbar";
import dp from "../assets/dp.jpg";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="flex items-center bg-black min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 justify-center items-center grid-cols-1">
          {/* Profile Image */}
          <div className="md:flex hidden justify-center">
            <img
              src={dp}
              alt="Profile"
              className="w-70 aspect-square rounded-full border-4 border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.6)] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight sm:text-left text-center">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
                Dishen
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-300 text-center sm:text-left">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-blue-500">
                MERN Stack Developer
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg max-w-lg leading-relaxed">
              I build modern, responsive full-stack web applications using
              React, Node.js, Express, and MongoDB.
            </p>

            <div className="mt-8 flex gap-5">
              <button
                className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] cursor-pointer"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </button>

              <button
                className="px-8 py-3 rounded-full font-bold text-white border-2 border-pink-500/50 hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(236,72,153,0.2)] cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section className="bg-black py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-pink-500">
              Education
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">BCA</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-bold rounded-full border border-blue-500/30">
                  2022 - 2025
                </span>
              </div>
              <h4 className="text-xl text-blue-400 font-semibold mb-2">
                Saurashtra University
              </h4>
              <p className="text-gray-300 font-medium mb-1">
                Harivandana College
              </p>
              <p className="text-gray-400 text-sm">
                Bachelor of Computer Applications. Built a strong foundation in
                programming, database management, and web development
                fundamentals.
              </p>
            </div>
            {/* Card 1: MCA (Future/Current) - Pink/Purple Theme */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.1)] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">MCA</h3>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-sm font-bold rounded-full border border-pink-500/30">
                  2025 - 2027
                </span>
              </div>
              <h4 className="text-xl text-purple-400 font-semibold mb-2">
                Marwadi University
              </h4>
              <p className="text-gray-400 text-sm">
                Master of Computer Applications. Focusing on advanced software
                development, full-stack technologies, and system architecture.
              </p>
            </div>

            {/* Card 2: BCA (Past) - Blue/Cyan Theme */}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <div className="bg-black">
        <Projects />
      </div>
      <div className="bg-black">
        <Skills />
      </div>
      <div className="bg-black">
        <About />
      </div>
      <div className="bg-black">
        <Contact />
      </div>
    </>
  );
}

export default Home;
