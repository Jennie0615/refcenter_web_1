import './contactForm.css';
import './contactPage.css';
import React from 'react';
import { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import Logo from '../resources/images/logo.png';

const RequestPage = (props) => {
    const [selectNav, setSelectNav] = useState('');

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_248mlig', 'template_khdp9re', form.current, "IMJBvnQ1kzElGutXU")
        document.getElementById('user_name_input').value = ""
        document.getElementById('user_email_input').value = ""
        document.getElementById('message_input').value = ""
        alert("Message Successful!")
    }

    const homeLink = (
        <a className='series-header-nav-link' href={`/${props.language}`}>{`Home > `}</a>
    );

    return (
        <div className='wrapper'>
            <div className='content'>
                <Header language={props.language} />
                <NavBar language={props.language} handleClick={handleClick} selected={selectNav} />

                <div className='page-header-nav'>
                    <div className='text'>
                        {homeLink} {{ 'EN': `Send Request`, 'ES': 'Enviar petición', 'RU': 'Отправить запрос' }[props.language]}
                    </div>
                </div>

                <div className='contact-wrapper'>
                    <form className='contact-wrapper-form' ref={form} onSubmit={sendEmail}>
                        <label className='contact-form-item label'>
                            {{ 'EN': `Your Name*`, 'ES': 'Su Nombre*', 'RU': 'Ваше имя*' }[props.language]}
                        </label>
                        <input id='user_name_input' className='contact-form-item field' type="text" name="user_name" />
                        <label className='contact-form-item label'>
                            {{ 'EN': 'Email Address*', 'ES': 'Correo Electrónico*', 'RU': 'Адрес электронной почты*' }[props.language]}
                        </label>
                        <input id='user_email_input' className='contact-form-item field' type="email" name="user_email" />
                        <div className='contact-form-item label'>
                            {{
                                'EN': 'Description about the item and quantity you want*',
                                'ES': 'Descripción sobre el artículo y la cantidad que desea*',
                                'RU': 'Описание товара и желаемое количество*'
                            }[props.language]}
                        </div>
                        <textarea id='message_input' className='contact-form-item message' name="message" />
                        <input className='contact-form-item button' style={props.language === 'ES' ? { 'font-size': '1rem' } : null} type="submit" value={{ 'EN': 'SUBMIT FORM', 'ES': 'ENVIAR FORMULARIO', 'RU': 'Отправить форму' }[props.language]} />
                    </form>
                </div>

                <Footer language={props.language} />

            </div>
        </div>
    )
}

export default RequestPage;