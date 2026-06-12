import './App.css'
import Texto from './components/Texto'
import Titulo from './components/Titulo'

function App() {

  return (
   <div className='cont-app'>
    <Titulo />
    <Texto />


    <img className='imagens-gerais' src="./renamorados.jpg" alt="" />

    <h2>Coisas que gosto em você:</h2>

   <ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
    <li>e</li>
   </ul>
  

   </div>
  )
}

export default App
