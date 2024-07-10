import React from 'react'

const Button = (props) => {
  return (
    <button className='text-md mt-3 px-4 bg-orange-200 p-2 rounded-md text-black font-bold hover:bg-orange-400 transition-all duration-300 ease-in-out'>{props.title}</button>
  )
}

export default Button