import Head from 'next/head'
import LoginScreen from '../components/LoginScreen'
import { useMoralis } from 'react-moralis'
import Spinner from '../components/Spinner'

const Home = () => {
  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) return <LoginScreen />
  if (isInitializing) return <Spinner />

  return (
    <>
      {isAuthenticated && (
        <div className="h-screen">
          <Head>
            <title>Metaverse Chatter</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='flex flex-col items-center justify-center space-y-10 h-screen'>
            <h1 className='text-5xl'>Welcome to the METAVERSE CHATTER APP</h1>
            <button onClick={logout} className='bg-black p-5 rounded-xl text-white'>LOGOUT NOW!</button>

          </div>
        </div>
      )}
    </>


  )
}

export default Home
