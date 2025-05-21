import React from 'react';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold">Skills & Tools</h2>
        <p className="text-muted mb-4">Here are some of the technologies I’ve worked with:</p>

        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2 mb-3">
              <span className="badge rounded-pill p-3 w-100">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
