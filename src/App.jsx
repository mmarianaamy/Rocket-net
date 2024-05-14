import Banner from "./Components/Banner"
import Beneficios from "./Components/Beneficios"
import Contacto from "./Components/Contacto"
import Desafios from "./Components/Desafios"
import Evento from "./Components/Evento"
import Footer from "./Components/Footer"
import Menu from "./Components/Menu"
import Organizadores from "./Components/Organizadores"

function App() {

  return (
    <>
      <div>
          <Menu/>
          <Banner/>
          <Desafios/>
          <Beneficios/>
          <Evento/>
          <Organizadores/>
          <Contacto/>
          <Footer/>
      </div>
    </>
  )
}

export default App
