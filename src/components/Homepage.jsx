import React from 'react'
import './Homepage.css'
import Typewriter from "typewriter-effect";
import down from '../assets/down.svg'

export const Homepage = () => {
    return (

        <div className="main-section">
            <span className='intro-p'>Hi, I am Swornim</span>
            <section className='typewriter-text'>
                <p className='span-p'>I am a...</p>
                <Typewriter
                    options={{
                        strings: ['UI/UX Developer', 'MERN Developer', 'Computer Enthusiast'],
                        delay: 120,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </section>
            <img className='down-arrow' src={down} alt="" />
        </div>
    )
}
