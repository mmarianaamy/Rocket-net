import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo-rocket.png"
import instagram from "../Assets/instagram.png"
import facebook from "../Assets/facebook.png"
import twitter from "../Assets/twitter.png"

export default function Footer() {
  return (
    <div class='footer'>
      <Link to="/" id="BottomLogo"><img src={logo}/></Link>
      <Link to="https://www.linkedin.com/company/digital-hub-tec-mty/" class="media"><img src={instagram}></img></Link>
      <Link to="https://www.linkedin.com/company/digital-hub-tec-mty/" class="media"><img src={facebook}></img></Link>
      <Link to="https://www.instagram.com/digitalhub.tec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="media"><img src={twitter}></img></Link>
    </div>
  )
}
