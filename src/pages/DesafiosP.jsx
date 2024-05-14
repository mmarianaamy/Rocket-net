import { useParams } from "react-router-dom";
import Impacto from "./Impacto";
import Desafio from "../Components/Desafio";

export default function DesafiosP(){
    let { id } = useParams();
    return(
    <>  
        <Desafio id={id}/>
        <Impacto></Impacto>
    </>
)
}