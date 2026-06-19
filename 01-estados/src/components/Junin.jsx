import { useState } from "react";

function junin() {
    const[recibo, setRecibo] = useState()

    function calcular(){
        let salario = Number(prompt("Salário mensal:"))
        let dias = Number(prompt("Dias trabalhados:"))
        let trabalho = salario * dias

        setRecibo(trabalho);
    }

  return (
   <div className="cont-junin">
     <h2>Junin e o salário diário</h2>
     <button onClick={calcular} >Calcular salario</button>
     salario: {recibo}

   </div>
  )
}

export default junin