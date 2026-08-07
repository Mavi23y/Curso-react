import { useState } from 'react'
import './GeradorDeSenha.css'

function GeradorDeSenha() {
  
  const [senha, setSenha] = useState(0)

  return (
    <div className='cont-gerador'>

        <h2>Senha</h2>

        <p className='senha'>{senha}</p>
        <button onClick={() => setSenha(senha + 1)}>Retire sua senha</button>
       

    </div>
  )
}

export default GeradorDeSenha
