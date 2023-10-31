import './eventItem.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants.js';

import AHR2022 from '../resources/images/events/ahr2022.png';
import AHR2023 from '../resources/images/events/ahr2023.png';
import CHILL2020 from '../resources/images/events/chill2020.png';
import FEBRAVA2019 from '../resources/images/events/febrava2019.png';
import FRANKFURT2019 from '../resources/images/events/frankfurt2019.png';
import FRANKFURT2023 from '../resources/images/events/frankfurt2023.png';
import MOSCOW2019 from '../resources/images/events/moscow2019.png';


const EventItem = (props) => {

    const eventName = {
        'frankfurt2023': 'Frankfurt ISH',
        'ahr2023': 'AHR Expo',
        'ahr2022': 'AHR Expo',
        'chill2020': 'CHILLVENTA',
        'frankfurt2019': 'Frankfurt ISH',
        'febrava2019': 'Febrava',
        'moscow2019': 'Moscow Climateworld'
    };

    const eventYear = {
        'frankfurt2023': '2023',
        'ahr2023': '2023',
        'ahr2022': '2022',
        'chill2020': '2020',
        'frankfurt2019': '2019',
        'febrava2019': '2019',
        'moscow2019': '2019'
    }

    const eventImage = {
        'frankfurt2023': FRANKFURT2023,
        'ahr2023': AHR2023,
        'ahr2022': AHR2022,
        'chill2020': CHILL2020,
        'frankfurt2019': FRANKFURT2019,
        'febrava2019': FEBRAVA2019,
        'moscow2019': MOSCOW2019
    }

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

    return (
        <div className='event-option-wrapper'>
            <div className='event-option-text' style={{ 'font-size': `${textScale * fontSizes['event item']}rem` }}>
                <div className='event-option-type'>{eventYear[props.event]}</div>
                <div
                    className='event-option-name'
                    style={
                        props.event === 'moscow2019' ? { 
                            'top' : `${textScale * 2.5}rem`,
                            'left': `${textScale * 2.5}rem` 
                        } : { 
                            'top' : `${textScale * 2.5}rem`,
                            'left': `${textScale * 5}rem` 
                        }
                    }
                >
                    {eventName[props.event]}
                </div>
            </div>
            <img className='event-option-image' src={eventImage[props.event]} />
        </div>
    );
}

export default EventItem;