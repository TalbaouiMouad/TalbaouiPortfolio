import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact =()=>{
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lqsh6dd', 'template_ma4zarv', form.current, 'UGWkVuC3w8z24wYtF');
        e.target.reset();
      };
    return(
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
               <article className="contact_option">
                <MdOutlineEmail className="contact_option-icon"/>
                <h4>Email</h4>
                <h5>talbaouimouad@gmail.com</h5>
                <a href="mailto :talbaouimouad@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className="contact_option">
                <MdOutlineEmail className="contact_option-icon"/>
                <h4>Messenger</h4>
                <h5>Talbaoui Mouad</h5>
                <a href="https://m.me/talbaoui.mouad" rel="noreferrer" target="_blank">Send a message</a>
                </article>
                <article className="contact_option">
                <MdOutlineEmail className="contact_option-icon"/>
                <h4>WhatsApp</h4>
                <h5>+212687049050</h5>
                <a href="https://api.whatsapp.com/send?phone=+212687049050" rel="noreferrer" target="_blank">Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            </div>
        </section>
    )
}
export default Contact;