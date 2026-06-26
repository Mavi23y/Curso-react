import { useState } from "react";

function PePequeno() {
    const[recibo, setRecibo] = useState()

    function calcular(){
        let preco = Number(prompt("Preço de cada par de calçado:"))
        let quantidade = Number(prompt("Quantidade de pares trocados:"))
        let trocas = preco * quantidade

        setRecibo(trocas);
    }

  return (
   <div className="cont-pe-pequeno">
     <h2>Pé Pequeno e o prejuízo das trocas</h2>
     <button onClick={calcular} >Calcular o resultado</button>
     { recibo &&  <p>Resultado: {recibo} </p> }
     {/* resultado: {recibo} */}

   </div>
  )
}

export default PePequeno