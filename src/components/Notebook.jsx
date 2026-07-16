import React, { useState } from 'react';
import './Notebook.css';

export default function Notebook({ pages }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  if (!pages || pages.length === 0) {
    return null;
  }

  const currentPage = pages[currentPageIndex];

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  return (
    <div className="notebook-container" id="notebook-main-container">
      {currentPageIndex > 0 && (
        <button
          className="notebook-arrow notebook-arrow-prev"
          onClick={handlePrevPage}
          id="btn-notebook-prev"
          aria-label="Página anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      <div className="notebook" id="notebook-shell">
        <div className="notebook-spine" id="notebook-binding-spine"></div>
        <div className="notebook-pages" id="notebook-inner-pages">
          
          {/* Left Page */}
          <div className="page-side page-left" id="notebook-page-left-side">
            <h2 className="notebook-title">{currentPage.leftPage.title}</h2>
            {currentPage.leftPage.content.map((paragraph, index) => (
              <p key={index} className="notebook-text">
                {paragraph}
              </p>
            ))}
            <span className="page-number">{(currentPageIndex * 2) + 1}</span>
          </div>

          {/* Right Page */}
          <div className="page-side page-right" id="notebook-page-right-side">
            {currentPage.rightPage.type === 'image' && (
              <div className="notebook-image-container">
                {currentPage.rightPage.src ? (
                  <img
                    src={currentPage.rightPage.src}
                    alt={currentPage.rightPage.alt || "Imagen del portafolio"}
                    className="notebook-real-image"
                  />
                ) : (
                  <span className="notebook-placeholder-image">{currentPage.rightPage.placeholder || 'Imagen'}</span>
                )}
              </div>
            )}
            
            {currentPage.rightPage.type === 'content' && (
              <>
                <h3 className="notebook-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
                  {currentPage.rightPage.title}
                </h3>
                {currentPage.rightPage.content.map((paragraph, index) => (
                  <p key={index} className="notebook-text">
                    {paragraph}
                  </p>
                ))}
              </>
            )}
            
            <span className="page-number">{(currentPageIndex * 2) + 2}</span>
          </div>

        </div>
      </div>

      {currentPageIndex < pages.length - 1 && (
        <button
          className="notebook-arrow notebook-arrow-next"
          onClick={handleNextPage}
          id="btn-notebook-next"
          aria-label="Página siguiente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}
