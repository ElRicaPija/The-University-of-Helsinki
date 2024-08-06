import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = ({nombre, edad}) => {
  console.log('Tu nombre es :',nombre);
  console.log('Tu edad es :',edad);
  return (
    <div>
      <p>
        Hola {nombre}, tu tienes {edad} años de edad
      </p>
    </div>
  )
}

function App() {
  const nombre = 'Ricardo'
  const edad = 20

  return (
    <div>
      <h1>Saludos</h1>
      <Hello nombre={nombre} edad={edad} />
      <Hello nombre="Ulises" edad={26 + 10} />
    </div>
  )
}

export default App
