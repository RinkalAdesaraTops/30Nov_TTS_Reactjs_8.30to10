// import { Suspense, lazy, useState } from 'react'

import './App.css'
// import Compnent1 from './Components/Compnent1'
// import ContextExample from './Components/ContextExample'
// import Counter from './Components/Counter'
// import UsememoExample from './Components/UsememoExample'
// import CRUDExample from './Components/CRUDExample'
// import CRUDRepeat from './Components/CRUDRepeat'
// import UseCallback from './Components/UseCallback'
// import AxiosApi from './Components/AxiosApi'
// import JsonserverCrud from './Components/JsonserverCrud'
import ReduxExample from './Components/ReduxExample'
// const ApiComponent = lazy(()=>import('./Components/ApiComponent'))
// import ApiComponent from './Components/ApiComponent'
// import Home from './Components/Home'
// const Home = lazy(()=>import('./Components/Home'))
// const Contact = lazy(()=>import('./Components/Contact'))
// import Contact from './Components/Contact'

function App() {
  
  return (
    <>
      <h3>My First React + Vite Project</h3>
      {/* <CRUDRepeat /> */}
      {/* <UseCallback /> */}
      {/* <Compnent1 name="Testing"/> */}
      <hr />
      {/* <ContextExample name="Testing"/> */}
      <hr />
      {/* <Counter /> */}
      {/* <UsememoExample /> */}
      {/* <CRUDExample /> */}
      
      {/* <Suspense fallback={(<div>Api is calling.....</div>)}>
        <ApiComponent />
      </Suspense>
      <Suspense fallback={(<div>Plz Wait.....</div>)}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Home is loading.....</div>}>
        <Home />
      </Suspense> */}
      {/* <AxiosApi /> */}
      {/* <ApiComponent /> */}
      {/* <JsonserverCrud /> */}
      <ReduxExample />
    </>
  )
}

export default App
