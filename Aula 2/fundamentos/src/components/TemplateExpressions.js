import React from "react";

const name = "Giclayne";
const data = {
  idade: "25",
  profissao: "programadora",
};

const TemplateExpressions = () => {
  return (
    /**Exemplo de templateExpresions. Name = JavaScript, uso name em JSX */
    <div>
      <h2>
        Olá {name}. Você tem {data.idade} e sua profissao é {data.profissao}
      </h2>
    </div>
  );
};

export default TemplateExpressions;
