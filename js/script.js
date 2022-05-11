
let result;

function add(x,y) {
     result = x + y;
    return result;
}

function subtract(x,y) {
     result = x - y;
    return result;
}

function mulitply(x,y) {
     result = x * y;
    return result;
}

function divide(x,y) {
     result = x / y;
    return result;
}

let risposta = result;


let nome;
let cognome;
let citta;
let eta;
let eta_di_pensione = 70;


function enterdata() {
    nome = document.getElementById('nome').value;
    document.getElementById('nome1').innerHTML = nome;
    cognome = document.getElementById('cognome').value;
    document.getElementById('cognome1').innerHTML = cognome;
    citta = document.getElementById('citta').value;
    document.getElementById('citta1').innerHTML = citta;
    eta = document.getElementById('eta').value;
    document.getElementById('eta1').innerHTML = eta;
}

let pensione =  subtract(eta_di_pensione,eta)
console.log(pensione);





document.getElementById('pensione').innerHTML = pensione;
document.getElementById('risposta').innerHTML = risposta;



