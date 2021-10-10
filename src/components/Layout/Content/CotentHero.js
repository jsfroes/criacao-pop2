import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import hero from "../../../images/hero.jpg"

function CotentHero() {
  return (
    <div className="grid grid-cols-2 border-2 border-gray-600">
      <div>
        <h1>Hero Banner goes here</h1>
      </div>

      <div></div>
      <div>
        <h1>Hero Content Goes here</h1>
      </div>
    </div>
  )
}

export default CotentHero
