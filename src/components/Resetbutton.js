import React from 'react'
import "./Resetbutton.css"
export const Resetbutton = ({resetBoard}) => {
  return (
    <button className='reset' onClick={resetBoard}>RESET</button>
  )
}
