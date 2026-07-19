import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Journal.css';

// Import all 12 mixed-media scanned resources (WebP assets deleted by user removed)
import imgPoemas from '../assets/Media/Diario-MixedMedia/Apuntes poemas.png';
import imgCaptura from '../assets/Media/Diario-MixedMedia/Captura de pantalla 2026-06-22 a la(s) 9.23.42 p.m..png';
import imgEscanear from '../assets/Media/Diario-MixedMedia/Escanear 2.jpg';
import imgFb1 from '../assets/Media/Diario-MixedMedia/FB_IMG_1668020501501.jpg';
import imgFb2 from '../assets/Media/Diario-MixedMedia/FB_IMG_1668020523152.jpg';
import img3752 from '../assets/Media/Diario-MixedMedia/IMG_3752.JPG';
import img8127 from '../assets/Media/Diario-MixedMedia/IMG_8127.PNG';
import img9150 from '../assets/Media/Diario-MixedMedia/IMG_9150.jpg';
import img9151 from '../assets/Media/Diario-MixedMedia/IMG_9151.jpg';
import img9153 from '../assets/Media/Diario-MixedMedia/IMG_9153.jpg';
import imgCollage from '../assets/Media/Diario-MixedMedia/collage.png';
import imgCrucigrama from '../assets/Media/Diario-MixedMedia/crucigrama.png';

const scrapbookItems = [
  {
    id: 1,
    image: imgPoemas,
    title: "Apuntes & Poemas de Proceso",
    type: "notebook", // Lined paper, torn borders
    rotation: "rot-left-2",
    date: "14 Oct"
  },
  {
    id: 2,
    image: imgCaptura,
    title: "Lluvia de Ideas y Estructuras Narrativas",
    type: "clipping", // Organic clipping
    rotation: "rot-right-1",
    date: "22 Jun"
  },
  {
    id: 13,
    title: "En las letras",
    type: "sticky",
    rotation: "rot-right-2",
    content: "“Porque en cada letra aún puedo sentirte conmigo.”",
    isTextOnly: true,
    date: "Nota"
  },
  {
    id: 3,
    image: imgEscanear,
    title: "Boceto y Sombras de Escena",
    type: "notebook",
    rotation: "rot-left-1",
    date: "05 Nov"
  },
  {
    id: 4,
    image: imgFb1,
    title: "Recortes y Texturas",
    type: "polaroid", // Classic polaroid style
    rotation: "rot-right-2",
    date: "12 Nov"
  },
  {
    id: 14,
    title: "Latidos",
    type: "sticky",
    rotation: "rot-left-3",
    content: "“Y tengo demasiados latidos para tan poco pecho”",
    isTextOnly: true,
    date: "Nota"
  },
  {
    id: 5,
    image: imgFb2,
    title: "Esquema de Composición",
    type: "polaroid",
    rotation: "rot-left-3",
    date: "12 Nov"
  },
  {
    id: 6,
    image: img3752,
    title: "Anotaciones de Diario Íntimo",
    type: "notebook",
    rotation: "rot-right-3",
    date: "08 Sep"
  },
  {
    id: 15,
    title: "Formas de sueños",
    type: "sticky",
    rotation: "rot-right-1",
    content: "“En esta casa todos los días hablamos de ti. Y de cómo esperamos que te aparezcas. En formas de sueños.”",
    isTextOnly: true,
    date: "Nota"
  },
  {
    id: 7,
    image: img8127,
    title: "Planos Mixed-Media & Collage",
    type: "clipping",
    rotation: "rot-left-2",
    date: "19 Mar"
  },
  {
    id: 8,
    image: img9150,
    title: "Lluvia de Ideas Dirección de Arte",
    type: "notebook",
    rotation: "rot-right-1",
    date: "03 Ago"
  },
  {
    id: 16,
    title: "Probar la vida",
    type: "sticky",
    rotation: "rot-left-2",
    content: "“Nosotras escribimos para probar la vida dos veces.”",
    isTextOnly: true,
    date: "Cita"
  },
  {
    id: 9,
    image: img9151,
    title: "Esquema Lumínico y Cromático",
    type: "notebook",
    rotation: "rot-left-1",
    date: "04 Ago"
  },
  {
    id: 10,
    image: img9153,
    title: "Notas de Producción y Rodaje",
    type: "notebook",
    rotation: "rot-right-2",
    date: "06 Ago"
  },
  {
    id: 17,
    title: "Eco",
    type: "sticky",
    rotation: "rot-right-3",
    content: "“Se me acumulan preguntas. Que hacen eco y vuelven vacías. Pero con atención, escucho tu amor.”",
    isTextOnly: true,
    date: "Nota"
  },
  {
    id: 11,
    image: imgCollage,
    title: "Boceto de Collage Digital",
    type: "clipping",
    rotation: "rot-left-3",
    date: "15 Ene"
  },
  {
    id: 12,
    image: imgCrucigrama,
    title: "Crucigrama Conceptual de Personajes",
    type: "notebook",
    rotation: "rot-right-3",
    date: "28 Feb"
  }
];

export default function Journal() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  const handleItemClick = (item) => {
    if (!item.isTextOnly) {
      setActiveItem(item);
    }
  };

  return (
    <section className="journal-section" id="journal-diary-portfolio">
      <div className="journal-header-area">
        <h2 className="section-title">Diario</h2>
        <p className="journal-subtitle">
          Un collage mixed-media de bocetos analógicos, recortes, esquemas de color y anotaciones de rodaje.
        </p>
      </div>

      {/* Masonry Scrapbook Board */}
      <div className="scrap-board" id="scrapbook-board-container">
        {scrapbookItems.map((item) => (
          <div
            key={item.id}
            id={`scrap-item-${item.id}`}
            className={`scrap-item ${item.type} ${item.rotation} ${item.isTextOnly ? 'text-only' : ''}`}
            onClick={() => handleItemClick(item)}
          >
            {/* Transparent Adhesive Tape */}
            <div className="scrap-tape"></div>

            {item.isTextOnly ? (
              /* Text-only sticky note content */
              <div className="scrap-text-only-content">
                <p className="scrap-desc-handwritten-sticky">{item.content}</p>
              </div>
            ) : (
              /* Normal image scrap - Only the image */
              <div className="scrap-media-area">
                <img
                  src={item.image}
                  alt={item.title}
                  className="scrap-img"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox for scanning details */}
      {activeItem && createPortal(
        <div
          className="journal-lightbox-backdrop"
          id="journal-lightbox-backdrop"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="journal-lightbox-content"
            id="journal-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="journal-lightbox-close"
              id="btn-journal-lightbox-close"
              onClick={() => setActiveItem(null)}
              aria-label="Cerrar modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="journal-lightbox-media">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="journal-lightbox-img"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
