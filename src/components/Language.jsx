import React from 'react'
import './Language.css'
import css3 from '../assets/skills/css3.png'
import html5 from '../assets/skills/html5.png'
import js from '../assets/skills/js.png'
import git from '../assets/skills/git.png'
import figma from '../assets/skills/figma.png'
import nodejs from '../assets/skills/nodejs.png'
import reactjs from '../assets/skills/reactjs.png'
import mongodb from '../assets/skills/mongodb.png'


export const Language = () => {
    return (
        <div className='skills-container'>
            <hr className='skills-hr' />
            <h1 className='skills-h1'>My Skills</h1>
            <section className='images'>
                <img src={html5} alt="html5" />
                <img src={css3} alt="css" />
                <img src={js} alt="css" />
                <img src={git} alt="css" />
                <img src={figma} alt="css" />
                <img src={nodejs} alt="css" />
                <img src={reactjs} alt="css" />
                <img src={mongodb} className="mongodb" alt="css" />
            </section>
        </div>
    )
}
