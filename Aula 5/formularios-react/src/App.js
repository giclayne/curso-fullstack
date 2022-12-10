import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <Form user={{name:"Josias", email:"josias@email.com", bio:"Sou um advogado",role:"ADM"}}/>
    </div>
  );
}

export default App;
