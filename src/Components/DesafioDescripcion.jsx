import React from 'react'

export default function Desafio({id}) {
  var fotos = [desafio1, desafio2, desafio3];
  var info = ["Potencia la estrategia de growth enfocada en promociones y precios", "Identifica vulnerabilidades en nuestros sistemas de control", "Hackea el churn: anticipando e identificando la posible baja de clientes"]
  return (
    <div class="desafio" style={{backgroundImage: `url(${fotos[id - 1]})`}}>
      <div class="desafioTitulo">
        <p>Desafio {id}</p>
        <p style={{color: "white"}}>{info[id - 1]}</p>
        <button><b>Ver más</b></button>
      </div>
    </div>
  )
}
