import jug from '../components/img/Juggernaut.png';
import Monkey from '..//components/img/Monkey King.jpg';
import Zeus from '..//components/img/zeus.jpg';
import Legion from '..//components/img/Legion Commander.jpg';
import Rubick from '..//components/img/Rubick.jpg';
import Pudge from '..//components/img/pudge.png';
import Phantom from '..//components/img/Phantom Assasin.jpg';
import Windranger from '..//components/img/Windranger.jpg';
export const arcanaList = {
    "Monkey King":{price:123,image: Monkey},
    "Zeus":{price: 100,image:Zeus},
    "Juggernaut": { price: 35, image: jug },
    "Legion Commander": { price: 30, image: Legion },
    "Rubick": { price: 25, image: Rubick },
    "Pudge": { price: 20, image: Pudge },
    "Phantom Assasin": {price: 15, image:Phantom},
    "Windranger":{price:10,image:Windranger}
};

export const findArcanaByPrice = (price) => {
    return Object.entries(arcanaList).reduce((acc, [key, value]) => {
        if (price >= value.price && (!acc || value.price > acc.price)) {
            return { name: key, ...value };
        }
        return acc;
    }, null);
};