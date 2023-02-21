'use client'
import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
      <h1
        className='text-8xl my-5'>
        Tatum SDK
      </h1>
      <div className='flex gap-5 max-w-5xl sm:grid-cols-3 justify-center'>
        <Well link='notifications' title='Notifications' description='Subscribe to notifications for an address!' />
        <Well link='nfts' title='NFTs' description='Mint NFTs in seconds!' inactive={true} />
        <Well link='fees' title='Fees' description='Estimate fees!' inactive={true} />
      </div>
    </div>
  )
}

const Well = ({
                link,
                title,
                description,
                inactive,
              }: { link: string, title: string, description: string, inactive?: boolean }) => {
  if (inactive) {
    return <div
      className='flex justify-center w-4/12 bg-gradient-to-r card dark:from-blue-800 dark:text-white dark:to-purple-800 p-5 rounded-xl bg-slate-200 transform transition'>
      <div>
        <div className='font-bold mb-2 mt-4 text-lg'>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  }
  return <div
    className='flex justify-center w-4/12 bg-gradient-to-r card dark:from-blue-800 dark:text-white dark:to-purple-800 from-blue-200 hover:scale-105 p-5 rounded-xl to-purple-200 transform transition'>
    <Link href={link}>
      <div className='font-bold mb-2 mt-4 text-lg'>{title}</div>
      <div>{description}</div>
    </Link>
  </div>
}


export default Home