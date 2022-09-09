import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBlock, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}>< AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}>< AiOutlineUser /></a>
      <a href="#exxperience" onClick={()=>setActiveNav('#exxperience')} className={activeNav == '#exxperience' ? 'active' : ''}>< BiBlock /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav == '#services' ? 'active' : ''}>< RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}>< BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav