import { useState } from 'react'
import './App.css'
import Peba from './components/Peba'
import PePequeno from './components/PePequeno'
import GuilhermePortoes from './components/GuilhermePortoes'
import TrajetoPomar from './components/TrajetoPomar'
import PeErnan from './components/PeErnan'
import Junin from './components/Junin'
import TellesTransportes from './components/TellesTransportes'
import Monika from './components/Monika'
import RenderCondicional from './components/RenderCondicional'

function App() {
  // Estado
  const [rendimento, setRendimento] = useState(120000)
  let salario = 100002

function incrementarSalario(){
  salario += 10
  console.log("Novo salario : R$" + salario)

  // rendimento = 11111 nunca fazer isso 
  // setRendimento(20000) trocando para outro valor fixo 
  setRendimento(rendimento + 25)
  console.log(rendimento);
}
  return (

 <div className="cont-app">
   <h1>Estados e outras coisas</h1>

   {/* importação do Peba */}
   <Peba />
   <hr />

    {/* importação do PePequeno */}
   <PePequeno />
   <hr />

   {/* importação do GuilhermePortoes */}
   <GuilhermePortoes />
   <hr />

   {/* importação do TrajetoPomar */}
   <TrajetoPomar />
   <hr />

     {/* importação do PeErnan */}
   <PeErnan />
   <hr />

 {/* importação do Junin */}
   <Junin />
   <hr />

   {/* importação do TellesTransportes */}
   <TellesTransportes />
   <hr />

    {/* importação da Monika */}
   <Monika />
   <hr />

    {/* importação do RenderCondicional */}
   <RenderCondicional />
   <hr />


   {/* Serve para escrever o valor em reais, adiciona o ponto e tambem a virgula */}
  Salario: R${salario.toFixed(2). replace('.', ',')} 
  <p> Rendimento: R${rendimento} </p>

  <button onClick={incrementarSalario}>➕</button>

 </div>


  )
}

export default App
