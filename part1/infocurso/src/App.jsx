import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = () => {
  const curso = 'Desarrollo de una aplicacion usando React + Vite'
  return (
    <div>
      <h1>{curso}</h1>
    </div>
  )
}

const Contenido = (props) => {
  const parte1 = 'Fundamentos de React'
  const ejercicios = 10
  const parte2 = 'Usando props para pasar la informacion'
  const ejercicios2 = 7
  const parte3 = 'Estado de un componente'
  const ejercicios3 = 14 
  return (
    <div>
      <p>{parte1} {ejercicios}</p>
      <p>{parte2} {ejercicios2}</p>
      <p>{parte3} {ejercicios3}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Contenido />
    </div>
  )
}

export default App