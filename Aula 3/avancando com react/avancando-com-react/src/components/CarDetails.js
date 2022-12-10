import React from "react";

const CarDetails = ({brand, km,color,newCard}) => {
  return (
    <div>
      <h2> Detalhes do Carro </h2>

      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCard && <p>Este carro é novo</p>}
    </div>
  );
};

/**
 * const CarDetails = ({brand,km,color}) => {
  return (
    <div>
      <h2> Detalhes do Carro </h2>

      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: color}</li>
      </ul>
    </div>
  );
};

 */

export default CarDetails;
