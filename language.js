
let currentLanguage = 'pt';


function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguage();
    updateActiveButton();
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

function updateLanguage() {
   
    const elements = document.querySelectorAll('[data-en][data-pt]');

    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
}


function updateActiveButton() {
    const buttons = document.querySelectorAll('.language-switcher button');
    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function loadLanguage() {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
        currentLanguage = storedLanguage;
    }
    updateLanguage();
    updateActiveButton();
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';
}

document.addEventListener('DOMContentLoaded', loadLanguage);
