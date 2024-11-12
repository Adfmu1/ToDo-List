

export function getAppDiv() {
    return document.querySelector("#todo-div");
}

export function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}