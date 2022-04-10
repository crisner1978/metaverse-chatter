import { MoralisProvider } from 'react-moralis'

export default function AppProvider({ children }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      {children}
    </MoralisProvider>
  )
}
