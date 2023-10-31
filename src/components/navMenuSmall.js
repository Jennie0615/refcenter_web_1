import './navMenuSmall.css';
import { React, useState } from 'react';

const NavMenuSmall = (props) => {
    const resourceOptions = ['Technical Sheets', 'Videos', 'Brochures', 'Certificates'];

    const resourceOptionsLinks = {
        '': '',
        'Technical Sheets': 'technical sheets',
        'Videos': 'videos',
        'Brochures': 'brochures',
        'Certificates': 'certificates'
    };

    const selectResources = resourceOptions.map(option => (
        <a
            className='nav-menu-small-item'
            href={`/resources/${resourceOptionsLinks[option]}/${props.language}`}
        >
            <div className='nav-menu-bullet' />
            {{
                'Technical Sheets': {
                    'EN': 'Technical Sheets',
                    'ES': 'Fichas Técnicas',
                    'RU': 'Технические листы'
                }[props.language],
                'Videos': {
                    'EN': 'Videos',
                    'ES': 'Vídeos',
                    'RU': 'Видео'
                }[props.language],
                'Brochures': {
                    'EN': 'Brochures',
                    'ES': 'Folletos',
                    'RU': 'Брошюры'
                }[props.language],
                'Certificates': {
                    'EN': 'Certificates',
                    'ES': 'Certificados',
                    'RU': 'Сертификаты'
                }[props.language]
            }[option]}
        </a>
    ));

    return (
        <div className='drop-down-content' style={{ 'display': props.show ? 'block' : 'none' }}>
            {selectResources}
        </div>
    );
}

export default NavMenuSmall;