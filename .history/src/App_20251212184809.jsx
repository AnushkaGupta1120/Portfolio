import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import SkillNetwork from './pages/Skills'

export default function App() {
  return (
    <div className="app">
      <Navbar />

      {/* ALL SECTIONS ON ONE PAGE */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><SkillNetwork /></section>
      <section id="projects"><Projects /></section>
      <section id="gallery"><Gallery /></section>
      <section id="certificates"><Certificates /></section>
      <section id="blog"><Blog /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>

      <footer className="footer">
        © {new Date().getFullYear()} Anushka Gupta — Built with React
      </footer>
    </div>
  )
}
