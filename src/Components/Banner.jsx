import React from 'react'
import people from "../Assets/banner.png"
import arc from "../Assets/arc.png"
import video from "../Assets/video.jpg"

export default function Banner() {
  return (
    <div id="Banner">
      <div class="banner" style={{backgroundImage: `url(${people})`}}>
        <div class="bannerMain"> 
          <div class="transparent info">
            <p class="big">Rocket Hackathon es el programa para resolver desafíos empresariales con <span class="different big">Talento universitario</span></p>
          </div>
          <div class="bannerMainLeft">
            <button class="apply" type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href='#Desafios';
              }}>¡Aplica ahora!</button>
            <div class="transparent revisar">
              <p>*Revisa términos y condiciones</p>
            </div>
          </div>
        </div>
        <div class="transparent verMas">
          <p>Ver más</p>
        </div>
      </div>
      <div class="patrocinador">
        <div>
          <p><b>¡Conoce a nuestra empresa patrocinadora!</b></p>
        </div>
        <div class="infoPat">
          <div class="infoTextPat">
            <img src={arc}></img>
            <p>Arca Continental, uno de los embotelladores de Coca-Cola más grandes del mundo, está reforzando su equipo y capacidades digitales en los 5 países donde opera.</p>
            <br></br>
            <p>El <b>AC Digital Nest</b>, es el equipo detrás del desarrollo digital de la fuerza de ventas de Arca Continental y más de 1 millón de tiendas de abarrotes y pequeños comercios en Latinoamérica.</p>
            <br></br>
            <p>Trabaja con nosotros: <a class="moreInfo" href="https://linktr.ee/carrerasacdigital ">Vacantes abiertas</a></p>
          </div>
          <div class="video">
            <iframe src="https://youtu.be/jFfVPJPYc3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
