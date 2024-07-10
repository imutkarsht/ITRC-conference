import React from 'react'
import AuthorsFee from './AuthorsFee'
import HeadText from '../UI/HeadText'

const Registration = () => {
  return (
    <div  className='dark:bg-slate-900 bg-slate-100 flex flex-col items-center justify-center' id="registration">
        <HeadText title="Registration" />
        <AuthorsFee />
        
    </div>
  )
}

export default Registration