function showPasswordComponent(hasPassword) {
    hideElement(document.querySelector('.section_carousell'));
    hideElement(document.querySelector('.section_login'));

    const sectionPassword = document.querySelector('.section_password');

    if(hasPassword) {
        document.querySelector(".label_password").innerHTML = "Ingrese su contraseña, por favor"
    } else {
        document.querySelector(".label_password").innerHTML = "Defina su contraseña, por favor"
    }
    showElement(sectionPassword)   
}

function showStartComponent(hasPassword) {
    hideElement(document.querySelector('.section_password'));

    showElement(document.querySelector('.section_carousell'));
    showElement(document.querySelector('.section_login'));
}


function hideElement(HTMLElement) {
    HTMLElement.classList.add("hidden");
}
function showElement(HTMLElement) {
    HTMLElement.classList.remove("hidden");
}

export { showPasswordComponent, showStartComponent};