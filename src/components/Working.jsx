import React from 'react'
import { TbIcons } from 'react-icons/tb'
import './Working.css'

export const Working = () => {
    return (
        <div className='working-div'>
            <TbIcons className='working-icon' />
            <span className='working-span'>This site is still under construction.</span>
        </div>
    )
}
