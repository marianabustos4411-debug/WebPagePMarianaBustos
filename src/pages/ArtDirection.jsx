import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    year: "2024",
    genre: "Drama",
    specs: "6 min. 37 seg. / color",
    synopsis: "En un mundo apocalíptico marcado por la escasez, un padre lucha desesperadamente por conseguir alimento para su hija. A medida que los recursos se agotan, debe tomar una decisión irreversible: cometer un acto atroz con tal de ofrecerle un último festín.\n\nEntre el amor y la supervivencia, la historia explora los límites morales que se desdibujan cuando lo único que queda es proteger a quien más amas.",
    notes: "Mi primer experiencia siendo directora de diseño de vestuario, enfocando en ambientacion postapocalíptica, así como la ejecucion de set",
    cover: coverAbandonados,
    video: videoAbandonados
  },
  {
    id: "hqnvav",
    title: "HQNVAV",
    category: "Asistente de Arte / VideoClip",
    description: "Cortometraje experimental centrado en la interacción del color carmesí y azul pizarra sobre soportes análogos.",
    year: "2024",
    genre: "VideoClip",
    specs: "4 min. 5 seg. / color & blanco y negro",
    synopsis: "Un artista atraviesa una ruptura emocional mientras su proceso creativo se fragmenta en dos momentos: la creación y la reflexión. Entre ambos, la obra se convierte en un espacio para confrontar la ausencia.",
    notes: "Uno de los principales motivos por los que decidí estudiar esta carrera fue el profundo amor que siento por las distintas formas de arte, especialmente la música. En este proyecto realicé un videoclip musical, explorando la relación entre lo que se dice y lo que se siente, y cómo la narrativa visual puede ampliar el significado de una canción a través de las emociones, la imagen y el ritmo.",
    cover: coverHqnvav,
    video: videoHqnvav
  },
  {
    id: "dia-soleado",
    title: "Hoy fue un día soleado",
    category: "Diseño de producción y vestuario",
    description: "Composición visual y diseño escénico utilizando elementos cotidianos y acuarelas sobre papel marfil.",
    year: "2024",
    genre: "Suspenso y experimental",
    specs: "10 min. 6 seg. / color",
    synopsis: "Gonzalo enfrenta la muerte de su novia, asesinada durante una marcha estudiantil en los años 70. Atrapado entre el duelo y la memoria, busca reencontrarse con ella a través de un vínculo que trasciende el tiempo y la realidad.",
    notes: "Uno de los proyectos que más representa mi voz como creadora. A través de una narrativa experimental, explora la muerte de una joven que viaja a la Ciudad de México para participar en la marcha estudiantil del Halconazo. Creo que el arte también existe para mirar de frente aquello que resulta incómodo, pero necesario.",
    cover: coverSoleado,
    video: videoSoleado
  },
  {
    id: "maquillaje-golpes",
    title: "Maquillaje de Golpes",
    category: "Caracterización y Maquillaje FX",
    description: "Diseño y aplicación de maquillaje FX de alta fidelidad para simular contusiones y heridas de combate de forma realista.",
    year: "2024",
    genre: "Lesiones y Heridas",
    synopsis: "• Golpes y contusiones • Quemaduras\n\nMaquillaje Prostético:\n• Escultura funeraria",
    cover: coverMaquillaje,
    video: videoMaquillaje
  },
  {
    id: "mixed-media-project",
    title: "Mixed Media",
    category: "Dirección, Producción y Diseño de producción / Animación",
    description: "Fusión experimental de collage analógico impreso, recortes de prensa y técnicas digitales animadas.",
    year: "2024",
    genre: "Animación",
    specs: "1 min. 24 seg. / color & blanco y negro",
    synopsis: "Edición cuadro por cuadro que reúne distintas películas a través de formas, ritmos y trazos, creando una narrativa visual continua en la que los personajes se conectan mediante el movimiento, particularmente a través de la acción de correr.",
    notes: "Este proyecto tiene un significado especial para mí, ya que marcó el inicio de la primera producción realizada junto a la productora que fundé con mis amigos. Participé en el desarrollo de la idea y decidí experimentar con la técnica de mixed media, una de mis formas de expresión visual favoritas, integrándola como un recurso narrativo para fortalecer la identidad del proyecto.",
    exhibitions: "• Museo de Arte Contemporáneo (MAC)\n• Cineteca Alameda SL",
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

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

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
      {selectedProject && createPortal(
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
                <span className="lightbox-year-specs">
                  {selectedProject.year} {selectedProject.specs ? `• ${selectedProject.specs}` : ''}
                </span>
              </div>
              <div className="lightbox-category">
                {selectedProject.genre ? `${selectedProject.genre} | ` : ''}{selectedProject.category}
              </div>
              
              {!selectedProject.synopsis && (
                <p className="lightbox-desc">{selectedProject.description}</p>
              )}

              {selectedProject.synopsis && (
                <div className="lightbox-synopsis-section">
                  <h4 className="lightbox-section-subtitle">
                    {selectedProject.id === 'maquillaje-golpes' ? 'Especialidades' : 'Sinopsis'}
                  </h4>
                  {selectedProject.synopsis.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="lightbox-synopsis-p">{paragraph}</p>
                  ))}
                </div>
              )}

              {selectedProject.notes && (
                <div className="lightbox-notes-section">
                  <h4 className="lightbox-section-subtitle">Notas de la Cineasta</h4>
                  <p className="lightbox-notes-p">{selectedProject.notes}</p>
                </div>
              )}

              {selectedProject.exhibitions && (
                <div className="lightbox-exhibitions-section">
                  <h4 className="lightbox-section-subtitle">Presentaciones</h4>
                  <p className="lightbox-exhibitions-p">{selectedProject.exhibitions}</p>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
