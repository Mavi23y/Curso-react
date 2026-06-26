import { useState } from "react";

function Junin() {
 const[salarioDiario, setSalarioDiario] = useState()
 const[salarioSemanal, setSalarioSemanal] = useState()

    
        function calcularSalario(){
            let mensal = Number(prompt("Salário mensal:"))
            let dias = Number(prompt("Dias trabalhados:"))
            let diario = mensal / dias
            let semanal = diario * 5
    
          setSalarioDiario(diario)  
          setSalarioSemanal(semanal)
 }           

 return (
  <div className="cont-Junin">
    <h2>Junin e o salário diário</h2>
    <button onClick={calcularSalario}>Calcular o salário</button>
    
    {/* Só mostra se salarioDiario existir (for diferente de undefined/vazio) */}
    {salarioDiario && <p>salarioDiario: R$ {salarioDiario.toFixed(2).replace('.', ',')}</p>}
    {salarioSemanal && <p>salarioSemanal: R$ {salarioSemanal.toFixed(2).replace('.', ',')}</p>}
  </div>
)
}

export default Junin