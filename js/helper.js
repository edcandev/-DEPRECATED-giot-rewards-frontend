import * as components from "./components.js";

//components.showPasswordComponent(false);

const inputSubmitIdentifier = document.querySelector(".input_submit-identifier");

const inputSubmitPrev = document.querySelector(".input_submit-prev");

let data = 
{
    "identifier":201920732
}
inputSubmitIdentifier.addEventListener("click",(e)=> {
    /* 
    fetch("http://192.168.100.89:8080/login",
    {
        method:"POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json())
    .then(data => console.log(data)) */
    let hasPassword
    console.info("test01_passed")
    components.showPasswordComponent(false);
})

inputSubmitPrev.addEventListener("click",()=>{
    components.showStartComponent(false);

})

function showComponent() {
    
}

export { showComponent }
 