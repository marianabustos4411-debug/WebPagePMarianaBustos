import React, { useState } from 'react';
import './ArtDirection.css';

// Import local covers (Portadas)
import coverAbandonados from '../assets/Media/Videos/Portadas/Portada Abanconados.png';
import coverHqnvav from '../assets/Media/Videos/Portadas/HQNVAV Portada.png';
import coverSoleado from '../assets/Media/Videos/Portadas/Hoy fue un día soleado portada.png';
import coverMaquillaje from '../assets/Media/Videos/Portadas/Maquillaje golpes.png';
import coverMixedMedia from '../assets/Media/Videos/Portadas/Mixed Media portada.png';

// Import local video previews (5s.mov)
import videoAbandonados from '../assets/Media/Videos/Abandonados 5s.mov';
import videoHqnvav from '../assets/Media/Videos/HQNVAV 5s.mov';
import videoSoleado from '../assets/Media/Videos/Hoy fue un día soleado 5s.mov';
import videoMaquillaje from '../assets/Media/Videos/Maquillaje Golpes 5s.mov';
import videoMixedMedia from '../assets/Media/Videos/Mixed Media 5s.mov';

const artProjectsList = [
  {
    id: "abandonados",
    title: "Abandonados",
    category: "Dirección de Arte / Cortometraje",
    description: "Estudio visual y diseño de atmósferas opresivas basadas en espacios abandonados y texturas desgastadas.",
    year: "2025",
    cover: coverAbandonados,
    video: videoAbandonados
  },
  {
    id: "hqnvav",
    title: "HQNVAV",
    category: "Diseño Visual / Animación",
    description: "Cortometraje experimental centrado en la interacción del color carmesí y azul pizarra sobre soportes análogos.",
    year: "2024",
    cover: coverHqnvav,
    video: videoHqnvav
  },
  {
    id: "dia-soleado",
    title: "Hoy fue un día soleado",
    category: "Dirección de Arte / Stop-Motion",
    description: "Composición visual y diseño escénico utilizando elementos cotidianos y acuarelas sobre papel marfil.",
    year: "2025",
    cover: coverSoleado,
    video: videoSoleado
  },
  {
    id: "maquillaje-golpes",
    title: "Maquillaje de Golpes",
    category: "Caracterización / Maquillaje FX",
    description: "Diseño y aplicación de maquillaje FX de alta fidelidad para simular contusiones y heridas de combate de forma realista.",
    year: "2024",
    cover: coverMaquillaje,
    video: videoMaquillaje
  },
  {
    id: "mixed-media-project",
    title: "Mixed Media",
    category: "Dirección de Arte / Animación",
    description: "Fusión experimental de collage analógico impreso, recortes de prensa y técnicas digitales animadas.",
    year: "2025",
    cover: coverMixedMedia,
    video: videoMixedMedia
  }
];

// Reusable Art Card Component to isolate hover playback states
function ArtCard({ project, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={`art-card-${project.id}`}
      className="art-card"
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="art-card-media">
        {/* Static cover image */}
        <img
          src={project.cover}
          alt={project.title}
          className={`art-card-cover-img ${isHovered ? 'fade-out-cover' : ''}`}
        />

        {/* Hover-to-play video player (Lazy loaded inside DOM) */}
        {isHovered && (
          <video
            src={project.video}
            className="art-card-hover-video"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>

      <div className="art-card-info">
        <div className="art-card-header">
          <h3 className="art-card-title">{project.title}</h3>
          <span className="art-card-year">{project.year}</span>
        </div>
        <span className="art-card-category">{project.category}</span>
        <p className="art-card-desc">{project.description}</p>
      </div>
    </div>
  );
}

export default function ArtDirection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="art-section" id="art-direction-portfolio">
      <h2 className="section-title">Dirección de Arte & Diseño Visual</h2>
      
      <div className="art-grid" id="art-projects-grid">
        {artProjectsList.map((project) => (
          <ArtCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Lightbox details modal with interactive video controls */}
      {selectedProject && (
        <div
          className="lightbox-backdrop"
          id="art-lightbox-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="lightbox-content"
            id="art-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              id="btn-lightbox-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="lightbox-media">
              <video
                src={selectedProject.video}
                className="lightbox-video"
                controls
                autoPlay
                loop
                playsInline
                id="lightbox-player"
              />
            </div>

            <div className="lightbox-info">
              <div className="lightbox-header">
                <h3 className="lightbox-title">{selectedProject.title}</h3>
                <span className="art-card-year" style={{ fontSize: '1.3rem' }}>{selectedProject.year}</span>
              </div>
              <div className="lightbox-category">{selectedProject.category}</div>
              <p className="lightbox-desc">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
