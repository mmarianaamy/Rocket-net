import React from 'react'
import logo from '../Assets/logo-rocket.png'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div class="wholeMenu">
      <div class="menu">
        <a href="/#Banner" id="TopLogo"><img src={logo}></img></a>
        <a href="/#Banner">Arca Continental</a>
        <a href="/#Desafios">Desafíos</a>
        <a href="/#Beneficios">Impacto</a>
        <a href="/#Evento">Evento</a>
        <button class="terminos" type="button" onClick={(e) => {
          e.preventDefault();
          window.location.href='https://drive.google.com/file/d/1cKt54hS_E_Fnn689vmTJ5kxs_Q3V0Zp8/view?usp=sharing';
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
          <a href="" onClick={(e) => {
            var x = document.getElementById("dropDown");
            x.style.display="none";
          }}>Arca Continental</a>
        </div>
        <div class="select">
          <a href="/#Desafios" onClick={(e) => {
            var x = document.getElementById("dropDown");
            x.style.display="none";
          }}>Desafíos</a>
        </div>
        <div class="select">
          <a href="/#Beneficios" onClick={(e) => {
            var x = document.getElementById("dropDown");
            x.style.display="none";
          }}>Impacto</a>
        </div>
        <div class="select">
          <a href="/#Evento" onClick={(e) => {
            var x = document.getElementById("dropDown");
            x.style.display="none";
          }}>Evento</a>
        </div>
        <div class="select">
          <button class="terminos" type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href='https://drive.google.com/file/d/1cKt54hS_E_Fnn689vmTJ5kxs_Q3V0Zp8/view?usp=sharing';
          }}> <b>Términos y condiciones</b></button>
        </div>
      </div>
    </div>
  )
}
