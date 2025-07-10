import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oqtw4ku', 'template_vndvdjp', form.current, {
        publicKey: 'O356Xbp9SBvbpKfGh',
      })
      e.target.reset()
  };

  return (
    <section className="contact" id="contact">
            <div className="contact__container contact grid">

                <div className="contact__content">
                    <h3 className="contact__title">Comment</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Your name"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Yourname@gmail.com"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Comment</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Message"></textarea>
                        </div>
                        
                        <button className="button button--flex">
                            Send Message
                        <i class="bi bi-send-fill"></i>
                        </button>
                    </form>
                </div>

            </div>
    </section>
  )
}

export default Contact;