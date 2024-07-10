import React from 'react'
import MembersList from './MembersList'
import HeadText from '../UI/HeadText'

const Comittee = () => {
  return (
    <div id='committee' className='bg-slate-900 flex flex-col items-center justify-center'>
        <HeadText title="Committee" />
        <MembersList />
    </div>
  )
}

export default Comittee