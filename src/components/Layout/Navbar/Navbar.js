import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// components
import Socials from "../../Socials"

// icons
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTwitch,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons"

// components
import NavbarMenuItem from "./NavbarMenuItem"

function Navbar() {
  return (
    <>
      <nav className="grid grid-cols-3 border-2 border-gray-800 bg-gray-800 text-white">
        <div className="flex justify-center items-center">
          <h4>
            subscribe<span>{">>"}</span>
          </h4>
        </div>
        <div className="flex justify-center items-center  ">
          <StaticImage src="../../../images/logo3.png" alt="Criacao Pop" />
        </div>
        <div className="flex justify-center items-center">
          <Socials icon={faTwitter} />
          <Socials icon={faFacebook} />
          <Socials icon={faInstagram} />
          <Socials icon={faSpotify} />
          <Socials icon={faYoutube} />
          <Socials icon={faTwitch} />
        </div>
      </nav>
      <ul className="navbar-nav mx-auto">
        <NavbarMenuItem title="Cinema" />
        <NavbarMenuItem title="Series" />
        <NavbarMenuItem title="Musica" />
        <NavbarMenuItem title="Cultura" />
      </ul>
    </>
  )
}

export default Navbar
