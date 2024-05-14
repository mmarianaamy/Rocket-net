import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./Components/Footer"
import Menu from "./Components/Menu"
import Home from "./Pages/Home"
import Arca from "./Pages/Arca"
import Impacto from "./Pages/Impacto"
import Evento from "./Pages/Evento"
import Contacto from "./Components/Contacto"
import Terminos from "./Pages/Terminos"
import DesafiosP from "./Pages/DesafiosP"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Menu/>
          
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Arca-Continental" element={<Arca/>}/>
              <Route path="/Desafios/:id" element={<DesafiosP/>}/>
              <Route path="/Impacto" element={<Impacto/>}/>
              <Route path="/Evento" element={<Evento/>}/>
              <Route path="/Terminos" element={<Terminos/>}/>
            </Routes>
          
          <Contacto/>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
