import Image from 'next/image'
import { useMoralis } from 'react-moralis'

export default function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis()
  // console.log("username", username)
  return (
    <Image
      className="cursor-pointer rounded-full bg-black hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get('username')
      }.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
      priority
      alt='avatar'
      loading='eager'
    />
  )
}
