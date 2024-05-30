import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compnent1 from './Components/Compnent1'
import ContextExample from './Components/ContextExample'
import Counter from './Components/Counter'
import UsememoExample from './Components/UsememoExample'
import CRUDExample from './Components/CRUDExample'

function App() {
  
  return (
    <>
      <h3>My First React + Vite Project</h3>
      {/* <Compnent1 name="Testing"/> */}
      <hr />
      {/* <ContextExample name="Testing"/> */}
      <hr />
      <Counter />
      {/* <UsememoExample /> */}
      {/* <CRUDExample /> */}
    </>
  )
}

export default App
