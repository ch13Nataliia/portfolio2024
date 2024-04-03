import React from 'react';
import Hero from './components/Hero/Hero';

import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
function App() {
  React.useEffect(() => {
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
    </div>
  );
}

export default App;
