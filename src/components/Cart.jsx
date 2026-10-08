import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Cart.css";

function Cart() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("shoeCart")) || [];
  });

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem(
      "shoeCart",
      JSON.stringify(updatedCart)
    );
  };

  const increaseQuantity = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

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
      <section className="cart-header" data-aos="fade-up">
        <p>SOLEVA / CART</p>
        <h1>Your Cart</h1>
      </section>

      {/* CART */}
      <section className="cart-section">

        {cart.length === 0 ? (

          <div className="empty-cart" data-aos="zoom-in">

            <div className="empty-icon">
              🛍️
            </div>

            <h2>Your cart is empty</h2>

            <p>
              Looks like you haven't added anything yet.
            </p>

            <Link to="/collection">
              SHOP COLLECTION
            </Link>

          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                  data-aos="fade-up"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">

                    <h3>{item.name}</h3>
                    <p>{item.category}</p>

                    <strong>
                      ₹{item.price}
                    </strong>

                    <div className="quantity-box">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div
              className="order-summary"
              data-aos="fade-left"
            >

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>₹{total}</strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <strong>FREE</strong>
              </div>

              <div className="summary-line"></div>

              <div className="summary-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <button className="checkout-btn">
                CHECKOUT
              </button>

              <Link
                to="/collection"
                className="continue-btn"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        )}

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

export default Cart;