// Contact.jsx
import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Add processing state
    document.querySelectorAll('.button').forEach((btn) => {
      btn.classList.add('processing');
    });

    emailjs
      .sendForm(
        'service_4m2ujdl',     // Your Service ID
        'template_8lkj6fa',    // Your Template ID
        form.current,
        '9xK2bH4gVx6zn7EmK'   // Your Public Key
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          alert('Message sent successfully! I’ll get back to you soon.');
          e.target.reset();
          setTimeout(() => {
            document.querySelectorAll('.button').forEach((btn) => {
              btn.classList.remove('processing');
            });
          }, 1000);
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('Oops! Something went wrong. Please try again or contact me directly.');
          document.querySelectorAll('.button').forEach((btn) => {
            btn.classList.remove('processing');
          });
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>adanoy369@gmail.com</h5>
            <a href="mailto:adanoy369@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Let's Discuss</h5>
            <a href="https://wa.me/8801671522343" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Let's Chat</h5>
            <a href="https://m.me/anoy.dey" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="button">
            <span>Send Message</span>
            <svg viewBox="0 0 15 13">
              <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;