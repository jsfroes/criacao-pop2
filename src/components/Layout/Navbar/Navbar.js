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
      <nav className="grid grid-cols-3 border-2 bg-gray-800 text-white border-b border-gray-600 pb-1">
        {/* subscribe section */}
        <section className="flex justify-center items-center">
          <a href="#" className="font-bungee text-sm">
            subscribe<span>{">>"}</span>
          </a>
        </section>
        {/* end of subscribe */}

        {/* logo section */}
        <section className="flex justify-center items-center  ">
          <StaticImage src="../../../images/logo3.png" alt="Criacao Pop" />
        </section>
        {/* end of logo */}

        {/* socials seciton */}
        <section className="flex justify-center items-center">
          <Socials icon={faTwitter} />
          <Socials icon={faFacebook} />
          <Socials icon={faInstagram} />
          <Socials icon={faSpotify} />
          <Socials icon={faYoutube} />
          <Socials icon={faTwitch} />
        </section>
        {/* end of socials */}
      </nav>

      {/* nav links */}
      <nav className="flex flex-row justify-center items-center border-2border-gray-800 bg-gray-800 text-white py-3">
        <NavbarMenuItem title="Cinema" />
        <NavbarMenuItem title="Series" />
        <NavbarMenuItem title="Musica" />
        <NavbarMenuItem title="Cultura" />
      </nav>
    </>
  )
}

export default Navbar
