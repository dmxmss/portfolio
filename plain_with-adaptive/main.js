const menuOpenLink = document.querySelector(".menu__open-link");
const menuCloseLink = document.querySelector(".menu__close-link");
const nav = document.querySelector(".nav");
const anchors = document.querySelectorAll(".nav__item");
const headerInner = document.querySelector(".header__inner");
const languageButtons = document.querySelectorAll(".langs__btn");
const langsMenu = document.querySelector(".langs");
let currentLanguage = "en";
let langs = { "ru": 0, "en": 1 };
let currentLanguageButton = languageButtons[langs[currentLanguage]];
currentLanguageButton.style.color = "#000";

function openMenu() {
    menuOpenLink.style.display = "none";
    menuCloseLink.style.display = "block";
    nav.style.display = "flex";
    headerInner.style.justifyContent = "space-between";
    headerInner.style.backgroundColor = "#fff";
    headerInner.style.height = "800px";
    headerInner.style.position = "absolute";
    langsMenu.style.display = "block";
}

function closeMenu() {
    menuOpenLink.style.display = "";
    menuCloseLink.style.display = "none";
    nav.style.display = "none";
    headerInner.style.justifyContent = "flex-end";
    headerInner.style.backgroundColor = "";
    headerInner.style.height = "87px";
    headerInner.style.position = "static";
    langsMenu.style.display = "none";
}

function changeLang() {
    if (currentLanguage == "en") {
        currentLanguage = "ru";
    } else {
        currentLanguage = "en";
    }

    currentLanguageButton.style.color = "#828282";
    currentLanguageButton = languageButtons[langs[currentLanguage]]
    currentLanguageButton.style.color = "#000";
}

if (window.screen.availWidth <= 500) {
    anchors.forEach((a) => a.onclick = closeMenu);
}

languageButtons.forEach((a) => a.onclick = changeLang);
menuOpenLink.onclick = openMenu;
menuCloseLink.onclick = closeMenu;
