import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notebook from './components/Notebook';
import ArtDirection from './pages/ArtDirection';
import Screenplay from './pages/Screenplay';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import FloatingButtons from './components/FloatingButtons';
import { whoAmIPages } from './data/portfolioData';
import menuPrincipalGif from './assets/Media/MenuPrincipal.gif';
import fondo2Img from './assets/Media/Fondo2.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  // DURACIÓN DEL GIF INTRO (en milisegundos)
  const GIF_DURATION = 2600;

  // Manejar la pantalla de presentación (Splash GIF)
  useEffect(() => {
    const fadeDuration = 800; // debe coincidir con la transición CSS (0.8s)

    const timer = setTimeout(() => {
      setFadeSplash(true);
      setTimeout(() => {
        setShowSplash(false);
      }, fadeDuration);
    }, GIF_DURATION);

    return () => clearTimeout(timer);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'art', 'screenplay', 'journal', 'contact'];
    
    const observerCallback = () => {
      const navbarOffset = 100; // Sticky navbar offset + breathing room
      let activeSection = 'home';

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // A section is active if it spans across the center line of the viewport
          if (rect.top < window.innerHeight / 2 && rect.bottom > navbarOffset) {
            activeSection = id;
          }
        }
      });

      setActiveTab(activeSection);
    };

    const observerOptions = {
      root: null,
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container" id="app-root-container">
      {/* Immersive Atmospheric Background */}
      <div className="background-video-wrapper" id="bg-video-wrapper">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000"
          id="atmospheric-bg-video"
        >
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02cba73d11d0cf8867a57a5369c9b68&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="background-overlay" id="bg-vignette-overlay"></div>
      </div>

      {/* Cinematic Intro Background Layer */}
      {showSplash && (
        <div className={`splash-bg-wrapper ${fadeSplash ? 'splash-fade-out' : ''}`} id="splash-intro-bg">
          <img
            src={menuPrincipalGif}
            alt="Introducción"
            className="splash-gif"
            id="splash-intro-gif"
          />
        </div>
      )}

      {/* Dynamic Background Image Layer (Fondo2.png) */}
      <div className={`background-image-wrapper ${activeTab === 'art' ? 'fade-in' : ''}`} id="bg-art-direction-layer">
        <img
          src={fondo2Img}
          alt="Fondo Dirección de Arte"
          className="background-image"
          id="bg-art-direction-img"
        />
      </div>

      {/* Shared Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Core Portfolio Content Views (Stacked Vertically) */}
      <main style={{ width: '100%' }}>
        <section id="home">
          <Home onScrollDown={() => handleScrollToSection('about')} />
        </section>
        
        <section id="about" style={{ padding: '4rem 0' }}>
          <Notebook pages={whoAmIPages} />
        </section>
        
        <section id="art" style={{ padding: '4rem 0' }}>
          <ArtDirection />
        </section>
        
        <section id="screenplay" style={{ padding: '4rem 0' }}>
          <Screenplay />
        </section>
        
        <section id="journal" style={{ padding: '4rem 0' }}>
          <Journal />
        </section>
        
        <section id="contact" style={{ padding: '4rem 0' }}>
          <Contact />
        </section>
      </main>

      {/* Floating Action Buttons for CV and Reel */}
      <FloatingButtons />
    </div>
  );
}
