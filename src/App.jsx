import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./Components/Footer"
import Menu from "./Components/Menu"
import Home from "./pages/Home"
import Arca from "./pages/Arca"
import Impacto from "./pages/Impacto"
import Evento from "./pages/Evento"
import Contacto from "./Components/Contacto"
import Terminos from "./pages/Terminos"
import DesafiosP from "./pages/DesafiosP"

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
          
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
