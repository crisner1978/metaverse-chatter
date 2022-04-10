import { useState } from 'react'
import { useMoralis } from 'react-moralis'

export default function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error)
        }
      )
    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
    setMessage("")
  }

  return (
    <form
      className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-4
    border-blue-400 bg-black/80 px-6 py-4 shadow-xl
    "
    >
      <input
        className="flex-grow bg-transparent pr-5 text-white 
        placeholder-gray-500 outline-none"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder={`Enter a message ${user.getUsername()}...`}
      />
      <button
        onClick={sendMessage}
        type="submut"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  )
}
