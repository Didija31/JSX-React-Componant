import React from "react";

const Prix = (prod) => {
  return (
    <h5
      style={{
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#5C636A",
        margin: "20px",
      }}
    >
      {prod.prix} Fcfa
    </h5>
  );
};

export default Prix;
