function numRandom(min, max){
    return Math.floor(Math.random()*(max-min) + min)
}

function traduccion(num){

    let traduccion;

    if(num==1){
        traduccion = "Piedra";
    }else if(num==2){
        traduccion = "Papel";
    }else if(num==3){
        traduccion = "Tijera"
    }

    return traduccion;
}


let player1 = prompt("1. Piedra 2. Papel 3. Tijera");
let player2 = numRandom(1, 4);
let texto = document.querySelector("#texto");
let texto_m = document.querySelector("#texto_m")
let texto_p = document.querySelector("#texto_p");

console.log(player2);

texto_p.textContent = `usted saco: ${traduccion(player1)}`;
texto_m.textContent = `la maquina saco: ${traduccion(player2)}`;


if (player1 == player2){
    texto.textContent= "Empate";
}else if(player1 == 1 && player2 == 3){
    texto.textContent= "Ganaste :D";
}else if(player1 == 3 && player2 == 2){
    texto.textContent= "Ganaste :D";
}else if(player1 == 2 && player2 == 1){
    texto.textContent= "Ganaste :D";
}else if(player2 == 1 && player1 == 3){
    texto.textContent= "Pierdes :(";
}else if(player2 == 3 && player1 == 2){
    texto.textContent= "Pierdes :(";
}else if(player2 == 2 && player1 == 1){
    texto.textContent= "Pierdes :(";
}
