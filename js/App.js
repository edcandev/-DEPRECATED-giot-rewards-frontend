import * as components from "./components.js";
import * as helper from "./helper.js";
import * as api from "./api.js";

const body = document.querySelector(".body");

let inputSubmitIdentifier;
let inputSubmitPrev;
let inputSubmitLogin;
// Componenetes de inicio
addEventListener('DOMContentLoaded', () => {

    toStartView();
    // Evento que envía ID
    

    // En este punto, se validó el ID

    


});

function toStartView() {
    helper.clearBody();
    helper.showComponent(body,components.header);
    helper.showComponent(body,components.carousel);
    helper.showComponent(body,components.loginIdentifier);
    inputSubmitIdentifier = document.querySelector('.input_submit-identifier');
    createListener(inputSubmitIdentifier,'click', ()=> {

        // Peticion POST Identifier

        toPasswordView(document.querySelector('.input_login').value);
    });
}

async function toPasswordView(identifier) {

    const identifierJSON = JSON.stringify(
            {
                "identifier":parseInt(identifier)
            })

    const hasCredential = await api.postData(identifierJSON,'/login/identifier');
    console.log(hasCredential);
    


    helper.clearBody();
    helper.showComponent(body, components.header);
    helper.showComponent(body, components.loginPassword);
    document.querySelector('.label_password').innerHTML = "DEPENDE DE LA PETICIÓN";




    inputSubmitPrev = document.querySelector('.input_submit-prev');
    inputSubmitLogin = document.querySelector('.input_submit-login');

    if(inputSubmitPrev == null ) {
        return false;
    }
    createListener(inputSubmitPrev,"click",toStartView);
    if(inputSubmitPrev == null ) {
        return false;
    }
    createListener(inputSubmitLogin,"click",toHomeView);
}

function toHomeView() {

    window.history.pushState('home','Title','/home');

    helper.clearBody();
    helper.showComponent(body, components.header);
    helper.showComponent(body, components.home);
}

function createListener(target, event, action) {
    target.addEventListener(event, action);
    return target;
}