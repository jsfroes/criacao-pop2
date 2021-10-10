import React from "react"

function NavbarMenuItem({ title }) {
  return (
    <>
      <a
        className="text-white mr-4 ml-4 font-bold font-bungee text-sm"
        aria-current="page"
        href={"/" + title.toLowerCase()}
      >
        {title}
      </a>
    </>
  )
}

export default NavbarMenuItem
