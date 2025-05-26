import React from 'react';
import { timeline } from '../data/timeline';

function Timeline() {
  return (
    <div>
      <h3 className="fw-bold mb-4">Education</h3>
      <ul className="list-group">
        {timeline.map((item, index) => (
          <li key={index} className="list-group-item border-0 px-0 py-3">
            <h5 className="mb-1">{item.title}</h5>
            <small className="text-muted">{item.year} | {item.location}</small>
            <p className="mb-0 mt-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
