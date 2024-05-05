import data from '../data.js';
import dom from '../dom.js';

const removeHandler = (id) => {
    data.items = data.items.filter((item) => item.id !== id);

    document.getElementById(id).remove();
    dom.submitBtn.innerText = 'Submit';
    dom.input.value = '';
};

export default removeHandler;