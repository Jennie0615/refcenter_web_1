import './productKeyFeatures.css';
import React from 'react';
import { fontSizes } from '../constants';

const ProductKeyFeature = (props) => {
    return (
        <div className='productKeyFeature'
            style={{
                'font-size': `${props.textScale * props.font}rem`,
                'padding' : `${props.textScale}rem`,
                'width' : props.style === 'wide' ? '-webkit-fill-available' : null,
            }}
        >
            <div
                className='nav-menu-bullet'
                style={{
                    'opacity': 1,
                    'margin': `${props.textScale * 0.5}rem`
                }}
            />
            {props.feature}
        </div>
    );
};

export default ProductKeyFeature