import './productKitItem.css';
import React from 'react';

const ProductKitItem = (props) => {

    const subItems = props.subItems.map(subItem => (
        <div className='product-sub-item' style={{'font-size' : `${props.textScale * 0.9 * props.font}rem`}}>
            {subItem}
        </div>
    ));

    const subItemList = (
        <div className='sub-item-wrapper'>
            {subItems}
        </div>
    );

    return (
        <div className='productKitContent' style={{'padding' : `${props.textScale}rem`}}>
            <div className='item-wrapper' style={{'font-size' : `${props.textScale * props.font}rem`}}>
                <div
                    className='nav-menu-bullet'
                    style={{ 'opacity': 1, 'margin' : `${props.textScale * 0.5}rem` }}
                />
                {props.item}
            </div>

            {props.subItems.length > 0 ? subItemList : null}
        </div>
    );
};

export default ProductKitItem;