const caracteres = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M",1,2,3,4,5,6,7,8,9,0,"!","#","$","%","&","/","=","?","¿","+","-",".","*","@"];

let res = document.querySelector("#res");
let numChar = document.querySelector("#numChar");



function randomNum(maxNum){
    return Math.floor(Math.random() * maxNum);
}



function genPassword(numChar){
    let password = "";

    for (i=0; i<numChar;i++){
        password = password + caracteres[randomNum(caracteres.length)]
    }

    return password;
}

function resultado(){
    res.textContent = genPassword(numChar.value);
}

