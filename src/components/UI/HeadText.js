import React from 'react'

const HeadText = (props) => {
  return (
    <h2 className='text-3xl font-semibold uppercase text-black dark:text-white pt-4 pb-6 underline underline-offset-8 decoration-orange-200'>{props.title}</h2>
  )
}

export default HeadText