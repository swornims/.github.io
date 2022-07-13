import React, { useEffect } from 'react'
import './About.css'
import about from '../assets/about.svg'
import github from '../assets/brands/github.png'
import twitter from '../assets/brands/twitter.png'
import linkedin from '../assets/brands/linkedin.png'
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <div className='about-container'>
            <section className='about-info'>
                <h1 className='about-h1'>About Me</h1>
                <hr data-aos="slide-right" className='about-hr' />
                <p className='about-p'>Hello, I am Swornim. Based in Nepal. I have studied computer languages for a very long time now.
                    I primarily work with Frontend and UI/UX Design but have also gained experience working with Backend by doing some local projects of my own. </p>
                <span className='about-span'>Connect with Me</span>
                <ul>
                    <li>
                        <a href="https://github.com/swornims" target='_blank' rel='noreferrer'>
                            <img className='social-img' src={github} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/swarnim-ratna-shakya/" target='_blank' rel='noreferrer'>
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
