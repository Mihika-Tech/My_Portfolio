import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <p className="text-center text-muted mb-5">Feel free to reach out — I'm always open to new opportunities!</p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              target="_blank"
            >
              <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <textarea name="message" rows="5" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>

            <div className="text-center mt-4">
              <p className="mb-1">📧 <a href="mailto:mihikashrinivas@gmail.com">mihikashrinivas@gmail.com</a></p>
              <p className="mb-1">💼 <a href="https://www.linkedin.com/in/mihika-dakappagari" target="_blank" rel="noreferrer">LinkedIn</a></p>
              <p>💻 <a href="https://github.com/Mihika-Tech" target="_blank" rel="noreferrer">GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
