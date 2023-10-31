import React from 'react';
import { useState } from 'react';

const NavMenuResources = (props) => {
    const [selectProduct, setSelectedProduct] = useState('');

    const resourceOptions = ['Technical Sheets', 'Videos', 'Brochures', 'Certificates'];

    const resourceOptionsLinks = {
        '': '', 
        'Technical Sheets': 'technical sheets', 
        'Videos': 'videos',
        'Brochures': 'brochures',
        'Certificates': 'certificates'
    };

    const handleMenuClick = (e) => {
        e.preventDefault();
        let product = e.target.innerHTML;
        console.log(product);
        setSelectedProduct(product);
    }

    const selectResources = resourceOptions.map(option => (
        <a 
            className='nav-menu-item' 
            href={`/resources/${resourceOptionsLinks[option]}`}
        >
            <div className='nav-menu-bullet' />
            {'option'}
        </a>
    ));

    return (
        <div className='navigation-menu'>
            <div className='navigation-menu left'>
                
            </div>
            <div className='navigation-menu right'>
                {selectResources}
            </div>
        </div>
    );
}

export default NavMenuResources;