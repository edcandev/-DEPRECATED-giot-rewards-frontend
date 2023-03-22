const API_URL = 'http://localhost:8080'; // azure.openjdk.com.osou....

async function postData(data, path) {
    let response = await fetch(API_URL + path,
    {
        method:"POST",
        body: data,
        headers: {"Content-type": "application/json;"}
    })
    return await response.json();

}

/* inputSubmitIdentifier.addEventListener("click", async (e)=> {

    
    // Seleccionar el input y leer valores
    const inputLogin = document.querySelector(".input_login");
    
    let body = JSON.stringify(
    {
        "identifier":parseInt(inputLogin.value)
    })

    
    
    let data = await response.json();

    console.info(data.hasCredential)

    components.showPasswordComponent(false);
}) */

export { postData };