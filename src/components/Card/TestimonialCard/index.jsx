import React from 'react'
import "./style.css"

function TestimonialCard({opinion, avatar, name, profession}) {
  return (
    <>
        <div className='testWrapper'>
            <div className='testopinion'>{opinion || "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"}</div>
            <div className='infoWr'>
                <div className='avatarWr'>
                <img className='avatarImg' src={avatar} alt=''/>
                </div>
                <div className='nametest'>{name || "Anonym"}</div>
                <div className="nameprof">{profession || "Anonym"}</div>
            </div>
        </div>
    </>
  )
}

export default TestimonialCard