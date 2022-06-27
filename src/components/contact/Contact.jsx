import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RiPhoneFill, } from 'react-icons/ri'
import { FaAddressCard } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import './Contact.css'
import Navbar from '../navbar/Navbar';

const Result = () => {
    return (
        <p>Your message has been sent.</p>
    )
}

const Contact = () => {

    const form = useRef();

    const [result, setResult] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_w6wj5mq', 'template_gqyw1he', form.current, 'user_0F0916xp78DwYZBNw0Mle')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true);
    };



    return (
        <>
            <div className="gradient__bg">
                <Navbar/>
            </div>
            <div className="contact">
                <div className="contact_info">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                                <div className="contact_info_item d-flex justify-content-start align-items-center">
                                    <div className="icon"><RiPhoneFill /></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">
                                            Phone
                                        </div>
                                        <div className="contact_info_text">
                                            1234567890
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_item d-flex justify-content-start align-items-center">
                                    <div className="icon"><AiOutlineMail /></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">
                                            Email
                                        </div>
                                        <div className="contact_info_text">
                                            1234567890
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_item d-flex justify-content-start align-items-center">
                                    <div className="icon"><FaAddressCard /></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">
                                            Address
                                        </div>
                                        <div className="contact_info_text">
                                            1234567890
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="contact_form_container py-5">
                                    <div className="contact_form_title">
                                        Get In Touch
                                    </div>
                                    <form ref={form} className="contact_form" onSubmit={sendEmail} >
                                        <div className='contact_form_name d-flex justify-content-between align-items-between' >
                                            <input type="text" name='full_name' id="contact_form" className='contact_form_nam input-field' placeholder='Name' required='true' />

                                            <input type="email" name='email' id="contact_form_email" className='contact_form_email input-field' placeholder='email' required='true' />

                                            <input type="number" name='phone' id="contact_form_phone" className='contact_form_phone input-field' placeholder='Number' required='true' />
                                        </div>

                                        <div className="contact_form_text mt-5">
                                            <textarea className="text-field msg" name='message' placeholder='Message'  rows="8"></textarea>
                                        </div>

                                        <div className="contact_form_button">
                                            <button type='submit' className='button contact_submit_button' >Send Message</button>
                                        </div>
                                        {result ? <Result /> : ""}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
