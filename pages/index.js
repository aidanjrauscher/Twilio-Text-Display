import Head from 'next/head'
import { useEffect } from 'react'
import useFetchText from '../hooks/useFetchText'
import {Radio} from "react-loader-spinner"



export default function Home() {

  const [isLoading, text, senderNumber]  = useFetchText()

  return (
    <>
      <Head>
        <title>Text Display</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='grid h-screen place-items-center'>
          {isLoading ? 
            <Radio visible={true} height="150" width="150" ariaLabel="radio-loading"/> : 
            <h1 className='text-black text-4xl lg:text-6xl'>{text}</h1> 
          }
        </div>
      </main>
    </>
  )
}
