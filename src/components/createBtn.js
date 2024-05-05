const createBtn = (ele, text, classList) => {
    const button = document.createElement(ele);
    button.innerHTML = text
    button.classList.add(classList)
    return button
}

export default createBtn