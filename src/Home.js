import React from "react";

const Home = () => {
  const estiloHome = {
    color: "black",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "24px",
    backgroundColor: "grey",
    fontFamily: "Arial"
  };

  return (
    <div>
      <h2 style={estiloHome}>Pagina Inicial</h2>
      <p style={estiloHome}>Bem-vindo a Pagina inicial</p>
    </div>
  );
};

export default Home;
