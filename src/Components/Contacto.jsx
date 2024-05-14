import React from 'react'
import bg from '../Assets/mineria-sostenible.jpeg'
export default function Contacto() {
  return (
    <div className='contacto'>
      <img className='bg' src={bg} alt="" />
      <div className='c'>
        <h1>Contacto</h1>
        <p>Escribenos y con gusto te ayudamos con las dudas que tengas</p>
      </div>
      <div className='form'>
        <p>Nombre y Apellido</p>
        <input type="text" />
        <p>Email</p>
        <input type="email" name="" id="" />
        <p>Tu pregunta</p>
        <input type="textarea" />
        <input className="send" type="button" value="Enviar " />
      </div>
    </div>
  )
}
