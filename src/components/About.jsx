import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/About.css";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="about-page">

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
      <section className="about-header" data-aos="fade-up">
        <p>OUR STORY</p>
        <h1>About SOLEVA</h1>
      </section>

      {/* STORY */}
      <section className="about-story">

        <div
          className="about-image"
          data-aos="fade-right"
        >
          <img
            src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80"
            alt="SOLEVA shoes"
          />
        </div>

        <div
          className="about-content"
          data-aos="fade-left"
        >
          <p className="about-label">
            WHO WE ARE
          </p>

          <h2>
            More than shoes.
            <br />
            It's a way of life.
          </h2>

          <p>
            SOLEVA was created with one simple idea:
            footwear should feel as good as it looks.
          </p>

          <p>
            We combine modern design, quality materials
            and everyday comfort to create shoes that
            move with you.
          </p>

          <Link to="/collection">
            EXPLORE COLLECTION →
          </Link>
        </div>

      </section>

      {/* VALUES */}
      <section className="values-section">

        <div
          className="values-heading"
          data-aos="fade-up"
        >
          <p>WHAT DRIVES US</p>
          <h2>Our Values</h2>
        </div>

        <div className="values-grid">

          <div
            className="value-card"
            data-aos="fade-up"
          >
            <span>01</span>
            <h3>Quality</h3>
            <p>
              Every pair is designed with attention
              to detail and lasting comfort.
            </p>
          </div>

          <div
            className="value-card"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span>02</span>
            <h3>Style</h3>
            <p>
              Clean and modern designs made for
              today's generation.
            </p>
          </div>

          <div
            className="value-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>03</span>
            <h3>Comfort</h3>
            <p>
              Shoes created to keep you comfortable
              throughout your day.
            </p>
          </div>

        </div>

      </section>

      {/* MISSION */}
      <section
        className="mission"
        data-aos="zoom-in"
      >
        <p>OUR MISSION</p>

        <h2>
          To make every step
          <br />
          worth remembering.
        </h2>
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

export default About;