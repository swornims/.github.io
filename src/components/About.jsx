import React from 'react'
import './About.css'
import about from '../assets/about.svg'

export const About = () => {
    return (
        <div className='about-container'>
            <section className='about-info'>
                <h1 className='about-h1'>About Me</h1>
                <p className='about-p'>Hello, I am Swornim. Based in Nepal. I am constantly increasing my
                    internal library of knowledge of computer languages.
                    My primarily work with Frontend but have experience working with Backend as well. </p>
                <span className='about-span'>Connect with Me</span>
            </section>
            <img src={about} alt="about" />
        </div>
    )
}
