import './navMenuSmall.css';
import { React, useState } from 'react';

import USIcon from '../resources/icons/usIcon.png';
import ESIcon from '../resources/icons/esIcon.png';
import RUIcon from '../resources/icons/ruIcon.png';

const NavMenuSmallScreen = (props) => {
    const menuOptions = ['About us', 'News', 'Our Products', 'Resource Center', 'Contact', 'Send a Request'];
    const languageMap = { 'EN': USIcon, 'ES': ESIcon, 'RU': RUIcon };

    const menuOptionsLinks = {
        'About us': `/about us/${props.language}`,
        'News': `/news/${props.language}`,
        'Contact': `/contact us/${props.language}`,
        'Send a Request': `/send request/${props.language}`,
        'Mute Series': `/products/condensate pumps/mute series/${props.language}`,
        'Box Series': `/products/condensate pumps/box series/${props.language}`,
        'Tank Series': `/products/condensate pumps/tank series/${props.language}`,
        'Tranquil Series': `/products/condensate pumps/tranquil series/${props.language}`,
        'Tape': `/products/installation accessories/tape/${props.language}`,
        'Tubing': `/products/installation accessories/tubing/${props.language}`,
        'Pump Ancillaries': `/products/installation accessories/pump ancillaries/${props.language}`,
        'Pre-Installation Box': `/products/installation accessories/pre-installation box/${props.language}`,
        'Vibration Isolator': `/products/support for condensation unit/vibration isolator/${props.language}`,
        'Mini Split Mounting': `/products/support for condensation unit/split mounting/${props.language}`,
        'Floor Support': `/products/support for condensation unit/floor support/${props.language}`,
        'Big Foot': `/products/support for condensation unit/big foot/${props.language}`,
        'Condensate Switch': `/products/condensate switch/condensate switch/${props.language}`,
        'Technical Sheets': `/resources/technical sheets/${props.language}`,
        'Brochures': `/resources/brochures/${props.language}`,
        'Videos': `/resources/videos/${props.language}`,
        'Certificates': `/resources/certificates/${props.language}`
    };

    const [selectedOption, setSelectedOption] = useState('default');

    const backButton = {
        'products': 'default',
        'resources': 'default',
        'condensate pumps': 'products',
        'condensate switch': 'products',
        'support system': 'products',
        'installation accessories': 'products',
        'languages': 'default',
        'vacuum pump': 'products',
        'recovery machine': 'products',
    };

    const defaultMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <a className='nav-menu-small-item' href={menuOptionsLinks['About us']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'About us',
                    'ES': 'Sobre nosotros',
                    'RU': 'О нас'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['News']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'News',
                    'ES': 'Noticias',
                    'RU': 'Новости'
                }[props.language]}
            </a>
            <div className='nav-menu-small-item' onClick={() => setSelectedOption('products')} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Our Products',
                    'ES': 'Nuestros Productos',
                    'RU': 'Наши Продукты'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' onClick={() => setSelectedOption('resources')} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Resource Center',
                    'ES': 'Centro de Recursos',
                    'RU': 'Центр Ресурсов'
                }[props.language]}
            </div>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Contact']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Contact',
                    'ES': 'Contacto',
                    'RU': 'Контакт'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Send a Request']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Send a Request',
                    'ES': 'Enviar Petición',
                    'RU': 'Отправить Запрос'
                }[props.language]}
            </a>

            <div className='' onClick={() => setSelectedOption('languages')} style={{ 'display': 'flex', 'margin-left': '1rem', 'align-items': 'center' }}>
                <img className='image icon small' src={languageMap[props.language]} style={{ 'margin-right': '0.5rem' }} />
                <div className='languageOption' style={{ 'font-size': '1rem', 'color': 'black' }}>
                    {props.language}
                </div>
            </div >
        </div>
    );

    const productsMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <div className='nav-menu-small-item' onClick={() => setSelectedOption(backButton[selectedOption])} style={{ 'font-size': '0.8rem', 'margin': '1rem' }}>
                {{
                    'EN': '< Back',
                    'ES': '< Volver',
                    'RU': '< Назад'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' style={{ 'color': '#18A2A8', 'margin': '1rem' }}>
                {{
                    'EN': 'Products',
                    'ES': 'Productos',
                    'RU': 'Продукты'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' onClick={() => setSelectedOption('condensate pumps')} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Condensate Removal Pumps',
                    'ES': 'Bomba de Extracción de Condensados',
                    'RU': 'Конденсатные насосы'
                }[props.language]}
            </div>
            <a className='nav-menu-small-item'
                href={`/products/condensate switch/condensate switch/${props.language}`}
                onClick={() => setSelectedOption('condensate switch')} style={{ 'margin': '1rem' }}
            >
                {{
                    'EN': 'Condensate Switch',
                    'ES': 'Interruptor de Condensado',
                    'RU': 'Конденсатный переключатель'
                }[props.language]}
            </a>
            <div className='nav-menu-small-item' onClick={() => setSelectedOption('installation accessories')} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Installation Accessories',
                    'ES': 'Accesorios de Instalación',
                    'RU': 'Комплектующие для монтажа'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' onClick={() => setSelectedOption('support system')} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Support System',
                    'ES': 'Sistema de Soporte',
                    'RU': 'Система поддержки'
                }[props.language]}
            </div>
            <a className='nav-menu-small-item'
                href={`/products/vacuum pump/vacuum pump/vacuum pump/${props.language}`}
                onClick={() => setSelectedOption('vacuum pump')} style={{ 'margin': '1rem' }}
            >                {{
                'EN': 'Vacuum Pump',
                'ES': 'Bomba de Vacío',
                'RU': 'Вакуумный насос'
            }[props.language]}
            </a>
            <a className='nav-menu-small-item'
                href={`/products/recovery machine/recovery machine/recovery machine/${props.language}`}
                onClick={() => setSelectedOption('recovery machine')} style={{ 'margin': '1rem' }}
            >                {{
                'EN': 'Recovery Machine',
                'ES': 'Máquina de Recuperación',
                'RU': 'машина для восстановления'
            }[props.language]}
            </a>

        </div>
    );

    const resourcesMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <div className='nav-menu-small-item' onClick={() => setSelectedOption(backButton[selectedOption])} style={{ 'font-size': '0.8rem', 'margin': '1rem' }}>
                {{
                    'EN': '< Back',
                    'ES': '< Volver',
                    'RU': '< Назад'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' style={{ 'color': '#18A2A8', 'margin': '1rem' }}>
                {{
                    'EN': 'Resources',
                    'ES': 'Recursos',
                    'RU': 'Ресурсы'
                }[props.language]}
            </div>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Brochures']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Brochures',
                    'ES': 'Folletos',
                    'RU': 'Брошюры'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Videos']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Videos',
                    'ES': 'Vídeos',
                    'RU': 'Видео'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Certificates']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Certificates',
                    'ES': 'Certificados',
                    'RU': 'Сертификаты'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Technical Sheets']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Technical Sheets',
                    'ES': 'Fichas Técnicas',
                    'RU': 'Технические характеристики'
                }[props.language]}
            </a>
        </div>

    );

    const condensatePumpsMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <div className='nav-menu-small-item' onClick={() => setSelectedOption(backButton[selectedOption])} style={{ 'font-size': '0.8rem', 'margin': '1rem' }}>
                {{
                    'EN': '< Back',
                    'ES': '< Volver',
                    'RU': '< Назад'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' style={{ 'color': '#18A2A8', 'margin': '1rem' }}>
                {{
                    'EN': 'Condensate Removal Pumps',
                    'ES': 'Bomba de Extracción de Condensados',
                    'RU': 'Конденсатные насосы'
                }[props.language]}
            </div>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Tank Series']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Tank Series',
                    'ES': 'Serie de Tanques',
                    'RU': 'Серия баков'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Box Series']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Box Series',
                    'ES': 'Serie de Cajas',
                    'RU': 'Серия коробок'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Mute Series']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Mute Series',
                    'ES': 'Serie Muda',
                    'RU': 'Бесшумная серия'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Tranquil Series']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Tranquil Series',
                    'ES': 'Serie Tranquila',
                    'RU': 'Серия "Тихий"'
                }[props.language]}
            </a>
        </div>

    );

    const condensateSwitchMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <div className='nav-menu-small-item' onClick={() => setSelectedOption(backButton[selectedOption])} style={{ 'font-size': '0.8rem', 'margin': '1rem' }}>
                {{
                    'EN': '< Back',
                    'ES': '< Volver',
                    'RU': '< Назад'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' style={{ 'color': '#18A2A8', 'margin': '1rem' }}>
                {{
                    'EN': 'Condensate Switch',
                    'ES': 'Interruptor de Condensado',
                    'RU': 'Конденсатный переключатель'
                }[props.language]}
            </div>
        </div>

    );

    const installationAccessoriesMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <div className='nav-menu-small-item' onClick={() => setSelectedOption(backButton[selectedOption])} style={{ 'font-size': '0.8rem', 'margin': '1rem' }}>
                {{
                    'EN': '< Back',
                    'ES': '< Volver',
                    'RU': '< Назад'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' style={{ 'color': '#18A2A8', 'margin': '1rem' }}>
                {{
                    'EN': 'Installation Accessories',
                    'ES': 'Accesorios de Instalación',
                    'RU': 'Комплектующие для монтажа'
                }[props.language]}
            </div>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Tubing']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Tubing',
                    'ES': 'Tubos',
                    'RU': 'Трубы'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Tape']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Tape',
                    'ES': 'Cinta',
                    'RU': 'Лента'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Pump Ancillaries']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Pump Ancillaries',
                    'ES': 'Accesorios para Bombas',
                    'RU': 'Вспомогательное оборудование для насосов'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Pre-Installation Box']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Pre-Installation Box',
                    'ES': 'Caja de Preinstalación',
                    'RU': 'Предустановочный ящик'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Line Set Covers']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Line Set Covers',
                    'ES': 'Cubiertas para Línea de Tuberías',
                    'RU': 'Кожухи для линий'
                }[props.language]}
            </a>
        </div>

    );

    const supportSystemsMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <div className='nav-menu-small-item' onClick={() => setSelectedOption(backButton[selectedOption])} style={{ 'font-size': '0.8rem', 'margin': '1rem' }}>
                {{
                    'EN': '< Back',
                    'ES': '< Volver',
                    'RU': '< Назад'
                }[props.language]}
            </div>
            <div className='nav-menu-small-item' style={{ 'color': '#18A2A8', 'margin': '1rem' }}>
                {{
                    'EN': 'Support System',
                    'ES': 'Sistema de Soporte',
                    'RU': 'Система поддержки'
                }[props.language]}
            </div>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Vibration Isolator']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Vibration Isolator',
                    'ES': 'Aislador de Vibraciones',
                    'RU': 'Изолятор вибрации'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Mini Split Mounting']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Mini Split Mounting',
                    'ES': 'Montaje Mini Split',
                    'RU': 'Монтаж мини-сплит систем'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Floor Support']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Floor Support',
                    'ES': 'Soporte para Suelo',
                    'RU': 'Поддержка пола'
                }[props.language]}
            </a>
            <a className='nav-menu-small-item' href={menuOptionsLinks['Big Foot']} style={{ 'margin': '1rem' }}>
                {{
                    'EN': 'Big Foot',
                    'ES': 'Pata Grande',
                    'RU': 'Большая опора'
                }[props.language]}
            </a>
        </div>

    );

    const languageMenu = (
        <div
            className='drop-down-content wide left'
            style={{ 'display': props.show ? 'block' : 'none', 'padding': '1rem' }}
        >
            <div className='nav-menu-small-item' onClick={() => setSelectedOption(backButton[selectedOption])} style={{ 'font-size': '0.8rem', 'margin': '1rem' }}>{'< Back'}</div>
            <a
                className=''
                href='EN'
                style={{ 'display': 'flex', 'margin-left': '1rem', 'align-items': 'center', 'text-decoration': 'none' }}
            >
                <img className='image icon small' src={USIcon} style={{ 'margin-right': '0.5rem' }} />
                <div className='languageOption' style={{ 'font-size': '1rem', 'color': 'black' }}>
                    EN
                </div>
            </a >
            <a
                className=''
                href='ES'
                style={{ 'display': 'flex', 'margin-top': '0.5rem', 'margin-left': '1rem', 'align-items': 'center', 'text-decoration': 'none' }}
            >
                <img className='image icon small' src={ESIcon} style={{ 'margin-right': '0.5rem' }} />
                <div className='languageOption' style={{ 'font-size': '1rem', 'color': 'black' }}>
                    ES
                </div>
            </a >
            <a
                className=''
                href='RU'
                style={{ 'display': 'flex', 'margin-top': '0.5rem', 'margin-left': '1rem', 'align-items': 'center', 'text-decoration': 'none' }}
            >
                <img className='image icon small' src={RUIcon} style={{ 'margin-right': '0.5rem' }} />
                <div className='languageOption' style={{ 'font-size': '1rem', 'color': 'black' }}>
                    RU
                </div>
            </a >
        </div>
    );

    const menuMaps = {
        'default': defaultMenu,
        'products': productsMenu,
        'resources': resourcesMenu,
        'condensate pumps': condensatePumpsMenu,
        'condensate switches': condensateSwitchMenu,
        'installation accessories': installationAccessoriesMenu,
        'support system': supportSystemsMenu,
        'languages': languageMenu,
    };

    return menuMaps[selectedOption];
}

export default NavMenuSmallScreen;