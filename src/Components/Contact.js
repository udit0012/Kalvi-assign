import React from 'react'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import youtube from './images/youtube.png'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact'>
        <div className='contact-head'>Contact</div>
        <a href='#' className='contact-email'>rachel.green@gmail.com</a>
        <div className='contact-icons'>
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
      <div className='copyright'><div className='text'>All rights deserved.</div></div>
    </div>
  )
}

export default Contact