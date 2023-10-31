import './footer.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants';

import Logo from '../resources/images/logo.png';
import SecondaryLogo from '../resources/images/LogoSecondary.png';

import MailIcon from '../resources/icons/mailIcon.png';

import Twitter from '../resources/icons/twitter.png';
import Facebook from '../resources/icons/facebook.png';
import Youtube from '../resources/icons/youtube.png';
import LinkedIn from '../resources/icons/linkedIn.png';

import privacyPolicy from '../resources/files/Privacy-policy-v2-7780923.pdf';

const Footer = (props) => {

    const [smallFooter, setSmallFooter] = useState(window.innerWidth < 850);
    const [textScale, setTextScale] = useState(window.innerWidth > 670 ? 1 : window.innerWidth / 670);
    useEffect(() => {
        const handleWindowResize = () => {
            setSmallFooter(window.innerWidth < 850)
            setTextScale(window.innerWidth > 670 ? 1 : window.innerWidth / 670)
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className='wrapper'>
            <div className='footer' style={smallFooter ? { 'display': 'none' } : null}>
                <div className='footer-column'>
                    <div className='navigation-button small'>
                        <div className='navigation-link white' style={{ 'font-size': `${textScale * 1.2}rem`, 'font-weight': '500' }}>
                            {{
                                'EN': 'Condensate Management',
                                'ES': 'Gestión de Condensados',
                                'RU': 'Управление конденсатом'
                            }[props.language]}
                        </div>
                    </div>

                    <a className='navigation-button small' href={`/products/condensate pumps/tank series/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'Condensate Pumps',
                                'ES': 'Bomba de Extracción de Condensados',
                                'RU': 'Конденсатные насосы'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/products/condensate switch/condensate switch/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'Condensate Switch',
                                'ES': 'Interruptor de Condensado',
                                'RU': 'Конденсатный выключатель'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/products/installation accessories/tubing/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'Installation Accessories',
                                'ES': 'Accesorios de Instalación',
                                'RU': 'Принадлежности для установки'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/products/support for condensation unit/vibration isolator/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'Support System',
                                'ES': 'Sistema de Soporte',
                                'RU': 'Система поддержки'
                            }[props.language]}
                        </div>
                    </a>

                </div>
                <div className='footer-column'>
                    <div className='navigation-button small'>
                        <div className='navigation-link white' style={{ 'font-size': `${textScale * 1.2}rem`, 'font-weight': '500' }}>
                            {{
                                'EN': 'Information',
                                'ES': 'Información',
                                'RU': 'Информация'
                            }[props.language]}
                        </div>
                    </div>

                    <a className='navigation-button small' href={`/about us/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'About us',
                                'ES': 'Sobre nosotros',
                                'RU': 'О нас'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/contact us/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'Contact us',
                                'ES': 'Contacto',
                                'RU': 'Свяжитесь с нами'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/resources/technical sheets/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'Technical Sheet',
                                'ES': 'Fichas Técnicas',
                                'RU': 'Технический лист'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/resources/certificates/${props.language}`}>
                        <div className='navigation-link small white' style={{ 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                            {{
                                'EN': 'Certificates',
                                'ES': 'Certificados',
                                'RU': 'Сертификаты'
                            }[props.language]}
                        </div>
                    </a>
                </div>

                <div className='footer-column wide'>
                    <div className='navigation-button flex-row' style={{ 'margin-bottom': '1rem' }}>
                        <img className='image icon larger' src={MailIcon} style={{ 'margin-right': '0.7rem' }} />
                        <div className='navigation-link header white'>
                            chinafore@chinafore.com
                        </div>
                    </div>

                    <div className='footer-icons'>
                        <div className='text box' style={{ 'font-size': `${textScale * 1.2}rem`, 'margin-right': '1rem' }}>
                            {{
                                'EN': 'Follow Refcenter:',
                                'ES': 'Seguir Nosotros:',
                                'RU': 'Следите за Refcenter:'
                            }[props.language]}
                        </div>
                        <a href='https://twitter.com/chinafore_' target='_blank'><img className='image icon' src={Twitter} /></a>
                        <a href='https://www.linkedin.com/company/chinafore/' target='_blank'><img className='image icon' src={LinkedIn} /></a>
                        <a href='https://m.facebook.com/people/Chinafore/100094508755947/' target='_blank'><img className='image icon' src={Facebook} /></a>
                        <a href='https://www.youtube.com/@Refcenter_' target='_blank'><img className='image icon' src={Youtube} /></a>
                    </div>

                </div>
            </div>

            <div className='footer-bar' style={smallFooter ? { 'display': 'none' } : null}>
                <div className='logoBackground' style={{ 'height': '2rem' }}>
                    <img style={{ 'object-fit': 'scale-down', 'width': '-webkit-fill-available' }}
                        src={Logo}
                    />
                    <div style={{ 'width': '0px', 'height': 'auto', 'border': '0.5px solid #B3BEC3', 'margin-left': '0.5rem' }} />
                    <img style={{ 'object-fit': 'scale-down', 'width': '-webkit-fill-available' }}
                        src={SecondaryLogo}
                    />
                </div>

                <div className='navigation-button wide' style={{'width': 'max-content', 'margin-top': '0rem'}}>
                    <a className='navigation-link small' href={privacyPolicy} target='_blank' style={{ 'width': 'max-content', 'color': 'black', 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                        {{
                            'EN': 'Privacy Policy',
                            'ES': 'Política de Privacidad',
                            'RU': 'Политика конфиденциальности'
                        }[props.language]}
                    </a>
                </div>

                <div style={{'width': '-webkit-fill-available', 'text-align': 'right', 'margin-right': '2rem', 'font-size': `${textScale * fontSizes['navigation link small']}rem` }}>
                    © 2023 Chinafore Co. Ltd. All rights reserved.
                </div>

            </div>

            <div className='footer-section-wrapper' style={smallFooter ? null : { 'display': 'none' }}>
                <div className='footer-section'>
                    <div className='footer-header'>
                        {{
                            'EN': 'Condensate Management',
                            'ES': 'Gestión de Condensados',
                            'RU': 'Управление конденсатом'
                        }[props.language]}
                    </div>

                    <a className='navigation-button small' href={`/products/condensate pumps/tank series/${props.language}`}>
                        <div className='navigation-link small white'>
                            {{
                                'EN': 'Condensate Pumps',
                                'ES': 'Bomba de Extracción de Condensados',
                                'RU': 'Конденсатные насосы'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/products/condensate switch/condensate switch/${props.language}`}>
                        <div className='navigation-link small white' >
                            {{
                                'EN': 'Condensate Switch',
                                'ES': 'Interruptor de Condensado',
                                'RU': 'Конденсатный выключатель'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/products/installation accessories/tubing/${props.language}`}>
                        <div className='navigation-link small white'>
                            {{
                                'EN': 'Installation Accessories',
                                'ES': 'Accesorios de Instalación',
                                'RU': 'Принадлежности для установки'
                            }[props.language]}
                        </div>
                    </a>

                    <a className='navigation-button small' href={`/products/support for condensation unit/vibration isolator/${props.language}`}>
                        <div className='navigation-link small white' >
                            {{
                                'EN': 'Support System',
                                'ES': 'Sistema de Soporte',
                                'RU': 'Система поддержки'
                            }[props.language]}
                        </div>
                    </a>
                </div>

                <div className='footer-section'>
                    <div className='footer-header'>
                        {{
                            'EN': 'Information',
                            'ES': 'Información',
                            'RU': 'Информация'
                        }[props.language]}
                    </div>
                    <a className='footer-link' href='/about us'>
                        {{
                            'EN': 'About us',
                            'ES': 'Sobre nosotros',
                            'RU': 'О нас'
                        }[props.language]}
                    </a>
                    <a className='footer-link' href='/contact us'>
                        {{
                            'EN': 'Contact us',
                            'ES': 'Contacto',
                            'RU': 'Контакты'
                        }[props.language]}
                    </a>
                    <a className='footer-link' href='/resources/technical sheets'>
                        {{
                            'EN': 'Technical Sheet',
                            'ES': 'Fichas Técnicas',
                            'RU': 'Технические характеристики'
                        }[props.language]}
                    </a>
                    <a className='footer-link' href='/resources/certificates'>
                        {{
                            'EN': 'Certificates',
                            'ES': 'Certificados',
                            'RU': 'Сертификаты'
                        }[props.language]}
                    </a>

                    <div className='navigation-button flex-row' style={{ 'margin-bottom': '1rem' }}>
                        <img className='image icon larger' src={MailIcon} style={{ 'margin-right': '0.7rem' }} />
                        <div className='navigation-link header white'>
                            chinafore@chinafore.com
                        </div>
                    </div>
                    <div className='footer-icons'>
                        <div className='text box' style={{ 'color': 'white', 'font-size': `1.2rem`, 'margin-right': '1rem' }}>
                            {{
                                'EN': 'Follow Refcenter:',
                                'ES': 'Seguir Nosotros:',
                                'RU': 'Следите за Refcenter:'
                            }[props.language]}
                        </div>
                        <a href='https://twitter.com/chinafore_' target='_blank'><img className='image icon' src={Twitter} /></a>
                        <a href='https://www.linkedin.com/company/chinafore/' target='_blank'><img className='image icon' src={LinkedIn} /></a>
                        <a href='https://m.facebook.com/people/Chinafore/100094508755947/' target='_blank'><img className='image icon' src={Facebook} /></a>
                        <a href='https://www.youtube.com/@Refcenter_' target='_blank'><img className='image icon' src={Youtube} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;