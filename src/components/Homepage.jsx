import React from 'react'
import './Homepage.css'
import Typewriter from "typewriter-effect";

export const Homepage = () => {
    return (

        <div className="main-section">
            <p className='intro-p'>Hi, I am Swornim</p>
            <section className='typewriter-text'>
                <p className='span-p'>I am a...</p>
                {/* <Typewriter
                        onInit={(typewriter) => {

                            typewriter

                                .typeString("UI/UX Developer")

                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("MERN Developer")
                                .start();
                        }}
                    /> */}
                <Typewriter
                    options={{
                        strings: ['UI/UX Developer', 'MERN Developer', 'Computer Enthusiast'],
                        delay: 120,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </section>

        </div>
    )
}
