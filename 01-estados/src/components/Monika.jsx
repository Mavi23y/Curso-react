import { useState } from "react";

function Monika() {
    const[chanceCandidatos, setChanceCandidatos] = useState()

    function calcular(){
        let celular = Number(prompt("Quantas vezes usou o celular?"))
        let chance = (0.1/(1+500*celular))*100

        setChanceCandidatos(chance);
    }

  return (
   <div className="cont-monika">
     <h2>Mônika e as chances dos candidatos a dev</h2>
     <button onClick={calcular} >Calcular chances</button>
    { chanceCandidatos &&  <p>Chance: {chanceCandidatos} </p> }
     {/* Chance: {chanceCandidatos} */}

   </div>
  )
}

export default Monika