import * as components from "./components.js";

//components.showPasswordComponent(false);

const inputSubmitIdentifier = document.querySelector(".input_submit-identifier");

const inputSubmitPrev = document.querySelector(".input_submit-prev");



inputSubmitIdentifier.addEventListener("click", async (e)=> {

    
    // Seleccionar el input y leer valores
    const inputLogin = document.querySelector(".input_login");
    
    let body = JSON.stringify(
    {
        "identifier":parseInt(inputLogin.value)
    })

    let response = await fetch("http://localhost:8080/login",
    {
        method:"POST",
        body: body,
        headers: {"Content-type": "application/json;"}
    })
    
    let data = await response.json();

    console.info(data.hasCredential)

    components.showPasswordComponent(false);
})

inputSubmitPrev.addEventListener("click",()=>{
    components.showStartComponent(false);

})

function showComponent() {
    
}

export { showComponent }
 