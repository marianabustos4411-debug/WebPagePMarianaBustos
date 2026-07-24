import React from 'react';
import './FloatingButtons.css';
import cvImage from '../assets/Media/Cv.png';

const CV_LINK = cvImage;
const PORTFOLIO_LINK = 'https://canva.link/v20c708hv5q8vev';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons-container" id="portfolio-floating-actions">
      {/* CV Button */}
      <a
        href={CV_LINK}
        className="floating-btn cv-btn"
        target="_blank"
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

      {/* Portfolio Button */}
      <a
        href={PORTFOLIO_LINK}
        className="floating-btn portfolio-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver portafolio de Canva"
        id="btn-float-portfolio"
      >
        <div className="floating-btn-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
        <span className="floating-btn-text">Portafolio</span>
      </a>
    </div>
  );
}
