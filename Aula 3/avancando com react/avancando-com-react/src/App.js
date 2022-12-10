import { useState } from "react";
import "./App.css";
import noite from "./assets/noite.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
function App() {
  const [userName] = useState("Mariana");

  const cars = [
    { id: 1, brand: "Ferrari", color: "amarela", newCard: true, km: 0 },
    { id: 2, brand: "Renault", color: "preto", newCard: false, km: 10000 },
    { id: 3, brand: "VW", color: "vermelho", newCard: true, km: 50000 },
  ];
  /**FUnção como prop */
  function ShowMessage() {
    console.log("Evento do componente pai");
  }
  /** State lift*/
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando com react</h1>
      {/* Imagem public*/}
      <div>
        <img src="/dia.jpg" alt="Paisagem do sol" />
      </div>
      {/* Imagem public*/}
      <div>
        <img src={noite} alt="imagemm da noite" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/**Props */}
      <ShowUserName name="Matheus" />
      <ShowUserName name={userName} />
      {/**Destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul" newCard={false} />
      {/**Reaproveitando componentes */}
      <CarDetails brand="Fiat" km={10000} color="Vermelho" newCard={true} />

      {/**Renderização de listas em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCard={car.newCard}
        />
      ))}

      {/**Fragments */}
      <Fragments name="Titulo Teste" />
      {/**Children  - Abraçar conteudo com componente filho*/}
      <Container>
        <p>Este é o conteudo</p>
      </Container>

      {/**Fnunção como prop */}
      <ExecuteFunction myFunction={ShowMessage} />
      {/**State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

    </div>
  );
}

export default App;
