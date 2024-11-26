import React from 'react'

import { AiFillInstagram, AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Find Me @ The Web</h2>
      <div className="social">
        <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://www.instagram.com/olobaisaac/" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/Ayoola-Oloba" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="https://x.com/OlobaIsaac?t=3VV_pmUqjzS3mZ9jYo1DZg&s=09" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://linkedin.com/in/oloba-isaac-ayoola-036895319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Socials