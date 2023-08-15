let user = document.querySelector("#user");
let password = document.querySelector("#password");
let boton = document.querySelector(".boton");
let a = document.querySelector("#titulo");

function Ver() {
    
    if(user.value == "Administrador" && password.value == "Administrador"){
        a.textContent=("Hola Administrator");
    }else if (user.value == "Moderador" && password.value == "Moderador"){
        a.textContent=("Hola Moderador");
    }else if(user.value == "Usuario" && password.value == "Usuario"){
        a.textContent=("Hola Usuario");
    }
    
}



