import React from 'react';
import './App.css';
import Destructuring, {Category} from './components/Destructuring';
// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';
//5 - destruturando props
import SecondComponent from './components/SecondComponent';
//6 - useState
import State from './components/State';

// 8 - type
type textOrNull  = string | null


function App() {

  //1 - varivaies

  const name: string = "Giclayne";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };
 
  //  8 - type

  const myText: textOrNull = "Tem algum texto aqui"
  let secondText : textOrNull = null;
  secondText = "opa";

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring title='Blog TS' content='Blog'  commentsQty={10} tags={["ts", "js"]} category={Category.JS}/>
      <State/>
      {
        myText && <p>Tem texto na variavel</p>
      }
      {
        secondText && <p>Tem text 2 na varivael</p>
      }
    </div>
  );
}

export default App;
