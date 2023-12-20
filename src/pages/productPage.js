import './productPage.css';
import { React, useState, useEffect } from 'react';
import { fontSizes } from '../constants.js';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import ContactForm from './contactForm';

import TechnicalSheetOption from '../components/technicalSheetOption';

import ProductSpecNote from '../components/productSpecNote';
import ProductKeyFeature from '../components/productKeyFeature';
import ProductKitItem from '../components/productKitItem';

import productTags from '../resources/productTags';
import productKeyFeatures from '../resources/productKeyFeatures';
import productSpecifications from '../resources/productSpecifications';
import productKitContents from '../resources/productKitContents';
import SizeChart from '../components/sizeChart';
import VacuumPumpTable from '../components/vaccuumPumpTable';

import flowIcon from '../resources/icons/flowIcon.png';
import soundIcon from '../resources/icons/soundIcon.png';
import maxHeadIcon from '../resources/icons/maxHeadIcon.png';
import mailIcon from '../resources/icons/mailIcon.png';

function ProductPage(props) {
    const [selectNav, setSelectNav] = useState('');
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 800);
    const [textScale, setTextScale] = useState(window.innerWidth > 620 ? 1 : window.innerWidth / 620);

    useEffect(() => {
        const handleWindowResize = () => {
            setTextScale(window.innerWidth > 620 ? 1 : window.innerWidth / 620);
            setSmallScreen(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const [modalEnabled, setModalEnabled] = useState(false);

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

    const keyTagsMap = {
        'Max. flow': flowIcon,
        'Sound level': soundIcon,
        'Max. head': maxHeadIcon,
        'Caudal máximo': flowIcon,
        'Nivel de sonido': soundIcon,
        'Altura máxima': maxHeadIcon,
        'Максимальный расход': flowIcon,
        'Уровень шума': soundIcon,
        'Максимальная высота подъема': maxHeadIcon,
    };

    const keyTags = () => {
        try {
            return Object.keys(productTags[props.item][props.language]).map(tag => {

                if (!(tag in keyTagsMap)) {
                    return (
                        <div className='product-tag-wrapper' style={{ 'align-items': 'flex-start' }}>
                            <div
                                className='product-tag-wrapper'
                                style={{
                                    'font-size': `${textScale * fontSizes['product tag label']}rem`,
                                    'padding': `${textScale * 1}rem`,
                                    'margin-right': '1rem',
                                    'text-align': 'initial',
                                    'width': `${textScale * 20}rem`
                                }}>
                                {tag}
                            </div>
                        </div>
                    )
                }

                let content = productTags[props.item][props.language][tag];
                if (typeof content === 'object') {
                    content = (Object.entries(content)).map(([key, info]) => {
                        return (
                            <div className='product-tag-wrapper'>
                                <div style={{ 'margin-top': `${0.75 * textScale}rem`, 'width': `${10 * textScale}rem` }}>{key}</div>
                                <div>{info}</div>
                            </div>)
                    })
                }

                if (props.series === 'Condensate Switch') {
                    return (
                        <div
                            className='product-tag-label'
                            style={{
                                'font-size': `${textScale * fontSizes['product tag label']}rem`,
                                'width': `${textScale * 16}rem`,
                                'padding': `${textScale * 1}rem`,
                                'margin-right': '1rem'
                            }}
                        >
                            {tag}
                        </div>
                    )
                }

                return (
                    <div className='product-tag-wrapper' style={{ 'align-items': 'flex-start' }}>
                        <div className='product-tag-wrapper'>
                            <img
                                className='product-tag'
                                src={keyTagsMap[tag]}
                                style={{
                                    'width': `${textScale * 3}rem`,
                                    'height': `${textScale * 3}rem`,
                                    'margin': `${textScale * 1}rem`
                                }}
                            />
                            <div
                                className='product-tag-label'
                                style={{
                                    'font-size': `${textScale * fontSizes['product tag label']}rem`,
                                    'width': `${textScale * 6}rem`,
                                    'padding': `${textScale * 1}rem`,
                                    'margin-right': '1rem'
                                }}
                            >
                                {tag}
                            </div>
                        </div>

                        <div className='product-tag-wrapper' style={{ 'height': '100%' }}>
                            <div
                                className='product-tag-label info'
                                style={{
                                    'font-size': `${textScale * fontSizes['product tag label']}rem`,
                                    'width': `auto`,
                                    'padding': `${textScale * 1}rem`
                                }}
                            >
                                {content}
                            </div>
                        </div>
                    </div>
                )
            });
        } catch {
            return []
        }
    }

    const keyFeatures = () => {
        try {
            return productKeyFeatures[props.item][props.language].map(feature => (
                <ProductKeyFeature style={props.product === 'Support for Condensation Unit' ? 'wide' : props.seriesLabel === 'Condensate Switch' ? 'wide' : props.seriesLabel === 'Recovery Machine' ? 'wide': props.productLabel === 'Installation Accessories' ? 'wide': null} feature={feature} textScale={textScale} font={fontSizes['product specification content']} />
            ));
        } catch {
            return []
        }
    }

    const specSheet = () => {
        try {
            return Object.keys(productSpecifications[props.item][props.language]).map(spec => (
                <ProductSpecNote spec={spec} info={productSpecifications[props.item][props.language][spec]} textScale={textScale} font={fontSizes['product specification content']} />
            ));
        } catch {
            return []
        }
    }

    const kitContent = () => {
        try {
            return Object.keys(productKitContents[props.item][props.language]).map(content => (
                <ProductKitItem item={content} subItems={productKitContents[props.item][props.language][content]} textScale={textScale} font={fontSizes['product specification content']} />
            ));
        } catch {
            return []
        }
    }

    const productVideos = {
        'Slim Box': 'https://www.youtube.com/embed/zljfzbSt7u0',
        'Mute Wedge': 'https://www.youtube.com/embed/1foAhDwXzGQ',
        'Tank Pump-L': 'https://www.youtube.com/embed/9XwholaKXp0',
        'Tank Pump-V': 'https://www.youtube.com/embed/9XwholaKXp0',
        'Mute Box': 'https://www.youtube.com/embed/qK_nflU9ZR0',
        'EasyBox': 'https://www.youtube.com/embed/MnXGr0Zieic',
    }

    const sizeChart = props.sizeChart ? <SizeChart data={props.sizeChart[props.language]} /> : null;
    const technicalData = props.technicalDataImage ? <div style={{'width': '100%', 'height': '100%', 'overflow-y': 'scroll'}}><img style={{'object-fit': 'cover', 'width': '100%', 'max-width': '1400px'}} src={props.technicalDataImage}/></div> : props.technicalDataTable ? <VacuumPumpTable data={props.technicalDataTable} language={props.language}/> : null;
    const [selectedSpecs, setSelectedSpecs] = useState('Key Features');

    const specOptions = {
        'Key Features': keyFeatures(),
        'Spec Sheet': specSheet(),
        'Kit Content': kitContent(),
        'Videos': [productVideos[props.item] ? <iframe className='section-video' src={productVideos[props.item]} /> : null],
        'Download Area': <TechnicalSheetOption product={props.item} />,
        'Size Chart': [sizeChart],
        'Technical Data': [technicalData]
    };

    const handleSpecClick = (spec) => {
        console.log(spec);
        setSelectedSpecs(spec);
    }

    const specOptionsList = Object.keys(specOptions).map(option => (
        specOptions[option].length > 0 && specOptions[option][0] !== null ?
            <div
                className='product-specifications-option'
                style={{
                    'font-size': `${textScale * fontSizes['product specification option']}rem`,
                    'border-bottom': selectedSpecs === option ? 'solid 2px #18A2A8' : null,
                    'background-color': smallScreen && (selectedSpecs === option) ? 'rgba(200, 200, 200, 0.2)' : null,
                }}
                onClick={() => handleSpecClick(option)}
            >
                {{
                    'Key Features': { 'EN': 'Key Features', 'ES': 'Características', 'RU': 'Основные характеристики' }[props.language],
                    'Spec Sheet': { 'EN': 'Spec Sheet', 'ES': 'Especificaciones', 'RU': 'Технические характеристики' }[props.language],
                    'Kit Content': { 'EN': 'Kit Content', 'ES': 'Contenido del kit', 'RU': 'Содержание набора' }[props.language],
                    'Videos': { 'EN': 'Videos', 'ES': 'Vídeos', 'RU': 'Видео' }[props.language],
                    'Download Area': { 'EN': 'Download Area', 'ES': 'Descargas', 'RU': 'Зона загрузки' }[props.language],
                    'Size Chart': { 'EN': 'Size Chart', 'ES': 'Tabla de Tallas', 'RU': 'Таблица размеров' }[props.language],
                    'Technical Data': { 'EN': 'Technical Data', 'ES': 'Datos Técnicos', 'RU': 'Технические данные' }[props.language]
                }[option]}
            </div>
            : null
    ));

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images =
        props.item === 'EasyBox' ? importAll(require.context(`../resources/images/easy box/`, false, /\.(png|jpe?g|svg)$/)) :
            props.item === 'Heart Box' ? importAll(require.context(`../resources/images/heart box/`, false, /\.(png|jpe?g|svg)$/)) :
                props.item === 'MaxiBox' ? importAll(require.context(`../resources/images/maxi box/`, false, /\.(png|jpe?g|svg)$/)) :
                    props.item === 'Mini Box' ? importAll(require.context(`../resources/images/mini box/`, false, /\.(png|jpe?g|svg)$/)) :
                        props.item === 'Mute Box 20L' ? importAll(require.context(`../resources/images/mute box 20L/`, false, /\.(png|jpe?g|svg)$/)) :
                            props.item === 'Mute Box 40L' ? importAll(require.context(`../resources/images/mute box 40L/`, false, /\.(png|jpe?g|svg)$/)) :
                                props.item === 'Mute Tank' ? importAll(require.context(`../resources/images/mute tank/`, false, /\.(png|jpe?g|svg)$/)) :
                                    props.item === 'Mute Wedge' ? importAll(require.context(`../resources/images/mute wedge/`, false, /\.(png|jpe?g|svg)$/)) :
                                        props.item === 'Mute Corner' ? importAll(require.context(`../resources/images/mute corner/`, false, /\.(png|jpe?g|svg)$/)) :
                                            props.item === 'Slim Box' ? importAll(require.context(`../resources/images/slim box/`, false, /\.(png|jpe?g|svg)$/)) :
                                                props.item === 'Tank Pump-V' ? importAll(require.context(`../resources/images/tank pump V/`, false, /\.(png|jpe?g|svg)$/)) :
                                                    props.item === 'Tank Pump-L' ? importAll(require.context(`../resources/images/tank pump L/`, false, /\.(png|jpe?g|svg)$/)) :
                                                        props.item === 'Tranquil-I' ? importAll(require.context(`../resources/images/tranquil-I/`, false, /\.(png|jpe?g|svg)$/)) :
                                                            props.item === 'Tranquil-D' ? importAll(require.context(`../resources/images/tranquil-D/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                props.item === 'Tranquil-X' ? importAll(require.context(`../resources/images/tranquil-X/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                    props.item === 'Tranquil-S' ? importAll(require.context(`../resources/images/tranquil-S/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                        props.item === 'Tranquil-C' ? importAll(require.context(`../resources/images/tranquil-C/`, false, /\.(png|jpe?g|svg)$/)) :    
                                                                            props.item === 'PVC Reinforced Pipe' ? importAll(require.context(`../resources/images/pvc reinforced pipe/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                props.item === 'Corrugated Pipe' ? importAll(require.context(`../resources/images/corrugated pipe/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                    props.item === 'Transparent Condensation Pipe' ? importAll(require.context(`../resources/images/transparent condensation pipe/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                        props.item === 'Transparent Condensation Pipe' ? importAll(require.context(`../resources/images/transparent condensation pipe/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                            props.item === 'Condensation Drain Pipe' ? importAll(require.context(`../resources/images/condensation drain pipe/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                props.item === 'Insulating Non-Adhesive Tape' ? importAll(require.context(`../resources/images/insulating non-adhesive tape/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                    props.item === 'Insulating Self-Adhesive Tape' ? importAll(require.context(`../resources/images/insulating self-adhesive tape/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                        props.item === 'Aluminum Foil Duct Tape' ? importAll(require.context(`../resources/images/aluminum foil duct tape/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                            props.item === 'Vinyl Tubing' ? importAll(require.context(`../resources/images/vinyl tubing/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                props.item === 'Pump Float' ? importAll(require.context(`../resources/images/pump float/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                    props.item === 'Inline Reservoir' ? importAll(require.context(`../resources/images/inline reservoir/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                        props.item === 'Inlet Hose' ? importAll(require.context(`../resources/images/inlet hose/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                            props.item === 'Inlet Filter' ? importAll(require.context(`../resources/images/inlet filter/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                props.item === 'Fast Clip' ? importAll(require.context(`../resources/images/fast clip/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                    props.item === 'Anti-Siphon Joint' ? importAll(require.context(`../resources/images/anti-siphon joint/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                        props.item === 'Float Switch - FS2' ? importAll(require.context(`../resources/images/fs-2/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                            props.item === 'Float Switch - FS3' ? importAll(require.context(`../resources/images/fs-3/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                props.item === 'Condensate Drain Line Cleaner' ? importAll(require.context(`../resources/images/cleaner/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                    props.item === 'ACB-A' ? importAll(require.context(`../resources/images/acb-a/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                        props.item === 'ACB-B' ? importAll(require.context(`../resources/images/acb-b/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                            props.item === 'ACB-C' ? importAll(require.context(`../resources/images/acb-c/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                props.item === 'ACB-D' ? importAll(require.context(`../resources/images/acb-d/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                    props.item === 'ACB-E' ? importAll(require.context(`../resources/images/acb-e/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                        props.item === 'ACB-F' ? importAll(require.context(`../resources/images/acb-f/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                            props.item === 'ACB-G' ? importAll(require.context(`../resources/images/acb-g/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                props.item === 'ACB-H' ? importAll(require.context(`../resources/images/acb-h/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                    props.item === '21CF74' ? importAll(require.context(`../resources/images/21cf74/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                        props.item === 'AA30/40' ? importAll(require.context(`../resources/images/aa3040/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                            props.item === 'AG35/45' ? importAll(require.context(`../resources/images/ag3545/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                props.item === 'AGB35/45' ? importAll(require.context(`../resources/images/agb3545/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                    props.item === 'AT' ? importAll(require.context(`../resources/images/at/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                        props.item === 'RW01' ? importAll(require.context(`../resources/images/rw01/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                            props.item === 'RW02' ? importAll(require.context(`../resources/images/rw02/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                props.item === 'RW03' ? importAll(require.context(`../resources/images/rw03/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                    props.item === 'S30' ? importAll(require.context(`../resources/images/s30/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                        props.item === 'SG40/60' ? importAll(require.context(`../resources/images/sg4060/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                            props.item === 'ACB-A' ? importAll(require.context(`../resources/images/acb-a/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                props.item === 'ACB-B' ? importAll(require.context(`../resources/images/acb-b/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                    props.item === 'ACB-C' ? importAll(require.context(`../resources/images/acb-c/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                        props.item === 'ACB-D' ? importAll(require.context(`../resources/images/acb-d/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                            props.item === 'ACB-E' ? importAll(require.context(`../resources/images/acb-e/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                props.item === 'ACB-F' ? importAll(require.context(`../resources/images/acb-f/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                    props.item === 'ACB-G' ? importAll(require.context(`../resources/images/acb-g/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                        props.item === 'ACB-H' ? importAll(require.context(`../resources/images/acb-h/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                            props.item === 'ACB-J' ? importAll(require.context(`../resources/images/acb-j/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                props.item === '21CF74' ? importAll(require.context(`../resources/images/21cf74/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                    props.item === 'Floor Support - 1' ? importAll(require.context(`../resources/images/floor support-1/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                        props.item === 'Floor Support - 2A' ? importAll(require.context(`../resources/images/floor support-2a/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                            props.item === 'Floor Support - 2B' ? importAll(require.context(`../resources/images/floor support-2b/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                props.item === 'Floor Support - 3' ? importAll(require.context(`../resources/images/floor support-3/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                    props.item === 'Floor Support - 4A' ? importAll(require.context(`../resources/images/floor support-4a/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                        props.item === 'ACR-A' ? importAll(require.context(`../resources/images/acr-a/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                            props.item === 'ACR-C' ? importAll(require.context(`../resources/images/acr-c/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                props.item === 'ACR-D' ? importAll(require.context(`../resources/images/acr-d/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                    props.item === '32CF101' ? importAll(require.context(`../resources/images/32cf101/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                        props.item === '32CF102' ? importAll(require.context(`../resources/images/32cf102/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                            props.item === '32CF103' ? importAll(require.context(`../resources/images/32cf103/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                props.item === '32CF104' ? importAll(require.context(`../resources/images/32cf104/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                    props.item === '32CF105' ? importAll(require.context(`../resources/images/32cf105/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                        props.item === '32CF106' ? importAll(require.context(`../resources/images/32cf106/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                            props.item === '32CF107' ? importAll(require.context(`../resources/images/32cf107/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                props.item === '32CF108' ? importAll(require.context(`../resources/images/32cf108/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                    props.item === '32CF109' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                        props.item === 'Wall Penetration' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                            props.item === 'Wall Flange' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                props.item === 'Wall Cover' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                    props.item === 'Union Coupling' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                        props.item === 'T Joint' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                            props.item === 'Straight Duct' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                props.item === 'Soffit Fittings' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                    props.item === 'Reducer Coupling' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                        props.item === 'Flex Joint' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                            props.item === 'Duct End' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                props.item === 'Ceiling Plate' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                    props.item === 'Bridge Bend' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                        props.item === '120 Flat Elbow' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                            props.item === '129 Elbow' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                                props.item === '90 Flat Elbow' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                                    props.item === '90 Elbow (Vertical)' ? importAll(require.context(`../resources/images/32cf109/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                                        props.item === 'Vacuum Pump' ? importAll(require.context(`../resources/images/svp/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                                            props.item === 'Recovery Machine' ? importAll(require.context(`../resources/images/rm/`, false, /\.(png|jpe?g|svg)$/)) :
                                                                                                                                                                                                                                                                                                                                                                                                                importAll(require.context(`../resources/images/unavailable/`, false, /\.(png|jpe?g|svg)$/));

    const [selectedImage, setSelectedImage] = useState(Object.keys(images)[0]);

    const imageList = Object.keys(images).map(index => (
        <img className='product-image-selection' src={images[index]} onClick={() => setSelectedImage(index)} />
    ));

    const homeLink = (
        <a className='series-header-nav-link' href={`/${props.language}`}>{`${{ 'EN': 'Home', 'ES': 'Página de inicio', 'RU': 'Главная страница' }[props.language]} > ${props.productLabel} > `}</a>
    );

    const seriesLinks = {
        'Mute Series': <a className='series-header-nav-link' href={`/products/condensate pumps/mute series/${props.language}`} >{`${props.seriesLabel} > `}</a>,
        'Box Series': <a className='series-header-nav-link' href={`/products/condensate pumps/box series/${props.language}`} >{`${props.seriesLabel} > `}</a>,
        'Tank Series': <a className='series-header-nav-link' href={`/products/condensate pumps/tank series/${props.language}`} >{`${props.seriesLabel} > `}</a>,
        'Tranquil Series': <a className='series-header-nav-link' href={`/products/condensate pumps/tranquil series/${props.language}`} >{`${props.seriesLabel} > `}</a>,
        'Condensate Switch': <a className='series-header-nav-link' href={`/products/condensate switch/condensate switch/${props.language}`} >{`${props.seriesLabel} > `}</a>,
    }

    return (
        <div className='wrapper'>
            <div className='content'>
                <Header language={props.language} />
                <NavBar language={props.language} handleClick={handleClick} selected={selectNav} />

                <div className='product-header-nav'>
                    <div className='text'>
                        {homeLink} {seriesLinks[props.series]} {`${props.item}`}
                    </div>
                </div>

                <div style={{ 'display': 'flex', 'justify-content': 'center' }} >
                    <div className='content-product'>
                        <div className='product-image'>
                            <img className='product-image-selected' src={images[selectedImage]} />
                            <div className='product-image-options'>
                                {imageList}
                            </div>
                        </div>
                        <div className='product-info'>
                            <div className='product-name' style={{ 'font-size': `${textScale * fontSizes['product name']}rem` }}>
                                {props.item}
                            </div>
                            <div className='product-tags'>
                                {keyTags()}
                            </div>
                            <a
                                className='request-button'
                                href={`/send request/${props.language}`}
                                style={{
                                    'font-size': `${textScale * fontSizes['request button']}rem`,
                                    'text-decoration': 'none'
                                }}
                            >
                                <img
                                    className='request-button-icon'
                                    src={mailIcon}
                                    style={{
                                        'height': `${textScale * 2}rem`,
                                    }}
                                />
                                {{
                                    'EN': 'Send a Request',
                                    'ES': 'Enviar petición',
                                    'RU': 'Отправить запрос'
                                }[props.language]}
                            </a>
                        </div>
                    </div>
                </div>

                <div className='product-specifications'>
                    <div className='product-specifications-options' style={smallScreen ? { 'flex-direction': 'column', 'align-items': 'center' } : null}>
                        {specOptionsList}
                    </div>
                    <div
                        className='product-specifications-content'
                        style={selectedSpecs === 'Key Features' ? { 'flex-direction': 'row' } : selectedSpecs === 'Size Chart' ? { 'max-height': 'none' } : null}
                    >
                        {specOptions[selectedSpecs]}
                    </div>
                </div>


                <Footer language={props.language} />
            </div>
        </div>
    );
}

export default ProductPage;