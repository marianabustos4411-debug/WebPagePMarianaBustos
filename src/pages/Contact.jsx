import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section" id="contact-page-portfolio">
      <h2 className="section-title">Escríbeme</h2>
      
      <div className="contact-card" id="contact-form-card">
        {!isSubmitted ? (
          <>
            <p className="contact-intro">
              ¿Tienes un proyecto en mente, una colaboración o simplemente quieres conversar sobre cine y texturas? Deja tu mensaje abajo.
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit} id="contact-message-form">
              <div className="form-group" id="form-group-name">
                <label className="form-label" htmlFor="input-name">Nombre</label>
                <input
                  type="text"
                  id="input-name"
                  name="name"
                  className="form-input"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group" id="form-group-email">
                <label className="form-label" htmlFor="input-email">Correo Electrónico</label>
                <input
                  type="email"
                  id="input-email"
                  name="email"
                  className="form-input"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="form-group" id="form-group-message">
                <label className="form-label" htmlFor="input-message">Mensaje</label>
                <textarea
                  id="input-message"
                  name="message"
                  className="form-textarea"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button type="submit" className="btn-submit" id="btn-contact-submit">
                Enviar Mensaje
              </button>
            </form>
          </>
        ) : (
          <div className="contact-success" id="contact-success-notification">
            <div className="contact-success-icon">✦</div>
            <h3 className="contact-success-title">¡Mensaje Enviado!</h3>
            <p className="contact-success-desc">
              Gracias por escribir, {formData.name}. Me pondré en contacto contigo a la brevedad.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
