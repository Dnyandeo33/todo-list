import createTodo from '../components/createItem.js';
import data from "../data.js";
import dom from "../dom.js";

const addHandler = (value) => {
    if (dom.submitBtn.innerText === 'Edit') {
        handleEdit(value);
    } else {
        handleAdd(value);
    }
};

// handle add
const handleAdd = (value) => {
    const newItem = {
        id: data.id++,
        text: value,
    };
    data.items.push(newItem);

    const newItemDom = createTodo(newItem);
    dom.itemsList.prepend(newItemDom);
    dom.input.value = '';
};

// handle edit
const handleEdit = (value) => {
    const editedItem = document.querySelector('.selected');
    editedItem.querySelector('.title').innerText = value;

    const id = Number(editedItem.id);
    const itemData = data.items.find((item) => item.id === id);
    itemData.text = value;

    editedItem.classList.remove('selected');
    dom.submitBtn.innerText = 'Submit';
    dom.input.value = '';
    alert('Item Edited Successfully...')
};

export default addHandler;