import React from 'react'
import '../App.css';

const Navbar = () => {
    return (
        <div className='navbar'>
                <ul className='nav-links'>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>Education</li>
                    <li className='nav-link'>Achievements</li>
                    <li className='nav-link'>Hobbies</li>
                    <li className='nav-link'>Contact</li>
                </ul>
        </div>
    )
}

export default Navbar