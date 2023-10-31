import './productSpecNote.css';
import React from 'react';

const ProductSpecNote = (props) => {

    let content = props.info
    if (typeof content === 'object') {
        content = Object.entries(content).map((item) => {
            return (
                <>
                    {item}
                    <br/>
                </>
            )
        })
    }

    return (
        <div className='specification-wrapper' style={{ 'font-size': `${props.textScale * props.font}rem` }}>
            <div
                className='specification-type'
                style={{
                    'width': `${props.textScale * 10}rem`,
                    'padding': `${props.textScale * 1}rem`
                }}>
                {props.spec}
            </div>
            <div
                className='specification-info'
                style={{
                    'width': `${props.textScale * 20}rem`,
                    'max-width' : '-webkit-fill-available',
                    'padding': `${props.textScale * 1}rem`
                }}>
                {content}
            </div>
        </div>
    );
}

export default ProductSpecNote;