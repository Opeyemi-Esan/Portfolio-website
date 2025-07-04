import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {!isLoaded && < LoadingScreen onComplete ={() => setIsLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"} 
        bg-black text-gray-100`}
      >
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Home />
        <About /> 
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
