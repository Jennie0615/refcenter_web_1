import './navBar.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants';

import SearchIcon from '../resources/icons/searchIcon.png';
import NavMenuProducts from './navMenuProducts';
import NavMenuSmall from './navMenuSmall';
import NavMenuSmallScreen from './navMenuSmallScreen';

const NavBar = (props) => {
    const showProducts = props.selected === 'Our Products';
    const showResources = props.selected === 'Resource Center';
    const showContact = props.selected === 'Contact';
    const showService = props.selected === 'Service';

    const [textScale, setTextScale] = useState(window.innerWidth > 670 ? 1 : window.innerWidth / 670);
    const [smallScreen, setSmallScreen] = useState(window.innerWidth >= 1000 ? false : true);
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuSmall, setShowMenuSmall] = useState(false);
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleWindowResize = () => {
            setTextScale(window.innerWidth > 670 ? 1 : window.innerWidth / 670);
            setWindowSize([window.innerWidth, window.innerHeight]);
            if (window.innerWidth >= 1000) {
                setSmallScreen(false);
            } else {
                setSmallScreen(true);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const menuClick = () => {
        setShowMenu(!showMenu);
    };

    const smallMenuClick = () => {
        setShowMenuSmall(!showMenuSmall);
    }

    return (
        <div className='navigation-bar' >
            <div className='drop-down-wide' style={{ 'display': smallScreen ? 'none' : 'inline-block' }}>
                <div className='navigation-button'>
                    <div
                        className='navigation-link'
                        onClick={() => props.handleClick('Our Products')}
                        style={{ 'color': (showProducts ? 'black' : 'grey') }}
                    >
                        {{
                            'EN': 'Our Products',
                            'ES': 'Nuestros Productos',
                            'RU': 'Наши продукты'
                        }[props.language]}
                    </div>

                    <div
                        className='nav-menu-bullet'
                        style={{ 'opacity': (showProducts ? 1 : 0) }}
                    />
                </div>

                <NavMenuProducts show={showProducts} language={props.language} />
            </div>
            <div className='drop-down' style={{ 'display': smallScreen ? 'none' : 'inline-block' }}>
                <div className='navigation-button'>
                    <div
                        className='navigation-link'
                        onClick={() => props.handleClick('Resource Center')}
                        style={{ 'color': (showResources ? 'black' : 'grey') }}
                    >
                        {{
                            'EN': 'Resource Center',
                            'ES': 'Centro de Recursos',
                            'RU': 'Центр ресурсов'
                        }[props.language]}
                    </div>
                    <div
                        className='nav-menu-bullet'
                        style={{ 'opacity': (showResources ? 1 : 0) }}
                    />

                </div>

                <NavMenuSmall show={showResources} language={props.language} />
            </div>

            <a className='navigation-button' href={`/contact us/${props.language}`} style={{ 'display': smallScreen ? 'none' : 'flex' }}>
                <div
                    className='navigation-link'
                    onClick={() => props.handleClick('Contact')}
                    style={{ 'color': (showContact ? 'black' : 'grey') }}
                >
                    {{
                        'EN': 'Contact',
                        'ES': 'Contacto',
                        'RU': 'Контакт'
                    }[props.language]}
                </div>
                <div
                    className='nav-menu-bullet'
                    style={{ 'opacity': (showContact ? 1 : 0) }}
                />
            </a>
            <a className='navigation-button' href={`/send request/${props.language}`} style={{ 'display': smallScreen ? 'none' : 'flex', 'margin-right' : '10rem' }}>
                <div
                    className='navigation-link'
                    onClick={() => props.handleClick('Send Request')}
                    style={{ 'color': (showService ? 'black' : 'grey') }}
                >
                    {{
                        'EN': 'Send Request',
                        'ES': 'Enviar Petición',
                        'RU': 'Отправить Запрос'
                    }[props.language]}

                </div>
                <div
                    className='nav-menu-bullet'
                    style={{ 'opacity': (showService ? 1 : 0) }}
                />
            </a>

            { /*
            <div className='' style={{ 'display': smallScreen ? 'none' : 'block', 'margin-right': '10rem', 'margin-left': '5rem' }} >
                <img className='image icon' style={{ 'width': '1.75rem' }} src={SearchIcon} />
            </div> */
            }

            <div className='drop-down'>
                <div className='navigation-button' style={{ 'display': smallScreen ? 'flex' : 'none' }}>
                    <div
                        className='navigation-link'
                        onClick={smallMenuClick}
                        style={{
                            'color': (showMenuSmall ? 'black' : 'grey'),
                            'font-size': `${textScale * fontSizes['navigation link'] > 1 ? textScale * fontSizes['navigation link'] : 1}rem`,
                        }}
                    >
                        {{
                            'EN': 'Menu',
                            'ES': 'Menú',
                            'RU': 'Меню'
                        }[props.language]}

                    </div>
                    <div
                        className='nav-menu-bullet'
                        style={{ 'opacity': (showMenuSmall ? 1 : 0) }}
                    />

                </div>
            </div>

            <NavMenuSmallScreen show={showMenuSmall && smallScreen} language={props.language} />

            <div className='' style={{ 'display': smallScreen ? 'none' : 'none', 'margin-right': '2rem', 'margin-left': '1rem', 'margin-bottom': '1rem' }} >
                <img className='image icon' style={{ 'width': `${textScale * 1.75 > 1.5 ? textScale * 1.75 : 1.5}rem` }} src={SearchIcon} />
            </div>

        </div>
    );
}

export default NavBar;