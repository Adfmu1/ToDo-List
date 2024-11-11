

export function getMainDiv() {
    return document.querySelector("#content-div");
}

export function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}