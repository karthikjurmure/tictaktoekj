import React from 'react'
import "./Scorecard.css"
export const Scorecard = ({scores,xplaying}) => {
  const {xscore,oscore}=scores;
  return (
    <div className='scorecard'>
      <span className={`score x-score ${!xplaying && "inactive"}`}>X-{xscore}</span>
      <span className={`score o-score ${xplaying && "inactive"}`}>O-{oscore}</span>
    </div>
  )
}
