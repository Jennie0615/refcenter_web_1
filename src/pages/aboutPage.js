import './aboutPage.css';
import React from 'react';
import { fontSizes } from '../constants';

import { useState, useRef, useEffect } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import aboutImage from '../resources/images/aboutImage.png';

const AboutUs = (props) => {
    const paragraph1 = {
        'EN': `In 1992, three engineers developed a range of reliable peristaltic pumps to satisfy the demands of the air conditioning industry, as the existing condensate removal methods did not meet the needs of installers.`,
        'ES': 'En 1992, tres ingenieros desarrollaron una gama de bombas peristálticas fiables para satisfacer las demandas de la industria del aire acondicionado, ya que los métodos de eliminación de condensados ​​existentes no satisfacían las necesidades de los instaladores.',
        'RU': 'В 1992 году трое инженеров разработали надежный ряд перистальтических насосов, чтобы удовлетворить потребности индустрии кондиционирования воздуха, так как существующие методы удаления конденсата не соответствовали потребностям установщиков.'
    }[props.language];

    const paragraph2 = {
        'EN': `As a brand under Chinafore (www.chinafore.com), From these humble beginnings Refcenter Pumps have been designed, renovated, and manufactured to make Chinese condensate pumps sold in the world since 2003, and for now Refcenter boasts an impressive range of Box series, Mute series, Tank series and the newly launched Tranquil Series.`,
        'ES': 'A partir de estos humildes comienzos, las bombas Refcenter han sido diseñadas, renovadas y fabricadas para hacer que las bombas de condensado chinas se vendan en el mundo desde 2003 y, por ahora, Refcenter cuenta con una impresionante gama de series Box, Mute, Tank y la recientemente lanzada Serie Tranquil.',
        'RU': 'С этих скромных начал насосы Refcenter были разработаны, реконструированы и производятся для продажи китайских конденсатных насосов в мире с 2003 года, и на данный момент Refcenter может похвастаться впечатляющим ассортиментом серии Box, Mute, Tank и недавно запущенной Tranquil Series.'
    }[props.language];

    const paragraph3 = {
        'EN': `Using only the best quality materials and being manufactured to the highest standard, the Refcenter range of products offer installation engineers flexibility and reliability for any support needs. Installers can benefit from products with innovative designs and time-saving features, allowing a non-hassle, reliable, and efficient installation, making it the HVAC/R Installers’ Choice.`,
        'ES': 'Utilizando solo materiales de la mejor calidad y fabricados con los más altos estándares, la gama de productos Refcenter ofrece a los ingenieros de instalación flexibilidad y confiabilidad para cualquier necesidad de soporte. Los instaladores pueden beneficiarse de productos con diseños innovadores y características que ahorran tiempo, lo que permite una instalación eficiente, confiable y sin complicaciones, lo que lo convierte en la elección de los instaladores de HVAC/R.',
        'RU': 'Используя только материалы самого высокого качества и изготовленные по самым высоким стандартам, ассортимент продукции Refcenter предлагает инженерам по установке гибкость и надежность для любых потребностей в поддержке. Монтажники могут получить выгоду от продуктов с инновационными дизайнами и функциями, экономящими время, что позволяет установку без хлопот, надежную и эффективную, делая его выбором монтажников HVAC/R.'
    }[props.language];


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

    const homeLink = (
        <a className='series-header-nav-link' href={`/${props.language}`}>{`${{'EN' : 'Home', 'ES' : 'Página de inicio', 'RU' : 'Главная страница'}[props.language]} > `}</a>
    );

    return (
        <div className='wrapper'>
            <div className='content'>
                <Header language={props.language} setLan={props.setLan} />
                <NavBar language={props.language} handleClick={handleClick} selected={selectNav} />

                <div className='page-header-nav'>
                    <div className='text'>
                        {homeLink} {{
                            'EN': `About us`,
                            'ES': `Sobre nosotros`,
                            'RU': `О нас`
                        }[props.language]}
                    </div>
                </div>


                <div className='about-wrapper-outer'>
                    <div className='about-content-wrapper'>
                        <div className='about-section-wrapper'>
                            <div
                                className='about-section-wrapper inner left'
                                style={{
                                    'font-size': `${textScale * fontSizes['about us']}rem`,
                                    'padding': `${textScale * 2}rem ${textScale * 2}rem 0rem ${textScale * 2}rem`
                                }}
                            >
                                <p>
                                    &emsp;
                                    {paragraph1}
                                </p>
                                <p>
                                    &emsp;
                                    {paragraph2}
                                </p>
                            </div>
                            <div className='about-section-wrapper inner right'>
                                <img className='about-section-image' src={aboutImage} />
                            </div>
                        </div>

                        <div className='about-section-wrapper'>
                            <div
                                className='about-section-wrapper inner'
                                style={{
                                    'font-size': `${textScale * fontSizes['about us']}rem`,
                                    'padding': `${textScale * 2}rem ${textScale * 2}rem 0rem ${textScale * 2}rem`
                                }}
                            >
                                &emsp;
                                {paragraph3}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer language={props.language} />

            </div>
        </div>
    );
}

export default AboutUs;