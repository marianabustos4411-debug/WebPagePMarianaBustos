import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Inicio', subtitle: '' },
    { id: 'about', label: 'Quién soy', subtitle: '(Archivo)' },
    { id: 'art', label: 'Dirección', subtitle: '(Arte)' },
    { id: 'screenplay', label: 'Letras', subtitle: '(Secuencias)' },
    { id: 'journal', label: 'Diario', subtitle: '(Lluvia de ideas)' },
    { id: 'contact', label: 'Contacto', subtitle: '' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Adjust for sticky header height if needed (e.g. 80px)
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
    }
  };

  return (
    <nav className={`navbar ${activeTab === 'art' ? 'nav-art-theme' : ''}`} id="main-navbar">
      <div className="nav-logo" id="nav-logo-ab" onClick={() => handleNavClick('home')}>
        AB
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navbar-links-list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            id={`nav-item-${item.id}`}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
            {item.subtitle && <span className="nav-subtitle">{item.subtitle}</span>}
          </li>
        ))}
      </ul>

      <button
        className={`nav-hamburger ${isOpen ? 'open' : ''}`}
        id="navbar-hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
