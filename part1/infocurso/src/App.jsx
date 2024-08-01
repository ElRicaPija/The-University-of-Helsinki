import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const Header = (props) => {
  console.log(props.curso);
  return (
    <div>
      <h1>{props.curso}</h1>
    </div>
  );
};

const Contenido = (props) => {
  console.log(props.parte1.nombre, props.parte1.ejercicios);
  console.log(props.parte2.nombre, props.parte2.ejercicios);
  console.log(props.parte3.nombre, props.parte3.ejercicios);
  return (
    <div>
      <Parte 
        nombre={props.parte1.nombre}
        ejercicios={props.parte1.ejercicios}
      />
      <Parte 
        nombre={props.parte2.nombre}
        ejercicios={props.parte2.ejercicios}
      />
      <Parte 
        nombre={props.parte3.nombre}
        ejercicios={props.parte3.ejercicios}
      />
    </div>
  );
};

const Parte = (props) => {
  return (
    <div>
      <p>{props.nombre} {props.ejercicios}</p>
    </div>
  );
};

const Total = (props) => {
  const total = 'El total de ejercicios son: ';
  console.log(total);
  console.log(props.ejercicios1 + props.ejercicios2 + props.ejercicios3);
  return (
    <div>
      <p>{total}{props.ejercicios1 + props.ejercicios2 + props.ejercicios3}</p>
    </div>
  );
};

const App = () => {
  const curso = 'Desarrollo de una aplicación usando React + Vite';
  const parte = [{
    nombre: 'Fundamentos de React',
    ejercicios: 10
  },
  {
    nombre: 'Usando props para pasar la información',
    ejercicios: 7
  },
  {
    nombre: 'Estado de un componente',
    ejercicios: 14
  }];
  return (
    <div>
      <Header curso={curso} />
      <Contenido
        parte1={parte[0]}
        parte2={parte[1]}
        parte3={parte[2]}
      />
      <Total 
        ejercicios1={parte[0].ejercicios}
        ejercicios2={parte[1].ejercicios}
        ejercicios3={parte[2].ejercicios}
      />
    </div>
  );
};

export default App;
