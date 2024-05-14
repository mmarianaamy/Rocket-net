import React from 'react'
import desafio1 from '../Assets/Desafio1.jpeg'
import desafio2 from '../Assets/Desafio2.jpeg'
import desafio3 from '../Assets/Desafio3.jpeg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function Desafio({id}) {
  var fotos = [desafio1, desafio2, desafio3];
  var info = ["Potencia la estrategia de growth enfocada en promociones y precios", "Securing the Digital Nest: identificando vulnerabilidades", "Hackea el churn: anticipando e identificando la posible baja de clientes"]
  return (
    <div class="desafio" style={{backgroundImage: `url(${fotos[id - 1]})`}}>
      <div class="desafioTitulo">
        <p>Desafio {id}</p>
        <p style={{color: "white"}}>{info[id - 1]}</p>
        <button><Link to={`Desafios/${id}`} class="link">Ver mas</Link></button>
      </div>
    </div>
  )
}
