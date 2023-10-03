import React from "react";
import { Link } from "react-router-dom";

const Sobre = () => {
  const estiloSobre = {
    color: "black",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "24px",
    backgroundColor: "grey",
    fontFamily: "Arial"
  };

  return (
    <div>
      <h2 style={estiloSobre}>Sobre</h2>
      <p style={estiloSobre}>Clique abaixo para contar seus cliques</p>

      <Link to="/Cliques" style={{ textDecoration: "none" }}>
        <button
          style={{
            fontSize: "18px",
            padding: "20px 10px",
            backgroundColor: "grey",
            marginLeft: "180px"
          }}
        >
          Contar Cliques
        </button>
      </Link>
    </div>
  );
};

export default Sobre;
