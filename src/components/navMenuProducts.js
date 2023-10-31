import './navMenuProducts.css';
import React from 'react';
import { useState } from 'react';

const NavMenuProducts = (props) => {
    const [selectProduct, setSelectedProduct] = useState('');

    const productOptions = ['Condensate Removal Pumps', 'Condensate Switch', 'Installation Accessories', 'Support System', 'Vacuum Pump', 'Recovery Machine'];
    const condensateRemovalPumps = ['Mute Series', 'Tranquil Series', 'Tank Series', 'Box Series'];
    const condensateSwitch = [];
    const installationAccessories = ['Tubing', 'Tape', 'Pump Ancillaries', 'Pre-Installation Box', 'Line Set Covers'];
    const supportSystems = ['Vibration Isolator', 'Mini Split Mounting', 'Floor Support', 'Big Foot'];
    const vacuumPump = [];
    const recoveyMachine = [];


    const productLinks = {
        'Mute Series': 'mute series',
        'Tranquil Series': 'tranquil series',
        'Tank Series': 'tank series',
        'Box Series': 'box series',
        'Tubing': 'tubing',
        'Tape': 'tape',
        'Pump Ancillaries': 'pump ancillaries',
        'Pre-Installation Box': 'pre-installation box',
        'Line Set Covers': 'line set covers',
        'Vibration Isolator': 'vibration isolator',
        'Mini Split Mounting': 'split mounting',
        'Floor Support': 'floor support',
        'Big Foot': 'big foot',
    };

    const productOptionsMap = {
        '': [],
        'Condensate Removal Pumps': condensateRemovalPumps,
        'Condensate Switch': condensateSwitch,
        'Installation Accessories': installationAccessories,
        'Support System': supportSystems,
        'Vacuum Pump': vacuumPump,
        'Recovery Machine': recoveyMachine,
    };

    const productOptionsLinks = {
        '': [],
        'Condensate Removal Pumps': 'condensate pumps',
        'Condensate Switch': 'condensate pumps',
        'Installation Accessories': 'installation accessories',
        'Support System': 'support for condensation unit',
    };

    const navMenuSelect = productOptions.map((option) => {

        if (option === 'Condensate Switch') {
            return (
                <a
                    className='nav-menu-item'
                    onClick={() => setSelectedProduct(option)}
                    style={{ 'color': (selectProduct === option ? 'black' : 'grey') }}
                    href={`/products/condensate switch/condensate switch/${props.language}`}
                >
                    {{
                        'EN': 'Condensate Switch',
                        'ES': 'Interruptor de Condensado',
                        'RU': 'Конденсатный переключатель'
                    }[props.language]}

                </a>
            )
        }

        if (option === 'Recovery Machine') {
            return (
                <a
                    className='nav-menu-item'
                    onClick={() => setSelectedProduct(option)}
                    style={{ 'color': (selectProduct === option ? 'black' : 'grey') }}
                    href={`/products/recovery machine/recovery machine/recovery machine/${props.language}`}
                >
                    {{
                        'EN': 'Recovery Machine',
                        'ES': 'Máquina de Recuperación',
                        'RU': 'Установка для восстановления'
                    }[props.language]}

                </a>
            )
        }

        if (option === 'Vacuum Pump') {
            return (
                <a
                    className='nav-menu-item'
                    onClick={() => setSelectedProduct(option)}
                    style={{ 'color': (selectProduct === option ? 'black' : 'grey') }}
                    href={`/products/vacuum pump/vacuum pump/vacuum pump/${props.language}`}
                >
                    {{
                        'EN': 'Vacuum Pump',
                        'ES': 'Bomba de Vacío',
                        'RU': 'Вакуумный насос'
                    }[props.language]}

                </a>
            )
        }

        else {
            return (
                <div
                    className='nav-menu-item'
                    onClick={() => setSelectedProduct(option)}
                    style={{ 'color': (selectProduct === option ? 'black' : 'grey') }}
                >
                    {{
                        'Condensate Removal Pumps': {
                            'EN': 'Condensate Removal Pumps',
                            'ES': 'Bomba de Extracción de Condensados',
                            'RU': 'Насосы для удаления конденсата'
                        },
                        'Condensate Switch': {
                            'EN': 'Condensate Switch',
                            'ES': 'Interruptor de Condensado',
                            'RU': 'Конденсатный переключатель'
                        },
                        'Installation Accessories': {
                            'EN': 'Installation Accessories',
                            'ES': 'Accesorios de Instalación',
                            'RU': 'Комплектующие для монтажа'
                        },
                        'Support System': {
                            'EN': 'Support System',
                            'ES': 'Sistema de Soporte',
                            'RU': 'Система поддержки'
                        },
                        'Vacuum Pump': {
                            'EN': 'Vacuum Pump',
                            'ES': 'Bomba de Vacío',
                            'RU': 'Вакуумный насос'
                        },
                        'Recovery Machine': {
                            'EN': 'Recovery Machine',
                            'ES': 'Máquina de Recuperación',
                            'RU': 'машина для восстановления'
                        }
                    }[option][props.language]}

                </div>
            )
        }
    });

    const selectedProduct = productOptionsMap[selectProduct].map(product => (
        <a
            className='nav-menu-item'
            style={{'width': `12rem`}}
            href={product === 'Coming Soon!' ? null : `/products/${productOptionsLinks[selectProduct]}/${productLinks[product]}/${props.language}`}
        >
            <div className='nav-menu-bullet' />
            {{
                'Mute Series': {
                    'EN': 'Mute Series',
                    'ES': 'Serie Muda',
                    'RU': 'Серия Mute'
                },
                'Tranquil Series': {
                    'EN': 'Tranquil Series',
                    'ES': 'Serie Tranquila',
                    'RU': 'Серия Tranquil'
                },
                'Tank Series': {
                    'EN': 'Tank Series',
                    'ES': 'Serie de Tanques',
                    'RU': 'Серия Tank'
                },
                'Box Series': {
                    'EN': 'Box Series',
                    'ES': 'Serie de Cajas',
                    'RU': 'Серия Box'
                },
                'Tubing': {
                    'EN': 'Tubing',
                    'ES': 'Tubos',
                    'RU': 'Трубы'
                },
                'Tape': {
                    'EN': 'Tape',
                    'ES': 'Cinta',
                    'RU': 'Лента'
                },
                'Pump Ancillaries': {
                    'EN': 'Pump Ancillaries',
                    'ES': 'Accesorios para Bombas',
                    'RU': 'Вспомогательное оборудование для насосов'
                },
                'Pre-Installation Box': {
                    'EN': 'Pre-Installation Box',
                    'ES': 'Caja de Preinstalación',
                    'RU': 'Предустановочный ящик'
                },
                'Line Set Covers': {
                    'EN': 'Line Set Covers',
                    'ES': 'Cubiertas para Línea de Tuberías',
                    'RU': 'Кожухи для линий'
                },
                'Vibration Isolator': {
                    'EN': 'Vibration Isolator',
                    'ES': 'Aislador de Vibraciones',
                    'RU': 'Изолятор вибрации'
                },
                'Mini Split Mounting': {
                    'EN': 'Mini Split Mounting',
                    'ES': 'Montaje Mini Split',
                    'RU': 'Монтаж мини-сплит систем'
                },
                'Floor Support': {
                    'EN': 'Floor Support',
                    'ES': 'Soporte para Suelo',
                    'RU': 'Поддержка пола'
                },
                'Big Foot': {
                    'EN': 'Big Foot',
                    'ES': 'Pata Grande',
                    'RU': 'Большая опора'
                },
                'Coming Soon!': {
                    'EN': 'Coming Soon!',
                    'ES': '¡Próximamente!',
                    'RU': 'Скоро!'
                }
            }[product][props.language]}

        </a>
    ));

    return (
        <div className='drop-down-nav' style={{ 'display': props.show ? 'flex' : 'none' }}>
            <div className='navigation-menu left'>
                {navMenuSelect}
            </div>
            <div className='navigation-menu right'>
                {selectedProduct}
            </div>
        </div>
    );
}

export default NavMenuProducts;