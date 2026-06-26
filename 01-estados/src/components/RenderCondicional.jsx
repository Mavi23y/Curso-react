import { useState } from "react"

function RenderCondicional() {
    const[dado, setDado] = useState(0) 
    // const demo = useState('Eu sou o demo')
    function SortearNumero(){
        // Sorteia um numero aleatório/ até o 6 
        let n = Math.ceil (Math.random()*6)
        setDado(n)

        // console.log(demo)
    }
  return (
    <div className="cont-RenderCondicional">
        <h2>RenderCondicional</h2>
        {/* {dado && <p>{dado}</p> } */}

        {dado ? <p>🎲 {dado}</p> : <p>Aperta ai o botão</p> }

        {/* {dado} */}
        <button onClick={SortearNumero}>Sorteia</button>


    </div>
  )
}

export default RenderCondicional
