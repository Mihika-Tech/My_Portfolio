import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Mihika Dakappagari. All rights reserved.</p>
        <p className="small mb-0">
          Made with 💻 using <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="text-white fw-bold">React</a> &amp; <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="text-white fw-bold">Bootstrap</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
