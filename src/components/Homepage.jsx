import React from 'react'
import './Homepage.css'
import Typewriter from "typewriter-effect";
import { AiOutlineArrowDown } from 'react-icons/ai'

export const Homepage = () => {
    return (
        <div className="main-section">
            <div className='main-flex-section' >
                <span className='intro-p'>Hi, I am Swornim</span>
                <section className='typewriter-text'>
                    <p className='span-p'>I am...</p>
                    <Typewriter
                        options={{
                            strings: ['an UI/UX Developer', 'a MERN Developer', 'a Computer Enthusiast'],
                            delay: 120,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </section>
            </div>
            <AiOutlineArrowDown className='down-arrow' />
        </div>
    )
}
