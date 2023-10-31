import React from 'react';
import './home.css';

import { useState, useEffect } from 'react';
import { fontSizes } from '../constants.js';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import NavMenuProducts from '../components/navMenuProducts';
import NavMenuResources from '../components/navMenuResources';

import EventItem from '../components/eventItem';

import Logo from '../resources/images/logo.png';
import SubtitleBar from '../resources/images/subtitleBar.png';
import ButtonIcon from '../resources/icons/buttonIcon.png';

import landingBackground from '../resources/images/landingbackground.png';
import landingImage1 from '../resources/images/landingimage1.png';
import landingImage2 from '../resources/images/landingimage2.png';

import popularImage1 from '../resources/images/popularimage1.png';
import popularImage2 from '../resources/images/popularimage2.png';
import popularImage3 from '../resources/images/popularimage3.png';

import tranquilBackground from '../resources/landing background/tranquil/tranquil background.jpg';
import tranquilTitle from '../resources/landing background/tranquil/tranquil title.png';
import tranquilText from '../resources/landing background/tranquil/tranquil text.png';
import tranquilImage from '../resources/landing background/tranquil/tranquil image.png';

import tankBackground from '../resources/landing background/tank/tank background.jpg';
import tankTitle from '../resources/landing background/tank/tank title.png';
import tankText from '../resources/landing background/tank/tank text.png';
import tankImage from '../resources/landing background/tank/tank image.png';

import switchBackground from '../resources/landing background/switch/switch background.jpg';
import switchTitle from '../resources/landing background/switch/switch title.png';
import switchText from '../resources/landing background/switch/switch text.png';
import switchImage from '../resources/landing background/switch/switch image.png';

import muteBackground from '../resources/landing background/mute/mute background.jpg';
import muteTitle from '../resources/landing background/mute/mute title.png';
import muteText from '../resources/landing background/mute/mute text.png';
import muteImage from '../resources/landing background/mute/mute image.png';

import chinaforeBackground from '../resources/landing background/chinafore/chinafore background.jpg';

import muteTextSmall from '../resources/landing background small/mute text.png';
import muteTitleSmall from '../resources/landing background small/mute title.png';
import muteImageSmall from '../resources/landing background small/mute image.png';

import switchTextSmall from '../resources/landing background small/switch text.png';
import switchTitleSmall from '../resources/landing background small/switch title.png';
import switchImageSmall from '../resources/landing background small/switch image.png';

import tankTextSmall from '../resources/landing background small/tank text.png';
import tankTitleSmall from '../resources/landing background small/tank title.png';
import tankImageSmall from '../resources/landing background small/tank image.png';

import tranquilTextSmall from '../resources/landing background small/tranquil text.png';
import tranquilTitleSmall from '../resources/landing background small/tranquil title.png';
import tranquilImageSmall from '../resources/landing background small/tranquil image.png';

const Home = (props) => {
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const video1 = 'https://www.youtube.com/embed/VrPDxCtsKbY';
    const video2 = 'https://www.youtube.com/embed/xOSlkINDJx8';
    const video3 = 'https://www.youtube.com/embed/K2069EhVX00';

    const [selectNav, setSelectNav] = useState('');

    const [textScale, setTextScale] = useState(window.innerWidth > (props.language === 'RU' ? 730 : 670) ? 1 : window.innerWidth / (props.language === 'RU' ? 730 : 670));
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
            setTextScale(window.innerWidth > (props.language === 'RU' ? 730 : 670) ? 1 : (window.innerWidth / (props.language === 'RU' ? 730 : 670)))
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const landingBackgroundDeprecated = (
        <div className='landing-wrapper'>
            <div className='landingBackground'>
                <img className='image cover' src={landingBackground} style={{ 'width': '100vw', 'height': '40rem' }} />
            </div>
            <div className='landingContent'>
                <div className='landingMessage'>
                    <div
                        className='text landing'
                        style={{
                            'font-size': `${textScale * fontSizes['landing']}rem`,
                            'line-height': `${textScale * 2.5}rem`
                        }}
                    >
                        {{ 'EN': 'EFFICIENT.', 'ES': 'EFICIENTE.', 'RU': 'ЭФФЕКТИВНО.' }[props.language]}
                    </div>
                    <div
                        className='text landing center'
                        style={{
                            'font-size': `${textScale * fontSizes['landing']}rem`,
                            'line-height': `${textScale * 2.5}rem`
                        }}
                    >
                        {{ 'EN': 'ESSENTIAL.', 'ES': 'ESENCIAL.', 'RU': 'СУЩЕСТВЕННО.' }[props.language]}
                    </div>
                    <div
                        className='text landing right'
                        style={{
                            'font-size': `${textScale * fontSizes['landing']}rem`,
                            'line-height': `${textScale * 2.5}rem`
                        }}
                    >
                        {{ 'EN': 'RELIABLE.', 'ES': 'CONFIABLE.', 'RU': 'НАДЕЖНО.' }[props.language]}
                    </div>

                    <div className='text large box landing-message' style={{ 'font-size': `${textScale * fontSizes['landing message']}rem` }}>
                        {{
                            'EN': '“ Streamline your system with our reliable condensate pump, ensuring uninterrupted productivity. ”',
                            'ES': '“ Optimice su sistema con nuestra bomba de condensado confiable, asegurando una productividad ininterrumpida. ”',
                            'RU': '“ Оптимизируйте свою систему с нашей надежной конденсатной помпой, обеспечивая бесперебойную продуктивность. ”'
                        }[props.language]}
                    </div>
                </div>

                <div className='landingImageWrapper'>
                    <div className='landingImage'>
                        <img className='image cover' src={landingImage2} />
                    </div>
                </div>
            </div>

        </div>
    )

    const [landingIndex, setLandingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLandingIndex(landingIndex < 4 ? landingIndex + 1 : 0)
            console.log(landingIndex)
        }, 3000)

        return () => clearInterval(interval)
    }, [landingIndex])

    return (
        <div className='wrapper'>
            <div className='content'>

                <Header language={props.language} />
                <NavBar language={props.language} handleClick={handleClick} selected={selectNav} />

                <div style={{ 'display': windowWidth > 1000 ? null : 'none' }}>
                    <div className='landing-scroll' style={landingIndex === 0 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={chinaforeBackground} />
                        </div>
                    </div>

                    <div className='landing-scroll' style={landingIndex === 1 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={tranquilBackground} />
                        </div>
                        <img className='scroll-item' style={{ 'top': '0rem', 'right': '0rem', 'max-width': '160%' }} src={tranquilImage} />
                        <img className='scroll-title' style={{ 'top': '0rem', 'right': '0rem', 'max-width': '160%' }} src={tranquilTitle} />
                        <img className='scroll-item' style={{ 'top': '0rem', 'left': '0rem', 'max-width': '160%' }} src={tranquilText} />
                    </div>

                    <div className='landing-scroll' style={landingIndex === 2 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={tankBackground} />
                        </div>
                        <img className='scroll-item' style={{ 'top': '0rem', 'right': '0rem', 'max-width': '120%' }} src={tankImage} />
                        <img className='scroll-title' style={{ 'top': '0rem', 'right': '0rem', 'max-width': '160%' }} src={tankTitle} />
                        <img className='scroll-item' style={{ 'top': '0rem', 'left': '0rem', 'max-width': '160%' }} src={tankText} />
                    </div>

                    <div className='landing-scroll' style={landingIndex === 3 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={switchBackground} />
                        </div>
                        <img className='scroll-item' style={{ 'top': '0rem', 'right': '0rem', 'max-width': '160%' }} src={switchImage} />
                        <img className='scroll-title' style={{ 'top': '0rem', 'right': '0rem', 'max-width': '160%' }} src={switchTitle} />
                        <img className='scroll-item' style={{ 'top': '0rem', 'left': '0rem', 'max-width': '160%' }} src={switchText} />
                    </div>

                    <div className='landing-scroll' style={landingIndex === 4 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={muteBackground} />
                        </div>
                        <img className='scroll-item' style={{ 'top': '0rem', 'right': '0rem', 'max-width': '160%' }} src={muteImage} />
                        <img className='scroll-title' style={{ 'top': '0rem', 'left': '0rem', 'max-width': '160%' }} src={muteTitle} />
                        <img className='scroll-item' style={{ 'top': '0rem', 'left': '0rem', 'max-width': '160%' }} src={muteText} />
                    </div>
                </div>

                <div style={{ 'display': windowWidth <= 1000 ? null : 'none' }}>
                    <div className='landing-scroll' style={landingIndex === 0 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={chinaforeBackground} />
                        </div>
                    </div>

                    <div className='landing-scroll small' style={landingIndex === 1 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={tranquilBackground} />
                        </div>
                        <div className='scroll-item' style={{ 'max-width': '-webkit-fill-available', 'width': '80%', 'height': '100%', 'margin-left': '2rem', 'margin-right': '2rem', 'top': '0px', 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'center' }}>
                            <img className='scroll-title' style={{ 'max-width': '100%', 'position': 'static', 'height': `${4 * textScale}rem`, 'margin-bottom': '1rem' }} src={tranquilTitleSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${5 * textScale}rem` }} src={tranquilTextSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${24 * textScale}rem` }} src={tranquilImageSmall} />
                        </div>
                    </div>

                    <div className='landing-scroll small' style={landingIndex === 2 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={tankBackground} />
                        </div>
                        <div className='scroll-item' style={{ 'max-width': '-webkit-fill-available', 'width': '80%', 'height': '100%', 'margin-left': '2rem', 'margin-right': '2rem', 'top': '0px', 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'center' }}>
                            <img className='scroll-title' style={{ 'max-width': '100%', 'position': 'static', 'height': `${4 * textScale}rem`, 'margin-bottom': '1rem' }} src={tankTitleSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${5 * textScale}rem` }} src={tankTextSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${24 * textScale}rem` }} src={tankImageSmall} />
                        </div>
                    </div>

                    <div className='landing-scroll small' style={landingIndex === 3 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={switchBackground} />
                        </div>
                        <div className='scroll-item' style={{ 'max-width': '-webkit-fill-available', 'width': '80%', 'height': '100%', 'margin-left': '2rem', 'margin-right': '2rem', 'top': '0px', 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'center' }}>
                            <img className='scroll-title' style={{ 'max-width': '100%', 'position': 'static', 'height': `${4 * textScale}rem`, 'margin-bottom': '1rem' }} src={switchTitleSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${5 * textScale}rem` }} src={switchTextSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${24 * textScale}rem` }} src={switchImageSmall} />
                        </div>
                    </div>

                    <div className='landing-scroll small' style={landingIndex === 4 ? { 'visbility': 'visible', 'opacity': 1 } : { 'display': 'none', 'visibility': 'hidden', 'opacity': 0 }}>
                        <div className='scroll-background' style={{ 'height': '100%' }}>
                            <img className='scroll-background' src={muteBackground} />
                        </div>
                        <div className='scroll-item' style={{ 'max-width': '-webkit-fill-available', 'width': '80%', 'height': '100%', 'margin-left': '2rem', 'margin-right': '2rem', 'top': '0px', 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'center' }}>
                            <img className='scroll-title' style={{ 'max-width': '100%', 'position': 'static', 'height': `${4 * textScale}rem`, 'margin-bottom': '1rem' }} src={muteTitleSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${5 * textScale}rem` }} src={muteTextSmall} />
                            <img className='scroll-item' style={{ 'max-width': '100%', 'position': 'static', 'height': `${24 * textScale}rem` }} src={muteImageSmall} />
                        </div>
                    </div>
                </div>



                <div className='section-wrapper'>
                    <div className='section-header'>
                        <div className='text header' style={{ 'font-size': `${textScale * fontSizes['header']}rem` }}>
                            {{ 'EN': 'Popular Products', 'ES': 'Productos Populares', 'RU': 'Популярные продукты' }[props.language]}
                        </div>
                        <div className='text large box' style={{ 'font-size': `${textScale * 2}rem`, 'align-items': 'flex-end' }}>
                            {{ 'EN': 'from', 'ES': 'de', 'RU': 'из' }[props.language]} &nbsp;
                            <img className='image logo large' src={Logo} style={{ 'width': `${textScale * 11}rem` }} />
                        </div>
                    </div>

                    <div className='section-body landscape'>
                        <div className='section-body panel wide'>
                            <div className='section-image-wrapper'>
                                <a
                                    className='section-image landscape cursor hover-darken'
                                    href={`/products/condensate pumps/tranquil series/${props.language}`}
                                >
                                    <img className='image popular cover' src={popularImage2} />
                                    <div className='text larger box vertical padded justify-center' style={{ 'font-size': `${textScale * fontSizes['larger']}rem`, 'padding': `${3 * textScale}rem`, 'color': '#808080' }}>
                                        <div className='text box align-right header small' style={{ 'font-weight': 'normal', 'font-size': `${textScale * fontSizes['header small']}rem`, 'margin-bottom': `${textScale * 1.5}rem`, 'color': '#18A2A8' }}>
                                            {{ 'EN': 'Silent Efficiency', 'ES': 'Eficienso Silenciosia', 'RU': 'Бесшумная Эффективность' }[props.language]}
                                        </div>
                                        {{ 'EN': 'Unleash tranquility with our hushed condensate companion, ensuring peaceful surroundings without a trace of noise.', 'ES': 'Dé rienda suelta a la tranquilidad con nuestro silencioso compañero condensado, que garantiza un entorno tranquilo sin rastro de ruido.', 'RU': 'Разжите тишину с нашим безмолвным спутником конденсата, обеспечивая спокойное окружение без следа шума.' }[props.language]}
                                    </div>
                                </a>
                                <div className='green-square' style={{ 'right': `-1rem`, 'bottom': `0rem` }} />
                            </div>

                            <div className='section-image-wrapper'>
                                <a
                                    className='section-image landscape reverse cursor hover-darken'
                                    href={`/products/condensate switch/condensate switch/${props.language}`}
                                >
                                    <img className='image popular cover' src={popularImage1} />
                                    <div className='text larger box vertical padded justify-center' style={{ 'padding': `${3 * textScale}rem` }}>
                                        <div className='text large box justify-center vertical align-end' style={{ 'font-size': `${textScale * fontSizes['larger']}rem` }}>
                                            <div className='text header small' style={{ 'font-weight': 'normal', 'font-size': `${textScale * fontSizes['header small']}rem`, 'margin-bottom': `${textScale * 1.5}rem`, 'color': '#18A2A8' }}>
                                                {{ 'EN': 'Precise Detection', 'ES': 'Detección precisa', 'RU': 'Точное обнаружение' }[props.language]}
                                            </div>
                                            <div className='text large box align-right' style={{ 'font-size': `${textScale * fontSizes['larger']}rem`, 'color': '#808080' }}>
                                                {{ 'EN': 'float mechanisms to trigger an immediate  system shutdown when excessive water levels indicate potential overflow.', 'ES': 'mecanismos flotantes para activar un apagado inmediato del sistema cuando los niveles de agua excesivos indican un posible desbordamiento.', 'RU': 'поплавковые механизмы для немедленного отключения системы, когда избыточный уровень воды указывает на возможное переполнение.'}[props.language]}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className='green-square' style={{ 'left': `0rem`, 'bottom': `0rem` }} />
                            </div>

                        </div>
                        <div className='section-body panel narrow'>
                            <div className='section-image-wrapper' style={{ 'height': '-webkit-fill-available' }}>
                                <a
                                    className='section-image portrait cursor hover-darken'
                                    href={`/products/condensate pumps/tank series/${props.language}`}
                                >
                                    <img className='image popular vertical cover horizontal' src={popularImage3} />
                                    <div className='text larger box vertical padded justify-center' style={{ 'padding': `${3 * textScale}rem` }}>
                                        <div className='text header small' style={{ 'font-weight': 'normal', 'font-size': `${textScale * fontSizes['header small']}rem`, 'margin-bottom': `${textScale * 1.5}rem`, 'color': '#18A2A8' }}>
                                            {{ 'EN': 'High Capacity', 'ES': 'Alta Capacidad', 'RU': 'Высокая Производительность' }[props.language]}
                                        </div>
                                        <div className='text large box' style={{ 'font-size': `${textScale * fontSizes['larger']}rem`, 'color': '#808080' }}>
                                            {{ 'EN': 'Unleash the potential of efficient condensate removal with our industry-leading solution, designed for maximum capacity', 'ES': 'Libere el potencial de la eliminación eficiente de condensados ​​con nuestra solución líder en la industria, diseñada para una capacidad máxima', 'RU': 'Раскройте потенциал эффективного удаления конденсата с нашим передовым решением, разработанным для максимальной производительности.' }[props.language]}
                                        </div>
                                    </div>
                                </a>
                                <div className='green-square' style={{ 'right': `-1rem`, 'bottom': `0rem` }} />
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    style={{ 'display': 'flex', 'flex-direction': (windowWidth > 1100 ? 'row' : 'column'), 'flex-wrap': 'wrap', 'justify-content': 'space-evenly' }}
                >
                    <div className='section-wrapper'
                        style={{
                            'width': (windowWidth > 1100 ? '50%' : null),
                            'height': (windowWidth < 1100 ? 'min-content' : null),
                        }}
                    >
                        <div className='section-header'>
                            <div className='text header' style={{ 'font-size': `${textScale * fontSizes['header']}rem` }}>
                                {{ 'EN': 'Videos', 'ES': 'Vídeos', 'RU': 'Видео' }[props.language]}
                            </div>
                            <div style={{ 'display': 'flex', 'flex-direction': 'row', 'align-items': 'baseline' }} >
                                <img style={{ 'object-fit': 'unset', 'width': `${3 * textScale}rem`, 'margin': `${textScale}rem` }} src={SubtitleBar} />
                                <div className='text large box' style={{ 'flex-direction': 'column' }}>
                                    <div className='text large box' style={{ 'font-size': `${textScale * fontSizes['large']}rem`, 'display': 'flex' }}>
                                        {{ 'EN': 'See how products are being', 'ES': 'Vea cómo están siendo los productos', 'RU': 'Посмотрите, как производятся продукты' }[props.language]}&thinsp;
                                        <div style={{ 'font-size': `${textScale * 1.7}rem`, 'font-weight': '700' }}>
                                            {{ 'EN': 'Manufactured', 'ES': 'Fabricado', 'RU': 'Производство' }[props.language]}
                                        </div>
                                    </div>
                                    <div className='text large box' style={{ 'font-size': `${textScale * fontSizes['large']}rem` }}>
                                        {{ 'EN': 'in our', 'ES': 'en nuestra', 'RU': 'в нашей' }[props.language]}&thinsp;
                                        <div style={{ 'font-size': `${textScale * 1.7}rem`, 'font-weight': '700' }}>
                                            {{ 'EN': 'Factory', 'ES': 'Fábrica', 'RU': 'Фабрика' }[props.language]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='section-body fill-height'>
                            <div className='section-body grid inner'>
                                <iframe className='section-video' src={video1} />
                                <iframe className='section-video' src={video2} />
                                <iframe className='section-video' src={video3} />
                            </div>
                        </div>

                        <a className='landing-button' href={`/resources/videos/${props.language}`}>
                            <img style={{ 'object-fit': 'unset', 'width': `${2 * textScale}rem`, 'margin': `${0.2 * textScale}rem` }} src={ButtonIcon} />
                            <div style={{ 'margin': `${0.2 * textScale}rem`, 'font-size': `${1.25 * textScale}rem` }}>
                                {{
                                    'EN': 'Watch More Videos',
                                    'ES': 'Ver Más Videos',
                                    'RU': 'Смотреть больше видео'
                                }[props.language]}
                            </div>
                        </a>

                    </div>

                    <div className='section-wrapper' style={{ 'width': (windowWidth > 1100 ? '40%' : null) }}>
                        <div className='section-header'>
                            <div className='text header' style={{ 'font-size': `${textScale * fontSizes['header']}rem` }}>
                                {{
                                    'EN': 'News',
                                    'ES': 'Noticias',
                                    'RU': 'Новости'
                                }[props.language]}
                            </div>
                            <div style={{ 'display': 'flex', 'flex-direction': 'row', 'align-items': 'baseline' }} >
                                <img style={{ 'object-fit': 'unset', 'width': `${3 * textScale}rem`, 'margin': `${textScale}rem` }} src={SubtitleBar} />
                                <div className='text larger box'
                                    style={{ "color": "#B6CCC5", 'font-size': `${textScale * fontSizes['larger']}rem` }}
                                >
                                    {{
                                        'EN': 'Upcoming Trade Shows',
                                        'ES': 'Próximas Ferias Comerciales',
                                        'RU': 'Ближайшие выставки'
                                    }[props.language]}
                                </div>
                            </div>

                            <div className='section-wrapper events fill-width'>
                                <div
                                    className='event-item'
                                    style={{
                                        'font-size': `${textScale * fontSizes['event item']}rem`,
                                        'padding': `${textScale * 3}rem`
                                    }}>
                                    <div className='event-name'>2023 C&R -- Madrid</div>
                                    <div className='event-date'>Nov 14th - 17th</div>
                                </div>
                                <div
                                    className='event-item'
                                    style={{
                                        'font-size': `${textScale * fontSizes['event item']}rem`,
                                        'padding': `${textScale * 3}rem`
                                    }}
                                >
                                    <div className='event-name'>2024 AHR Expo -- Chicago</div>
                                    <div className='event-date'>{{
                                        'EN': 'Jan',
                                        'ES': 'Enero',
                                        'RU': 'Янв'
                                    }[props.language]} 22nd - 24th</div>
                                </div>
                            </div>
                        </div>

                        <div className='section-header'>
                            <div style={{ 'display': 'flex', 'flex-direction': 'row', 'align-items': 'baseline' }} >
                                <img style={{ 'object-fit': 'unset', 'width': `${3 * textScale}rem`, 'margin': `${textScale}rem` }} src={SubtitleBar} />
                                <div className='text larger box'
                                    style={{
                                        "color": "#B6CCC5",
                                        'font-size': `${textScale * fontSizes['larger']}rem`
                                    }}
                                >
                                    {{
                                        'EN': 'Attended Trade Shows',
                                        'ES': 'Ferias Comerciales Asistidas',
                                        'RU': 'Посещенные выставки'
                                    }[props.language]}
                                </div>
                            </div>
                        </div>

                        <div className='series-section events fill-height'>
                            <EventItem event={'frankfurt2023'} />
                        </div>

                        <a className='landing-button' href={`/news/${props.language}`}>
                            <img style={{ 'object-fit': 'unset', 'width': `${2 * textScale}rem`, 'margin': `${0.2 * textScale}rem` }} src={ButtonIcon} />
                            <div style={{ 'margin': `${0.2 * textScale}rem`, 'font-size': `${1.25 * textScale}rem` }}>
                                {{
                                    'EN': 'View More',
                                    'ES': 'Ver Más',
                                    'RU': 'Посмотреть больше'
                                }[props.language]}
                            </div>
                        </a>

                    </div>
                </div>

                <Footer language={props.language} />

            </div>
        </div>
    );
}

export default Home;