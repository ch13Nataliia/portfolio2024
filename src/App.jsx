import { useEffect } from 'react';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import New_Projects from './components/New_Projects/New_Projects';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'easy-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-500 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <New_Projects />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
