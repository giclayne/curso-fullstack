import "./App.css";
import Car from "./components/Car";

function App() {
  const myCars = [
    { name: "Fusca", km: 10000, color: "branca" },
    { name: "Polo", km: 32000, color: "cinza" },
    { name: "Onix", km: 0, color: "preto" },
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
