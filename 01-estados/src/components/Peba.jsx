import { useState } from "react";

function Peba() {
    const[resultado, setResultado] = useState()

    function calcularPontos(){
        let vitorias = Number(prompt("Vitórias:"))
        let empates = Number(prompt("Empates:"))
        let pontos = vitorias*3 + empates

        setResultado(pontos);
    }

  return (
   <div className="cont-peba">
     <h2>Peba e o campeonato de futebol</h2>
     <button onClick={calcularPontos} >Calcular os pontos</button>
     { resultado &&  <p>Pontos: {resultado} </p> }
     {/* pontos: {resultado} */}

   </div>
  )
}

export default Peba