let selector=true;
let array_usuario = [];
let array_password = [];



while(selector==true){
    let opciones = prompt("1. 2Registrarse, 2. Iniciar Sesion");

    if(opciones==1){
        let user_ingresado = prompt("Ingrese el usuario que desea registrar");
        let password_ingresado = prompt("Ahora, una contraseña");

        array_usuario.push(user_ingresado);
        array_password.push(password_ingresado);

        console.log(array_usuario);
        console.log(array_password);


        alert("Confirme sus datos");
        let user_comprobante = prompt("Confirme el usuario");
        let password_comprobante = prompt("Confirme la contraseña");

        if(array_usuario.includes(user_comprobante)==true && array_password.includes(password_comprobante)==true){
            alert("Registro exitoso");
        }else if(array_usuario.includes(user_comprobante)==false && array_password.includes(password_comprobante)==false){
            alert("ni el usuario ni la contraseña coinciden, intentelo de nuevo");
            array_usuario.pop();
            array_password.pop();
        }else if(array_usuario.includes(user_comprobante)==false){
            alert("el usuario no coincide, intentelo de nuevo");
            array_usuario.pop();
            array_password.pop();
        }else if(array_password.includes(password_comprobante)==false){
            alert("la contraseña no coincide, intentelo de nuevo");
            array_usuario.pop();
            array_password.pop();
        }

        

        console.log(array_usuario);
        console.log(array_password);

    }else if(opciones==2){
        let user_login = prompt("Digite su usuario");
        let password_login = prompt("Digite su contraseña");

        if(array_usuario.includes(user_login)==true && array_password.includes(password_login, array_usuario.indexOf(user_login))==true){
            alert("Inicio de sesion esitoso");
        }else if(array_usuario.includes(user_login)==false){
            alert("El usuario no existe")
        }else if(array_password.includes(password_login, array_usuario.indexOf(user_login))==false){
            alert("Contraseña incorrecta")
        }

    }

    let pregunta = prompt("Desea iniciar sesion o registrar a otro usuario? 1. si 2. no");
        if(pregunta==1){
            selector=true;
        }else if(pregunta==2){
            selector=false;
        }

}