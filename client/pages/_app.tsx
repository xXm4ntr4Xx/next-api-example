import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ApiContextprovider} from '../context/apiContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <ApiContextprovider>
        <Component {...pageProps} />
      </ApiContextprovider>
    
  )
}

export default MyApp
