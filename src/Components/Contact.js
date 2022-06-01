import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact'>
        <div className='contact-head'>Contact</div>
        <a href='#' className='contact-email'>rachel.green@gmail.com</a>
        <div className='contact-icons'>
          <img src="/assets/instagram.png" alt="" />
          <img src="/assets/youtube.png" alt="" />
          <img src="/assets/facebook.png" alt="" />
        </div>
      </div>
      <div className='copyright'><div className='text'>All rights deserved.</div></div>
    </div>
  )
}

export default Contact