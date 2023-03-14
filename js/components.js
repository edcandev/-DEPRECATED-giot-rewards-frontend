/* function showPasswordComponent(hasPassword) {
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
} */

// const header = createHeader();

// const loginIdentifier = createLoginIdentifier();

function header() {
    /*
    <header class="header_giot">
       <h1  class="h1_header">GIoT Rewards</h1>
       <img class="img_header" src="imgs/giot_rewards_iso.png" alt="">
    </header>
    */
    const $component = document.createElement("header");
    $component.classList.add("header_giot");

    const $element1 = document.createElement("h1");
    $element1.classList.add("h1_header");
    $element1.innerHTML = "GIoT Rewards";

    const $element2 = document.createElement("img");
    $element2.classList.add("img_header");
    $element2.src = "/imgs/giot_rewards_iso.png";

    $component.append($element1, $element2);
    return $component;
}
function loginIdentifier() {
    /*
     <section class="section_login">
        <div class="container_login">
            <label class="label_login" for="identifier">Ingrese su ID</label>
                <input class="input_login" type="text" name="identifier" id="identifier">
        </div>
        <img class="img_login input_submit-identifier" src="imgs/giot_rewards_next.png" alt="">
    </section>
    */
    const $component = document.createElement("section");
    $component.classList.add("section_login");

    const $element1 = document.createElement("div");
    $element1.classList.add("container_login");

    const $element2 = document.createElement("label");
    $element2.classList.add("label_login");
    $element2.for ="identifier";
    $element2.innerHTML = "Ingrese su ID";

    const $element3 = document.createElement("input");
    $element3.classList.add("input_login")
    $element3.type = "number";
    $element3.name = "identifier";
    $element3.id = "identifier";

    const $element4 = document.createElement("img");
    $element4.classList.add("img_login","input_submit_identifier")
    $element4.src = "/imgs/giot_rewards_next.png";

    $element1.append($element2,$element3);
    $component.append($element1);
    $component.append($element4);

    return $component;

}


function carousel() {
    /*
    <section class="section_carousel">
        <div class="carousel_container">
            <img class="img_carousel img_carousel_1" src="/imgs/carousel/carousel_hamburguesa.jpeg" alt="">
            <img class="img_carousel img_carousel_2" src="/imgs/carousel/carousel_cafe.jpeg" alt="">
            <img class="img_carousel img_carousel_3" src="/imgs/carousel/carousel_alitas.jpeg" alt="">
            <img class="img_carousel img_carousel_4" src="/imgs/carousel/carousel_malteadas.jpeg" alt="">
        </div>
    </section>
    */
   const $component = document.createElement("section");
   $component.classList.add("section_carousel");

   const $element1 = document.createElement("div");
   $element1.classList.add("carousel_container");

   const $element2 = document.createElement("img");
   $element2.classList.add("img_carousel")
   $element2.src = "/imgs/carousel/carousel_hamburguesa.jpeg"
   
   const $element3 = document.createElement("img");
   $element3.classList.add("img_carousel")
   $element3.src = "/imgs/carousel/carousel_cafe.jpeg"


   const $element4 = document.createElement("img");
   $element4.classList.add("img_carousel")
   $element4.src = "/imgs/carousel/carousel_alitas.jpeg"


   const $element5 = document.createElement("img");
   $element5.classList.add("img_carousel")
   $element5.src = "/imgs/carousel/carousel_malteadas.jpeg"

   $element1.append($element2,$element3,$element4,$element5);
   $component.append($element1);

   return $component;
}

function loginPassword() {   
    /*
    <section class="section_password">
        <label class="label_password" for="password"></label>
        <input class="input_password" type="password" name="password" id="password">
        <img class="img_password input_submit-prev" src="/imgs/giot_rewards_prev.png" alt="">
        <img class="img_password input_submit-login" src="/imgs/giot_rewards_login.png" alt="">
    </section>`;*/
    const $component = document.createElement("section");
    $component.classList.add("section_password");

    const $element1 = document.createElement("label");
    $element1.classList.add("label_password");
    $element1.for ="password";

    const $element2 = document.createElement("input");
    $element2.classList.add("input_password")
    $element2.type = "password";
    $element2.name = "password";
    $element2.id = "password";

    const $element3 = document.createElement("img");
    $element3.classList.add("img_password","input_submit_prev")
    $element3.src = "/imgs/giot_rewards_prev.png";
    
    const $element4 = document.createElement("img");
    $element4.classList.add("img_password","input_submit_login")
    $element4.src = "/imgs/giot_rewards_login.png";

    $component.append($element1,$element2,$element3,$element4);

    return $component;

}

function home() {
    /*
    <section class="section_home">
        <h2 class="h2_home">Hola, {user}</h2>
        <h3 class="h3_home">Nos alegra mucho verte de nuevo</h3>
        <div class="grid_container_home">
            <div class="grid_item_home grid_item_home_1">consultar</div>
            <div class="grid_item_home grid_item_home_2">canjear</div>
            <div class="grid_item_home grid_item_home_3">Menú</div>
            <div class="grid_item_home grid_item_home_4">Promos</div>
        </div>
    </section>
    */
    const $component = document.createElement("section");
    $component.classList.add("section_home");
    
    const $element1 = document.createElement("h2");
    $element1.classList.add("h2_home");
    $element1.innerHTML = "¡Hola, !";

    $component.append($element1);

    return $component;  
}

export { loginIdentifier, loginPassword, carousel, header, home };