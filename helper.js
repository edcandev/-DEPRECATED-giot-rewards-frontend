const inputSubmitIdentifier = document.querySelector(".input_submit-identifier");

let data = 
{
    "identifier":201920732
    "":201920732
}
inputSubmitIdentifier.addEventListener("click",(e)=> {
    e.preventDefault();
    fetch("http://localhost:8080/login",
    {
        method:"POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json())
    .then(data => console.log(data))
})