import React from 'react'
import logo from '../Components/Logo.png'

export default function Menu() {
  return (
    <div>
      <div class="menu">
        <img src={logo}></img>
        <a href="">Arca Continental</a>
        <a href="">Desafíos</a>
        <a href="">Beneficios</a>
        <a href="">Evento</a>
        <button class="terminos" type="button" onClick={(e) => {
          e.preventDefault();
          window.location.href='https://www.arcacontal.com';
        }}> <b>Términos y condiciones</b></button>
        <button class="expand" type="button" onClick={(e) => {
          var x = document.getElementById("dropDown");
          if(x.style.display == "none"){
            x.style.display = "flex";
          }else{
            x.style.display = "none";
          }
        }}><i class="fa fa-bars"></i></button>
      </div>
      <div id="dropDown">
        <div class="select">
          <a href="">Arca Continental</a>
        </div>
        <div class="select">
          <a href="">Desafíos</a>
        </div>
        <div class="select">
          <a href="">Beneficios</a>
        </div>
        <div class="select">
          <a href="">Evento</a>
        </div>
        <div class="select">
          <button class="terminos" type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.arcacontal.com';
          }}> <b>Términos y condiciones</b></button>
        </div>
      </div>
    </div>
  )
}
