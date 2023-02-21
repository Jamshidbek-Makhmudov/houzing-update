import React from 'react'
import { Buttons } from '../../Generic'
import house from "./../../../assets/img/house1.png"
import "./style.css"

function ReadMore() {
  return (
    <>
    <div className='moreWrapper'>
        <img className='moreimg' src={house} alt="" />
        <div className='moreContent'>
            <div className='moreTxt'>Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</div>
            <Buttons txt={"Read more"} background={"#0061DF"} color={"white"} border={"none"}/>
        </div>
    </div>
    </>
  )
}

export default ReadMore