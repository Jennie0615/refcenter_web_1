import './productSeries.css';
import React from 'react';

import { useState, useEffect } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

import NavMenuProducts from '../components/navMenuProducts';
import NavMenuResources from '../components/navMenuResources';
import ProductOption from '../components/productOption';

import TankSeriesImage from '../resources/images/series headers/tank.png';
import MuteSeriesImage from '../resources/images/series headers/mute.png';
import BoxSeriesImage from '../resources/images/series headers/box series.png';
import TranquilSeriesImage from '../resources/images/series headers/tranquil.png';
import CondensateSwitchImage from '../resources/images/series headers/condensate switch.png';
import BigFootImage from '../resources/images/series headers/BIG FOOT.png';
import FloorSupportImage from '../resources/images/series headers/FLOOR SUPPORT.png';
import LineSetCoverImage from '../resources/images/series headers/line set cover.png';
import MiniSplitMountingImage from '../resources/images/series headers/mini split mounting.png';
import PreInstallationBoxImage from '../resources/images/series headers/preinstallation box.png';
import PumpAncillariesImage from '../resources/images/series headers/pump ancillaries.png';
import TubingImage from '../resources/images/series headers/tubing.png';
import VibrationIsolatorImage from '../resources/images/series headers/vibration lsolator.png';

const ProductSeries = (props) => {
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const seriesImage = {
        'Mute Series': MuteSeriesImage,
        'Tank Series': TankSeriesImage,
        'Box Series': BoxSeriesImage,
        'Tranquil Series': TranquilSeriesImage,
        'Condensate Switch': CondensateSwitchImage,
        'Big Foot': BigFootImage,
        'Floor Support': FloorSupportImage,
        'Line Set Cover': LineSetCoverImage,
        'Split Mounting': MiniSplitMountingImage,
        'Pre-Installation Box': PreInstallationBoxImage,
        'Pump Ancillaries': PumpAncillariesImage,
        'Tubing': TubingImage,
        'Vibration Isolator': VibrationIsolatorImage,
        'Line Set Covers': LineSetCoverImage,
    };

    const seriesMessage = {
        'Mute Series':
            {
                'EN': 'Wonderful power, without noise. Refcenter Mute Series pumps are ideal solutions for end users who pursue completely silent environment, also ensuring the high performance. Choose our mute and mini pumps and enjoy the benefits of cutting-edge technology that delivers powerful performance without the distraction of excess noise.',
                'ES': 'Maravillosa potencia, sin ruido. Las bombas de la serie Refcenter Mute son soluciones ideales para usuarios finales que buscan un entorno completamente silencioso, asegurando también un alto rendimiento. Elija nuestras bombas silenciosas y mini y disfrute de los beneficios de la tecnología de vanguardia que ofrece un rendimiento potente sin la distracción del exceso de ruido.',
                'RU': 'Прекрасная мощность без шума. Насосы серии Mute от Refcenter - идеальное решение для конечных пользователей, которые ищут полностью тихую среду, обеспечивая при этом высокую производительность. Выберите наши беззвучные и мини-насосы и наслаждайтесь преимуществами передовой технологии, обеспечивающей мощную производительность без отвлечения от лишнего шума.'
            }[props.language],
        'Tank Series':
            {
                'EN': 'With powerful and durable designs, our energy-efficient and low-maintenance tank pumps are engineered for maximum performance and minimal downtime. Easy to install and maintain, Refcenter tank pumps are the top choice for professionals looking for worry-free and installer-friendly operation.',
                'ES': 'Con diseños potentes y duraderos, nuestras bombas de tanque de bajo mantenimiento y eficiencia energética están diseñadas para un rendimiento máximo y un tiempo de inactividad mínimo. Fáciles de instalar y mantener, las bombas de tanque Refcenter son la mejor opción para los profesionales que buscan una operación fácil de instalar y sin preocupaciones.',
                'RU': 'С мощными и прочными конструкциями наши энергоэффективные и низконагруженные баковые насосы разработаны для достижения максимальной производительности и минимального времени простоя. Легкие в установке и обслуживании, насосы бака Refcenter - лучший выбор для профессионалов, ищущих надежную и удобную для установщика эксплуатацию.'
            }[props.language],
        'Box Series':
            {
                'EN': 'Small size, but Powerful performance. Refcenter Box Series are condensate pumps engineered to deliver maximum flow rates and high suction lift capabilities. With their small size and lightweight design, our box series are ideal pumps for a wide range of applications and fit for multiple locations.',
                'ES': 'Tamaño pequeño, pero rendimiento potente. La serie Refcenter Box son bombas de condensado diseñadas para ofrecer índices de flujo máximos y altas capacidades de elevación de succión. Con su tamaño pequeño y diseño liviano, nuestra serie de cajas son bombas ideales para una amplia gama de aplicaciones y se adaptan a múltiples ubicaciones.',
                'RU': 'Маленький размер, но мощная производительность. Серия насосов Refcenter Box спроектирована для достижения максимальных скоростей потока и высоких показателей подъема всасывания. Благодаря своим маленьким размерам и легкому дизайну, наши насосы серии Box идеально подходят для широкого спектра применений и подходят для различных местоположений.'
            }[props.language],
        'Tranquil Series':
            {
                'EN': 'Advanced technology, perfect quality. Refcenter Tranquil Series pumps are the pinnacle of modern technological advancement and represent the perfect synthesis of form and function. These pumps utilize cutting-edge engineering techniques, achieving precise detection and almost completely mute operation. More customization designs, like speed-selective and adaptable water-level setting, serves different needs.',
                'ES': 'Tecnología avanzada, calidad perfecta. Las bombas Refcenter Tranquil Series son el pináculo del avance tecnológico moderno y representan la síntesis perfecta de forma y función. Estas bombas utilizan técnicas de ingeniería de vanguardia, logrando una detección precisa y un funcionamiento casi completamente silencioso. Más diseños de personalización, como la configuración del nivel del agua adaptable y selectivo de la velocidad, satisfacen diferentes necesidades.',
                'RU': 'Современные технологии, идеальное качество. Насосы серии Tranquil от Refcenter - это высшая ступень современного технологического прогресса и воплощение идеального синтеза формы и функции. Эти насосы используют передовые инженерные методы, достигая точного обнаружения и практически бесшумной работы. Более тщательная настройка дизайна, такие как выбор скорости и адаптивная настройка уровня воды, обслуживает различные потребности.'
            }[props.language],
        'Condensate Switch':
            {
                'EN': 'This innovative device effectively manages and redirects condensate, enhancing system efficiency and preventing moisture-related issues. A fundamental solution for optimal performance in both residential and commercial settings.',
                'ES': 'Este innovador dispositivo gestiona y redirige eficazmente el condensado, mejorando la eficiencia del sistema y previniendo problemas relacionados con la humedad. Una solución fundamental para un rendimiento óptimo tanto en entornos residenciales como comerciales.',
                'RU': 'Это инновационное устройство эффективно управляет и перенаправляет конденсат, повышая эффективность системы и предотвращая проблемы, связанные с влажностью. Фундаментальное решение для оптимальной производительности как в жилых, так и в коммерческих условиях.'
            }[props.language],
        'Pre-Installation Box': {
            'EN': 'A pre-installation box in HVAC systems is a strategically designed unit containing pre-assembled components such as valves, controls, piping, and wiring. Crafted off-site, it streamlines installation, enhancing efficiency, and quality control.',
            'ES': 'Una caja de preinstalación en sistemas de HVAC es una unidad diseñada estratégicamente que contiene componentes preensamblados como válvulas, controles, tuberías y cableado. Fabricada fuera del sitio, agiliza la instalación, mejorando la eficiencia y el control de calidad.',
            'RU': 'Предустановочный блок в системах HVAC - это стратегически разработанная единица, содержащая предварительно собранные компоненты, такие как клапаны, управление, трубопроводы и проводка. Изготавливается на заводе, что упрощает установку и повышает эффективность и контроль качества.'
        }[props.language],
        'Line Set Covers': {
            'EN': 'Line set covers play a pivotal role in HVAC systems, discreetly concealing refrigerant lines and wiring that connect indoor and outdoor units. These protective housings enhance aesthetics, shield components from damage and weather, and even offer insulation benefits.',
            'ES': 'Las cubiertas de juego de líneas desempeñan un papel fundamental en los sistemas de HVAC, ocultando discretamente las líneas de refrigerante y el cableado que conectan las unidades interiores y exteriores. Estas carcasas protectoras mejoran la estética, protegen los componentes de daños y condiciones climáticas, e incluso ofrecen beneficios de aislamiento.',
            'RU': 'Защитные кожухи линий играют ключевую роль в системах HVAC, дискретно скрывая линии хладагента и проводку, соединяющие внутренние и наружные блоки. Эти защитные кожухи улучшают эстетику, защищают компоненты от повреждений и погодных условий, и даже обеспечивают изоляционные преимущества.'
        }[props.language],
        'Big Foot': {
            'EN': 'Robust equipment pads designed to support and safeguard outdoor HVAC units, ensuring stability and longevity for these critical systems.',
            'ES': 'Sólidas bases de equipos diseñadas para soportar y proteger las unidades exteriores de HVAC, garantizando estabilidad y longevidad para estos sistemas críticos.',
            'RU': 'Надежные плиты для оборудования, разработанные для поддержки и защиты наружных блоков систем вентиляции, отопления и кондиционирования воздуха, обеспечивая стабильность и долгий срок службы этих критически важных систем.'
        }[props.language],
        'Tubing': {
            'EN': 'These essential conduits facilitate the seamless transport of heated or cooled air, refrigerants, and fluids, ensuring optimal indoor climate control.',
            'ES': 'Estos conductos esenciales facilitan el transporte sin problemas del aire calentado o enfriado, refrigerantes y fluidos, garantizando un control climático interior óptimo.',
            'RU': 'Эти важные трубопроводы обеспечивают беспрепятственную транспортировку нагретого или охлажденного воздуха, хладагентов и жидкостей, обеспечивая оптимальный контроль климата в помещении.'
        }[props.language],
        'Pump Ancillaries': {
            'EN': 'Replace and add essential parts in condensate pumps to avoid potential leaks, enhancing system’s reliability.',
            'ES': 'Reemplace y agregue piezas esenciales en las bombas de condensado para evitar posibles fugas, mejorando la confiabilidad del sistema.',
            'RU': 'Замените и добавьте важные детали в конденсатные насосы, чтобы избежать потенциальных утечек и повысить надежность системы.'
        }[props.language],
        'Line Set Covers': {
            'EN': 'Line set covers play a pivotal role in HVAC systems, discreetly concealing refrigerant lines and wiring that connect indoor and outdoor units. These protective housings enhance aesthetics, shield components from damage and weather, and even offer insulation benefits.',
            'ES': 'Las cubiertas de conjunto de tuberías desempeñan un papel fundamental en los sistemas de HVAC, ocultando discretamente las líneas de refrigerante y el cableado que conectan las unidades interiores y exteriores. Estas cubiertas protectoras mejoran la estética, protegen los componentes de daños y condiciones climáticas, e incluso ofrecen beneficios de aislamiento.',
            'RU': 'Крышки линии установки играют ключевую роль в системах вентиляции, кондиционирования и отопления, дискретно скрывая линии хладагента и проводку, которые соединяют внутренние и внешние блоки. Эти защитные кожухи улучшают эстетику, защищают компоненты от повреждений и воздействия погодных условий, и даже обеспечивают изоляционные свойства.'
        }[props.language],
        'Tape': {
            'EN': 'Tapes offer solutions for sealing, insulating, and securing vital components. From robust duct tape to heat-resistant varieties, these adhesive tapes enhance system efficiency and longevity, essential for keeping your AC system running well.',
            'ES': 'Las cintas ofrecen soluciones para sellar, aislar y asegurar componentes vitales. Desde la resistente cinta adhesiva para conductos hasta las variedades resistentes al calor, estas cintas adhesivas mejoran la eficiencia y la longevidad del sistema, lo cual es esencial para mantener su sistema de aire acondicionado en buen funcionamiento.',
            'RU': 'Ленты предлагают решения для уплотнения, изоляции и надежной фиксации важных компонентов. От прочных клеящих лент для вентиляционных труб до термостойких разновидностей, эти клейкие ленты повышают эффективность и долговечность системы, что является важным для надежной работы вашей системы кондиционирования воздуха.'
        }[props.language],
        'Split Mounting': {
            'EN': 'Serve the crucial role of securely affixing mini-split air conditioning units to walls and surfaces. Mini split mounting ensures the stability and optimal functionality of these space-saving HVAC solutions.',
            'ES': 'Cumplen un papel crucial al fijar de manera segura las unidades de aire acondicionado tipo mini split en paredes y superficies. El montaje de mini split garantiza la estabilidad y la funcionalidad óptima de estas soluciones de HVAC que ahorran espacio.',
            'RU': 'Осуществляют важную функцию надежного крепления мини-сплит-кондиционеров на стенах и поверхностях. Монтаж мини-сплита обеспечивает стабильность и оптимальную функциональность этих компактных решений для HVAC.'
        }[props.language],
        'Floor Support': {
            'EN': 'Floor support in the HVAC industry serves a vital role by providing structural stability and elevation, preventing damage and facilitating maintenance.',
            'ES': 'El soporte de suelo en la industria HVAC cumple un papel vital al proporcionar estabilidad estructural y elevación, evitando daños y facilitando el mantenimiento.',
            'RU': 'Напольная поддержка в отрасли HVAC играет важную роль, обеспечивая структурную устойчивость и поднятие, предотвращая повреждения и облегчая обслуживание.'
        }[props.language],
        'Vibration Isolator': {
            'EN': 'Vibration isolators are essential components in HVAC systems, mitigating noise and protecting structures. These resilient mounts effectively absorb and isolate vibrations generated by equipment, ensuring the comfort of occupants while safeguarding the longevity of HVAC machinery.',
            'ES': 'Los aisladores de vibraciones son componentes esenciales en sistemas HVAC, mitigando el ruido y protegiendo las estructuras. Estos soportes resilientes absorben y aíslan eficazmente las vibraciones generadas por los equipos, garantizando la comodidad de los ocupantes y protegiendo la vida útil de la maquinaria HVAC.',
            'RU': 'Виброизоляторы являются важными компонентами в системах HVAC, смягчая шум и защищая конструкции. Эти упругие крепления эффективно поглощают и изолируют вибрации, генерируемые оборудованием, обеспечивая комфорт для пользователей и продлевая срок службы оборудования HVAC.'
        }[props.language]
    }


    const productSeries = ['Mute Series', 'Tranquil Series', 'Tank Series', 'Box Series'];

    const boxSeries = ['slim box', 'mini box', 'maxi box', 'heart box', 'easy box'];
    const muteSeries = ['mute box 20L', 'mute box 40L', 'mute tank', 'mute wedge', 'mute corner'];
    const tankSeries = ['tank pump l', 'tank pump v'];
    const tranquilSeries = ['tranquil-I', 'tranquil-S', 'tranquil-X', 'tranquil-D', 'tranquil-C'];
    const tubingProducts = ['pvc reinforced', 'transparent condensation', 'corrugated', 'condensation drain'];
    const pumpAncillaries = ['vinyl tubing', 'pump float', 'inline reservoir', 'inlet hose', 'inlet filter', 'fast clip', 'anti-siphon joint'];
    const preInstallationBoxes = ['32cf101', '32cf102', '32cf103', '32cf104', '32cf105', '32cf106', '32cf107', '32cf108', '32cf109'];
    const tapeProducts = ['aluminum foil duct tape', 'insulating non-adhesive tape', 'insulating self-adhesive tape'];
    const condensateSwitches = ['float switch-fs2', 'float switch-fs3', 'condensate drain line cleaner'];
    const splitMounting = ['acb-a', 'acb-b', 'acb-c', 'acb-d', 'acb-e', 'acb-f', 'acb-g', 'acb-h', '21cf74'];
    const vibrationIsolators = ['AA3040', 'AG3545', 'AGB3545', 'AT', 'RW01', 'RW02', 'RW03', 'S30', 'SG4060'];
    const floorSupports = ['floor support 1', 'floor support 2A', 'floor support 2B', 'floor support 3', 'floor support 4A'];
    const bigFoots = ['acr-a', 'acr-c', 'acr-d'];
    const lineSetCovers = ['wall penetration', 'wall flange', 'wall cover', 'union coupling', 't joint', 'straight duct', 'soffit fittings', 'reducer coupling', 'flex joint', 'duct end', 'ceiling plate', 'bridge bend', '120 flat elbow', '120 elbow', '90 flat elbow', '90 elbow vertical']

    const seriesToProducts = {
        'Mute Series': muteSeries,
        'Tank Series': tankSeries,
        'Box Series': boxSeries,
        'Tranquil Series': tranquilSeries,
        'Tubing': tubingProducts,
        'Pump Ancillaries': pumpAncillaries,
        'Pre-Installation Box': preInstallationBoxes,
        'Tape': tapeProducts,
        'Condensate Switch': condensateSwitches,
        'Split Mounting': splitMounting,
        'Vibration Isolator': vibrationIsolators,
        'Floor Support': floorSupports,
        'Big Foot': bigFoots,
        'Line Set Covers': lineSetCovers,
    };

    const productToName = {
        'slim box': 'Slim Box',
        'mini box': 'Mini Box',
        'maxi box': 'MaxiBox',
        'heart box': 'Heart Box',
        'easy box': 'EasyBox',
        'mute box 20L': 'Mute Box 20L',
        'mute box 40L': 'Mute Box 40L',
        'mute tank': 'Mute Tank',
        'mute wedge': 'Mute Wedge',
        'mute corner': 'Mute Corner',
        'tank pump l': 'Tank Pump-L',
        'tank pump v': 'Tank Pump-V',
        'tranquil-I': 'Tranquil-I',
        'tranquil-S': 'Tranquil-S',
        'tranquil-X': 'Tranquil-X',
        'tranquil-D': 'Tranquil-D',
        'tranquil-C': 'Tranquil-C', 
        'pvc reinforced': 'PVC Reinforced Pipe',
        'transparent condensation': 'Transparent Condensation Pipe',
        'corrugated': 'Corrugated Pipe',
        'condensation drain': 'Condensation Drain Pipe',
        'vinyl tubing': 'Vinyl Tubing',
        'pump float': 'Pump Float',
        'inline reservoir': 'Inline Reservoir',
        'inlet hose': 'Inlet Hose',
        'inlet filter': 'Inlet Filter',
        'fast clip': 'Fast Clip',
        'anti-siphon joint': 'Anti-Siphon Joint',
        '32cf101': '32CF101',
        '32cf102': '32CF102',
        '32cf103': '32CF103',
        '32cf104': '32CF104',
        '32cf105': '32CF105',
        '32cf106': '32CF106',
        '32cf107': '32CF107',
        '32cf108': '32CF108',
        '32cf109': '32CF109',
        'aluminum foil duct tape': 'Aluminum Foil Duct Tape',
        'insulating non-adhesive tape': 'Insulating Non-Adhesive Tape',
        'insulating self-adhesive tape': 'Insulating Self-Adhesive Tape',
        'float switch-fs2': 'Float Switch - FS2',
        'float switch-fs3': 'Float Switch - FS3',
        'condensate drain line cleaner': 'Condensate Drain Line Cleaner',
        'acb-a': 'ACB-A',
        'acb-b': 'ACB-B',
        'acb-c': 'ACB-C',
        'acb-d': 'ACB-D',
        'acb-e': 'ACB-E',
        'acb-f': 'ACB-F',
        'acb-g': 'ACB-G',
        'acb-h': 'ACB-H',
        '21cf74': '21CF74',
        'AA3040': 'AA30/40',
        'AG3545': 'AG35/45',
        'AGB3545': 'AGB35/45',
        'AT': 'AT',
        'RW01': 'RW01',
        'RW02': 'RW02',
        'RW03': 'RW03',
        'S30': 'S30',
        'SG4060': 'SG40/60',
        'floor support 1': 'Floor Support - 1',
        'floor support 2A': 'Floor Support - 2A',
        'floor support 2B': 'Floor Support - 2B',
        'floor support 3': 'Floor Support - 3',
        'floor support 4A': 'Floor Support - 4A',
        'acr-a': 'ACR-A',
        'acr-c': 'ACR-C',
        'acr-d': 'ACR-D',
        'wall penetration': 'Wall Penetration',
        'wall flange': 'Wall Flange',
        'wall cover': 'Wall Cover',
        'union coupling': 'Union Coupling',
        't joint': 'T Joint',
        'straight duct': 'Straight Duct',
        'soffit fittings': 'Soffit Fittings',
        'reducer coupling': 'Reducer Coupling',
        'flex joint': 'Flex Joint',
        'duct end': 'Duct End',
        'ceiling plate': 'Ceiling Plate',
        'bridge bend': 'Bridge Bend',
        '120 flat elbow': '120 Flat Elbow',
        '120 elbow': '120 Elbow',
        '90 flat elbow': '90 Flat Elbow',
        '90 elbow vertical': '90 Elbow (Vertical)'
    };

    const productToImage = {
        'slim box': 'Slim Box Image',
        'mini box': 'Mini Box Image',
        'maxi box': 'MaxiBox Image',
        'heart box': 'Heart Box Image',
        'easy box': 'Easy Box Image',
        'mute box 20L': 'Mute Box 20L Image',
        'mute box 40L': 'Mute Box 40L Image',
        'mute tank': 'Mute Tank Image',
        'mute wedge': 'Mute Wedge Image',
        'mute corner': 'Mute Corner Image',
        'tank pump': 'Tank Pump Image',
        'tank pump v': 'Tank Pump-V Image',
        'tranquil-I': 'Tranquil-I Image',
        'tranquil-S': 'Tranquil-S Image',
        'tranquil-X': 'Tranquil-X Image',
        'tranquil-D': 'Tranquil-D Image',
        'tranquil-C': 'Tranquil-C Image',
    };

    const listedProducts = seriesToProducts[props.series].map(item => (<ProductOption language={props.language} product={props.product} series={props.series} item={item} name={productToName[item]} />))

    const [selectNav, setSelectNav] = useState('');

    const handleClick = (option) => {
        if (selectNav === option) {
            setSelectNav('');
        } else {
            setSelectNav(option);
        }

        console.log(`clicked ${option}`);
    };

    const [smallScreen, setSmallScreen] = useState(window.innerWidth >= 1000 ? false : true);

    useEffect(() => {
        const handleWindowResize = () => {
            setSmallScreen(window.innerWidth >= 1000 ? false : true);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const homeLink = (
        <a className='series-header-nav-link' href={`/${props.language}`}>{`${{ 'EN': 'Home', 'ES': 'Página de inicio', 'RU': 'Главная страница' }[props.language]} > ${props.productLabel} > `}</a>
    );

    return (
        <div className='wrapper'>
            <div className='content'>
                <Header language={props.language} />
                <NavBar language={props.language} handleClick={handleClick} selected={selectNav} />

                <div className='series-header' style={smallScreen ? { 'height': 'max-content' } : {}}>
                    <div className='series-header-nav'>
                        <div className='text'>
                            {homeLink} {`${props.seriesLabel}`}
                        </div>
                    </div>
                    <div className='series-header-content' style={smallScreen ? { 'justify-content': 'center', 'height': 'max-content' } : {}}>
                        <div className='series-header-image' style={smallScreen ? { 'display': 'none' } : {}}>
                            <img className='image cover horizontal' src={seriesImage[props.series]} />
                        </div>
                        <div className='series-header-message'>
                            <div className='text box largest' style={{ 'font-weight': 'normal' }}>
                                {props.seriesLabel}
                            </div>
                            <br />
                            <div className='text box'>
                                {seriesMessage[props.series]}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='series-section products'>
                    {listedProducts}
                </div>

                <Footer language={props.language} />

            </div>
        </div>
    );
}

export default ProductSeries;