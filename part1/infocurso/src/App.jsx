import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = (props) => {
  console.log(props.curso)
  return (
    <div>
      <h1>{props.curso}</h1>
    </div>
  )
}

const Contenido = (props) => {
  console.log(props.parte1,props.ejercicios)
  console.log(props.parte2,props.ejercicios2)
  console.log(props.parte3,props.ejercicios3)
  return (
    <div>
      <p>{props.parte1} {props.ejercicios}</p>
      <p>{props.parte2} {props.ejercicios2}</p>
      <p>{props.parte3} {props.ejercicios3}</p>
    </div>
  )
}

const Total = (props) => {
  const total = 'El total de ejercicios son :'
  console.log(total)
  console.log(props.ejercicios + props.ejercicios2 + props.ejercicios3)
  return (
    <div>
      <p>{total}{props.ejercicios + props.ejercicios2 + props.ejercicios3}</p>
    </div>
  )
}

const App = () => {
  const curso = 'Desarrollo de una aplicacion usando React + Vite'
  const parte1 = 'Fundamentos de React'
  const ejercicios = 10
  const parte2 = 'Usando props para pasar la informacion'
  const ejercicios2 = 7
  const parte3 = 'Estado de un componente'
  const ejercicios3 = 14 
  return (
    <div>
      <Header 
      curso = {curso} 
      />
      <Contenido 
        parte1 = {parte1}
        ejercicios = {ejercicios}
        parte2 = {parte2}
        ejercicios2 = {ejercicios2}
        parte3 = {parte3}
        ejercicios3 = {ejercicios3} 
      />
      <Total 
        ejercicios = {ejercicios}
        ejercicios2 = {ejercicios2}
        ejercicios3 = {ejercicios3}
      />
    </div>
  )
}

export default App