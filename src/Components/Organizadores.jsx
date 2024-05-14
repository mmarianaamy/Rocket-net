import React from 'react'
import dgt from '../Assets/arc.png'
import arc from '../Assets/arc.png'
import dgm from '../Assets/arc.png'

export default function Organizadores() {
  return (
    <div class="organizadores">
      <p>Organizan</p>
      <div class="organizadoresi">
        <img src={dgt}></img>
        <img src={arc}></img>
        <img src={dgm}></img>
      </div>
      <button class="aplica" type="button" onClick={(e) => {
          e.preventDefault();
          window.location.href='https://www.arcacontal.com';
        }}> <b>¡Aplica ahora!</b></button>
    </div>
  )
}
