import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='contact-main'>
            <section className='contact-font'>Contact <br />Me</section>
            <section className='contact-form'>
                <form action="">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Contact Number</label>
                    <input type="number" name="" id="" />
                    <label for="message" htmlFor="">Message</label>
                    <textarea name="message" id="message" cols="20" rows="5"></textarea>
                </form>

            </section>
        </div>
    )
}
