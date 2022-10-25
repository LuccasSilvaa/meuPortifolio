import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header'
import Home from '../pages/home/index'
import Sobre from '../pages/sobre/index'
// import Skill from '../pages/habilidades/index'
import Skill from '../pages/skill/index'
import Projetos from '../pages/projetos/index'



export default function Rotas() {
  return (
    <Router>
     <Header/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/habilidade' element={<Skill/>} />
        <Route path='/projetos' element={<Projetos/>} />
      </Routes>
    </Router>
    
    
  )
}

