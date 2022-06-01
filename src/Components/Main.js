import React from 'react'
import '../Styles/Main.css'
import Achivements from './Achivements'
import CardsBox from './CardsBox'
import ImagesGroup from './ImagesGroup'
import Background from './images/bg.png'

const Main = () => {
    return (
        <div className='main-container'>
            <div className='main-box'>
                <img className='bg-img' src={Background} alt="" />
                <div className='box-name'>My Main Hustle</div>
                <div className='main-detail'>
                    <div className='main-date'> Aug 2019 - Jun 2020</div>
                    <div className='school-name'>Sunbeam Sr. Secondary School</div>
                    <div className='mainhustle-desc'>I’ve bagged a lot of prizes both in Academics & Extracurriculars. These
                        are some of the achievements I’m most proud of.</div>
                    <div className='main-date'>Aug 2019 - Jun 2020</div>
                    <div className='school-name'>Sunbeam Sr. Secondary School</div>
                    <div className='mainhustle-desc'>I’ve bagged a lot of prizes both in Academics & Extracurriculars. These
                        are some of the achievements I’m most proud of.</div>
                </div>
            </div>
            <div className='work-container'>
                <div className='work-heading'>My Work</div>
                <div className='work-desc'>“I love coding & ever since I took up ProGrad Junior, I’ve built some cool projects. I’ve also picked up HTML, CSS & JavaScript”</div>
                <div className='cards-container'>
                    <CardsBox />
                </div>
            </div>
            <div className='achiv-container'>
                <Achivements />
                <div className='box-name achiv-name'>
                    I'm Proud Of
                </div>
            </div>

            <div className='main-box hustle-container'>
                <div className='hustle-head'>
                    <div className='box-name hustle-heading'>
                        My Side Hustle
                    </div>
                    <div className='hustle-desc'>When I’m free, you’ll find me doing one of these. Honestly, I hate to laze around!
                    </div>
                </div>

                <div className='hustle-images'>
                    <ImagesGroup />
                </div>

            </div>
        </div >
    )
}

export default Main