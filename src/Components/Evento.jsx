import React from 'react'
import background2 from '../Assets/background1 - copia.png'

export default function Evento() {
  return (
    <div id="Evento" class = "event" style={{backgroundImage: `url(${background2})`}}>
      <p class="eventHeader">Evento</p>
      <div class="eventBody">
        <div class="eventText">
          <p><b>Fecha:</b></p>
          <p>15 y 16 de Junio del 2024</p>
          <br></br>
          <p><b>Lugar:</b></p>
          <p>Digital Hub Monterrey Campus</p>
          <p>Blvd Gustavo Díaz Ordaz 333, Zona Industrial, 66210 San Pedro Garza García, N.L.</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d920.0940050732243!2d-100.4171176316131!3d25.676016272052333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866297e12ea79dbb%3A0xa1fa328d8b8dc1c7!2sMonterrey%20Digital%20Hub!5e0!3m2!1sen!2smx!4v1715712568321!5m2!1sen!2smx" height={300} allowfullscreen="" loading="lazy"  class="maps" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
