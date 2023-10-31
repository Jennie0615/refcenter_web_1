import './header.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants';

import Logo from '../resources/images/logo.png';
import SecondaryLogo from '../resources/images/LogoSecondary.png';

import USIcon from '../resources/icons/usIcon.png';
import ESIcon from '../resources/icons/esIcon.png';
import RUIcon from '../resources/icons/ruIcon.png';
import Twitter from '../resources/icons/twitter.png';
import Facebook from '../resources/icons/facebook.png';
import Youtube from '../resources/icons/youtube.png';
import LinkedIn from '../resources/icons/linkedIn.png';
import MailIcon from '../resources/icons/mailIconGrey.png';

import { Link } from 'react-router-dom';

const Header = (props) => {

    const [textScale, setTextScale] = useState(window.innerWidth > 670 ? 1 : window.innerWidth / 670);
    const [smallHeader, setsmallHeader] = useState(window.innerWidth >= 1000 ? false : true);
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

    const [languageMenu, setLanguageMenu] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
            setTextScale(window.innerWidth > 670 ? 1 : window.innerWidth / 670)
            if (window.innerWidth >= 1000) {
                setsmallHeader(false);
            } else {
                setsmallHeader(true);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleLanguageSelect = () => {
        setLanguageMenu(!languageMenu);
    };

    const languageIcon = {
        "EN": USIcon,
        "ES": ESIcon,
        "RU": RUIcon,
    }

    return (
        <div className='headerBar'>
            <a className='logoBackground fixed' href={`/${props.language}`} >
                <div
                    className='image logo large logoBackground white fixed'
                    style={{
                        'top': '0.5rem',
                        'max-width': '10vw',
                        'min-width': '5rem',
                        'height': 'auto'
                    }}
                >
                    <img style={{'object-fit': 'scale-down', 'width': '-webkit-fill-available'}}
                        src={Logo}
                    />
                    <div style={{'width': '0px', 'height': 'auto', 'border': '0.5px solid #B3BEC3', 'margin-left': '0.5rem'}} />
                    <img style={{'object-fit': 'scale-down', 'width': '-webkit-fill-available'}}
                        src={SecondaryLogo}
                    />
                </div>
            </a>

            <div className='languageMenu' style={{ 'display': smallHeader ? 'none' : 'inline-block', 'margin-left': '0.8rem', 'margin-right': '0.8rem' }}>
                <div className='language-option-wrapper' onClick={() => setLanguageMenu(!languageMenu)}>
                    <img className='image icon' src={languageIcon[props.language]} style={{ 'margin-right': '0.5rem' }} />
                    <div className='languageOption' style={{ 'color': '#B3BEC3' }}>
                        {props.language}
                    </div>
                </div>

                <div
                    className='drop-down-content'
                    style={{
                        'display': languageMenu ? 'block' : 'none',
                        'background-color': '#F2F1F1',
                        'top': '2rem',
                        'right': '4rem',
                        'width': 'max-content',
                        'height': 'fit-content',
                        'padding': '1rem'
                    }}
                >
                    <a
                        className='language-option-wrapper'
                        style={props.language === 'EN' ? { 'display': 'none' } : null}
                        onClick={() => handleLanguageSelect()}
                        href='EN'
                    >
                        <img className='image icon' src={USIcon} style={{ 'margin-right': '0.5rem' }} />
                        <div className='languageOption black'>
                            EN
                        </div>
                    </a>

                    <a
                        className='language-option-wrapper'
                        style={{ 'margin-top': props.language === 'EN' ? '0rem' : '1rem', 'display': props.language === 'ES' ? 'none' : 'flex' }}
                        onClick={() => handleLanguageSelect()}
                        href='ES'
                    >
                        <img className='image icon' src={ESIcon} style={{ 'margin-right': '0.5rem' }} />
                        <div className='languageOption black'>
                            ES
                        </div>
                    </a>

                    <a
                        className='language-option-wrapper'
                        style={{ 'margin-top': '1rem', 'display': props.language === 'RU' ? 'none' : 'flex' }}
                        onClick={() => handleLanguageSelect()}
                        href='RU'
                    >
                        <img className='image icon' src={RUIcon} style={{ 'margin-right': '0.5rem' }} />
                        <div className='languageOption black'>
                            RU
                        </div>
                    </a>
                </div>
            </div>

            <div className='navigation-button flex-row' style={{ 'display': smallHeader ? 'none' : 'flex', 'margin-left': '0.8rem', 'margin-right': '0.8rem' }}>
                <img className='image icon' src={MailIcon} style={{ 'margin-right': '0.7rem' }} />
                <div className='navigation-link header' style={{ 'color': '#B3BEC3' }}>
                    chinafore@chinafore.com
                </div>
            </div>

            <div className='navigation-button' style={{ 'display': smallHeader ? 'none' : 'flex', 'margin-left': '0.8rem', 'margin-right': '0.8rem' }}>
                <a className='navigation-link header' style={{ 'color': '#B3BEC3' }} href={`/news/${props.language}`} >
                    {{
                        'EN': 'News',
                        'ES': 'Noticias',
                        'RU': 'Новости'
                    }[props.language]}
                </a>
            </div>

            <div className='navigation-button' style={{ 'display': smallHeader ? 'none' : 'flex', 'margin-left': '0.8rem', 'margin-right': '0.8rem' }}>
                <a className='navigation-link header' style={{ 'color': '#B3BEC3' }} href={`/about us/${props.language}`} >
                    {{
                        'EN': 'About us',
                        'ES': 'Sobre nosotros',
                        'RU': 'О нас'
                    }[props.language]}
                </a>
            </div>


            <a className='' style={{ 'display': smallHeader ? 'none' : 'flex' }} href='https://twitter.com/chinafore_' target='_blank'><img className='nav-icon' src={Twitter} /></a>
            <a className='' style={{ 'display': smallHeader ? 'none' : 'flex' }} href='https://www.linkedin.com/company/chinafore/' target='_blank'><img className='nav-icon' src={LinkedIn} /></a>
            <a className='' style={{ 'display': smallHeader ? 'none' : 'flex' }} href='https://m.facebook.com/people/Chinafore/100094508755947/' target='_blank'><img className='nav-icon' src={Facebook} /></a>
            <a className='' style={{ 'display': smallHeader ? 'none' : 'flex' }} href='https://www.youtube.com/@Refcenter_' target='_blank'><img className='nav-icon' src={Youtube} /></a>

        </div>
    );
}

export default Header;