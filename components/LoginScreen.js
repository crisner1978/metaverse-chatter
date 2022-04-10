import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Logo from './Logo'

export default function LoginScreen() {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black">
      <div
        className="absolute z-50 flex h-4/6 w-full flex-col items-center 
        justify-center space-y-4"
      >
        <Logo
          heightWidth
          tw="logo_login"
          img_1="https://res.cloudinary.com/dtram9qiy/image/upload/v1649547598/my-upload/lmxai4oqorfkwlnvsiqo.png"
          gradient="https://res.cloudinary.com/dtram9qiy/image/upload/v1649603488/k2xdhcbhjpvju9qssukz_qcbuid.png"
        />
        <button
          onClick={() => authenticate({ signingMessage: "Welcome to the Metaverse Chatter!" })}
          className="signin_btn"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="relative h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
          priority
          as='image'
        />
      </div>
    </div>
  )
}
