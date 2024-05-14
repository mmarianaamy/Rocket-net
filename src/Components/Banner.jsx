import React from 'react'
import bg from "../Assets/banner.png"

export default function Banner() {
  return (
    <div className='banner'>
      <img className="bg" src={bg} alt="" />
      <span className='desc'>Rocket Hackathon es el programa para resolver desafíos empresariales con  Talento universitario</span>
      <div>
        <div className='aplica'>Aplica Ahora!</div>
        <p className='terminos'>*Revisa terminos y condiciones</p>
      </div>
    </div>
  )
}
