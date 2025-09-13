import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NK_แบตเตอรี่อยุธยา</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
