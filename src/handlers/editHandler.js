import data from '../data.js';
import dom from '../dom.js';

const editHandler = (id) => {
    const itemId = Number(id)
    dom.submitBtn.innerText = 'Edit';
    const item = data.items.find((item) => item.id === itemId);
    dom.input.value = item.text;
};

export default editHandler;
