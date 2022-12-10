import React from "react";
/** Eventos */
const handleMyEvent = (e) => {
  console.log(e);
  console.log("Ativou o evento");
};

/**Renderização  */
const renderFuncao = (x) =>{
    if(x){
        return <h1>Renderizando isso</h1>
    }else{
        return <h1>Tambem posso renderizar isso</h1>
    }
}

const Events = () => {
  return (
    <div>
      <div>
        {/* Chama a funcao*/}
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        {/* Pode usar função dentro do onclick, mas nao é recomendado*/}

        <button onClick={() => console.log("Clicou")}>
          Clique aqui tambem
        </button>
      </div>
      {renderFuncao(true)}
    </div>
  );
};

export default Events;
