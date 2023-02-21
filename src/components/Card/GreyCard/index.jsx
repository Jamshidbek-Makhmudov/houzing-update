import React from 'react'
// import trusted from "./../../assets/icons/svg/trusted.svg"
import { Cause, Txt, Wrapper } from './style'


function GreyCard({img,name, txt }) {
  return (
    <>
    <Wrapper>
        <img src={img} alt=''/>
        <Cause>{name}</Cause>
        <Txt>{txt}</Txt>
    </Wrapper>
    </>
  )
}

export default GreyCard