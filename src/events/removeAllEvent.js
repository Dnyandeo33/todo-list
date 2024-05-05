import data from '../data.js';
import dom from '../dom.js';

const removeAllEvent = () => {
    dom.clearBtn.addEventListener('click', () => {
        dom.itemsList.innerHTML = '';
        data.items = [];
    });
};

export default removeAllEvent;