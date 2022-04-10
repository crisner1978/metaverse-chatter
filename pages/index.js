

import Header from 'components/Header'
import LoginScreen from 'components/LoginScreen'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'

const Home = () => {
  const { isAuthenticated, isInitializing } = useMoralis()

  if (!isAuthenticated) return <LoginScreen />
  if (isInitializing) return <Spinner />

  return (
    <div
      className="h-screen overflow-hidden overflow-y-scroll 
      bg-gradient-to-b from-black to-fuchsia-900"
    >
      <Head>
        <title>Metaverse Chatter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-xl">
        <Header />
        <Messages />
      </div>
    </div>
  )
}

export default Home
