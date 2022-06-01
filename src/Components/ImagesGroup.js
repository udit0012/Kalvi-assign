import React from 'react'
import guitar from './images/guitar.png'
import friends from './images/friends.png'
import badminton from './images/badminton.png'
import painting from './images/painting.png'
import reading from './images/reading.png'

const ImagesGroup = () => {
    return (
        <div className='hustle-img'>
            <img className='guitar' src={guitar} alt="" />
            <img className='friends' src={friends} alt="" />
            <img className='badminton' src={badminton} alt="" />
            <img className='painting' src={painting} alt="" />
            <img className='reading' src={reading} alt="" />
        </div>
    )
}

export default ImagesGroup