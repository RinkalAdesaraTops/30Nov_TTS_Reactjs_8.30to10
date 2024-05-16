import './App.css';
import FirstComponent from './Components/FirstComponent';
import Second from './Components/Second';

function App() {
  const arr = [10,20,30,40,50]
  return (
    <div className="App">
      My First React Project
      {/* <FirstComponent /> */}
      <Second myname="Rinkal" id="101" myarray={arr}/>
      
    </div>
  );
}

export default App;
