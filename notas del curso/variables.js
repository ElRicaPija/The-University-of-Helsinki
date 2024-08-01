// inicializacion de un proyecto en react
// npm create vite@latest part1 -- --template react

// instalacion de vite en un proyecto nuevo
// npm install vite

// Configuracion de archivo main.jsx

/**
    import ReactDOM from 'react-dom/client'

    import App from './App'

    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
 */


// ----------------------------------------------------------------------------

const x = 1 // el valor de las constantes no puede cambiar
let y = 5 // el valor de las variables let si pueden cambiar segun los proceso

console.log(x, y)// imprimi 1, 5

y += 10
console.log(x, y)// imprime 1, 15

y = 'algun texto'
console.log(x, y)

// x = 4 provacaria un error ya que X es una constante la cual
// el valor no puede cambiar por su tipo de declaracion 

// ------------------------------------------------------
// Arrays con metodos forEach y push
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

t.forEach(value => {
  console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})  

// Con metodo concat
const tt = [1, -1, 3]

const t2 = tt.concat(5) // crea un nuevo array

console.log(tt)  // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]

// ---------------------------------------------------------------
// metodo map
/**
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1) // se imprime [2, 4, 6]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
 */

// metodo con asignacion deconstructiva
/**
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t


console.log(first, second)  // se imprime 1, 2
console.log(rest)          // se imprime [3, 4 ,5]
 */
