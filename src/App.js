import './App.css';
import './style.css'
import FirstComponent from './Components/FirstComponent';
import Second from './Components/Second';
import MyClassComponent from './Components/MyClassComponent';
import { FunctionalComponent } from './Components/FunctionalComponent';

function App() {
  const arr = [10,20,30,40,50]
  return (
    <div className="App" >
      My First React Project
      {/* <FirstComponent /> */}
      <Second myname="Rinkal" id="101" myarray={arr}/>
      <MyClassComponent color="red"/>
      <FunctionalComponent />
    </div>
  );
}

export default App;
