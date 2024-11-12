import { getAppDiv, clearDiv } from "./functions";

export function loadHomePage() {
    const appDiv = getAppDiv();

    clearDiv(appDiv);
}