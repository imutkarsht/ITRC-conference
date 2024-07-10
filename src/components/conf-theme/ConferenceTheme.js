import React from 'react'
import ConfThemeInfo from '../conf-theme/ConfThemeInfo'
import HeadText from '../UI/HeadText'

const ConferenceTheme = () => {
  return (
    <div  className='dark:bg-slate-900 bg-slate-100 flex flex-col items-center justify-center' id="themes">
        <HeadText title="Themes" />
        <ConfThemeInfo />
    </div>
  )
}

export default ConferenceTheme