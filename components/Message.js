import React from 'react'
import { useMoralis } from 'react-moralis'
import TimeAgo from 'timeago-react'
import Avatar from './Avatar'

export default function Message({ message }) {
  // const { message: chat, createdAt, username, ehtAddress } = message.attributes
  const { user } = useMoralis()
  // console.log('message component', chat)

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress')
  // console.log("username", username)
  return (
    <div
      className={`relative flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar username={message.get('username')} />
      </div>
      <div className={`flex space-x-4 rounded-lg p-3 ${
          isUserMessage
            ? 'rounded-br-none bg-pink-300'
            : 'rounded-bl-none bg-blue-400'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>

      <TimeAgo className={`text-[10px] italic text-gray-400 ${isUserMessage && "order-first pr-1"}`} datetime={message.createdAt} />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-pink-300' : 'text-blue-400'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  )
}
