import React from 'react'

export default function Tooltip({ message, children }) {
  return (
    <div className="group flex flex-col items-center">
      {children}
      <div
        className="absolute left-40 hidden flex-col items-center 
      rounded-lg rounded-bl-none border-4 border-blue-400 group-hover:flex"
      >
        <span
          className="relative z-10 whitespace-nowrap rounded-lg 
        rounded-bl-none bg-black p-3 text-sm leading-none text-pink-500"
        >
          {message}
        </span>
      </div>
    </div>
  )
}
