import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_39du5ho', 'template_zwysm7l', form.current, 'siLiUNtZr69qYkDaZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    
      e.target.reset()
    };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Us</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Business Inquiries</h4>
                    <h5>beforeyouIDV@gmail.com</h5>
                    <a href="mailto:beforeyouIDV@gmail.com" target="_blank">Send an email</a>
                </article>
                <article className='contact__option'>
                    <BsDiscord className='contact__option-icon'/>
                    <h4>Discord</h4>
                    <h5>Schmiddy's Server</h5>
                    <a href="https://discord.gg/2ZgnuCGzwb" target="_blank">Join our server</a>
                </article>
                <article className='contact__option'>
                    <BsYoutube className='contact__option-icon'/>
                    <h4>YouTube</h4>
                    <h5>Schmiddy's Channel</h5>
                    <a href="https://www.youtube.com/c/Schmiddy" target="_blank">Leave a comment</a>
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label className='contact__option-tag'>Name</label>
                    <input type="text" name='name' placeholder="Your Name" required />
                </div>
                <div>
                    <label className='contact__option-tag'>Email</label>
                    <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div>
                    <label className='contact__option-tag'>Message</label>
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                </div>
                <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
        </div>    
    </section>
  )
}

export default Contact