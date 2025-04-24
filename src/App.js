import React, { useState, useRef, useEffect } from "react";
import Bio from "./js/Bio";
import Home from "./js/Home";
import "./css/App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollbarWidth = useRef(0);

  useEffect(() => {
    const updateScrollbarWidth = () => {
      scrollbarWidth.current =
        window.innerWidth - document.documentElement.clientWidth;
    };

    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);

    return () => {
      window.removeEventListener("resize", updateScrollbarWidth);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  };

  return (
    <div className="app-container">
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      <aside className={`menu-panel ${isMenuOpen ? "open" : ""}`}>
        <nav className="menu-nav">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                aria-label="go to home page"
                className="menu-link"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/bio"
                onClick={() => setIsMenuOpen(false)}
                aria-label="go to bio page"
                className="menu-link"
              >
                bio
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className="menu-footer">
          <p>&copy; 2025 franchine ninh</p>
        </div> */}
      </aside>

      {/* Main Content Area */}
      <main className={`site-content ${isMenuOpen ? "menu-open" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
