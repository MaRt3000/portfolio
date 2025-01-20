
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'

import Experience from './components/Experience'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
