import './brochureOption.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants.js';

import CondensatePumpCatalogPDF from '../resources/brochures/condensate pump catalog.pdf';
import CondensatePumpTranquilPDF from '../resources/brochures/condensate pump tranquil.pdf';
import CondensatePumpManagementPDF from '../resources/brochures/condensate pump management.pdf';

const BrochureOption = (props) => {
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

    const brochures = {
        'All Series of Condensate Pumps' : CondensatePumpCatalogPDF,
        'Tranquil Series Pumps' : CondensatePumpTranquilPDF,
        'Condensate Management' : CondensatePumpManagementPDF
    }

    return (
        <a 
            className='certificate-option-wrapper' 
            href={brochures[props.brochure]}
            target='_blank'
        >
            <div
                className='certificate-option-text'
                style={{ 'font-size': `${textScale * fontSizes['certificate item']}rem` }}
            >
                <div className='certificate-option-type'>
                    {props.tag}
                </div>
                <div
                    className='certificate-option-name'
                    style={{
                        'top': `${textScale * 2.5}rem`,
                        'left': `${textScale * 5}rem`
                    }}
                >
                    {props.brochure}
                </div>
            </div>
        </a>
    );
}

export default BrochureOption;