import './technicalSheetOption.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants.js';
import productSheets from '../resources/productSheets';

import easyBoxImage from '../resources/images/easy box/1.jpg';
import heartPumpImage from '../resources/images/heart pump/1.JPG';
import maxiBoxImage from '../resources/images/maxi box/1.jpg';
import miniBoxImage from '../resources/images/mini box/1.jpg';
import muteBox20LImage from '../resources/images/mute box 20L/1.jpg';
import muteBox40LImage from '../resources/images/mute box 40L/1.jpg';
import muteTankImage from '../resources/images/mute tank/1.jpg';
import muteWedgeImage from '../resources/images/mute wedge/1.jpg';
import slimBoxImage from '../resources/images/slim box/1.JPG';
import tankPumpVImage from '../resources/images/tank pump V/1.jpg';
import tankPumpLImage from '../resources/images/tank pump L/1.jpg';
import tranquilIImage from '../resources/images/tranquil-I/1.JPG';
import tranquilSImage from '../resources/images/tranquil-S/1.jpg';
import tranquilXImage from '../resources/images/tranquil-X/1.jpg';
import tranquilDImage from '../resources/images/tranquil-D/1.jpg';
import tranquilCImage from '../resources/images/tranquil-C/1.png';
import muteCornerImage from '../resources/images/mute corner/1.jpg';

const TechnicalSheetOption = (props) => {

    const technicalSheetImage = {
        'Mute Box 20L': muteBox20LImage,
        'Mute Box 40L': muteBox40LImage,
        'Mute Tank': muteTankImage,
        'Mute Wedge': muteWedgeImage,
        'Mute Corner': muteCornerImage,
        'Slim Box': slimBoxImage,
        'Mini Box': miniBoxImage,
        'MaxiBox': maxiBoxImage,
        'Heart Pump': heartPumpImage,
        'EasyBox': easyBoxImage,
        'Tank Pump-L': tankPumpLImage,
        'Tank Pump-V': tankPumpVImage,
        'Tranquil-I': tranquilIImage,
        'Tranquil-S': tranquilSImage,
        'Tranquil-X': tranquilXImage,
        'Tranquil-D': tranquilDImage,
        'Tranquil-C': tranquilCImage,
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

console.log('sheet', productSheets[props.product])

if (productSheets[props.product] === undefined) {
    return [];
}

return (
    <a
        className='technical-option-wrapper'
        href={productSheets[props.product]}
        target='_blank'
        style={{ 'padding': `${textScale * 2}rem` }}
    >
        <div
            className='technical-option-text'
            style={{
                'font-size': `${fontSizes['technical sheet item'] * textScale}rem`
            }}
        >
            {props.product}
        </div>
        <img className='technical-option-image' src={technicalSheetImage[props.product]} />
    </a>
);
}

export default TechnicalSheetOption;