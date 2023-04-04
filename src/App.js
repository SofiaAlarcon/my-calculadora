import './App.css';
import { Calculator } from './components/Calculator';
import Link  from './components/Link';
import github from './github-mark.png';


function App() {
  return (
  <div className='App'>
    <Calculator />
    <Link  site="https://github.com/SofiaAlarcon/pixies-calc" logo={github}/>
  </div>
  );
}

export default App;
