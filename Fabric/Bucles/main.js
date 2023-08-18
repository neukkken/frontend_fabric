//sintaxis del switch

// let num = "texto";

// switch (num){
//     case "texto": console.log("que");
//     break;

//     case 2: console.log("que2");
//     break;

//     default: (alert("HOLA"));
//     break;
// }

//EJERCICIO 1 SWITCH

// let productoABuscar = parseInt(prompt("Digite el producto que desea ver el precio 1. celular 2. camisa 3. auto"));
// let arrayProductos = [300, 40, 50000,];

// console.log(productoABuscar);

// switch(productoABuscar){
//     case 1: alert(arrayProductos[0]);
//         break;

//     case 2: alert(arrayProductos[1]);
//         break;

//     case 3: alert(arrayProductos[2]);
//         break;

//     default:
//         alert ("No hay nada")
// }


// sintexis del while 

// let contador = 0;
// let a = 2;

// while (contador <= 10){
    
//     a=a*a;

//     console.log(a);

//  contador++;
// }

//EJERCICIO 2 WHILE

// let contNum = 0;


// while (contNum < 5){

//     let numDigitado = prompt("Digite un numero pa");
    
//     if(numDigitado%3==0 && numDigitado%5==0){
//         console.log(`El numero ${numDigitado} es ping pong`);
//     }else if(numDigitado%3==0){
//         console.log(`El numero ${numDigitado} es ping`);
//     }else if(numDigitado%5==0){
//         console.log(`El numero ${numDigitado} es pong`);
//     }else{
//         console.log(numDigitado);
//     }


//     contNum++;
// }

// sintaxis del FOR

// let num = prompt("Digite un numero");

// for (let i = 1; i <= num; i++) {

//     console.log(i+1);

// }


//EJERCICIO 3 FOR

// let numIntroducido = parseInt(prompt("Introduzca un numero"));

// for (let i = 1; i <= numIntroducido; i++) {
//     if (i%2 == 0) {
//         console.log(`${i} es un numero par`);
//     }else if(i%2 == 1) {
//         console.log(`${i} es un numero impar`);
//     }

// }



// EJERCICIO 4 FOR OTRA VE

// let asterisco = "";


// while(true){
//     let tamañoDelTriangulo = prompt("Digite el tamaño del triangulo");
//     if(tamañoDelTriangulo%2 != 0 && tamañoDelTriangulo%2 != 1){
//         alert ("Ingrese un numero entero no decimal webon");
//     }else{
//         for (let i = 0; i < tamañoDelTriangulo; i++) {
//             console.log(asterisco=asterisco+" * ");
//         }
//         break;
//     }
// }

//MALISIMO

// let cont=0;

// while(cont<=3){

//     let password = prompt("Enter your password");
//     let passwordConfirm = prompt("repeat your password");


//     if (password == passwordConfirm){
//         alert("Inicio de sesion exitoso")
//         break;
//     }else if(cont==3){
//         alert("Ha superado el numero de intentos :/")
//         break;
//     }else if(password!=passwordConfirm){
//         alert("Vuelva a repetirlo")
//         cont++;
//     }

// }

//FORMA 2 DE USAR EL FOR (OF ARRAY, TAMBIEN ESTA IN ARRAY QUE ES COMO UN ARRAY.LENGHT MAOMENO) 

let array1 = [1,2,3,4,5,6,7];

for(let r of array1){
    console.log(r);
}