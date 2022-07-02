import React from 'react'
import './About.css'
import about from '../assets/about.svg'
import github from '../assets/brands/github.png'
import twitter from '../assets/brands/twitter.png'
import linkedin from '../assets/brands/linkedin.png'

export const About = () => {
    return (
        <div className='about-container'>
            <section className='about-info'>
                <h1 className='about-h1'>About Me</h1>
                <p className='about-p'>Hello, I am Swornim. Based in Nepal. I am constantly increasing my
                    internal library of knowledge of computer languages.
                    My primarily work with Frontend but have experience working with Backend as well. </p>
                <span className='about-span'>Connect with Me</span>

                <ul>
                    <li>
                        <a href="https://github.com/swornims" target='_blank' rel='noreferrer'>
                            <img className='social-img' src={github} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/swornim-shakya-bb765122a/" target='_blank' rel='noreferrer'>
                            <img className='social-img' src={linkedin} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/justjdx" target='_blank' rel='noreferrer'>
                            <img className='social-img' src={twitter} alt="" />
                        </a>
                    </li>
                </ul>

            </section>
            <img className='about-img' src={about} alt="about" />
        </div>
    )
}
