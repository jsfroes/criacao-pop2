import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import GbiBridged from "./Hero"

function Content() {
  return (
    <>
      <div className="w-full h-screen max-h-96 flex flex-col absolute">
        <GbiBridged>
          <h5>Cinema</h5>
          <h1>Post Title</h1>
          <p>by Author Name</p>
        </GbiBridged>
      </div>
    </>
  )
}

export default Content
