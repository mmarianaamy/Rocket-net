import React from 'react'
import Desafio from "./Desafio"

export default function Desafios() {
  return (
    <div>
      <div name="Desafios" id="Desafios" class="desafiosHeading">
        <p><b>Desafíos</b></p>
      </div>
      <div class="desafios">
        <Desafio id={1} />
        <Desafio id={2} />
        <Desafio id={3} />
      </div>
      
    </div>
  )
}
