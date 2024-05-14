
import Patrocinador from "../Components/Patrocinador"
import Banner from "../Components/Banner"
import Beneficios from "../Components/Beneficios"
import Contacto from "../Components/Contacto"
import Desafios from "../Components/Desafios"
import Evento from "../Components/Evento"
import Organizadores from "../Components/Organizadores"

export default function Home (){
    return(<>
        <Banner/>
        <Patrocinador/>
        <Desafios/>
        <Beneficios/>
        <Evento/>
        <Organizadores/>
    </>)
}