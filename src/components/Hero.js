import React from 'react';// replace with your image

function Hero() {
  return (
    <section id="hero" className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container text-center">
        <img
          src="assets/profile.jpg"
          alt="Mihika Dakappagari"
          className="rounded-circle mb-4"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h1 className="display-4 fw-bold">Hi, I’m Mihika!</h1>
        <p className="lead text-muted mt-3">
          A CS grad student who loves building full stack web apps, diving into data, and exploring creative tech.
        </p>
        <div className="mt-4">
          <a href="#projects" className="btn btn-primary me-3">View Projects</a>
          <a href="assets/Mihika_Dakappagari_Resume.pdf" target="_blank" className="btn btn-outline-secondary">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
