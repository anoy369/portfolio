import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiBriefcase, BiMessageSquareDetail, BiEnvelope} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>< AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>< AiOutlineUser /></a>
      {/* <a href="#portfolio" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>< AiOutlineFundProjectionScreen /></a> */}
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>< BiBriefcase /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiEnvelope /></a> 
    </nav>
  )
}

export default Nav