import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='contact-main'>
            <section className='contact-font'>Get in Contact with Me</section>
            <section className='contact-form'>
                <form action="">
                    <label for="name" htmlFor="">Full Name</label>
                    <input type="text" name="name" id="name" placeholder='Your Full Name' required />
                    <label for="email" htmlFor="">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your email' required />
                    <label for="number" htmlFor="">Contact Number</label>
                    <input type="number" name="number" id="number" placeholder='Your Contact Number' required />
                    <label for="message" htmlFor="">Message</label>
                    <textarea name="message" id="message" cols="20" rows="5" placeholder='Your Message for Me' required></textarea>
                    <button className='submit-btn'>Submit</button>
                </form>

            </section>
        </div>
    )
}
