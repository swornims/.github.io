import React from 'react'
import './Projects.css'
import Capture from '../assets/skills/Capture.PNG'

export const Projects = () => {
    return (
        <div className='projects-main-container'>
            <h1 className='projects-main-h1'>Projects and Work</h1>
            <div className='projects-container'>
                <img className='projects-img' src={Capture} alt="" />
                <section className='projects-info'>
                    <h1 className='projects-h1'>Gautam Gift Emporium</h1>
                    <hr className='projects-hr' />
                    <p className='projects-p'>I am actively collaborating on this project.
                        This website is being developed using MERN Stack.</p>
                    <span className='projects-span'>(This project is still in active development and a finished version will be uploaded soon.)</span>
                </section>
            </div>
            <span className='more-span'>More to Come ...</span>

        </div>
    )
}
