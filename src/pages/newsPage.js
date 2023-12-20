import './newsPage.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants.js';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import EventItem from '../components/eventItem';

const NewsPage = (props) => {
    const [selectNav, setSelectNav] = useState('');

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

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

    const pastEvents = ['frankfurt2023', 'ahr2023', 'ahr2022', 'chill2020', 'frankfurt2019', 'febrava2019', 'moscow2019'];
    const pastEventsList = pastEvents.map(event => (<EventItem event={event} />));

    const homeLink = (
        <a className='series-header-nav-link' href={`/${props.language}`}>{`${{'EN' : 'Home', 'ES' : 'Página de inicio', 'RU' : 'Главная страница'}[props.language]} > `}</a>
    );

    return (
        <div className='wrapper'>
            <div className='content'>
                <Header language={props.language} />
                <NavBar language={props.language} handleClick={handleClick} selected={selectNav} />

                <div className='page-header-nav'>
                    <div className='text'>
                        {homeLink} {{
                            'EN': `News`,
                            'ES': `Noticias`,
                            'RU': `Новости`
                        }[props.language]}
                    </div>
                </div>

                <div
                    className='text larger box'
                    style={{
                        "color": "#18A2A8",
                        'padding': `${textScale * 1}rem ${textScale * 4}rem ${textScale * 1}rem ${textScale * 4}rem`,
                        'font-size': `${textScale * fontSizes['larger'] > 1 ? textScale * fontSizes['larger'] : 1}rem`
                    }}
                >
                    {{
                        'EN': 'Upcoming Trade Shows',
                        'ES': 'Próximas Ferias Comerciales',
                        'RU': 'Ближайшие выставки'
                    }[props.language]}
                </div>

                <div className='section-wrapper events fill-width'>
                    <div
                        className='event-item'
                        style={{
                            'font-size': `${textScale * fontSizes['event item']}rem`,
                            'padding': `${textScale * 3}rem`
                        }}
                    >
                        <div className='event-name'>2024 MCE -- Milano</div>
                        <div className='event-date'>
                            {{
                                'EN': 'Mar 12th - 15th',
                                'ES': '12 al 15 de Mar',
                                'RU': '12-15 ноября'
                            }[props.language]}
                        </div>
                    </div>
                    <div
                        className='event-item'
                        style={{
                            'font-size': `${textScale * fontSizes['event item']}rem`,
                            'padding': `${textScale * 3}rem`
                        }}
                    >
                        <div className='event-name'>2024 AHR Expo -- Chicago</div>
                        <div className='event-date'>
                            {{
                                'EN': 'January 22nd - 24th',
                                'ES': '22 al 24 de Enero',
                                'RU': '22-24 января'
                            }[props.language]}
                        </div>
                    </div>
                </div>

                <div className='text larger box'
                    style={{
                        "color": "#18A2A8",
                        'padding': `${textScale * 1}rem ${textScale * 4}rem ${textScale * 1}rem ${textScale * 4}rem`,
                        'font-size': `${textScale * fontSizes['larger'] > 1 ? textScale * fontSizes['larger'] : 1}rem`
                    }}
                >
                    {{
                        'EN': 'Attended Trade Shows',
                        'ES': 'Ferias comerciales asistidas',
                        'RU': 'Посещенные выставки'
                    }[props.language]}
                </div>

                <div className='series-section events'>
                    {pastEventsList}
                </div>

                <Footer language={props.language} />

            </div>
        </div>
    );
}

export default NewsPage;