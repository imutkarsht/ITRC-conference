import React from 'react'
import ConfThemeInfo from '../conf-theme/ConfThemeInfo'

const ConferenceTheme = () => {
  return (
    <div  className='bg-slate-900 flex flex-col items-center justify-center' id="themes">
        <h2 className='text-3xl font-semibold uppercase text-white pt-4 pb-2 underline underline-offset-8 decoration-orange-200'>Conference Themes</h2>
        <ConfThemeInfo />
    </div>
  )
}

export default ConferenceTheme