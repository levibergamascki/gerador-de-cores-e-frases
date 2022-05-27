const colorhex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
"B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = "#"; 
    for(let i = 0; i<6;i++){
        hexColor += colorhex[getRandomNumber()]
    }
    var palavra = new Array ();
    palavra[0] = "Eu te amo";
    palavra[1] = "Eu te adoro";
    palavra[2] = "Eu te quero";
    palavra[3] = "Eu não te troco nessa vida por ninguém";
    palavra[4] = "Eu amo quando você sorri, ainda mais quando eu sou o motivo";
    palavra[5] = "Você coube tão direitinho dentro do meu coração";
    palavra[6] = "Eu não me canso de te admirar";
    palavra[7] = "Até as suas manias são lindas!";
    palavra[8] = "Eu te entreguei meu coração e foi a melhor coisa que ja fiz";
    palavra[9] = "Não consigo viver sem você.";
    var i = Math.floor(10*Math.random())
   
    color.textContent = palavra[i];
    document.body.style.backgroundColor = hexColor;
}
);
function getRandomNumber(){
    return Math.floor(Math.random() * colorhex.length);
}

