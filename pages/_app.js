import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NK_แบตเตอรี่อยุธยา</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
