import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'
import Tooltip from './Tooltip'

const Header = () => {
  const { user } = useMoralis()

  return (
    <div className="sticky top-0 z-50 border-b-2 border-pink-700 bg-black p-5 text-pink-500 shadow-sm">
      <div className="grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center">
        <div className="relative mx-auto hidden h-24 w-24 rounded-full border-4 border-yellow-500 lg:inline-grid ">
          <Image
            className="rounded-full object-cover"
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1649547598/my-upload/lmxai4oqorfkwlnvsiqo.png"
            layout="fill"
          />
          <Image
            className="rounded-full object-cover"
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1649603488/k2xdhcbhjpvju9qssukz_qcbuid.png"
            layout="fill"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-8 border-pink-500 lg:mx-auto">
            <Tooltip message="Logout">
              <Avatar logoutOnPress />
            </Tooltip>
            
          </div>
          <h1 className="text-3xl">
            Welcome to the Meta
            <span className="italic tracking-widest text-pink-200">
              CHATTER
            </span>
            verse{' '}
          </h1>
          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>
          <ChangeUsername />
          {/* Change username component */}
        </div>
      </div>
    </div>
  )
}

export default Header
