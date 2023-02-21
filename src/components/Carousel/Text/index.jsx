import React from 'react'
import "./style.css"

function Text({theme, txt}) {
  return (
    <>
    <div className='Wrapper'>
        <h3 >{theme}</h3>
        <p >{txt}</p>
    </div>
    </>
  )
}

export default Text