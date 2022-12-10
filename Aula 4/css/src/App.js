import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const redTitle = true
  return (
    <div className="App">
      {/**CSS global */}
      <h2>React Com CSS</h2>
      {/**CSS componente */}
      <MyComponent/>
      <p>Este paragrafo é do APP.JS</p>
      {/**Inline CSS */}
      <p style={{color:"blue", padding:"5px",background:"red", borderTop: "2px solid black"}}>Este elemento foi estilizado de forma inline
      </p>

      {/**CSS inline dinamico */}
      <h2 style={n > 10 ? ({background:"purple"}) : ({background:"pink"})}>CSS dinamico</h2>


      {/**Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo ter classe dinamica</h2>
      {/** CSS MODULES */}
      <Title/>
    </div>


  );
}

export default App;
