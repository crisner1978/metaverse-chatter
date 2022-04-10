import React from 'react'

const HeaderTitle = ({ username, title, span, title2 }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">
        {title}
        <span className="font-mono italic tracking-widest text-pink-200">
          {span}
        </span>
        {title2}
      </h1>
      <h2 className="truncate text-3xl font-bold">{username}</h2>
    </div>
  )
}

export default HeaderTitle
