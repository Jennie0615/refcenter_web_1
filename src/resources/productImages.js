
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const productImages = {
    'Mute Box 20L': [],

    'Mute Box 40L': [],

    'Mute Tank': [],

    'Mute Wedge': [],

    'Slim Box': [],

    'Mini Box': [],

    'MaxiBox': [],

    'Heart Pump': [],

    'EasyBox': [],

    'Tank Pump': [],

    'Tranquil-I': [],

    'Tranquil-S': [],

};

export default productImages;