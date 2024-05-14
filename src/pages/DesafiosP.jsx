import { useParams } from "react-router-dom";
import imagen from '../Assets/Desafio1.jpeg'

export default function DesafiosP(){
    let { id } = useParams();
    return(
    <>  
        <div>
            
            <div class="topDesafio">
                <img src={imagen}></img>
                <div>
                    <p>Desafio 01: Potencia la estrategia de growth enfocada en promociones y precios</p>
                    <p>¿Cómo podríamos potenciar la estrategia de growth enfocada en promociones y precios para que los vendedores y la plataforma digital puedan ofrecerla y comunicarla en tienda de manera ágil,  informada y transparente?</p>
                    <button class="aplica">¡Aplica ahora!</button>
                </div>
            </div>
        </div>
    </>
)
}