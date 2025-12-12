import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (correct paths based on your folder structure)
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import GetMeACoffee from "./pages/GetMeACoffee";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      {/* SINGLE-PAGE SECTIONS */}
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="achievements"><Achievements /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="resume"><Resume /></section>
      <section id="coffee"><GetMeACoffee /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
}
