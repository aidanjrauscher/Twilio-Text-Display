import Head from 'next/head'
import { useEffect } from 'react'
import useFetchText from '../hooks/useFetchText'



export default function Home() {

  const text = useFetchText()

  return (
    <>
      <Head>
        <title>Text Display</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='grid h-screen place-items-center'>
          <h1 className='text-black sm:text-2xl md:text-4xl lg:text-6xl'>{text}</h1>
        </div>
      </main>
    </>
  )
}
