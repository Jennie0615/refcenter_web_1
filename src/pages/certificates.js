import './certificates.css';
import React from 'react';

import { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import NavMenuProducts from '../components/navMenuProducts';
import NavMenuResources from '../components/navMenuResources';

import CertificateOption from '../components/certificateOption';

const Certificates = (props) => {
    const [selectNav, setSelectNav] = useState('');

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

    const certificateType = [
        'all pump ce',
        'all pump rohs',
        'condensate ctb',
        'tranquil ce',
        'mute etl',
        'tank 115V etl',
        'tank 230V etl',
        'chinafore iso9001',
        'chinafore iso140001'
    ]

    const listedResources = certificateType.map(certificate => (
        <CertificateOption certificate={certificate} />
    ));

    const homeLink = (
        <a className='series-header-nav-link' href={`/${props.language}`}>{`${{'EN' : 'Home', 'ES' : 'Página de inicio', 'RU' : 'Главная страница'}[props.language]} > ${{ 'EN': 'Resources', 'ES': 'Recursos', 'RU': 'Ресурсы' }[props.language]}> `}</a>
    );

    return (
        <div className='wrapper'>
            <div className='content'>
                <Header language={props.language} />
                <NavBar language={props.language} handleClick={handleClick} selected={selectNav} />

                <div className='page-header-nav'>
                    <div className='text'>
                        {homeLink} {{
                            'EN': `Certificates`,
                            'ES': `Certificados`,
                            'RU': `Сертификаты`
                        }[props.language]}
                    </div>
                </div>


                <div className='series-section certificates'>
                    {listedResources}
                </div>

                <Footer language={props.language} />

            </div>
        </div>
    );
}

export default Certificates;