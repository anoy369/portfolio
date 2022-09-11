import React from 'react'
import {BsLinkedin,BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/anoy-dey/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/anoy369" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/anoy369/" target="_blank"><AiFillInstagram /></a>
        {/* <a href="https://www.facebook.com/anoy.dey/" target="_blank"><BsFacebook /></a> */}
    </div>
  )
}

export default HeaderSocials