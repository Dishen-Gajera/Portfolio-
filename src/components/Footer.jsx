import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black border-t border-gray-900 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Grid: Centered on mobile (text-center), Left on desktop (md:text-left) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* --- Brand Section --- */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Dishen{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
                Gajera
              </span>
            </h2>
            {/* mx-auto md:mx-0 centers the paragraph on mobile, aligns left on desktop */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              A passionate MERN Stack Developer building scalable and
              user-friendly web applications. Let's turn ideas into reality.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li
                className="hover:text-purple-400 transition-colors cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className="hover:text-purple-400 transition-colors cursor-pointer"
                onClick={() => navigate("/about")}
              >
                About
              </li>
              <li
                className="hover:text-purple-400 transition-colors cursor-pointer"
                onClick={() => navigate("/skills")}
              >
                Skills
              </li>
              <li
                className="hover:text-purple-400 transition-colors cursor-pointer"
                onClick={() => navigate("/projects")}
              >
                Projects
              </li>
              <li
                className="hover:text-purple-400 transition-colors cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Contact
              </li>
            </ul>
          </div>

          {/* --- Socials --- */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Me</h3>
            {/* Flex container: Centered on mobile, Start on desktop */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <FooterSocialLink
                href="https://github.com/Dishen-Gajera"
                icon="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
                alt="GitHub"
              />
              <FooterSocialLink
                href="https://www.linkedin.com/in/dishen-gajera-97bb30247/"
                icon="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png"
                alt="LinkedIn"
              />

              {/* LeetCode (Inverted to White) */}
              <FooterSocialLink
                href="https://leetcode.com/u/si2oIf1yHf/"
                icon="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="invert"
              />

              {/* GeeksforGeeks (White Background for visibility) */}
              <FooterSocialLink
                href="https://www.geeksforgeeks.org/profile/dishenmoxhg"
                icon="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                alt="GeeksforGeeks"
                className="bg-white rounded-full p-0.5"
              />
            </div>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Dishen Gajera. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-pink-500 animate-pulse">❤</span>{" "}
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper Component for Social Icons
function FooterSocialLink({ href, icon, alt, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 transition-all duration-300 hover:bg-purple-600 hover:border-purple-500 hover:scale-110"
    >
      <img
        src={icon}
        alt={alt}
        className={`w-5 h-5 object-contain ${className}`}
      />
    </a>
  );
}

export default Footer;
