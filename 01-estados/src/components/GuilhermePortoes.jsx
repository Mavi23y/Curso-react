import { useState } from "react";

function GuilhermePortoes() {
    const[total, setTotal] = useState()

    function calcular(){
        let clt = Number(prompt("Quantos clt a empresa tem no momento:"))
        let estagiarios = Number(prompt("Quantos estagiários a empresa tem no momento:"))
        let pj = Number(prompt("Quantos pj a empresa tem no momento:"))
        let empresa = clt + estagiarios + pj

        setTotal(empresa);
    }

  return (
   <div className="cont-guilherme-portoes">
     <h2>Guilherme Portões e a força de trabalho da Macrohard</h2>
     <button onClick={calcular} >Calcular o total de devs</button>
     total: {total}

   </div>
  )
}

export default GuilhermePortoes