import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Cliques from "./Cliques";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <button
              style={{
                fontSize: "18px",
                padding: "5px 10px",
                backgroundColor: "grey"
              }}
            >
              <Link to="/">Pagina Inicial</Link>
            </button>
            <button
              style={{
                fontSize: "18px",
                padding: "5px 10px",
                backgroundColor: "grey",
                marginLeft: "10px"
              }}
            >
              <Link to="/sobre">Sobre</Link>
            </button>
            <button
              style={{
                fontSize: "18px",
                padding: "5px 10px",
                backgroundColor: "grey",
                marginLeft: "10px"
              }}
            >
              <Link to="/Cliques">Cliques</Link>
            </button>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Cliques" element={<Cliques />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
