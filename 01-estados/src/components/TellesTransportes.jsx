import { useState } from "react";

function TellesTransportes() {
    const[carga, setCarga] = useState()

    function calcularCarga(){
        let balanca = Number(prompt("Peso da balança:"))
        let tara = Number(prompt("Peso da tara:"))
        let peso = balanca - tara

        setCarga(peso);
    }

  return (
   <div className="cont-telles-transportes">
     <h2>Telles Transportes e o peso dos veículos</h2>
     <button onClick={calcularCarga} >Calcular carga</button>
     carga: {carga}

   </div>
  )
}

export default TellesTransportes