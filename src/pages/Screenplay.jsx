import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Notebook from '../components/Notebook';
import { screenplaySnippets } from '../data/portfolioData';
import './Screenplay.css';

// Import Comic Pages and Cover
import comicCover from '../assets/Media/Comic/portada real, cuervo.png';
import comic1 from '../assets/Media/Comic/Comic1.jpg';
import comic2 from '../assets/Media/Comic/Comic2.jpg';
import comic3 from '../assets/Media/Comic/Comic3.jpg';
import comic4 from '../assets/Media/Comic/Comic4.jpg';
import comic5 from '../assets/Media/Comic/Comic5.jpg';

// Import Storyboard Panels
import storyboardCover from '../assets/Media/Storyboards/Renacer portada.png';
import story1 from '../assets/Media/Storyboards/story1.png';
import story2 from '../assets/Media/Storyboards/story2.png';
import story3 from '../assets/Media/Storyboards/story3.png';
import story4 from '../assets/Media/Storyboards/story4.png';

const comicPagesList = [
  { id: 0, src: comicCover, label: "Portada - El Cuervo" },
  { id: 1, src: comic1, label: "Cómic - Página 1" },
  { id: 2, src: comic2, label: "Cómic - Página 2" },
  { id: 3, src: comic3, label: "Cómic - Página 3" },
  { id: 4, src: comic4, label: "Cómic - Página 4" },
  { id: 5, src: comic5, label: "Cómic - Página 5" }
];

const storyboardPanelsList = [
  { id: 0, src: storyboardCover, label: "Portada - Renacer" },
  { id: 1, src: story1, label: "Plano 1 - Escena Inicial" },
  { id: 2, src: story2, label: "Plano 2 - Acercamiento" },
  { id: 3, src: story3, label: "Plano 3 - Transición" },
  { id: 4, src: story4, label: "Plano 4 - Desenlace" }
];

export default function Screenplay() {
  const [activeSubTab, setActiveSubTab] = useState('storyboard'); // 'scripts' | 'storyboard' | 'comic' (currently 'scripts' is hidden)
  const [lightboxAsset, setLightboxAsset] = useState(null); // { type, list, index }

  useEffect(() => {
    if (lightboxAsset) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxAsset]);

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

  const handleNotebookImageClick = (imageSrc, isComic) => {
    const list = isComic ? comicPagesList : storyboardPanelsList;
    const index = list.findIndex(item => item.src === imageSrc);
    if (index !== -1) {
      setLightboxAsset({
        type: isComic ? 'comic' : 'storyboard',
        list: list,
        index: index
      });
    }
  };

  const storyboardNotebookPages = [
    {
      leftPage: {
        type: 'image',
        src: storyboardCover,
        alt: "Portada - Renacer",
        fitMode: 'contain'
      },
      rightPage: {
        type: 'metadata',
        title: "Renacer",
        synopsis: [
          "Poema visual que reflexiona sobre la transformación y los cambios inevitables de la vida. Explora la idea de que la identidad está en constante construcción y compuesta por múltiples versiones.",
          "A través de imágenes poéticas y recursos simbólicos, la obra presenta un universo donde la incertidumbre y la esperanza conviven, mostrando la capacidad humana de reconstruirse y seguir avanzando incluso en medio del cambio."
        ],
        specs: {
          "Título": "Renacer",
          "Formato": "Cortometraje experimental / Video poema",
          "Estado actual": "En desarrollo",
          "Duración": "4 minutos (estimada)",
          "Género": "Poesía audiovisual / Experimental",
          "Técnica": "Live Action + Animación Cut-out + Motion Graphics",
          "Guion y Dir.": "Mariana Andrea Bustos Gómez"
        }
      }
    },
    {
      leftPage: {
        type: 'images',
        images: [story1, story2]
      },
      rightPage: {
        type: 'images',
        images: [story3, story4]
      }
    }
  ];

  const comicNotebookPages = [
    {
      leftPage: {
        type: 'image',
        src: comicCover,
        alt: "Portada - El Cuervo",
        fitMode: 'contain'
      },
      rightPage: {
        type: 'metadata',
        title: "El Cuervo y La Muerte",
        synopsis: [
          "Durante el caos de la Segunda Guerra Mundial, Cuervo, un joven de dieciséis años que ha perdido a toda su familia, encuentra refugio en un sombrío orfanato nazi.",
          "Allí descubre que la presencia que lo ha perseguido desde la tragedia no es producto de su dolor, sino la Muerte misma, una entidad solitaria que anhela compañía.",
          "Tras sellar un insólito pacto con ella —detener las muertes mientras Cuervo sea capaz de encontrar belleza en la vida—, el joven comienza a redescubrir la esperanza gracias a su amistades del orfanato."
        ],
        specs: {
          "Título": "El Cuervo y La Muerte",
          "Género": "Drama / Fantasía oscura / Realismo mágico",
          "Formato": "Piloto de serie limitada",
          "Duración": "60 min (estimada)",
          "Público": "Jóvenes adultos y adultos",
          "Ambientación": "Segunda Guerra Mundial y posguerra (Alemania, 1945 - 1950s)"
        }
      }
    },
    {
      leftPage: {
        type: 'image',
        src: comic1,
        alt: "Cómic Página 1",
        fitMode: 'contain'
      },
      rightPage: {
        type: 'image',
        src: comic2,
        alt: "Cómic Página 2",
        fitMode: 'contain'
      }
    },
    {
      leftPage: {
        type: 'image',
        src: comic3,
        alt: "Cómic Página 3",
        fitMode: 'contain'
      },
      rightPage: {
        type: 'image',
        src: comic4,
        alt: "Cómic Página 4",
        fitMode: 'contain'
      }
    },
    {
      leftPage: {
        type: 'image',
        src: comic5,
        alt: "Cómic Página 5",
        fitMode: 'contain'
      },
      rightPage: {
        type: 'image',
        src: '',
        placeholder: '',
        fitMode: 'contain'
      }
    }
  ];

  return (
    <section className="screenplay-section" id="screenplay-portfolio">
      <h2 className="section-title">Letras & Escritura Visual</h2>
      <p className="screenplay-intro">
        Del guion escrito al trazo y composición secuencial. Bocetos de dirección, secuencias gráficas e historias hilvanadas plano a plano.
      </p>

      {/* Sub-tabs Navigation */}
      <div className="letras-subtabs-nav" id="letras-subtabs-nav-bar">
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

      {/* TAB CONTENT 1: Screenplay scripts sheets (hidden) */}
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

      {/* TAB CONTENT 2: Storyboard panels in Notebook */}
      {activeSubTab === 'storyboard' && (
        <Notebook
          key="storyboard-notebook"
          pages={storyboardNotebookPages}
          onImageClick={(src) => handleNotebookImageClick(src, false)}
        />
      )}

      {/* TAB CONTENT 3: Comic pages in Notebook */}
      {activeSubTab === 'comic' && (
        <Notebook
          key="comic-notebook"
          pages={comicNotebookPages}
          onImageClick={(src) => handleNotebookImageClick(src, true)}
        />
      )}

      {/* Paged Lightbox Visualizer for Comics & Storyboards */}
      {lightboxAsset && createPortal(
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
        </div>,
        document.body
      )}
    </section>
  );
}
