import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.jsx";
import "./index.css";

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);