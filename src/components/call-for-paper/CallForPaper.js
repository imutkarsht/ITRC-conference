import React from 'react'
import ConferenceInfo from './ConferenceInfo'
import HeadText from '../UI/HeadText'

const CallForPaper = () => {
  return (
    <div  className='bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center' id="call-for-paper">
       <HeadText title="Call for Paper" />
        <ConferenceInfo />
    </div>
  )
}

export default CallForPaper