import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About styles={"mt-10"} />} />
          <Route path="projects" element={<Projects styles={"mt-10"} />} />
          <Route path="skills" element={<Skills styles={"mt-10"} />} />
          <Route path="contact" element={<Contact styles={"mt-10"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
