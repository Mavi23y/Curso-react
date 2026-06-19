import { useState } from "react";

function TrajetoPomar() {
    const[vendidas, setVendidas] = useState()

    function calcular(){
        let inicial = Number(prompt("Quantidade inicial de laranjas:"))
        let final = Number(prompt("Quantidade final de laranjas:"))
        let quantidade = inicial - final

        setVendidas(quantidade);
    }

  return (
   <div className="cont-trajeto-pomar">
     <h2>Trajeto Pomar e o estoque de frutas</h2>
     <button onClick={calcular} >Calcular vendas</button>
     vendas: {vendidas}

   </div>
  )
}

export default TrajetoPomar