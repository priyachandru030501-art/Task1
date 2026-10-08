import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

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
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link
              to="/collection"
              onClick={() => setMenuOpen(false)}
            >
              Collection
            </Link>

            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div
          className="hero-content"
          data-aos="fade-right"
        >

          <p className="small-title">
            NEW SEASON 2026
          </p>

          <h1>
            WALK YOUR
            <span>WAY.</span>
          </h1>

          <p>
            Discover premium footwear designed for modern
            lifestyles. Comfort, style and confidence in every step.
          </p>

          <Link
            to="/collection"
            className="hero-btn"
          >
            SHOP COLLECTION
          </Link>

        </div>


        <div
          className="hero-image"
          data-aos="fade-left"
        >

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
            alt="Red sneaker footwear"
          />

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories">

        <div
          className="section-heading"
          data-aos="fade-up"
        >

          <p>EXPLORE OUR COLLECTION</p>

          <h2>
            Find Your Perfect Footwear
          </h2>

        </div>


        <div className="category-grid">


          {/* ================= SNEAKERS ================= */}

          <div
            className="category-card"
            data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80"
              alt="Sneakers footwear"
            />

            <div className="category-content">

              <p>
                EVERYDAY STYLE
              </p>

              <h3>
                Sneakers
              </h3>

              <Link to="/collection">
                Explore →
              </Link>

            </div>

          </div>


          {/* ================= CASUAL ================= */}

          <div
            className="category-card"
            data-aos="fade-up"
            data-aos-delay="150"
          >

            <img
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80"
              alt="Casual footwear"
            />

            <div className="category-content">

              <p>
                DAILY COMFORT
              </p>

              <h3>
                Casual
              </h3>

              <Link to="/collection">
                Explore →
              </Link>

            </div>

          </div>


          {/* ================= FORMAL ================= */}

          <div
            className="category-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <img
              src="https://m.media-amazon.com/images/I/711u9X4BGTL._AC_UY1000_.jpg"
              alt="Formal footwear"
            />

            <div className="category-content">

              <p>
                SMART & CLASSIC
              </p>

              <h3>
                Formal
              </h3>

              <Link to="/collection">
                Explore →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">


        {/* QUALITY */}

        <div
          className="feature"
          data-aos="zoom-in"
        >

          <div className="feature-icon">
            ✓
          </div>

          <h3>
            Premium Quality
          </h3>

          <p>
            Carefully selected materials made
            for long-lasting comfort.
          </p>

        </div>


        {/* DESIGN */}

        <div
          className="feature"
          data-aos="zoom-in"
          data-aos-delay="150"
        >

          <div className="feature-icon">
            ★
          </div>

          <h3>
            Modern Design
          </h3>

          <p>
            Contemporary footwear created
            for your everyday style.
          </p>

        </div>


        {/* DELIVERY */}

        <div
          className="feature"
          data-aos="zoom-in"
          data-aos-delay="300"
        >

          <div className="feature-icon">
            ↗
          </div>

          <h3>
            Fast Delivery
          </h3>

          <p>
            Get your favorite footwear delivered
            quickly and safely.
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section
        className="home-cta"
        data-aos="fade-up"
      >

        <div>

          <p>
            STEP INTO SOMETHING NEW
          </p>

          <h2>
            Your next favorite pair
            <br />
            is waiting.
          </h2>

        </div>

        <Link to="/collection">
          VIEW COLLECTION →
        </Link>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">


          {/* BRAND */}

          <div className="footer-brand">

            <h2>
              SOLEVA
            </h2>

            <p>
              Premium footwear for
              every step of your journey.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-links">

            <h3>
              Quick Links
            </h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/collection">
              Collection
            </Link>

            <Link to="/cart">
              Cart
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          {/* CONTACT */}

          <div className="footer-contact">

            <h3>
              Contact
            </h3>

            <p>
              📍 Bangalore, India
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              ✉️ hello@soleva.com
            </p>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="footer-bottom">

          <p>
            © 2026 SOLEVA. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;