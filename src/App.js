import { React, useState, createContext, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home';
import AboutUs from './pages/aboutPage';
import NewsPage from './pages/newsPage';
import ContactPage from './pages/contactPage';
import RequestPage from './pages/requestPage';
import ProductSeries from './pages/productseries';
import ProductPage from './pages/productPage';
import TechnicalSheets from './pages/technicalSheets';
import Certificates from './pages/certificates';
import Brochures from './pages/brochures';
import VideosPage from './pages/videosPage';

import sizeChartPVCReinforced from './resources/sizes/pvc reinforced pipes';
import sizeChartTransparentCondensation from './resources/sizes/transparent condensation pipes';
import sizeChartCorrugated from './resources/sizes/corrugated pipes';
import sizeChartCondensationDrain from './resources/sizes/condensation drain pipes';

import sizeChartSplitMountACB_A from './resources/sizes/split mounting/ACB-A';
import sizeChartSplitMountACB_B from './resources/sizes/split mounting/ACB-B';
import sizeChartSplitMountACB_C from './resources/sizes/split mounting/ACB-C';
import sizeChartSplitMountACB_D from './resources/sizes/split mounting/ACB-D';
import sizeChartSplitMountACB_E from './resources/sizes/split mounting/ACB-E';
import sizeChartSplitMountACB_F from './resources/sizes/split mounting/ACB-F';
import sizeChartSplitMountACB_G from './resources/sizes/split mounting/ACB-G';
import sizeChartSplitMountACB_H from './resources/sizes/split mounting/ACB-H';
import sizeChartSplitMount21CF74 from './resources/sizes/split mounting/21CF74';

import sizeChart51CF4 from './resources/sizes/vibration isolator/AA3040';
import sizeChart51CF1 from './resources/sizes/vibration isolator/AG3545';
import sizeChart51CF3 from './resources/sizes/vibration isolator/AGB3545';
import sizeChart51CF6 from './resources/sizes/vibration isolator/AT';
import sizeChartRW01 from './resources/sizes/vibration isolator/RW01';
import sizeChartS30 from './resources/sizes/vibration isolator/S30';
import sizeChartSG4060 from './resources/sizes/vibration isolator/SG4060';

import sizeChartFloorSupport1 from './resources/sizes/floor support/floor support 1';
import sizeChartFloorSupport2A from './resources/sizes/floor support/floor support 2A';
import sizeChartFloorSupport2B from './resources/sizes/floor support/floor support 2B';
import sizeChartFloorSupport3 from './resources/sizes/floor support/floor support 3';
import sizeChartFloorSupport4A from './resources/sizes/floor support/floor support 4A';
import sizeChartACR_A from './resources/sizes/big foot/ACR-A';
import sizeChartInsulatingSelfAdhesiveTape from './resources/sizes/tape/insulating self adhesive tape';

import sizeChartWallPenetration from './resources/sizes/line set cover/wall penetration';
import sizeChartWallFlange from './resources/sizes/line set cover/wall flange';
import sizeChartWallCover from './resources/sizes/line set cover/wall cover';
import sizeChartUnionCoupling from './resources/sizes/line set cover/union coupling.js';
import sizeChartTJoint from './resources/sizes/line set cover/t joint.js';
import sizeChartStraightDuct from './resources/sizes/line set cover/straight duct';
import sizeChartSoffitFittings from './resources/sizes/line set cover/soffit fittings';
import sizeChartReducerCoupling from './resources/sizes/line set cover/reducer coupling';
import sizeChartFlexJoint from './resources/sizes/line set cover/flex joint';
import sizeChartDuctEnd from './resources/sizes/line set cover/duct end';
import sizeChartCeilingPlate from './resources/sizes/line set cover/ceiling plate';
import sizeChartBridgeBend from './resources/sizes/line set cover/bridge bend';
import sizeChart120FlatElbow from './resources/sizes/line set cover/120 flat elbow';
import sizeChart120Elbow from './resources/sizes/line set cover/120 elbow';
import sizeChart90FlatElbow from './resources/sizes/line set cover/90 flat elbow';
import sizeChart90ElbowVertical from './resources/sizes/line set cover/90 elbow vertical';


import SVPData from './resources/technical data/vacuum pump';
import RMData from './resources/technical data/rmData.png';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/EN' replace={true} />} />
          <Route exact path='/EN' element={<Home language={'EN'} />} />
          <Route exact path='/ES' element={<Home language={'ES'} />} />
          <Route exact path='/RU' element={<Home language={'RU'} />} />


          <Route path='/about us/EN' element={<AboutUs language={'EN'} />} />
          <Route path='/contact us/EN' element={<ContactPage language={'EN'} />} />
          <Route path='/send request/EN' element={<RequestPage language={'EN'} />} />
          <Route path='/news/EN' element={<NewsPage language={'EN'} />} />

          <Route path='/about us/ES' element={<AboutUs language={'ES'} />} />
          <Route path='/contact us/ES' element={<ContactPage language={'ES'} />} />
          <Route path='/send request/ES' element={<RequestPage language={'ES'} />} />
          <Route path='/news/ES' element={<NewsPage language={'ES'} />} />

          <Route path='/about us/RU' element={<AboutUs language={'RU'} />} />
          <Route path='/contact us/RU' element={<ContactPage language={'RU'} />} />
          <Route path='/send request/RU' element={<RequestPage language={'RU'} />} />
          <Route path='/news/RU' element={<NewsPage language={'RU'} />} />


          <Route path='/products/condensate pumps/mute series/EN' element={<ProductSeries language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Mute Series' seriesLabel='Mute Series' />} />
          <Route path='/products/condensate pumps/tank series/EN' element={<ProductSeries language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tank Series' seriesLabel='Tank Series' />} />
          <Route path='/products/condensate pumps/tranquil series/EN' element={<ProductSeries language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tranquil Series' seriesLabel='Tranquil Series' />} />
          <Route path='/products/condensate pumps/box series/EN' element={<ProductSeries language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Box Series' seriesLabel='Box Series' />} />

          <Route path='/products/condensate pumps/mute series/ES' element={<ProductSeries language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Mute Series' seriesLabel='Serie Mute' />} />
          <Route path='/products/condensate pumps/tank series/ES' element={<ProductSeries language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tank Series' seriesLabel='Serie Tank' />} />
          <Route path='/products/condensate pumps/tranquil series/ES' element={<ProductSeries language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tranquil Series' seriesLabel='Serie Tranquil' />} />
          <Route path='/products/condensate pumps/box series/ES' element={<ProductSeries language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Box Series' seriesLabel='Serie Box' />} />

          <Route path='/products/condensate pumps/mute series/RU' element={<ProductSeries language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Mute Series' seriesLabel='Серия Mute' />} />
          <Route path='/products/condensate pumps/tank series/RU' element={<ProductSeries language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tank Series' seriesLabel='Серия Tank' />} />
          <Route path='/products/condensate pumps/tranquil series/RU' element={<ProductSeries language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tranquil Series' seriesLabel='Серия Tranquil' />} />
          <Route path='/products/condensate pumps/box series/RU' element={<ProductSeries language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Box Series' seriesLabel='Серия Box' />} />

          <Route path='/products/installation accessories/tubing/EN' element={<ProductSeries language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tubing' seriesLabel='Tubing' />} />
          <Route path='/products/installation accessories/tubing/ES' element={<ProductSeries language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tubing' seriesLabel='Tubos' />} />
          <Route path='/products/installation accessories/tubing/RU' element={<ProductSeries language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tubing' seriesLabel='Трубы' />} />
          
          <Route path='/products/installation accessories/line set covers/EN' element={<ProductSeries language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Covers' seriesLabel='Line Set Covers' />} />
          <Route path='/products/installation accessories/line set covers/ES' element={<ProductSeries language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Covers' seriesLabel='Cubiertas de Conjunto de Tuberías' />} />
          <Route path='/products/installation accessories/line set covers/RU' element={<ProductSeries language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Covers' seriesLabel='Крышки линии установки' />} />

          <Route path='/products/installation accessories/tape/EN' element={<ProductSeries language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tape' seriesLabel='Tape' />} />
          <Route path='/products/installation accessories/tape/ES' element={<ProductSeries language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tape' seriesLabel='Cinta' />} />
          <Route path='/products/installation accessories/tape/RU' element={<ProductSeries language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tape' seriesLabel='Лента' />} />

          <Route path='/products/installation accessories/pump ancillaries/EN' element={<ProductSeries language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries'/>} />
          <Route path='/products/installation accessories/pump ancillaries/ES' element={<ProductSeries language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' />} />
          <Route path='/products/installation accessories/pump ancillaries/RU' element={<ProductSeries language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' />} />

          <Route path='/products/installation accessories/pre-installation box/EN' element={<ProductSeries language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' />} />
          <Route path='/products/installation accessories/pre-installation box/ES' element={<ProductSeries language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' />} />
          <Route path='/products/installation accessories/pre-installation box/RU' element={<ProductSeries language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' />} />

          <Route path='/products/support for condensation unit/vibration isolator/EN' element={<ProductSeries language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' />} />
          <Route path='/products/support for condensation unit/vibration isolator/ES' element={<ProductSeries language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' />} />
          <Route path='/products/support for condensation unit/vibration isolator/RU' element={<ProductSeries language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' />} />

          <Route path='/products/support for condensation unit/split mounting/EN' element={<ProductSeries language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' />} />
          <Route path='/products/support for condensation unit/split mounting/ES' element={<ProductSeries language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' />} />
          <Route path='/products/support for condensation unit/split mounting/RU' element={<ProductSeries language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' />} />

          <Route path='/products/support for condensation unit/floor support/EN' element={<ProductSeries language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Floor Support' seriesLabel='Floor Support' />} />
          <Route path='/products/support for condensation unit/floor support/ES' element={<ProductSeries language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Floor Support' seriesLabel='Soporte para Piso' />} />
          <Route path='/products/support for condensation unit/floor support/RU' element={<ProductSeries language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Floor Support' seriesLabel='Поддержка для Пола' />} />

          <Route path='/products/support for condensation unit/big foot/EN' element={<ProductSeries language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Big Foot' seriesLabel='Big Foot' />} />
          <Route path='/products/support for condensation unit/big foot/ES' element={<ProductSeries language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Big Foot' seriesLabel='Gran Pie' />} />
          <Route path='/products/support for condensation unit/big foot/RU' element={<ProductSeries language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Big Foot' seriesLabel='Большая нога' />} />

          <Route path='/products/condensate switch/condensate switch/EN' element={<ProductSeries language={'EN'} product='Condensate Switch' productLabel='Condensate Switch' series='Condensate Switch' seriesLabel='Condensate Switch' />} />
          <Route path='/products/condensate switch/condensate switch/ES' element={<ProductSeries language={'ES'} product='Condensate Switch' productLabel='Interruptor de Condensado' series='Condensate Switch' seriesLabel='Interruptor de Condensado' />} />
          <Route path='/products/condensate switch/condensate switch/RU' element={<ProductSeries language={'RU'} product='Condensate Switch' productLabel='Конденсатные переключатели' series='Condensate Switch' seriesLabel='Конденсатные переключатели' />} />


          <Route path='/products/vacuum pump/vacuum pump/vacuum pump/EN' element={<ProductPage language={'EN'} product='Vacuum Pump' productLabel='Vacuum Pump' series='Vacuum Pump' seriesLabel='Vacuum Pump' item='Vacuum Pump' technicalDataTable={SVPData['EN']} />} />
          <Route path='/products/recovery machine/recovery machine/recovery machine/EN' element={<ProductPage language={'EN'} product='Recovery Machine' productLabel='Recovery Machine' series='Recovery Machine' seriesLabel='Recovery Machine' item='Recovery Machine' technicalDataImage={RMData} />} />

          <Route path='/products/vacuum pump/vacuum pump/vacuum pump/ES' element={<ProductPage language={'ES'} product='Vacuum Pump' productLabel='Bomba de Vacío' series='Vacuum Pump' seriesLabel='Bomba de Vacío' item='Vacuum Pump' technicalDataTable={SVPData['ES']} />} />
          <Route path='/products/recovery machine/recovery machine/recovery machine/ES' element={<ProductPage language={'ES'} product='Recovery Machine' productLabel='Máquina de Recuperación' series='Recovery Machine' seriesLabel='Máquina de Recuperación' item='Recovery Machine' technicalDataImage={RMData} />} />

          <Route path='/products/vacuum pump/vacuum pump/vacuum pump/RU' element={<ProductPage language={'RU'} product='Vacuum Pump' productLabel='Вакуумный насос' series='Vacuum Pump' seriesLabel='Вакуумный насос' item='Vacuum Pump' technicalDataTable={SVPData['RU']} />} />
          <Route path='/products/recovery machine/recovery machine/recovery machine/RU' element={<ProductPage language={'RU'} product='Recovery Machine' productLabel='Установка для восстановления' series='Recovery Machine' seriesLabel='Установка для восстановления' item='Recovery Machine' technicalDataImage={RMData} />} />



          <Route path='/products/condensate pumps/box series/slim box/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Box Series' seriesLabel='Box Series' item='Slim Box' />} />
          <Route path='/products/condensate pumps/box series/mini box/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Box Series' seriesLabel='Box Series' item='Mini Box' />} />
          <Route path='/products/condensate pumps/box series/maxi box/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Box Series' seriesLabel='Box Series' item='MaxiBox' />} />
          <Route path='/products/condensate pumps/box series/heart box/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Box Series' seriesLabel='Box Series' item='Heart Box' />} />
          <Route path='/products/condensate pumps/box series/easy box/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Box Series' seriesLabel='Box Series' item='EasyBox' />} />

          <Route path='/products/condensate pumps/box series/slim box/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Box Series' seriesLabel='Serie Box' item='Slim Box' />} />
          <Route path='/products/condensate pumps/box series/mini box/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Box Series' seriesLabel='Serie Box' item='Mini Box' />} />
          <Route path='/products/condensate pumps/box series/maxi box/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Box Series' seriesLabel='Serie Box' item='MaxiBox' />} />
          <Route path='/products/condensate pumps/box series/heart box/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Box Series' seriesLabel='Serie Box' item='Heart Box' />} />
          <Route path='/products/condensate pumps/box series/easy box/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Box Series' seriesLabel='Serie Box' item='EasyBox' />} />

          <Route path='/products/condensate pumps/box series/slim box/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Box Series' seriesLabel='Серия Box' item='Slim Box' />} />
          <Route path='/products/condensate pumps/box series/mini box/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Box Series' seriesLabel='Серия Box' item='Mini Box' />} />
          <Route path='/products/condensate pumps/box series/maxi box/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Box Series' seriesLabel='Серия Box' item='MaxiBox' />} />
          <Route path='/products/condensate pumps/box series/heart box/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Box Series' seriesLabel='Серия Box' item='Heart Box' />} />
          <Route path='/products/condensate pumps/box series/easy box/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Box Series' seriesLabel='Серия Box' item='EasyBox' />} />


          <Route path='/products/condensate pumps/mute series/mute box 20L/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Mute Series' seriesLabel='Mute Series' item='Mute Box 20L' />} />
          <Route path='/products/condensate pumps/mute series/mute box 40L/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Mute Series' seriesLabel='Mute Series' item='Mute Box 40L' />} />
          <Route path='/products/condensate pumps/mute series/mute tank/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Mute Series' seriesLabel='Mute Series' item='Mute Tank' />} />
          <Route path='/products/condensate pumps/mute series/mute wedge/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Mute Series' seriesLabel='Mute Series' item='Mute Wedge' />} />
          <Route path='/products/condensate pumps/mute series/mute corner/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Mute Series' seriesLabel='Mute Series' item='Mute Corner' />} />

          <Route path='/products/condensate pumps/mute series/mute box 20L/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Mute Series' seriesLabel='Serie Mute' item='Mute Box 20L' />} />
          <Route path='/products/condensate pumps/mute series/mute box 40L/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Mute Series' seriesLabel='Serie Mute' item='Mute Box 40L' />} />
          <Route path='/products/condensate pumps/mute series/mute tank/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Mute Series' seriesLabel='Serie Mute' item='Mute Tank' />} />
          <Route path='/products/condensate pumps/mute series/mute wedge/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Mute Series' seriesLabel='Serie Mute' item='Mute Wedge' />} />
          <Route path='/products/condensate pumps/mute series/mute corner/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Mute Series' seriesLabel='Serie Mute' item='Mute Corner' />} />

          <Route path='/products/condensate pumps/mute series/mute box 20L/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Mute Series' seriesLabel='Бесшумная Серия' item='Mute Box 20L' />} />
          <Route path='/products/condensate pumps/mute series/mute box 40L/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Mute Series' seriesLabel='Бесшумная Серия' item='Mute Box 40L' />} />
          <Route path='/products/condensate pumps/mute series/mute tank/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Mute Series' seriesLabel='Бесшумная Серия' item='Mute Tank' />} />
          <Route path='/products/condensate pumps/mute series/mute wedge/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Mute Series' seriesLabel='Бесшумная Серия' item='Mute Wedge' />} />
          <Route path='/products/condensate pumps/mute series/mute corner/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Mute Series' seriesLabel='Бесшумная Серия' item='Mute Corner' />} />


          <Route path='/products/condensate pumps/tank series/tank pump l/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tank Series' seriesLabel='Tank Series' item='Tank Pump-L' />} />
          <Route path='/products/condensate pumps/tank series/tank pump v/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tank Series' seriesLabel='Tank Series' item='Tank Pump-V' />} />

          <Route path='/products/condensate pumps/tank series/tank pump l/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tank Series' seriesLabel='Serie Tank' item='Tank Pump-L' />} />
          <Route path='/products/condensate pumps/tank series/tank pump v/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tank Series' seriesLabel='Serie Tank' item='Tank Pump-V' />} />

          <Route path='/products/condensate pumps/tank series/tank pump l/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tank Series' seriesLabel='Серия Tank' item='Tank Pump-L' />} />
          <Route path='/products/condensate pumps/tank series/tank pump v/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tank Series' seriesLabel='Серия Tank' item='Tank Pump-V' />} />


          <Route path='/products/condensate pumps/tranquil series/tranquil-I/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tranquil Series' seriesLabel='Tranquil Series' item='Tranquil-I' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-S/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tranquil Series' seriesLabel='Tranquil Series' item='Tranquil-S' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-X/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tranquil Series' seriesLabel='Tranquil Series' item='Tranquil-X' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-D/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tranquil Series' seriesLabel='Tranquil Series' item='Tranquil-D' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-T/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tranquil Series' seriesLabel='Tranquil Series' item='Tranquil-T' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-C/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Tranquil Series' seriesLabel='Tranquil Series' item='Tranquil-C' />} />

          <Route path='/products/condensate pumps/tranquil series/tranquil-I/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tranquil Series' seriesLabel='Serie Tranquil' item='Tranquil-I' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-S/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tranquil Series' seriesLabel='Serie Tranquil' item='Tranquil-S' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-X/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tranquil Series' seriesLabel='Serie Tranquil' item='Tranquil-X' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-D/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tranquil Series' seriesLabel='Serie Tranquil' item='Tranquil-D' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-T/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tranquil Series' seriesLabel='Serie Tranquil' item='Tranquil-T' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-C/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Tranquil Series' seriesLabel='Serie Tranquil' item='Tranquil-C' />} />


          <Route path='/products/condensate pumps/tranquil series/tranquil-I/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tranquil Series' seriesLabel='Серия Tranquil' item='Tranquil-I' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-S/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tranquil Series' seriesLabel='Серия Tranquil' item='Tranquil-S' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-X/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tranquil Series' seriesLabel='Серия Tranquil' item='Tranquil-X' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-D/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tranquil Series' seriesLabel='Серия Tranquil' item='Tranquil-D' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-T/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tranquil Series' seriesLabel='Серия Tranquil' item='Tranquil-T' />} />
          <Route path='/products/condensate pumps/tranquil series/tranquil-C/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Tranquil Series' seriesLabel='Серия Tranquil' item='Tranquil-C' />} />


          <Route path='/products/installation accessories/line set covers/wall penetration/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Wall Penetration' sizeChart={sizeChartWallPenetration} />} />
          <Route path='/products/installation accessories/line set covers/wall flange/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Wall Flange' sizeChart={sizeChartWallFlange} />} />
          <Route path='/products/installation accessories/line set covers/wall cover/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Wall Cover' sizeChart={sizeChartWallCover} />} />
          <Route path='/products/installation accessories/line set covers/union coupling/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Union Coupling' sizeChart={sizeChartUnionCoupling} />} />
          <Route path='/products/installation accessories/line set covers/t joint/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='T Joint' sizeChart={sizeChartTJoint} />} />
          <Route path='/products/installation accessories/line set covers/straight duct/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Straight Duct' sizeChart={sizeChartStraightDuct} />} />
          <Route path='/products/installation accessories/line set covers/soffit fittings/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Soffit Fittings' sizeChart={sizeChartSoffitFittings} />} />
          <Route path='/products/installation accessories/line set covers/reducer coupling/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Reducer Coupling' sizeChart={sizeChartReducerCoupling} />} />
          <Route path='/products/installation accessories/line set covers/flex joint/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Flex Joint' sizeChart={sizeChartFlexJoint} />} />
          <Route path='/products/installation accessories/line set covers/duct end/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Duct End' sizeChart={sizeChartDuctEnd} />} />
          <Route path='/products/installation accessories/line set covers/ceiling plate/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Ceiling Plate' sizeChart={sizeChartCeilingPlate} />} />
          <Route path='/products/installation accessories/line set covers/bridge bend/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='Bridge Bend' sizeChart={sizeChartBridgeBend} />} />
          <Route path='/products/installation accessories/line set covers/120 flat elbow/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='120 Flat Elbow' sizeChart={sizeChart120FlatElbow} />} />
          <Route path='/products/installation accessories/line set covers/120 elbow/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='120 Elbow' sizeChart={sizeChart120Elbow} />} />
          <Route path='/products/installation accessories/line set covers/90 flat elbow/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='90 Flat Elbow' sizeChart={sizeChart90FlatElbow} />} />
          <Route path='/products/installation accessories/line set covers/90 elbow vertical/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Line Set Cover' seriesLabel='Line Set Cover' item='90 Elbow (Vertical)' sizeChart={sizeChart90ElbowVertical} />} />

          <Route path='/products/installation accessories/line set covers/wall penetration/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Wall Penetration' sizeChart={sizeChartWallPenetration} />} />
          <Route path='/products/installation accessories/line set covers/wall flange/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Wall Flange' sizeChart={sizeChartWallFlange} />} />
          <Route path='/products/installation accessories/line set covers/wall cover/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Wall Cover' sizeChart={sizeChartWallCover} />} />
          <Route path='/products/installation accessories/line set covers/union coupling/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Union Coupling' sizeChart={sizeChartUnionCoupling} />} />
          <Route path='/products/installation accessories/line set covers/t joint/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='T Joint' sizeChart={sizeChartTJoint} />} />
          <Route path='/products/installation accessories/line set covers/straight duct/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Straight Duct' sizeChart={sizeChartStraightDuct} />} />
          <Route path='/products/installation accessories/line set covers/soffit fittings/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Soffit Fittings' sizeChart={sizeChartSoffitFittings} />} />
          <Route path='/products/installation accessories/line set covers/reducer coupling/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Reducer Coupling' sizeChart={sizeChartReducerCoupling} />} />
          <Route path='/products/installation accessories/line set covers/flex joint/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Flex Joint' sizeChart={sizeChartFlexJoint} />} />
          <Route path='/products/installation accessories/line set covers/duct end/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Duct End' sizeChart={sizeChartDuctEnd} />} />
          <Route path='/products/installation accessories/line set covers/ceiling plate/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Ceiling Plate' sizeChart={sizeChartCeilingPlate} />} />
          <Route path='/products/installation accessories/line set covers/bridge bend/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='Bridge Bend' sizeChart={sizeChartBridgeBend} />} />
          <Route path='/products/installation accessories/line set covers/120 flat elbow/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='120 Flat Elbow' sizeChart={sizeChart120FlatElbow} />} />
          <Route path='/products/installation accessories/line set covers/120 elbow/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='120 Elbow' sizeChart={sizeChart120Elbow} />} />
          <Route path='/products/installation accessories/line set covers/90 flat elbow/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='90 Flat Elbow' sizeChart={sizeChart90FlatElbow} />} />
          <Route path='/products/installation accessories/line set covers/90 elbow vertical/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Line Set Cover' seriesLabel='Cubierta de Tuberías' item='90 Elbow (Vertical)' sizeChart={sizeChart90ElbowVertical} />} />

          <Route path='/products/installation accessories/line set covers/wall penetration/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Wall Penetration' sizeChart={sizeChartWallPenetration} />} />
          <Route path='/products/installation accessories/line set covers/wall flange/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Wall Flange' sizeChart={sizeChartWallFlange} />} />
          <Route path='/products/installation accessories/line set covers/wall cover/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Wall Cover' sizeChart={sizeChartWallCover} />} />
          <Route path='/products/installation accessories/line set covers/union coupling/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Union Coupling' sizeChart={sizeChartUnionCoupling} />} />
          <Route path='/products/installation accessories/line set covers/t joint/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='T Joint' sizeChart={sizeChartTJoint} />} />
          <Route path='/products/installation accessories/line set covers/straight duct/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Straight Duct' sizeChart={sizeChartStraightDuct} />} />
          <Route path='/products/installation accessories/line set covers/soffit fittings/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Soffit Fittings' sizeChart={sizeChartSoffitFittings} />} />
          <Route path='/products/installation accessories/line set covers/reducer coupling/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Reducer Coupling' sizeChart={sizeChartReducerCoupling} />} />
          <Route path='/products/installation accessories/line set covers/flex joint/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Flex Joint' sizeChart={sizeChartFlexJoint} />} />
          <Route path='/products/installation accessories/line set covers/duct end/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Duct End' sizeChart={sizeChartDuctEnd} />} />
          <Route path='/products/installation accessories/line set covers/ceiling plate/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Ceiling Plate' sizeChart={sizeChartCeilingPlate} />} />
          <Route path='/products/installation accessories/line set covers/bridge bend/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='Bridge Bend' sizeChart={sizeChartBridgeBend} />} />
          <Route path='/products/installation accessories/line set covers/120 flat elbow/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='120 Flat Elbow' sizeChart={sizeChart120FlatElbow} />} />
          <Route path='/products/installation accessories/line set covers/120 elbow/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='120 Elbow' sizeChart={sizeChart120Elbow} />} />
          <Route path='/products/installation accessories/line set covers/90 flat elbow/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='90 Flat Elbow' sizeChart={sizeChart90FlatElbow} />} />
          <Route path='/products/installation accessories/line set covers/90 elbow vertical/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Line Set Cover' seriesLabel='Кожух для трубопровода' item='90 Elbow (Vertical)' sizeChart={sizeChart90ElbowVertical} />} />


          <Route path='/products/installation accessories/tubing/pvc reinforced/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tubing' seriesLabel='Tubing' item='PVC Reinforced Pipe' sizeChart={sizeChartPVCReinforced} />} />
          <Route path='/products/installation accessories/tubing/transparent condensation/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tubing' seriesLabel='Tubing' item='Transparent Condensation Pipe' sizeChart={sizeChartTransparentCondensation} />} />
          <Route path='/products/installation accessories/tubing/corrugated/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tubing' seriesLabel='Tubing' item='Corrugated Pipe' sizeChart={sizeChartCorrugated} />} />
          <Route path='/products/installation accessories/tubing/condensation drain/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tubing' seriesLabel='Tubing' item='Condensation Drain Pipe' sizeChart={sizeChartCondensationDrain} />} />

          <Route path='/products/installation accessories/tubing/pvc reinforced/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tubing' seriesLabel='Tubos' item='PVC Reinforced Pipe' sizeChart={sizeChartPVCReinforced} />} />
          <Route path='/products/installation accessories/tubing/transparent condensation/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tubing' seriesLabel='Tubos' item='Transparent Condensation Pipe' sizeChart={sizeChartTransparentCondensation} />} />
          <Route path='/products/installation accessories/tubing/corrugated/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tubing' seriesLabel='Tubos' item='Corrugated Pipe' sizeChart={sizeChartCorrugated} />} />
          <Route path='/products/installation accessories/tubing/condensation drain/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tubing' seriesLabel='Tubos' item='Condensation Drain Pipe' sizeChart={sizeChartCondensationDrain} />} />

          <Route path='/products/installation accessories/tubing/pvc reinforced/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tubing' seriesLabel='Трубы' item='PVC Reinforced Pipe' sizeChart={sizeChartPVCReinforced} />} />
          <Route path='/products/installation accessories/tubing/transparent condensation/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tubing' seriesLabel='Трубы' item='Transparent Condensation Pipe' sizeChart={sizeChartTransparentCondensation} />} />
          <Route path='/products/installation accessories/tubing/corrugated/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tubing' seriesLabel='Трубы' item='Corrugated Pipe' sizeChart={sizeChartCorrugated} />} />
          <Route path='/products/installation accessories/tubing/condensation drain/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tubing' seriesLabel='Трубы' item='Condensation Drain Pipe' sizeChart={sizeChartCondensationDrain} />} />


          <Route path='/products/installation accessories/pump ancillaries/vinyl tubing/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries' item='Vinyl Tubing' />} />
          <Route path='/products/installation accessories/pump ancillaries/pump float/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries' item='Pump Float' />} />
          <Route path='/products/installation accessories/pump ancillaries/inline reservoir/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries' item='Inline Reservoir' />} />
          <Route path='/products/installation accessories/pump ancillaries/inlet hose/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries' item='Inlet Hose' />} />
          <Route path='/products/installation accessories/pump ancillaries/inlet filter/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries' item='Inlet Filter' />} />
          <Route path='/products/installation accessories/pump ancillaries/fast clip/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries' item='Fast Clip' />} />
          <Route path='/products/installation accessories/pump ancillaries/anti-siphon joint/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pump Ancillaries' seriesLabel='Pump Ancillaries' item='Anti-Siphon Joint' />} />

          <Route path='/products/installation accessories/pump ancillaries/vinyl tubing/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' item='Vinyl Tubing' />} />
          <Route path='/products/installation accessories/pump ancillaries/pump float/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' item='Pump Float' />} />
          <Route path='/products/installation accessories/pump ancillaries/inline reservoir/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' item='Inline Reservoir' />} />
          <Route path='/products/installation accessories/pump ancillaries/inlet hose/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' item='Inlet Hose' />} />
          <Route path='/products/installation accessories/pump ancillaries/inlet filter/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' item='Inlet Filter' />} />
          <Route path='/products/installation accessories/pump ancillaries/fast clip/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' item='Fast Clip' />} />
          <Route path='/products/installation accessories/pump ancillaries/anti-siphon joint/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pump Ancillaries' seriesLabel='Accesorios para Bomba' item='Anti-Siphon Joint' />} />

          <Route path='/products/installation accessories/pump ancillaries/vinyl tubing/RU' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' item='Vinyl Tubing' />} />
          <Route path='/products/installation accessories/pump ancillaries/pump float/RU' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' item='Pump Float' />} />
          <Route path='/products/installation accessories/pump ancillaries/inline reservoir/RU' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' item='Inline Reservoir' />} />
          <Route path='/products/installation accessories/pump ancillaries/inlet hose/RU' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' item='Inlet Hose' />} />
          <Route path='/products/installation accessories/pump ancillaries/inlet filter/RU' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' item='Inlet Filter' />} />
          <Route path='/products/installation accessories/pump ancillaries/fast clip/RU' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' item='Fast Clip' />} />
          <Route path='/products/installation accessories/pump ancillaries/anti-siphon joint/RU' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pump Ancillaries' seriesLabel='Дополнительные аксессуары для насоса' item='Anti-Siphon Joint' />} />


          <Route path='/products/installation accessories/pre-installation box/32cf101/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF101' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf102/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF102' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf103/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF103' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf104/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF104' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf105/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF105' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf106/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF106' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf107/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF107' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf108/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF108' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf109/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Pre-Installation Box' seriesLabel='Pre-Installation Box' item='32CF109' />} />

          <Route path='/products/installation accessories/pre-installation box/32cf101/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF101' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf102/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF102' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf103/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF103' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf104/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF104' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf105/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF105' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf106/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF106' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf107/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF107' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf108/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF108' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf109/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Pre-Installation Box' seriesLabel='Caja de Preinstalación' item='32CF109' />} />

          <Route path='/products/installation accessories/pre-installation box/32cf101/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF101' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf102/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF102' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf103/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF103' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf104/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF104' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf105/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF105' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf106/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF106' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf107/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF107' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf108/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF108' />} />
          <Route path='/products/installation accessories/pre-installation box/32cf109/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Pre-Installation Box' seriesLabel='Предустановочный бокс' item='32CF109' />} />


          <Route path='/products/installation accessories/tape/aluminum foil duct tape/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tape' seriesLabel='Tape' item='Aluminum Foil Duct Tape' />} />
          <Route path='/products/installation accessories/tape/insulating non-adhesive tape/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tape' seriesLabel='Tape' item='Insulating Non-Adhesive Tape' />} />
          <Route path='/products/installation accessories/tape/insulating self-adhesive tape/EN' element={<ProductPage language={'EN'} product='Installation Accessories' productLabel='Installation Accessories' series='Tape' seriesLabel='Tape' item='Insulating Self-Adhesive Tape' sizeChart={sizeChartInsulatingSelfAdhesiveTape} />} />

          <Route path='/products/installation accessories/tape/aluminum foil duct tape/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tape' seriesLabel='Cinta' item='Aluminum Foil Duct Tape' />} />
          <Route path='/products/installation accessories/tape/insulating non-adhesive tape/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tape' seriesLabel='Cinta' item='Insulating Non-Adhesive Tape' />} />
          <Route path='/products/installation accessories/tape/insulating self-adhesive tape/ES' element={<ProductPage language={'ES'} product='Installation Accessories' productLabel='Accesorios de Instalación' series='Tape' seriesLabel='Cinta' item='Insulating Self-Adhesive Tape' sizeChart={sizeChartInsulatingSelfAdhesiveTape} />} />

          <Route path='/products/installation accessories/tape/aluminum foil duct tape/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tape' seriesLabel='Лента' item='Aluminum Foil Duct Tape' />} />
          <Route path='/products/installation accessories/tape/insulating non-adhesive tape/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tape' seriesLabel='Лента' item='Insulating Non-Adhesive Tape' />} />
          <Route path='/products/installation accessories/tape/insulating self-adhesive tape/RU' element={<ProductPage language={'RU'} product='Installation Accessories' productLabel='Принадлежности для установки' series='Tape' seriesLabel='Лента' item='Insulating Self-Adhesive Tape' sizeChart={sizeChartInsulatingSelfAdhesiveTape} />} />


          {/* <Route path='/products/condensate pumps/condensate switch/float switch-fs1/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Condensate Switch' seriesLabel='Condensate Switch' item='Float Switch - FS1' />} /> */}
          <Route path='/products/condensate switch/condensate switch/float switch-fs2/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Condensate Switch' seriesLabel='Condensate Switch' item='Float Switch - FS2' />} />
          <Route path='/products/condensate switch/condensate switch/float switch-fs3/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Condensate Switch' seriesLabel='Condensate Switch' item='Float Switch - FS3' />} />
          {/* <Route path='/products/condensate pumps/condensate switch/on guard-og01/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Condensate Switch' seriesLabel='Condensate Switch' item='On Guard - OG01' />} /> */}
          <Route path='/products/condensate switch/condensate switch/condensate drain line cleaner/EN' element={<ProductPage language={'EN'} product='Condensate Pumps' productLabel='Condensate Pumps' series='Condensate Switch' seriesLabel='Condensate Switch' item='Condensate Drain Line Cleaner' />} />

          {/* <Route path='/products/condensate pumps/condensate switch/float switch-fs1/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Condensate Switch' seriesLabel='Interruptor de Condensado' item='Float Switch - FS1' />} /> */}
          <Route path='/products/condensate switch/condensate switch/float switch-fs2/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Condensate Switch' seriesLabel='Interruptor de Condensado' item='Float Switch - FS2' />} />
          <Route path='/products/condensate switch/condensate switch/float switch-fs3/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Condensate Switch' seriesLabel='Interruptor de Condensado' item='Float Switch - FS3' />} />
          {/* <Route path='/products/condensate pumps/condensate switch/on guard-og01/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Condensate Switch' seriesLabel='Interruptor de Condensado' item='On Guard - OG01' />} /> */}
          <Route path='/products/condensate switch/condensate switch/condensate drain line cleaner/ES' element={<ProductPage language={'ES'} product='Condensate Pumps' productLabel='Bombas de Condensado' series='Condensate Switch' seriesLabel='Interruptor de Condensado' item='Condensate Drain Line Cleaner' />} />

          {/* <Route path='/products/condensate pumps/condensate switch/float switch-fs1/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Condensate Switch' seriesLabel='Конденсатные переключатели' item='Float Switch - FS1' />} /> */}
          <Route path='/products/condensate switch/condensate switch/float switch-fs2/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Condensate Switch' seriesLabel='Конденсатные переключатели' item='Float Switch - FS2' />} />
          <Route path='/products/condensate switch/condensate switch/float switch-fs3/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Condensate Switch' seriesLabel='Конденсатные переключатели' item='Float Switch - FS3' />} />
          {/* <Route path='/products/condensate pumps/condensate switch/on guard-og01/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Condensate Switch' seriesLabel='Конденсатные переключатели' item='On Guard - OG01' />} /> */}
          <Route path='/products/condensate switch/condensate switch/condensate drain line cleaner/RU' element={<ProductPage language={'RU'} product='Condensate Pumps' productLabel='Конденсатные насосы' series='Condensate Switch' seriesLabel='Конденсатные переключатели' item='Condensate Drain Line Cleaner' />} />


          <Route path='/products/support for condensation unit/split mounting/acb-a/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-A' sizeChart={sizeChartSplitMountACB_A} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-b/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-B' sizeChart={sizeChartSplitMountACB_B} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-c/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-C' sizeChart={sizeChartSplitMountACB_C} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-d/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-D' sizeChart={sizeChartSplitMountACB_D} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-e/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-E' sizeChart={sizeChartSplitMountACB_E} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-f/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-F' sizeChart={sizeChartSplitMountACB_F} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-g/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-G' sizeChart={sizeChartSplitMountACB_G} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-h/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='ACB-H' sizeChart={sizeChartSplitMountACB_H} />} />
          <Route path='/products/support for condensation unit/split mounting/21cf74/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Split Mounting' seriesLabel='Mini Split Mounting' item='21CF74' sizeChart={sizeChartSplitMount21CF74} />} />

          <Route path='/products/support for condensation unit/split mounting/acb-a/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-A' sizeChart={sizeChartSplitMountACB_A} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-b/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-B' sizeChart={sizeChartSplitMountACB_B} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-c/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-C' sizeChart={sizeChartSplitMountACB_C} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-d/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-D' sizeChart={sizeChartSplitMountACB_D} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-e/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-E' sizeChart={sizeChartSplitMountACB_E} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-f/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-F' sizeChart={sizeChartSplitMountACB_F} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-g/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-G' sizeChart={sizeChartSplitMountACB_G} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-h/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='ACB-H' sizeChart={sizeChartSplitMountACB_H} />} />
          <Route path='/products/support for condensation unit/split mounting/21cf74/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Split Mounting' seriesLabel='Montaje para Mini Split' item='21CF74' sizeChart={sizeChartSplitMount21CF74} />} />

          <Route path='/products/support for condensation unit/split mounting/acb-a/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-A' sizeChart={sizeChartSplitMountACB_A} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-b/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-B' sizeChart={sizeChartSplitMountACB_B} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-c/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-C' sizeChart={sizeChartSplitMountACB_C} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-d/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-D' sizeChart={sizeChartSplitMountACB_D} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-e/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-E' sizeChart={sizeChartSplitMountACB_E} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-f/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-F' sizeChart={sizeChartSplitMountACB_F} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-g/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-G' sizeChart={sizeChartSplitMountACB_G} />} />
          <Route path='/products/support for condensation unit/split mounting/acb-h/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='ACB-H' sizeChart={sizeChartSplitMountACB_H} />} />
          <Route path='/products/support for condensation unit/split mounting/21cf74/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Split Mounting' seriesLabel='Крепление мини-сплита' item='21CF74' sizeChart={sizeChartSplitMount21CF74} />} />


          <Route path='/products/support for condensation unit/vibration isolator/AA3040/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AA30/40' sizeChart={sizeChart51CF4} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AG3545/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AG35/45' sizeChart={sizeChart51CF1} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AGB3545/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AGB35/45' sizeChart={sizeChart51CF3} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AT/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AT' sizeChart={sizeChart51CF6} />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW01/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW01' sizeChart={sizeChartRW01} />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW02/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW02' />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW03/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW03' />} />
          <Route path='/products/support for condensation unit/vibration isolator/S30/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='S30' sizeChart={sizeChartS30} />} />
          <Route path='/products/support for condensation unit/vibration isolator/SG4060/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='SG40/60' sizeChart={sizeChartSG4060} />} />

          <Route path='/products/support for condensation unit/vibration isolator/AA3040/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AA30/40' sizeChart={sizeChart51CF4} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AG3545/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AG35/45' sizeChart={sizeChart51CF1} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AGB3545/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AGB35/45' sizeChart={sizeChart51CF3} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AT/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AT' sizeChart={sizeChart51CF6} />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW01/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW01' sizeChart={sizeChartRW01} />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW02/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW02' />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW03/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW03' />} />
          <Route path='/products/support for condensation unit/vibration isolator/S30/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='S30' sizeChart={sizeChartS30} />} />
          <Route path='/products/support for condensation unit/vibration isolator/SG4060/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='SG40/60' sizeChart={sizeChartSG4060} />} />

          <Route path='/products/support for condensation unit/vibration isolator/AA3040/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AA30/40' sizeChart={sizeChart51CF4} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AG3545/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AG35/45' sizeChart={sizeChart51CF1} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AGB3545/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AGB35/45' sizeChart={sizeChart51CF3} />} />
          <Route path='/products/support for condensation unit/vibration isolator/AT/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='AT' sizeChart={sizeChart51CF6} />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW01/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW01' sizeChart={sizeChartRW01} />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW02/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW02' />} />
          <Route path='/products/support for condensation unit/vibration isolator/RW03/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='RW03' />} />
          <Route path='/products/support for condensation unit/vibration isolator/S30/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='S30' sizeChart={sizeChartS30} />} />
          <Route path='/products/support for condensation unit/vibration isolator/SG4060/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Vibration Isolator' seriesLabel='Vibration Isolator' item='SG40/60' sizeChart={sizeChartSG4060} />} />


          <Route path='/products/support for condensation unit/floor support/floor support 1/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Floor Support' seriesLabel='Floor Support' item='Floor Support - 1' sizeChart={sizeChartFloorSupport1} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 2A/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Floor Support' seriesLabel='Floor Support' item='Floor Support - 2A' sizeChart={sizeChartFloorSupport2A} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 2B/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Floor Support' seriesLabel='Floor Support' item='Floor Support - 2B' sizeChart={sizeChartFloorSupport2B} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 3/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Floor Support' seriesLabel='Floor Support' item='Floor Support - 3' sizeChart={sizeChartFloorSupport3} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 4A/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Floor Support' seriesLabel='Floor Support' item='Floor Support - 4A' sizeChart={sizeChartFloorSupport4A} />} />

          <Route path='/products/support for condensation unit/floor support/floor support 1/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Floor Support' seriesLabel='Soporte para Piso' item='Floor Support - 1' sizeChart={sizeChartFloorSupport1} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 2A/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Floor Support' seriesLabel='Soporte para Piso' item='Floor Support - 2A' sizeChart={sizeChartFloorSupport2A} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 2B/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Floor Support' seriesLabel='Soporte para Piso' item='Floor Support - 2B' sizeChart={sizeChartFloorSupport2B} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 3/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Floor Support' seriesLabel='Soporte para Piso' item='Floor Support - 3' sizeChart={sizeChartFloorSupport3} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 4A/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Floor Support' seriesLabel='Soporte para Piso' item='Floor Support - 4A' sizeChart={sizeChartFloorSupport4A} />} />

          <Route path='/products/support for condensation unit/floor support/floor support 1/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Floor Support' seriesLabel='Поддержка для Пола' item='Floor Support - 1' sizeChart={sizeChartFloorSupport1} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 2A/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Floor Support' seriesLabel='Поддержка для Пола' item='Floor Support - 2A' sizeChart={sizeChartFloorSupport2A} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 2B/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Floor Support' seriesLabel='Поддержка для Пола' item='Floor Support - 2B' sizeChart={sizeChartFloorSupport2B} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 3/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Floor Support' seriesLabel='Поддержка для Пола' item='Floor Support - 3' sizeChart={sizeChartFloorSupport3} />} />
          <Route path='/products/support for condensation unit/floor support/floor support 4A/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Floor Support' seriesLabel='Поддержка для Пола' item='Floor Support - 4A' sizeChart={sizeChartFloorSupport4A} />} />


          <Route path='/products/support for condensation unit/big foot/acr-a/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Big Foot' seriesLabel='Big Foot' item='ACR-A' sizeChart={sizeChartACR_A} />} />
          <Route path='/products/support for condensation unit/big foot/acr-c/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Big Foot' seriesLabel='Big Foot' item='ACR-C' />} />
          <Route path='/products/support for condensation unit/big foot/acr-d/EN' element={<ProductPage language={'EN'} product='Support for Condensation Unit' productLabel='Support for Condensation Unit' series='Big Foot' seriesLabel='Big Foot' item='ACR-D' />} />

          <Route path='/products/support for condensation unit/big foot/acr-a/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Big Foot' seriesLabel='Gran Pie' item='ACR-A' sizeChart={sizeChartACR_A} />} />
          <Route path='/products/support for condensation unit/big foot/acr-c/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Big Foot' seriesLabel='Gran Pie' item='ACR-C' />} />
          <Route path='/products/support for condensation unit/big foot/acr-d/ES' element={<ProductPage language={'ES'} product='Support for Condensation Unit' productLabel='Soporte para Unidad de Condensación' series='Big Foot' seriesLabel='Gran Pie' item='ACR-D' />} />

          <Route path='/products/support for condensation unit/big foot/acr-a/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Big Foot' seriesLabel='Большая нога' item='ACR-A' sizeChart={sizeChartACR_A} />} />
          <Route path='/products/support for condensation unit/big foot/acr-c/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Big Foot' seriesLabel='Большая нога' item='ACR-C' />} />
          <Route path='/products/support for condensation unit/big foot/acr-d/RU' element={<ProductPage language={'RU'} product='Support for Condensation Unit' productLabel='Поддержка для Конденсационного Блока' series='Big Foot' seriesLabel='Большая нога' item='ACR-D' />} />


          <Route path='/resources/technical sheets/EN' element={<TechnicalSheets language={'EN'} resource='Technical Sheets' />} />
          <Route path='/resources/certificates/EN' element={<Certificates language={'EN'} resource='Certificates' />} />
          <Route path='/resources/brochures/EN' element={<Brochures language={'EN'} resource='Brochures' />} />
          <Route path='/resources/videos/EN' element={<VideosPage language={'EN'} resource='Videos' />} />

          <Route path='/resources/technical sheets/ES' element={<TechnicalSheets language={'ES'} resource='Technical Sheets' />} />
          <Route path='/resources/certificates/ES' element={<Certificates language={'ES'} resource='Certificates' />} />
          <Route path='/resources/brochures/ES' element={<Brochures language={'ES'} resource='Brochures' />} />
          <Route path='/resources/videos/ES' element={<VideosPage language={'ES'} resource='Videos' />} />

          <Route path='/resources/technical sheets/RU' element={<TechnicalSheets language={'RU'} resource='Technical Sheets' />} />
          <Route path='/resources/certificates/RU' element={<Certificates language={'RU'} resource='Certificates' />} />
          <Route path='/resources/brochures/RU' element={<Brochures language={'RU'} resource='Brochures' />} />
          <Route path='/resources/videos/RU' element={<VideosPage language={'RU'} resource='Videos' />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
