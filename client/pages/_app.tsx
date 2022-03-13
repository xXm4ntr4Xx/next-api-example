import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ApiContext} from '../context/apiContext'


function MyApp({ Component, pageProps }: AppProps) {
  


  return (
    <ApiContext.Provider value={'context'}>
      <Component {...pageProps} />
  </ApiContext.Provider>
  )
}

export default MyApp
