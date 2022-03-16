import React from "react"
import { GitHub } from "react-feather"

function Footer({  }) {
  return (
    <footer className={`
      flex items-center
      absolute bottom-3 right-3
      bg-gray-300/30 text-sm text-white
      p-2 rounded-lg
      dark:(bg-gray-600/60)
    `}>

      <span className="mx-1">Developed by</span>
      <a href="https://nrshagor.com/" 
        target="_blank"
        className="border-b border-green-400"
      >N R SHAGOR</a>
    </footer>
  )
}

export default Footer