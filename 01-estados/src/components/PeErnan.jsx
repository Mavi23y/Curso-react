import { useState } from "react";

function PeErnan() {
    const[custos, setCustos] = useState()

    function calcular(){
        let gastos = Number(prompt("Custos mensais da igreja:"))
        let recibo = Number(prompt("Quanto foi recebido de doações e dízimos no dia:"))
        let quantidade = gastos - recibo

        setCustos(quantidade);
    }

  return (
   <div className="cont-trajeto-pomar">
     <h2>Pe. Ernan Buco e os custos da Igreja</h2>
     <button onClick={calcular} >Calcular custos mensais</button>
     custos: {custos}

   </div>
  )
}

export default PeErnan