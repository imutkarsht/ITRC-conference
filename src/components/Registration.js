import React from 'react'
import AuthorsFee from './AuthorsFee'

const Registration = () => {
  return (
    <div  className='bg-black flex flex-col items-center justify-center' id="registration">
        <h2 className='text-3xl font-semibold uppercase text-white pt-4 pb-8 underline underline-offset-8 decoration-orange-200'>Registration</h2>
        <AuthorsFee />
        <button className='text-md bg-orange-200 p-2 rounded-md text-black font-bold hover:bg-orange-400 transition-all duration-300 ease-in-out'>Register Now!</button>
    </div>
  )
}

export default Registration