const Hello = () => {
  return (
    <div>
      <p>hola mundo utilizando componentes</p>
    </div>
  )
}

const Lista = () => {
  const a = 10 
  const b = 90
  const resultado = a + b
  console.log('la suma de a y b es = ',resultado)

  return (
    <div>
      <ol>
        <li>Pruebas de lista con componentes</li>
        <li>practicando para recordar</li>
        <li>la suma de A y B es = {resultado.toString()}</li>
        <li>creo que hacerlo asi esta bien</li>
      </ol>
    </div>
  )
}

const Imagenes = () => {
  return (
    <div>
      <ol>
        <li><img src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_creativo_barbie.png?width=800&name=logo_creativo_barbie.png" alt="imagen 1" width="100"/></li>
        <li><img src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_creativo_coca_cola.png?width=650&name=logo_creativo_coca_cola.png" alt="imagen 2" width={100} /></li>
        <li><img src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_creativo_airbnb.png?width=650&name=logo_creativo_airbnb.png" alt="imagen 3" width={100}/></li>
        <li><img src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logos_creativos_amazon.jpg?width=650&name=logos_creativos_amazon.jpg" alt="imagen 4" width={100}/></li>
      </ol>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Felicidades estas usando componentess</h1>
      <Hello />
      <Lista />
      <Imagenes />
    </div>
  )
}

export default App