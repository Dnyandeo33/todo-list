import createItem from '../components/createItem.js';
import data from '../data.js';
import dom from '../dom.js';

const loadHandler = () => {
    data.items.forEach((itemData) => {
        const itemDom = createItem(itemData);
        dom.itemsList.append(itemDom);
    });
};

export default loadHandler;
