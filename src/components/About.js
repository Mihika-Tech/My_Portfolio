import React from 'react';
import Timeline from './Timeline';

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profile}
              alt="Mihika"
              className="rounded-circle"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div> */}
          <div className="col-md-8">
            <h2 className="fw-bold">About Me</h2>
            <p className="text-muted mt-3">
              I'm a graduate student at USC specializing in Computer Science. I love crafting full stack web applications,
              exploring creative UI design, and recently started learning game development. My journey spans backend APIs,
              responsive frontends, and data-driven visualizations — with a passion for blending function with aesthetics.
            </p>
          </div>
        </div>
        <Timeline />
      </div>
    </section>
  );
}

export default About;
