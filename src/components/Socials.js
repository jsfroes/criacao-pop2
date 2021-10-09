import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Socials({ icon, size }) {
  return (
    <FontAwesomeIcon
      className="text-gray-600 text-xl hover:text-white  shadow-sm delay-75 cursor-pointer mr-4"
      icon={icon}
      size={size}
    />
  )
}

export default Socials
