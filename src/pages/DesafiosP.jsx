import { useParams } from "react-router-dom";
import imagen1 from '../Assets/Desafio1.jpeg'
import imagen2 from '../Assets/Desafio2.jpeg'
import imagen3 from '../Assets/Desafio3.jpeg'

export default function DesafiosP(){
    let { id } = useParams();
    var titulos = ["Desafio 01: Potencia la estrategia de growth enfocada en promociones y precios", "Desafío 2 - Securing the Digital Nest: identifica vulnerabilidades", "Desafío 03: Hackea el churn: anticipando e identificando la posible baja de clientes"]
    var subtitulos = ["¿Cómo podríamos potenciar la estrategia de growth enfocada en promociones y precios para que los vendedores y la plataforma digital puedan ofrecerla y comunicarla en tienda de manera ágil,  informada y transparente?",
        "¿Cómo podríamos identificar deficiencias de seguridad (vulnerabilidades) y fallas en nuestros sistemas de control actuales (aplicativo móvil)?", 
        "¿Cómo podríamos anticipar una baja de clientes (tendero) para realizar una evaluación del motivo de posible baja y generar una estrategia de acompañamiento que evite su baja?"
    ]
    var imagenes = [imagen1, imagen2, imagen3]

    var links = ["https://forms.gle/TYjMAh3zjotSmMYm7", "https://forms.gle/iDyX9iz9RkuK8FPZ6", "https://forms.gle/wLnVsFGE3wxB3sbD7"]

    return(
    <>  
        <div class="desafiosPage">
            
            <div class="topDesafio">
                <img src={imagenes[id - 1]}></img>
                <div class="toprightDesafio">
                    <p class="tituloDesafios">{titulos[id - 1]}</p>
                    <p>{subtitulos[id - 1]}</p>
                    <button class="aplica desafioButton" type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href=links[id - 1];
          }}> <b>¡Aplica aquí!</b></button>
                </div>
            </div>
            <div class="perfil">
                <p class="tituloDesafios">Perfil de los participantes: </p>
                {id == 1 ? <div><p>Los equipos pueden ser de 3 a 4 participantes, cada equipo tiene que tener un balance de perfiles por lo que cómo máximo pueden haber 2 personas del mismo perfil: </p>
                <ul>
                    <li>Técnico: habilidades de programación y tecnológicas</li>
                    <li>Comercial y producto: Habilidades blandas y de presentación</li>
                    <li>Diseño: Capacidad de crear experiencias diferentes para los clientes. </li>
                </ul></div> : <div></div>}
                {id == 2 ? <div><ul><li>Perfiles netamente técnicos: estudiantes de ciberseguridad, informática, desarrolladores, bases de datos, cloud, telecomunicaciones y redes.</li><li>Pueden participar de forma individual o en equipos de hasta 4 personas</li></ul></div> : <div></div>}
                {id == 3 ? <div><p>Los equipos pueden ser de 3 a 4 participantes, idealmente sólo uno del equipo debe ser de Negocio/traductor de datos: </p>
                <ul>
                    <li>Técnico: Data Science y cualquier carrera relacionada a datos. Manejo de modelos y herramientas de datos.</li>
                    <li>Negocio/traductor de datos: Habilidades blandas y de entendimiento del negocio para expresarlos en datos. Preferiblemente (pero no excluyente) de las carreras de Industrial, Innovación y desarrollo, finanzas y otras relacionadas.</li>
                </ul></div> : <div></div>}
                <button id="desafiosterminos" class="terminos" type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href='https://drive.google.com/file/d/1cKt54hS_E_Fnn689vmTJ5kxs_Q3V0Zp8/view?usp=sharing';
          }}> <b>Términos y condiciones</b></button>
            </div>
        </div>
    </>
)
}