import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes ,Route} from 'react-router-dom'

import Nav from './comp/Nav'

import About from './comp/About'
import HomePage from './comp/HomePage'

function App() {

  return (
    <div className="App">
      <Nav/>
    


      <Routes>
      <Route path="/"element={<HomePage/>}> </Route>


        <Route path="/information"element={<About/>}> </Route>

      </Routes>





    </div>

  )
}

export default App
