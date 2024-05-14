import React from 'react'
import background from '../Assets/background1.png'
import people from "../Assets/beneficios.png"

export default function Beneficios() {
  return (
    <div id="Beneficios" style={{backgroundImage: `url(${background})`}}>
      <div class="beneficiostop">
        <div>
          <p class="beneficiosheading">Impacto que aportarás al participar</p>
          <br></br>
          <p><b>Desafio 01 - Potencia la estrategia de growth enfocada en promociones y precios</b></p>
          <p>Agilizar el proceso de toma de pedido para simplificar este proceso al cliente, y así ayudarlo a aumentar sus ingresos al facilitarle la visualización y el entendimiento de nuestras promociones, lo cual, al mismo tiempo, nos ayudará a aumentar nuestras ventas. </p>
          <br></br>
          <p><b>Desafío 02 - Securing the Digital Nest: identifica vulnerabilidades</b></p>
          <p>Poner a prueba los controles de seguridad implementados en la arquitectura de la solución y encontrar vulnerabilidades que puedan ser explotadas por agentes externos en cualquier rango de expertise y su posible solución. Esperamos que la mejora continua de la seguridad genere mayor confianza con nuestros clientes.</p>
          <br></br>
          <p><b>Desafío 03 - Hackea el churn: anticipando e identificando la posible baja de clientes</b></p>
          <p>Identificar clientes con una alta probabilidad de darse de baja en el futuro próximo para diseñar estrategias de acompañamiento con la finalidad de evitar la baja y lograr redirigir recursos para invertir en clientes con mayor potencial de crecimiento.</p>
        </div>
        <img src={people}></img>
      </div>
    </div>
  )
}
