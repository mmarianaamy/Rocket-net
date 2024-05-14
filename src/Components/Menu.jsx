import React from 'react'
import logo from '../Assets/logo-rocket.png'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='Menu'>
    
        <Link to="/" className='logo'><img src={logo} alt="" /></Link>
        <Link to="Arca-Continental" className='link'>Arca Continental</Link>
        <Link to="Desafios" className='link'>Desafíos</Link>
        <Link to="Impacto" className='link'>Impacto</Link>
        <Link to="Evento" className='link'>Evento</Link>
        <Link to="Terminos" className='link terminos'>Términos y Condiciones</Link>
    </div>
  )
}
