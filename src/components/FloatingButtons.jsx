import React from 'react';
import './FloatingButtons.css';

// ==========================================
// CONFIGURACIÓN DE ENLACES
// Reemplaza '#' por las URLs correspondientes:
// Ejemplos: 
//   CV_LINK: "/CV_Andy_Bustos.pdf" (guarda el PDF en la carpeta public)
//   REEL_LINK: "https://vimeo.com/..." o "https://youtube.com/..."
// ==========================================
const CV_LINK = '#';
const REEL_LINK = '#';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons-container" id="portfolio-floating-actions">
      {/* CV Button */}
      <a
        href={CV_LINK}
        className="floating-btn cv-btn"
        target={CV_LINK !== '#' ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label="Ver currículum vitae"
        id="btn-float-cv"
      >
        <div className="floating-btn-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <span className="floating-btn-text">Ver CV</span>
      </a>

      {/* Demo Reel Button */}
      <a
        href={REEL_LINK}
        className="floating-btn reel-btn"
        target={REEL_LINK !== '#' ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label="Ver demo reel"
        id="btn-float-reel"
      >
        <div className="floating-btn-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
        <span className="floating-btn-text">Ver Reel</span>
      </a>
    </div>
  );
}
