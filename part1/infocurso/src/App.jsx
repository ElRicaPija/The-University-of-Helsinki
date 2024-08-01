import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const Header = ({curso}) => {
  console.log(curso);
  return (
    <div>
      <h1>{curso}</h1>
    </div>
  );
};

const Contenido = ({partes}) => {
  console.log(partes[0].nombre, partes[0].ejercicios);
  console.log(partes[1].nombre, partes[1].ejercicios);
  console.log(partes[2].nombre, partes[2].ejercicios);
  return (
    <div>
      <Parte 
        nombre={partes[0].nombre}
        ejercicios={partes[0].ejercicios}
      />
      <Parte 
        nombre={partes[1].nombre}
        ejercicios={partes[1].ejercicios}
      />
      <Parte 
        nombre={partes[2].nombre}
        ejercicios={partes[2].ejercicios}
      />
    </div>
  );
};

const Parte = ({nombre , ejercicios}) => {
  return (
    <div>
      <p>{nombre} {ejercicios}</p>
    </div>
  );
};

const Total = ({ partes }) => {
  const total = 'El total de ejercicios son: ';
  const totalEjercicios = partes[0].ejercicios + partes[1].ejercicios + partes[2].ejercicios;
  console.log(total);
  console.log(totalEjercicios);
  return (
    <div>
      <p>{total}{totalEjercicios}</p>
    </div>
  );
};

const App = () => {
  const curso = {
    nombre: 'Desarrollo de una aplicación usando React + Vite',
    partes: [
      {
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
      }
    ]
  };
  return (
    <div>
      <Header curso={curso.nombre} />
      <Contenido partes={curso.partes} />
      <Total partes={curso.partes} />
    </div>
  );
};

export default App;
