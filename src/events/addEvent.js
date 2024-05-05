import dom from "../dom.js";
import addHandler from '../handlers/addHandler.js';
import editHandler from "../handlers/editHandler.js";

const addEvent = () => {
    dom.submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const value = dom.input.value
        if (!value) {
            alert('Enter something...')
            return;
        }
        addHandler(dom.input.value);

    });
};

export default addEvent;