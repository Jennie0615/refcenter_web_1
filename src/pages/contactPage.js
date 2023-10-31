import './contactForm.css';
import './contactPage.css';
import React from 'react';
import { useState, useRef, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import Logo from '../resources/images/logo.png';
import WeChatQR from '../resources/images/QR code.jpg'

const ContactForm = (props) => {
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
    }

    const [textScale, setTextScale] = useState(window.innerWidth > 525 ? 1 : window.innerWidth / 525);
    useEffect(() => {
        const handleWindowResize = () => {
            setTextScale(window.innerWidth > 525 ? 1 : window.innerWidth / 525)
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

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
                        {homeLink} {{ 'EN': 'Contact us', 'ES': 'Contacta', 'RU': 'Связаться с нами' }[props.language]}
                    </div>
                </div>


                <div className='page-header-nav' style={{ 'margin-left': `${textScale * 2}rem` }}>
                    <img className='image logo small' src={Logo} style={{ 'max-width': '30vw' }} />
                </div>

                <div className='map-wrapper'>
                    <div className='map-location-wrapper margin-auto'>
                        <iframe className='map-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.848898695485!2d120.1582948754011!3d30.184310011930584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344c827fc4e7ea9d%3A0x9004476f99ca93ad!2sHuarong%20Times%20Mansion%2C%20%E8%99%8E%E8%B7%91%20Bin%20Jiang%20Qu%2C%20Hang%20Zhou%20Shi%2C%20Zhe%20Jiang%20Sheng%2C%20China%2C%20310053!5e0!3m2!1sen!2sus!4v1688274920620!5m2!1sen!2sus" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='map-location-text-wrapper'>
                            <div className='map-location-text' style={{ 'color': '#18A2A8' }}>{{ 'EN': `Refcenter main office:`, 'ES': `Oficina Principal:` }[props.language]}</div>
                            <div className='map-location-text'>22nd floor, Huarong Times Mansion, No.3880 Jiangnan Ave., Hangzhou, China</div>
                        </div>
                    </div>

                    <div className='map-location-wrapper margin-auto'>
                        <iframe className='map-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13787.7111721025!2d120.37177051759127!3d30.239135554690993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344c90c49a5f3793%3A0x741c0f91d3396a03!2sHong%20Can%20Lu%2C%20Xiao%20Shan%20Qu%2C%20Hang%20Zhou%20Shi%2C%20Zhe%20Jiang%20Sheng%2C%20China%2C%20311232!5e0!3m2!1sen!2sus!4v1688275141401!5m2!1sen!2sus" style={{ 'border': '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='map-location-text-wrapper'>
                            <div className='map-location-text' style={{ 'color': '#18A2A8' }}>{{ 'EN': `Refcenter factory & warehouse:`, 'ES': `Fábrica y Almacén` }[props.language]}</div>
                            <div className='map-location-text'>No. 499 Hongcan Rd., Hongken Xiaoshan Disctrict, Hangzhou, China</div>
                        </div>
                    </div>
                </div>

                <div className='map-wrapper margin-bottom' style={{ 'padding': '1rem' }}>
                    <div className='map-location-text-wrapper margin-auto'>
                        <div className='map-location-text'><div style={{ 'color': '#18A2A8' }}>Tel:&nbsp;</div>+86 0571-81603529</div>
                        <div className='map-location-text'><div style={{ 'color': '#18A2A8' }}>Email:&nbsp;</div>chinafore@chinafore.com</div>
                        <div className='map-location-text'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;refcenter@refcenter.com</div>
                        <div className='map-location-text'><div style={{ 'color': '#18A2A8' }}>Wechat ID:&nbsp;</div>ChinaforeCorporation</div>
                    </div>

                    <div className='map-location-text-wrapper margin-auto'>
                    </div>
                </div>

                <div className='map-wrapper margin-bottom' style={{ 'padding': '1rem' }}>
                    <div className='map-location-text-wrapper margin-auto'>
                        <img className='qr-code' src={WeChatQR} />
                    </div>

                    <div className='map-location-text-wrapper margin-auto'>
                    </div>
                </div>
                <Footer language={props.language} />

            </div>
        </div>
    )
}

export default ContactForm;