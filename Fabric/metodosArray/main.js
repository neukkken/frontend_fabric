//METODOS DE ARRAY
//UNIR ARRAYS CONCAT
let arrayAutos = ["Mercedes SLC", "Renault 14", "Optimus Prime"];
let arrayMisIdolos =["Donald Trump", "El bicho pelao", "Kidd keo" , "Optimus Prime"];

let arrayAutosIdols = arrayAutos.concat(arrayMisIdolos);

// console.log(arrayAutosIdols);

//METODO INCLUDE PARA VER SI UN ARRAY TIENE UN VALOR DETERMINADO

let arrayComprobante = arrayAutos.includes("Renault 14"); //TRUE
let arrayComprobante2 = arrayAutos.includes("143132"); //FALSE  

// console.log(arrayComprobante, arrayComprobante2)

//METODO INDEXOF EN QUE POSICION SE ENCUENTRA DENTRO DEL ARRAY EN BASE AL DATO DADO EMPIEZA A BUSACARLO DESDE EL INCIO (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

// LASTINDEXOF HACE AL REVES (9, 8, 7, 6, 5, 4, 3, 2, 1, 0)

// console.log(arrayAutos.indexOf("Optimus Prime"));

//METODO PUSH SIRVE PARA METER UN NUEVO VALOR AL ARRAY

arrayAutos.push("El auto de mi abuelo");

//METODO POP PA BORRAR EL ULTIMO OBJETO DEL ARRAY

arrayAutos.pop();

// METODO SHIFT PARA BORRAR EL PRIMER OBJETO DEL ARRAY

arrayAutos.shift();

// METODO UNSHIFR ARREGRA UN ELEMTO AL INICIO

arrayAutos.unshift("El auto de mi madre");

//METODO SLICE MANIPULAR ELEMENTOS EN EL INDICE DE UN ARRAY DEPENDIENDO DE DONDE A DONDE QUERAMOS 

// console.log(arrayMisIdolos.slice(0,2));
// arrayMisIdolos.splice(2, 0, "Que");
// console.log(arrayMisIdolos);

//METODO REVERSE PARA DARLE VUELTA AL ARRAY

arrayMisIdolos.reverse()

//

//METODO FILL CAMBIA TODOS LOS ELEMETOS DE UN ARRAY POR UN VALOR ESTATICO DESDE EL INICIO HASTA EL FINAL

// arrayMisIdolos.fill(1, 2); //VALOR  ACAMBIAR Y DESDE DONDE
// arrayMisIdolos.fill(1); // LLENAR ENTERO CON UN SOLO VALOR
// arrayMisIdolos.fill(10, 1, 2); //VALOR A CAMBIAR DESDE DONDE HAST DONDE

//JOIN  UNE TODOS LOS ELEMETOS DE UN ARRAY POR UN VALOR ESTATICO DESDE EL INDEX DEL INICIO AL FINAL

let miNombre = ["S", "a", "n", "t", "i"];

miNombre.join("");

//EJERCICIO 1 ARRAY PAAAAAAAAAAAAAAAAAAAAAAA

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let numeroDigitado = parseInt(prompt("Digite un numero para decirle que dia es en la semana"));

console.log(dias[numeroDigitado-1]);
7

// let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// while(true){
//     let numeroDigitado = prompt("Digite un numero para decirle que dia es en la semana");

//     if(numeroDigitado > 6){
//         if(numeroDigitado%2 == 0 || numeroDigitado%2 == 1) {
//             console.log(dias[numeroDigitado-1]);
//             break;
//         }else{
//             alert("Digita un numero no letras ni decimales huevetas");
//         }
//     }else{
//         alert("No hya mas de 7 dias huevestas");
//     }

// }


