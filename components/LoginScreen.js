import Image from 'next/image'
import { useMoralis } from 'react-moralis'

export default function LoginScreen() {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black">
      <h1>I'm the Login Screen</h1>
      <div
        className="absolute z-50 flex h-4/6 w-full flex-col items-center 
        justify-center space-y-4"
      >
        <div
          className="flex rounded-full bg-gradient-to-b from-gray-900 
        via-yellow-300 to-blue-700 p-3 shadow-fuchsia-500 ring-2 ring-gray-900"
        >
          <Image
            className="rounded-full object-cover"
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1649547598/my-upload/lmxai4oqorfkwlnvsiqo.png"
            height={220}
            width={200}
          />
        </div>

        <button
          onClick={authenticate}
          className="transform animate-pulse rounded-lg bg-gradient-to-tr 
        from-yellow-500 via-yellow-300 to-yellow-800 p-5 font-bold transition-all
        ease-out hover:animate-none active:scale-95"
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
        {/* Login Form */}
      </div>
    </div>
  )
}
