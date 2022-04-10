import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'
import HeaderTitle from './HeaderTitle'
import Logo from './Logo'
import Tooltip from './Tooltip'

const Header = () => {
  const { user } = useMoralis()

  return (
    <div className="sticky top-0 z-50 border-b-2 border-pink-700 bg-black p-5 text-pink-500 shadow-sm">
      <div className="grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center">
        <Logo
          tw="logo_header"
          img_1="https://res.cloudinary.com/dtram9qiy/image/upload/v1649547598/my-upload/lmxai4oqorfkwlnvsiqo.png"
          gradient="https://res.cloudinary.com/dtram9qiy/image/upload/v1649603488/k2xdhcbhjpvju9qssukz_qcbuid.png"
        />
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-40 w-40 rounded-full border-8 border-pink-500 lg:mx-auto">
            <Tooltip message="Logout">
              <Avatar logoutOnPress />
            </Tooltip>
          </div>
          <HeaderTitle
            title="Welcome to the Meta"
            span="CHATTER"
            title2="verse"
            username={user.getUsername()}
          />
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
