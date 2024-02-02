import { useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'


//css
import './App.css'


//pages
import Home from './pages/Home'
import Menu from './pages/Menu'
import Servicos from './pages/Servicos'
import Contato from './pages/Contato'
import Reserva from './pages/Reserva'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/reserva' element={<Reserva/>}/>

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
