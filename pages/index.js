import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar } from '../src/components/Navbar/Navbar'
import { Hero } from '../src/components/Hero/Hero'
import styles from '../styles/Home.module.css'
import { Welcome } from '../src/components/Welcome/Welcome'
import { Courses } from '../src/components/Course/Courses'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [isLit, setIsLit] = useState(true);
  return (
    <>
      <Head>
        <title>Start Your Development Career With AT Academy</title>
        <meta name="description" content="Become The Best Developer By Learning Practically." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={isLit ? 'light' : 'dark'} >
        <Navbar />
        <Hero />
        <Welcome />
        <Courses />
        
        <div className='relative bg-slate-100 dark:bg-slate-900 w-full h-60 ml-auto mr-auto  text-center'>
            <div className='flex flex-row justify-center items-center w-[20%] ml-auto mr-auto  py-3 px-16 rounded-full cursor-pointer bg-[#4079b3] dark:bg-slate-300 min-h-[48px]'>
               <button onClick={() => setIsLit(!isLit)} type="button" className="font-poppins font-semibold text-[14px] leading-[16px] text-white">Switch Theme</button>
            </div>
            <h1 className='rounded-lg shadow-2xl py-16 text-2xl text w-[80%]  text-[#2190ff] ml-auto mr-auto h-[80%]'>
               Sorry!!! For inconvienience As We Are Under Development Come Back Later SEE YU SOON
            </h1>
        </div>
      </main>
    </>
  )
}
