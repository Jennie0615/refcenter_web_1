import './certificateOption.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants.js';

import certificateImage from '../resources/certificatesImages';

import AllPumpCE from '../resources/certificates/CE.pdf';
import AllPumpROHS from '../resources/certificates/ROHS Certificate.pdf';
import CondensateCTB from '../resources/certificates/CTB Certificate.pdf';
import TranquilCE from '../resources/certificates/CE Certificate for Tranquil Series.pdf';
import MuteETL from '../resources/certificates/ETL Certificate - Other pump models.pdf';
import Tank115VETL from '../resources/certificates/ETL Certificate - 115V Tank Pump.pdf';
import Tank230VETL from '../resources/certificates/ETL Certificate - 230V Tank Pump.pdf';
import ChinaforeISO9001 from '../resources/certificates/ISO -Chinafore CO.,LTD.jpg';
import ChinaforeISO140001 from '../resources/certificates/ISO14001.jpg';

const CertificateOption = (props) => {

    const certificateName = {
        'all pump ce': 'All Pump Series',
        'all pump rohs': 'All Pump Series',
        'condensate ctb': 'Condensate Pumps',
        'tranquil ce': 'Tranquil Series Pumps',
        'mute etl': 'Mute & Box Series',
        'tank 115V etl': 'Tank Pump - 115V',
        'tank 230V etl': 'Tank Pump - 230V',
        'chinafore iso9001': 'Chinafore',
        'chinafore iso140001': 'Chinafore'
    }

    const certificateType = {
        'all pump ce': 'CE Certificate',
        'all pump rohs': 'ROHS Certificate',
        'condensate ctb': 'CTB Certificate',
        'tranquil ce': 'CE Certificate',
        'mute etl': 'ETL Certificate',
        'tank 115V etl': 'ETL Certificate',
        'tank 230V etl': 'ETL Certificate',
        'chinafore iso9001': 'ISO9001',
        'chinafore iso140001': 'ISO140001'
    }

    const certificateFile = {
        'all pump ce': AllPumpCE,
        'all pump rohs': AllPumpROHS,
        'condensate ctb': CondensateCTB,
        'tranquil ce': TranquilCE,
        'mute etl': MuteETL,
        'tank 115V etl': Tank115VETL,
        'tank 230V etl': Tank230VETL,
        'chinafore iso9001': ChinaforeISO9001,
        'chinafore iso140001': ChinaforeISO140001
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
        <a className='certificate-option-wrapper' href={certificateFile[props.certificate]} target='_blank'>
            <div className='certificate-option-text' style={{ 'font-size': `${textScale * fontSizes['certificate item']}rem` }}>
                <div className='certificate-option-type'>{certificateType[props.certificate]}</div>
                <div
                    className='certificate-option-name'
                    style={{
                        'top': `${textScale * 2.5}rem`,
                        'left': `${textScale * 5}rem`
                    }}
                >
                    {certificateName[props.certificate]}
                </div>
            </div>
            <img className='certificate-option-image' src={certificateImage[props.certificate]} />
        </a>
    );
}

export default CertificateOption;