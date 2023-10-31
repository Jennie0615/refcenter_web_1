import './technicalSheets.css';
import React from 'react';

import { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import NavMenuProducts from '../components/navMenuProducts';
import NavMenuResources from '../components/navMenuResources';

import TechnicalSheetOption from '../components/technicalSheetOption';
import technicalSheets from '../resources/productSheets';

const TechnicalSheets = (props) => {
    const [selectNav, setSelectNav] = useState('');

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

    const listedResources = Object.keys(technicalSheets).map(product => (
        <TechnicalSheetOption product={product} image={null} src={null} />
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
                        {homeLink} {`${{
                            'EN': 'Technical Sheets',
                            'ES': 'Fichas Técnicas',
                            'RU': 'Технические характеристики'
                        }[props.language]}`}
                    </div>
                </div>

                <div className='series-section technical'>
                    {listedResources}
                </div>

                <Footer language={props.language} />

            </div>
        </div>
    );
}

export default TechnicalSheets;