import React, { useEffect, useState } from "react";
import dp from "../assets/dp.jpg";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [selected, setSelected] = useState("Home");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setSelected("Home");
    } else {
      const page = path.substring(1);
      if (page) {
        const forSelected = page.charAt(0).toUpperCase() + page.slice(1);
        setSelected(forSelected);
      }
    }
  }, [location]);

  return (
    <>
      {/* Navbar Container */}
      <div className="bg-black h-20 w-full flex items-center justify-between px-6 fixed top-0 z-50 border-b border-gray-900">
        {/* Left Profile Section */}
        <div className="flex gap-3 items-center cursor-pointer">
          <img
            src={dp}
            alt="profile"
            // UPDATED: Changed border to Pink/Purple to match new theme
            className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          />
          <div>
            <h1 className="text-white font-semibold leading-tight tracking-wide">
              Dishen Gajera
            </h1>
            <p className="text-gray-400 text-xs">dishengajera@gmail.com</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
            <NavItem
              key={item}
              text={item}
              active={selected === item}
              onClick={() => {
                setSelected(item);
                item === "Home"
                  ? navigate("/")
                  : navigate("/" + item.toLocaleLowerCase());
              }}
            />
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          // UPDATED: Hover text color to pink
          className="md:hidden text-gray-400 hover:text-white hover:bg-gray-900 text-2xl transition-all duration-300 "
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-black border-b border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100 fixed top-20 z-50" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-3 ">
          {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
            <NavMobileItem
              key={item}
              text={item}
              active={selected === item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
                item === "Home"
                  ? navigate("/")
                  : navigate("/" + item.toLocaleLowerCase());
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* Desktop Item Component */
function NavItem({ text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 transform cursor-pointer ${
        active
          ? /* UPDATED GRADIENT: Blue -> Purple -> Pink */
            "bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] scale-110"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      {text}
    </button>
  );
}

/* Mobile Item Component */
function NavMobileItem({ text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-xl text-center font-bold transition-all duration-300 ${
        active
          ? /* UPDATED GRADIENT: Blue -> Purple -> Pink */
            "bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]"
          : "text-gray-400 hover:text-white hover:bg-gray-900"
      }`}
    >
      {text}
    </button>
  );
}

export default Navbar;
