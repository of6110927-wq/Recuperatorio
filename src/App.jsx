
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    emailjs
      .sendForm(
        'service_3dkwet9',   
        'template_cycj5ts',  
        form.current,
        {
          publicKey: 's_uOsOdyg6vzxwYQJ', 
        }
      )
      .then(
        () => {
          setStatusMessage('¡Mensaje enviado con éxito!');
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          setStatusMessage('Error al enviar: ' + error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>Contacto - Universidad UPATecO</h1>
        <p>Programación Web II - Trabajo Práctico Final</p>
      </header>

      <main className="main-grid">
   
        <section className="card form-section">
          <h2>Envíanos tu consulta</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Nombre completo</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Ej. Juan Pérez"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Correo electrónico</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Ej. juan@correo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {statusMessage && (
              <p className="status-text">{statusMessage}</p>
            )}
          </form>
        </section>

        <section className="card map-section">
          <h2>Nuestra Ubicación</h2>
          <p className="address-text">
            Ciudad Educativa - Av. Constitución Nacional s/n, B° Pereyra Rozas, Salta
          </p>
          <div className="map-wrapper">
            <iframe
              title="Mapa Universidad UPATecO"
              src="https://google.com"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;