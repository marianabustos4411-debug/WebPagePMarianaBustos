import React, { useState } from 'react';
import { screenplaySnippets } from '../data/portfolioData';
import './Screenplay.css';

// Import Comic Pages
import comic1 from '../assets/Media/Comic/Comic1.jpg';
import comic2 from '../assets/Media/Comic/Comic2.jpg';
import comic3 from '../assets/Media/Comic/Comic3.jpg';
import comic4 from '../assets/Media/Comic/Comic4.jpg';
import comic5 from '../assets/Media/Comic/Comic5.jpg';

// Import Storyboard Panels
import story1 from '../assets/Media/Storyboards/story1.png';
import story2 from '../assets/Media/Storyboards/story2.png';
import story3 from '../assets/Media/Storyboards/story3.png';
import story4 from '../assets/Media/Storyboards/story4.png';

const comicPagesList = [
  { id: 1, src: comic1, label: "Cómic - Página 1" },
  { id: 2, src: comic2, label: "Cómic - Página 2" },
  { id: 3, src: comic3, label: "Cómic - Página 3" },
  { id: 4, src: comic4, label: "Cómic - Página 4" },
  { id: 5, src: comic5, label: "Cómic - Página 5" }
];

const storyboardPanelsList = [
  { id: 1, src: story1, label: "Plano 1 - Escena Inicial" },
  { id: 2, src: story2, label: "Plano 2 - Acercamiento" },
  { id: 3, src: story3, label: "Plano 3 - Transición" },
  { id: 4, src: story4, label: "Plano 4 - Desenlace" }
];

export default function Screenplay() {
  const [activeSubTab, setActiveSubTab] = useState('storyboard'); // 'scripts' | 'storyboard' | 'comic' (currently 'scripts' is hidden)
  const [lightboxAsset, setLightboxAsset] = useState(null); // { type, list, index }

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!lightboxAsset) return;
    setLightboxAsset((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.list.length) % prev.list.length
    }));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!lightboxAsset) return;
    setLightboxAsset((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.list.length
    }));
  };

  return (
    <section className="screenplay-section" id="screenplay-portfolio">
      <h2 className="section-title">Letras & Escritura Visual</h2>
      <p className="screenplay-intro">
        Del guion escrito al trazo y composición secuencial. Bocetos de dirección, secuencias gráficas e historias hilvanadas plano a plano.
      </p>

      {/* Sub-tabs Navigation */}
      <div className="letras-subtabs-nav" id="letras-subtabs-nav-bar">
        {/* Guiones tab is hidden for now, reactivate if scripts are added back
        <button
          className={`subtab-btn ${activeSubTab === 'scripts' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('scripts')}
          id="btn-subtab-scripts"
        >
          Guiones
        </button>
        */}
        <button
          className={`subtab-btn ${activeSubTab === 'storyboard' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('storyboard')}
          id="btn-subtab-storyboard"
        >
          Storyboards
        </button>
        <button
          className={`subtab-btn ${activeSubTab === 'comic' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('comic')}
          id="btn-subtab-comic"
        >
          Cómics
        </button>
      </div>

      {/* TAB CONTENT 1: Screenplay scripts sheets */}
      {activeSubTab === 'scripts' && (
        <div className="script-container" id="screenplay-scripts-list">
          {screenplaySnippets.map((script) => (
            <article key={script.id} id={`script-sheet-${script.id}`} className="script-sheet">
              <div className="script-header">
                <span className="script-title">{script.title}</span>
                <span className="script-meta">{script.scene.split(' - ')[0]}</span>
              </div>
              
              <div className="script-content">
                <div className="script-scene">{script.scene}</div>
                <div className="script-action">{script.content}</div>
              </div>

              {script.notes && (
                <div className="director-notes">
                  <div className="director-notes-title">Notas de Dirección</div>
                  <p className="director-notes-content">{script.notes}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {/* TAB CONTENT 2: Storyboard panels */}
      {activeSubTab === 'storyboard' && (
        <div className="letras-visual-grid" id="storyboard-panels-grid">
          {storyboardPanelsList.map((panel, idx) => (
            <div
              key={panel.id}
              className="letras-visual-card"
              onClick={() => setLightboxAsset({ type: 'storyboard', list: storyboardPanelsList, index: idx })}
            >
              <div className="letras-visual-media">
                <img src={panel.src} alt={panel.label} className="letras-visual-img" />
                <div className="letras-visual-overlay">
                  <span>Plano {panel.id}</span>
                </div>
              </div>
              <div className="letras-visual-caption">
                <span className="letras-visual-label">{panel.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT 3: Comic pages */}
      {activeSubTab === 'comic' && (
        <div className="letras-visual-grid" id="comic-pages-grid">
          {comicPagesList.map((page, idx) => (
            <div
              key={page.id}
              className="letras-visual-card"
              onClick={() => setLightboxAsset({ type: 'comic', list: comicPagesList, index: idx })}
            >
              <div className="letras-visual-media">
                <img src={page.src} alt={page.label} className="letras-visual-img" />
                <div className="letras-visual-overlay">
                  <span>Página {page.id}</span>
                </div>
              </div>
              <div className="letras-visual-caption">
                <span className="letras-visual-label">{page.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paged Lightbox Visualizer for Comics & Storyboards */}
      {lightboxAsset && (
        <div
          className="letras-lightbox-backdrop"
          id="letras-lightbox-backdrop"
          onClick={() => setLightboxAsset(null)}
        >
          {/* Previous Arrow Button */}
          <button
            className="lightbox-nav-btn prev-btn"
            onClick={handlePrev}
            aria-label="Imagen anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            className="letras-lightbox-content"
            id="letras-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="letras-lightbox-close"
              onClick={() => setLightboxAsset(null)}
              aria-label="Cerrar visor"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="letras-lightbox-media">
              <img
                src={lightboxAsset.list[lightboxAsset.index].src}
                alt={lightboxAsset.list[lightboxAsset.index].label}
                className="letras-lightbox-img"
              />
            </div>

            <div className="letras-lightbox-footer">
              <span className="lightbox-index">
                {lightboxAsset.index + 1} de {lightboxAsset.list.length}
              </span>
              <h4 className="lightbox-caption">
                {lightboxAsset.list[lightboxAsset.index].label}
              </h4>
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            className="lightbox-nav-btn next-btn"
            onClick={handleNext}
            aria-label="Siguiente imagen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
