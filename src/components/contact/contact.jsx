import React from 'react'
import { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

 

  const sendEmail = (e) => {
    e.preventDefault();
    
    document.querySelectorAll('.button').forEach((button) => {
      button.classList.add('processing');
    });

    emailjs
      .sendForm('service_4m2ujdl', 'template_8lkj6fa', form.current, '9xK2bH4gVx6zn7EmK')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>adanoy369@gmail.com</h5>
            <a href="mailto:adanoy369@gmail.com" target="_blank">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>Let's Discuss</h5>
            <a href="https://wa.me/8801671522343" target="_blank">Send a message</a>
          </article>
          
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Let's Discuss</h5>
            <a href="https://m.me/anoy.dey" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="button">
            <span>Send Message</span>
            <svg viewBox='0 0 15 13'>
              <polyline points='2 6.5 6 10.5 13 2.5'></polyline>
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact