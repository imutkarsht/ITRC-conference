import React from 'react'
import ConferenceInfo from './ConferenceInfo'

const CallForPaper = () => {
  return (
    <div  className='bg-black flex flex-col items-center justify-center' id="call-for-paper">
        <h2 className='text-3xl font-semibold uppercase text-white pt-10 pb-4 underline underline-offset-8 decoration-orange-200'>Call For Paper</h2>
        <ConferenceInfo />
    </div>
  )
}

export default CallForPaper