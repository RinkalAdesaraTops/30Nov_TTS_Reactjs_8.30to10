// import './App.css';
import './style.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FirstComponent from './Components/FirstComponent';
import Second from './Components/Second';
import MyClassComponent from './Components/MyClassComponent';
import { FunctionalComponent } from './Components/FunctionalComponent';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Menu } from './Components/Menu';
import { Contact } from './Components/Contact';
import Stylecomponent from './Components/Stylecomponent';
import LifecycleClass from './Components/LifecycleClass';
import LifecycleFunction from './Components/LifecycleFunction';


function App() {
  const arr = [10,20,30,40,50]
  return (
    <div className="App" >
      {/* My First React Project */}
      {/* <FirstComponent /> */}
      {/* <Second myname="Rinkal" id="101" myarray={arr}/>
      <MyClassComponent color="red"/>
      <FunctionalComponent /> */}
      <BrowserRouter>
      <Menu />
      <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/styled' element={<Stylecomponent />}></Route>
          <Route path='/lifecycleclass' element={<LifecycleClass />}></Route>
          <Route path='/lifecyclefunc' element={<LifecycleFunction />}></Route>
          {/* <Route path='/contact' element={<Contact />}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
