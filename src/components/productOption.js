import './productOption.css';
import React from 'react';

import easyBoxImage from '../resources/images/easy box/1.jpg';
import heartBoxImage from '../resources/images/heart box/1.JPG';
import maxiBoxImage from '../resources/images/maxi box/1.jpg';
import miniBoxImage from '../resources/images/mini box/1.jpg';
import muteBox20LImage from '../resources/images/mute box 20L/1.jpg';
import muteBox40LImage from '../resources/images/mute box 40L/1.jpg';
import muteTankImage from '../resources/images/mute tank/1.jpg';
import muteWedgeImage from '../resources/images/mute wedge/1.jpg';
import slimBoxImage from '../resources/images/slim box/1.JPG';
import tankPumpImageL from '../resources/images/tank pump L/1.jpg';
import tankPumpImageV from '../resources/images/tank pump V/1.jpg';
import tranquilIImage from '../resources/images/tranquil-I/1.JPG';
import tranquilSImage from '../resources/images/tranquil-S/1.jpg';
import tranquilDImage from '../resources/images/tranquil-D/1.jpg';
import tranquilXImage from '../resources/images/tranquil-X/1.jpg';
import tranquilCImage from '../resources/images/tranquil-C/1.jpg';
import muteCornerImage from '../resources/images/mute corner/1.jpg';
import pvcReinforcedImage from '../resources/images/pvc reinforced pipe/1.jpg';
import transparentCondensationImage from '../resources/images/transparent condensation pipe/1.jpg';
import corrugatedImage from '../resources/images/corrugated pipe/1.jpg';
import condensationDrainImage from '../resources/images/condensation drain pipe/1.jpg';
import vinylTubingImage from '../resources/images/vinyl tubing/1.jpg';
import pumpFloatImage from '../resources/images/pump float/1.jpg';
import inlineReservoirImage from '../resources/images/inline reservoir/1.jpg';
import inletHoseImage from '../resources/images/inlet hose/1.jpg';
import inletFilterImage from '../resources/images/inlet filter/1.jpg';
import fastClipImage from '../resources/images/fast clip/1.jpg';
import antiSiphonJointImage from '../resources/images/anti-siphon joint/1.jpg';
import box32cf101 from '../resources/images/32cf101/1.jpg';
import box32cf102 from '../resources/images/32cf102/1.jpg';
import box32cf103 from '../resources/images/32cf103/1.jpg';
import box32cf104 from '../resources/images/32cf104/1.jpg';
import box32cf105 from '../resources/images/32cf105/1.jpg';
import box32cf106 from '../resources/images/32cf106/1.jpg';
import box32cf107 from '../resources/images/32cf107/1.jpg';
import box32cf108 from '../resources/images/32cf108/1.jpg';
import box32cf109 from '../resources/images/32cf109/1.jpg';
import aluminumFoilTape from '../resources/images/aluminum foil duct tape/1.jpg';
import insulatingNonAdhesiveTape from '../resources/images/insulating non-adhesive tape/1.jpg';
import insulatingSelfAdhesiveTape from '../resources/images/insulating self-adhesive tape/1.jpg';
import floatSwitch2Image from '../resources/images/fs-2/1.jpg';
import floatSwitch3Image from '../resources/images/fs-3/1.jpg';
import condensateDrainLineImage from '../resources/images/cleaner/1.jpg';
import splitMountACB_AImage from '../resources/images/acb-a/1.jpg';
import splitMountACB_BImage from '../resources/images/acb-b/1.jpg';
import splitMountACB_CImage from '../resources/images/acb-c/1.jpg';
import splitMountACB_DImage from '../resources/images/acb-d/1.jpg';
import splitMountACB_EImage from '../resources/images/acb-e/1.jpg';
import splitMountACB_FImage from '../resources/images/acb-f/1.jpg';
import splitMountACB_GImage from '../resources/images/acb-g/1.jpg';
import splitMountACB_HImage from '../resources/images/acb-h/1.jpg';
import splitMount21CF74Image from '../resources/images/21cf74/1.jpg';
import isolatorAA3040Image from '../resources/images/aa3040/1.jpg';
import isolatorAG3545Image from '../resources/images/ag3545/1.jpg';
import isolatorAGB3545Image from '../resources/images/agb3545/1.jpg';
import isolatorATImage from '../resources/images/at/1.jpg';
import isolatorRW01Image from '../resources/images/rw01/1.jpg';
import isolatorRW02Image from '../resources/images/rw02/1.jpg';
import isolatorRW03Image from '../resources/images/rw03/1.jpg';
import isolatorS30Image from '../resources/images/s30/1.jpg';
import isolatorSG4060Image from '../resources/images/sg4060/1.jpg';
import floorSupport1Image from '../resources/images/floor support-1/1.jpg';
import floorSupport2AImage from '../resources/images/floor support-2a/1.jpg';
import floorSupport2BImage from '../resources/images/floor support-2b/1.jpg';
import floorSupport3Image from '../resources/images/floor support-3/1.jpg';
import floorSupport4AImage from '../resources/images/floor support-4a/1.jpg';
import bigFootACR_AImage from '../resources/images/acr-a/1.jpg';
import bigFootACR_CImage from '../resources/images/acr-c/1.jpg';
import bigFootACR_DImage from '../resources/images/acr-d/1.jpg';
import wallPenetrationImage from '../resources/images/wall penetration/1.jpg';
import wallFlangeImage from '../resources/images/wall flange/1.jpg';
import wallCoverImage from '../resources/images/wall cover/1.jpg';
import unionCouplingImage from '../resources/images/union coupling/1.jpg';
import tjointImage from '../resources/images/t joint/1.jpg';
import straightDuctImage from '../resources/images/straight duct/1.jpg';
import soffitFittingsImage from '../resources/images/soffit fittings/1.jpg';
import reducerCouplingsImage from '../resources/images/reducer coupling/1.jpg';
import flexJointImage from '../resources/images/flex joint/1.jpg';
import ductEndImage from '../resources/images/duct end/1.jpg';
import ceilingPlateImage from '../resources/images/ceiling plate/1.jpg';
import bridgeBendImage from '../resources/images/bridge bend/1.jpg';
import flatElbow120Image from '../resources/images/120 flat elbow/1.jpg';
import elbow120Image from '../resources/images/120 elbow/1.jpg';
import flatElbow90Image from '../resources/images/90 flat elbow/1.jpg';
import elbowVertical90Image from '../resources/images/90 elbow vertical/1.jpg';

const ProductOption = (props) => {

    const productOptionImage = {
        'Mute Box 20L': muteBox20LImage,
        'Mute Box 40L': muteBox40LImage,
        'Mute Tank': muteTankImage,
        'Mute Wedge': muteWedgeImage,
        'Mute Corner' : muteCornerImage,
        'Slim Box': slimBoxImage,
        'Mini Box': miniBoxImage,
        'MaxiBox': maxiBoxImage,
        'Heart Box': heartBoxImage,
        'EasyBox': easyBoxImage,
        'Tank Pump-V': tankPumpImageV,
        'Tank Pump-L': tankPumpImageL,
        'Tranquil-I': tranquilIImage,
        'Tranquil-S': tranquilSImage,
        'Tranquil-X': tranquilXImage,
        'Tranquil-D': tranquilDImage,
        'Tranquil-C': tranquilCImage,
        'PVC Reinforced Pipe': pvcReinforcedImage,
        'Transparent Condensation Pipe': transparentCondensationImage,
        'Corrugated Pipe': corrugatedImage,
        'Condensation Drain Pipe': condensationDrainImage,
        'Vinyl Tubing': vinylTubingImage,
        'Pump Float': pumpFloatImage,
        'Inline Reservoir': inlineReservoirImage,
        'Inlet Hose': inletHoseImage,
        'Inlet Filter': inletFilterImage,
        'Fast Clip': fastClipImage,
        'Anti-Siphon Joint': antiSiphonJointImage,
        '32CF101': box32cf101,
        '32CF102': box32cf102,
        '32CF103': box32cf103,
        '32CF104': box32cf104,
        '32CF105': box32cf105,
        '32CF106': box32cf106,
        '32CF107': box32cf107,
        '32CF108': box32cf108,
        '32CF109': box32cf109,
        'Aluminum Foil Duct Tape': aluminumFoilTape,
        'Insulating Non-Adhesive Tape': insulatingNonAdhesiveTape,
        'Insulating Self-Adhesive Tape': insulatingSelfAdhesiveTape,
        'Float Switch - FS2': floatSwitch2Image,
        'Float Switch - FS3': floatSwitch3Image,
        'Condensate Drain Line Cleaner': condensateDrainLineImage,
        'ACB-A': splitMountACB_AImage,
        'ACB-B': splitMountACB_BImage,
        'ACB-C': splitMountACB_CImage,
        'ACB-D': splitMountACB_DImage,
        'ACB-E': splitMountACB_EImage,
        'ACB-F': splitMountACB_FImage,
        'ACB-G': splitMountACB_GImage,
        'ACB-H': splitMountACB_HImage,
        '21CF74': splitMount21CF74Image,
        'AA30/40': isolatorAA3040Image,
        'AG35/45': isolatorAG3545Image,
        'AGB35/45': isolatorAGB3545Image,
        'AT': isolatorATImage,
        'RW01': isolatorRW01Image,
        'RW02': isolatorRW02Image,
        'RW03': isolatorRW03Image,
        'S30': isolatorS30Image,
        'SG40/60': isolatorSG4060Image,
        'Floor Support - 1': floorSupport1Image,
        'Floor Support - 2A': floorSupport2AImage,
        'Floor Support - 2B': floorSupport2BImage,
        'Floor Support - 3': floorSupport3Image,
        'Floor Support - 4A': floorSupport4AImage,
        'ACR-A': bigFootACR_AImage,
        'ACR-C': bigFootACR_CImage,
        'ACR-D': bigFootACR_DImage,
        'Wall Penetration': wallPenetrationImage,
        'Wall Flange': wallFlangeImage,
        'Wall Cover': wallCoverImage,
        'Union Coupling': unionCouplingImage,
        'T Joint': tjointImage,
        'Straight Duct': straightDuctImage,
        'Soffit Fittings': soffitFittingsImage,
        'Reducer Coupling': reducerCouplingsImage,
        'Flex Joint': flexJointImage,
        'Duct End': ductEndImage,
        'Ceiling Plate': ceilingPlateImage,
        'Bridge Bend': bridgeBendImage,
        '120 Flat Elbow': flatElbow120Image,
        '120 Elbow': elbow120Image,
        '90 Flat Elbow': flatElbow90Image,
        '90 Elbow (Vertical)': elbowVertical90Image,
    };

    return (
        <a
            className='series-option'
            href={`/products/${props.product.toLowerCase()}/${props.series.toLowerCase()}/${props.item}/${props.language}`}
        >
            <img className='product-option-image' src={productOptionImage[props.name]} />
            <div className='product-option-text'>{props.name}</div>
        </a>
    );
}

export default ProductOption;