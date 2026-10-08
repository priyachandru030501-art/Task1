import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Contact.css";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    e.target.reset();
  };

  return (
    <div className="contact-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <Link
            to="/"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            SOLEVA
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/collection" onClick={() => setMenuOpen(false)}>
              Collection
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>

        </div>
      </nav>

      {/* HEADER */}
      <section className="contact-header" data-aos="fade-up">
        <p>GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <span>
          We would love to hear from you.
        </span>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-section">

        <div
          className="contact-info"
          data-aos="fade-right"
        >

          <p className="contact-label">
            LET'S TALK
          </p>

          <h2>
            Have a question?
            <br />
            We're here.
          </h2>

          <p className="contact-description">
            Whether you have a question about our products,
            your order or anything else, our team is ready
            to help.
          </p>

          <div className="contact-detail">
            <span>📍</span>
            <div>
              <h3>Visit Us</h3>
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📞</span>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>✉️</span>
            <div>
              <h3>Email Us</h3>
              <p>hello@soleva.com</p>
            </div>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit">
            SEND MESSAGE →
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">
            <h2>SOLEVA</h2>
            <p>
              Step into comfort. Walk with confidence.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>📍 Bangalore, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@soleva.com</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 SOLEVA. All Rights Reserved.</p>
        </div>

      </footer>

    </div>
  );
}

export default Contact;