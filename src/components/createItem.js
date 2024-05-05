import editHandler from '../handlers/editHandler.js';
import removeHandler from '../handlers/removeHandler.js';
import createBtn from './createBtn.js';

const createItem = (itemData) => {
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = itemData.id

    const title = document.createElement('p');
    title.innerText = itemData.text;
    title.id = itemData.id
    title.classList.add('title');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // create edit button
    const btnEdit = createBtn('button', 'Edit', 'edit-btn',)
    btnEdit.addEventListener('click', (e) => {
        container.classList.add('selected');
        editHandler(itemData.id);
    });

    // create delete button
    const btnDelete = createBtn('button', 'Delete', 'delete-btn',)
    btnDelete.addEventListener('click', () => {
        const done = confirm("Are You Sure...")
        if (done) {
            removeHandler(itemData.id);
            alert('Item Deleted Successfully...')
        }
        return
    });

    btnContainer.append(btnEdit, btnDelete);
    container.append(title, btnContainer);

    return container;
};

export default createItem;
