import React from "react"

function NavbarMenuItem({ title }) {
  return (
    <>
      <li className="">
        <a
          className="text-gray-500"
          aria-current="page"
          href={"/" + title.toLowerCase()}
        >
          {title}
        </a>
      </li>
    </>
  )
}

export default NavbarMenuItem
