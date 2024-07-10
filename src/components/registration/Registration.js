import React from 'react'
import AuthorsFee from './AuthorsFee'

const Registration = () => {
  return (
    <div  className='bg-slate-900 flex flex-col items-center justify-center' id="registration">
        <h2 className='text-3xl font-semibold uppercase text-white pt-4 pb-8 underline underline-offset-8 decoration-orange-200'>Registration</h2>
        <AuthorsFee />
        
    </div>
  )
}

export default Registration