import './brochures.css';
import React from 'react';

import { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import NavMenuProducts from '../components/navMenuProducts';
import NavMenuResources from '../components/navMenuResources';

import BrochureOption from '../components/brochureOption';

const Brochures = (props) => {
    const [selectNav, setSelectNav] = useState('');

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

    const brochureList = [
        'All Series of Condensate Pumps',
        'Tranquil Series Pumps',
        'Condensate Management'
    ]

    const brochureTag = {
        'All Series of Condensate Pumps': 'Catalog',
        'Tranquil Series Pumps': 'Catalog',
        'Condensate Management': 'Catalog'
    }

    const listedResources = brochureList.map(brochure => (
        <BrochureOption brochure={brochure} tag={brochureTag[brochure]} />
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
                            'EN': `Brochures`,
                            'ES': `Folletos`,
                            'RU': `Брошюры` // Russian translation for 'Brochures'
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

export default Brochures;