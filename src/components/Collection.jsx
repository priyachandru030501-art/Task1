import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Collection.css";

function Collection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menCollection = [
    {
      id: 1,
      name: "Men's Sneakers",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Men's Casual",
      price: "₹2,199",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Men's Formal",
      price: "₹3,499",
      image:
        "https://m.media-amazon.com/images/I/711u9X4BGTL._AC_UY1000_.jpg",
    },
  ];

  const womenCollection = [
    {
      id: 4,
      name: "Women's Sneakers",
      price: "₹2,699",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 5,
      name: "Women's Casual",
      price: "₹2,299",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 6,
      name: "Women's Fashion",
      price: "₹2,899",
      image:
        "https://www.saintg.in/cdn/shop/files/1834platin_png_1800x1800.jpg?v=1778242400",
    },
  ];

  const kidsCollection = [
    {
      id: 7,
      name: "Kids Sneakers",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 8,
      name: "Kids Casual",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 9,
      name: "Kids Sandals",
      price: "₹1,699",
      image:
        "https://maaandbaby.com/cdn/shop/files/51_a7b6cd0a-af4d-4ad1-8f85-4274aa889e67.jpg?v=1710849461",
    },
  ];

  const addToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("shoeCart")) || [];

    const existingProduct = oldCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("shoeCart", JSON.stringify(updatedCart));

    alert(`${product.name} added to cart!`);
  };

  const renderProducts = (products) => {
    return (
      <div className="collection-grid">
        {products.map((product, index) => (
          <div
            className="collection-card"
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="collection-image">
              <img src={product.image} alt={product.name} />

              <span className="collection-badge">
                SOLEVA
              </span>
            </div>

            <div className="collection-info">
              <h3>{product.name}</h3>

              <p className="collection-price">
                {product.price}
              </p>

              <button
                className="collection-btn"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="collection-page">

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
          >
            ☰
          </button>

          <div
            className={`nav-links ${
              menuOpen ? "active" : ""
            }`}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/collection"
              className="active-link"
              onClick={() => setMenuOpen(false)}
            >
              Collection
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
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


      {/* ================= PAGE HEADER ================= */}

      <section className="collection-header">

        <div data-aos="fade-up">

          <p>SOLEVA COLLECTION</p>

          <h1>
            Find Your Perfect Pair
          </h1>

          <span>
            Footwear designed for every age,
            every style and every step.
          </span>

        </div>

      </section>


      {/* ================= MEN ================= */}

      <section className="collection-section">

        <div
          className="collection-title"
          data-aos="fade-up"
        >
          <span>01</span>

          <div>
            <p>FOR HIM</p>
            <h2>Men Collection</h2>
          </div>
        </div>

        {renderProducts(menCollection)}

      </section>


      {/* ================= WOMEN ================= */}

      <section className="collection-section women-section">

        <div
          className="collection-title"
          data-aos="fade-up"
        >
          <span>02</span>

          <div>
            <p>FOR HER</p>
            <h2>Women Collection</h2>
          </div>
        </div>

        {renderProducts(womenCollection)}

      </section>


      {/* ================= KIDS ================= */}

      <section className="collection-section">

        <div
          className="collection-title"
          data-aos="fade-up"
        >
          <span>03</span>

          <div>
            <p>FOR LITTLE STEPS</p>
            <h2>Kids Collection</h2>
          </div>
        </div>

        {renderProducts(kidsCollection)}

      </section>


      {/* ================= CTA ================= */}

      <section
        className="collection-cta"
        data-aos="fade-up"
      >

        <div>
          <p>STEP INTO SOLEVA</p>

          <h2>
            Style for every
            generation.
          </h2>
        </div>

        <Link to="/contact">
          CONTACT US →
        </Link>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <h2>SOLEVA</h2>

            <p>
              Premium footwear for
              every step of your journey.
            </p>

          </div>


          <div className="footer-links">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

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


          <div className="footer-contact">

            <h3>Contact</h3>

            <p>📍 Bangalore, India</p>

            <p>📞 +91 98765 43210</p>

            <p>✉️ hello@soleva.com</p>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 SOLEVA. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Collection;