import { useMoralis } from "react-moralis";

export default function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  
  const setUsername = () => {
    const username = prompt(`Enter your new Username (current: ${user.getUsername()})`)

    if (!username) return;
    setUserData({
      username,
    })
  }
  return (
    <div className='text-sm absolute right-5 top-5'>
      <button onClick={setUsername} disabled={isUserUpdating} className='hover:text-pink-700'>
        Change your username
      </button>
    </div>
  )
}
