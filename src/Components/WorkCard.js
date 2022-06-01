import React from 'react'

const WorkCard = ({ image, title, body }) => {
  return (
    <div className='card'>
      <div className='card-box'>
        <div className='card-style'></div>
        <img class="card-img-top" src={image} alt="" />
        <div class="card-body">
          <div class="card-title">{title}</div>
          <div class="card-text">{body}</div>
          <button className='btn card-btn'>See Project</button>
        </div>
      </div>
    </div>
  )
}

export default WorkCard