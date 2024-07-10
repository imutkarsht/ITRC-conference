import React from 'react'
import MembersList from './MembersList'

const Comittee = () => {
  return (
    <div id='committee' className='bg-black flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-semibold uppercase text-white pt-4 pb-12 underline underline-offset-8 decoration-orange-200'>Committees</h2>
        <MembersList />
    </div>
  )
}

export default Comittee