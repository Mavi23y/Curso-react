import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Convite from './components/Convite'
import GeradorDeSenha from './components/GeradorDeSenha'

function App() {

  return (
    
    <div className="cont-app">
      <Cabecalho />
      <Convite />
      <GeradorDeSenha />

    </div>
  )
}

export default App
