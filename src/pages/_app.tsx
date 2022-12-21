import '../../styles/styles.scss'
import type { AppProps } from 'next/app'
import { TweetTabsProvider } from '../context/TweetTabsInfo'

export default function App({ Component, pageProps }: AppProps) {
  return (
  
    <TweetTabsProvider>
  <Component {...pageProps} />
  </TweetTabsProvider>
  )
}
