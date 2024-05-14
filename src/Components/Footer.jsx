import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo-rocket.png"

export default function Footer() {
  return (
    <div className='Menu'>
    
      <Link to="/" className='logo'><img src={logo} alt="" /></Link>
      <Link to="Arca-Continental" className='link'>LinkedIn</Link>
      <Link to="Desafios" className='link'>Facebook</Link>
      <Link to="Impacto" className='link'>Instagram</Link>
    </div>
  )
}
