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