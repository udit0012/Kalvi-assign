import React from 'react'
import '../Styles/Main.css'

const Main = () => {
    return (
        <div className='main-container'>
            <img className='bg-img' src="/assets/bg.png" alt="" />
            <div className='main-box'>
                <div className='box-name'>My Main Hustle</div>
                <div className='main-detail'>
                    <div className='main-date'> Aug 2019 - Jun 2020</div>
                    <div className='school-name'>Sunbeam Sr. Secondary School</div>
                    <div>I’ve bagged a lot of prizes both in Academics & Extracurriculars. These
                    are some of the achievements I’m most proud of.</div>
                    <div className='main-date'>Aug 2019 - Jun 2020</div>
                    <div  className='school-name'>Sunbeam Sr. Secondary School</div>
                    <div>I’ve bagged a lot of prizes both in Academics & Extracurriculars. These
                    are some of the achievements I’m most proud of.</div>
                </div>
            </div>
        </div>
    )
}

export default Main