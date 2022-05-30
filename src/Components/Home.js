import React from 'react'
import '../Styles/Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='intro-box'>
                <div className='head-name'>Rachel Green</div>
                <div className='head-desc'>
                    Born and brought up in San Francisco, California, I am an aquarian
                    who just turned 13 years old. Just so you know, I am the crazy
                    acquarian everyone warned you about. On one side, I love exploring
                    different things. On the other side, I do have a serious goal of
                    becoming an entreprenuer.
                </div>
                <div className='head-comment'>
                    Fun and super cool with a contagious disease called AWESOME -
                    That’s who I am.
                </div>
                <button className='btn'>LET'S TALK!</button>
            </div>
            <div className='profile-img'>
                <div className='img-bg'></div>
                <img src="/assets/profile-pic.png" alt="" />
            </div>
        </div>
    )
}

export default Home