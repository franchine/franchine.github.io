import Bio from "./js/Bio";
import Home from "./js/Home";
import "./css/App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/bio" aria-label="go to bio page" className="nav-link">
              <FontAwesomeIcon className="cat-icon" icon={faCat} />
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
}

export default App;
