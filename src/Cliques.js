import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cliques = () => {
  const [numeroDeCliques, setNumeroDeCliques] = useState(0);

  const aumentarCliques = () => {
    setNumeroDeCliques(numeroDeCliques + 1);
  };

  const estiloCliques = {
    color: "black",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "30px",
    backgroundColor: "grey",
    fontFamily: "Arial"
  };

  return (
    <div>
      <h2 style={estiloCliques}>Cliques</h2>
      <p style={estiloCliques}>Número de Cliques: {numeroDeCliques}</p>
      <button
        onClick={aumentarCliques}
        style={{
          fontSize: "18px",
          padding: "10px 10px 15px",
          backgroundColor: "grey"
        }}
      >
        Adicionar Cliques👆
      </button>

      <Link to="/" style={{ textDecoration: "none" }}></Link>
    </div>
  );
};

export default Cliques;
