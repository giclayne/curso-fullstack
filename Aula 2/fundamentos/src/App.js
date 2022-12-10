import FirstComponent from './components/FirstComponent';

import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import ChallengeComponent from './components/ChallengeComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      {/*Utilizar um component em varios lugares e varios niveis. Como irmao e como filho */}
      <MyComponent/>
      <Events/>
      <ChallengeComponent/>
    </div>
  );
}

export default App;
