import React from 'react'

export default function Tooltip({ message, children }) {
  return (
    <div className="group flex flex-col items-center">
      {children}
      <div
        className="absolute left-32 hidden flex-col items-center 
      rounded-lg rounded-bl-none border-4 border-blue-400 group-hover:flex"
      >
        <span
          className="relative z-10 whitespace-nowrap rounded-lg px-5 py-3
        rounded-bl-none bg-black text-sm leading-none text-pink-500"
        >
          {message}
        </span>
      </div>
    </div>
  )
}
