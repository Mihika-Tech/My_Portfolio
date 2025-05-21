import React, { useState } from 'react';
import { projects } from '../data/projects';
import { filters } from '../data/filter';
import '../custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedFilter);

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Projects</h2>

        {/* Filter Buttons */}
        <div className="btn-group mb-4" role="group">
          {filters.map((filter, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-outline-primary custom-filter-btn ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-primary me-2"
                        id='github-button'
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn"
                        id='live-button'
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-muted mt-4">No projects found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
