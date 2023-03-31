import * as components from "./components.js";
import * as helper from "./helper.js";
import * as api from "./api.js";

if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('sw.js')
    .then(function(){
        console.log('Service worker registrado');
    })
    .catch(function(err){
        console.log(err);
    });
}

const body = document.querySelector(".body");

let carouselWorker = new Worker("js/carousel_worker.js");

let currentImage = 1;


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
    helper.showComponent(body,components.header());
    //helper.showComponent(body, components.home())
    helper.showComponent(body,components.carousel());
    helper.showComponent(body,components.loginIdentifier());

    

    inputSubmitIdentifier = document.querySelector(".input_submit_identifier");
    helper.defineListener(inputSubmitIdentifier,'click', async ()=> {

        const reqIdentifier = parseInt(document.querySelector('.input_login').value)


        // Revisamos si existe el indentificador

        const identifierJSON = JSON.stringify(
            {
            "identifier": reqIdentifier
            });


        // Envía un JSON a la ruta especificada
        //a
        const responseData = await api.postData(identifierJSON,'/api/auth/identifier')
            .catch(()=> console.log("Error en la petición"));

            //console.log(responseData);

        if(responseData != null) {

            const hasCredential = Object.values(responseData)[0];
            
            if(hasCredential) {
                toPasswordView(responseData, reqIdentifier);
            } else {
                document.querySelector(".input_login").value = "";
                alert("El identificador no está registrado :(");
            }
        }
    });
}

async function toPasswordView(responseData,_reqIdentifier) {

    const hasPassword = Object.values(responseData)[1];

    let labelInnerHTML = hasPassword ? "Por favor, ingresa tu contraseña..." : "Por favor, define tu contraseña...";

    helper.clearBody();
    helper.showComponent(body, components.header());
    helper.showComponent(body, components.loginPassword());
    helper.modifyInnerHTML(document.querySelector(".section_password"),"label_password",labelInnerHTML);

    // console.log(components.loginPassword().getElementsByClassName("label_password"));

    inputSubmitPrev = document.querySelector('.input_submit_prev');
    inputSubmitLogin = document.querySelector('.input_submit_login');

    if(inputSubmitPrev != null ) {
        helper.defineListener(inputSubmitPrev,"click",toStartView);
    }
    if(inputSubmitLogin != null ) {
        helper.defineListener(inputSubmitLogin,"click",async ()=> {

            const validationLoginJSON = JSON.stringify(
                {
                "identifier": _reqIdentifier,
                "password": document.querySelector('.input_password').value
                });

                const responseData = await api.postData(validationLoginJSON,'/api/auth/login');

                // console.log(responseData);

                const validated = responseData.isLogged; // Respuesta del JSON


                if(validated) {

                    localStorage.token = responseData.token;

                    await api.getDataAuth('/api/get/home');

                    toHomeView();
                } else {
                    document.querySelector(".input_password").value = "";
                    alert("El identificador no está registrado :(");
                }

        });
    }








    // document.querySelector('.label_password').innerHTML = "DEPENDE DE LA PETICIÓN";
    
}

async function toHomeView() {

    window.history.pushState('home','Title','/home');

    helper.clearBody();
    helper.showComponent(body, components.header());
    helper.showComponent(body, components.home());

}



carouselWorker.onmessage = (ev) => {
    const carouselContainer = document.querySelector(".carousel_container")

    if(carouselContainer != null) {

        if(currentImage == 4) {
            carouselContainer.scroll({
                behavior:"smooth",
                top:0,
                left: 0
            })
            currentImage = 1;
        } else {
            carouselContainer.scrollBy({
                behavior:"smooth",
                top:0,
                left: carouselContainer.offsetWidth
            })
            currentImage++;
        }
    }
}
    /* const identifierJSON = JSON.stringify(
            {
                "identifier":parseInt(identifier)
            })


    
    
    
    console.log(components.loginPassword().getElementsByClassName("label_password"));



    inputSubmitPrev = document.querySelector('.input_submit-prev');
    inputSubmitLogin = document.querySelector('.input_submit-login');

    if(inputSubmitPrev == null ) {
        return false;
    }
    defineListener(inputSubmitPrev,"click",toStartView);
    if(inputSubmitPrev == null ) {
        return false;
    }
    defineListener(inputSubmitLogin,"click",toHomeView);
}
*/

