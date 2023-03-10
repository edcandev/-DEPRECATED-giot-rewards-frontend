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

const header = `
    <header class="header_giot">
        <h1  class="h1_header">GIoT Rewards</h1>
        <img class="img_header" src="imgs/giot_rewards_iso.png" alt="">
    </header>`;

const  loginIdentifier = `
    <section class="section_login">
        <div class="container_login">
                <label class="label_login" for="identifier">Ingrese su ID</label>
                <input class="input_login" type="text" name="identifier" id="identifier">
        </div>
        <img class="img_login input_submit-identifier" src="imgs/giot_rewards_next.png" alt="">
    </section>`;

const carousel = `
    <section class="section_carousell">
    </section>`;

const loginPassword = `
    <section class="section_password">
        <label class="label_password" for="password"></label>
        <input class="input_password" type="password" name="password" id="password">
        <img class="img_password input_submit-prev" src="/imgs/giot_rewards_prev.png" alt="">
        <img class="img_password input_submit-login" src="/imgs/giot_rewards_login.png" alt="">
    </section>`;




export { loginIdentifier, loginPassword, carousel, header, showPasswordComponent, showStartComponent};