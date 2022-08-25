import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/rosa-moran-a2b9a1151" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://twitter.com/RosaMor28853822" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        <a href="https://github.com/RosaMoran?tab=repositories" target="_blank "><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials