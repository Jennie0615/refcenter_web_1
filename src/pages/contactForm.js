import './contactForm.css';
import React from 'react';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

const ContactForm = (props) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_248mlig', 'template_khdp9re', form.current, "IMJBvnQ1kzElGutXU")
        props.handleClose();
    }

    return (
        <Modal className='contact-wrapper' isOpen={props.show}>
            <div className='contact-form-close' onClick={() => { props.handleClose() }}>
                {{ 'EN': 'Close', 'ES': 'Cerrar', 'RU': 'Закрыть' }[props.language]}
            </div>
            <form className='contact-wrapper-form' ref={form} onSubmit={sendEmail}>
                <label className='contact-form-item label'>
                    {{ 'EN': 'Your Name*', 'ES': 'Tu Nombre*', 'RU': 'Ваше Имя*' }[props.language]}
                </label>
                <input className='contact-form-item field' type="text" name="user_name" />
                <label className='contact-form-item label'>
                    {{ 'EN': 'Email Address*', 'ES': 'Dirección de correo electrónico*', 'RU': 'Адрес электронной почты*' }[props.language]}
                </label>
                <input className='contact-form-item field' type="email" name="user_email" />
                <div className='contact-form-item label'>
                    {{ 'EN': 'Description about the item and quantity you want*', 'ES': 'Descripción sobre el artículo y la cantidad que desea*', 'RU': 'Описание товара и количество, которое вы хотите*' }[props.language]}
                </div>
                <textarea className='contact-form-item message' name="message" />
                <input className='contact-form-item button' type="submit" value="{{ 'EN': 'SUBMIT FORM', 'ES': 'ENVIAR FORMULARIO', 'RU': 'ОТПРАВИТЬ ФОРМУ' }[props.language]}" />
            </form>

        </Modal>
    )
}

export default ContactForm;