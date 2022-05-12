
// let result;

// function add(x,y) {
//      result = x + y;
//     return result;
// }

// function subtract(x,y) {
//      result = x - y;
//     return result;
// }

// function mulitply(x,y) {
//      result = x * y;
//     return result;
// }

// function divide(x,y) {
//      result = x / y;
//     return result;
// }

// let risposta = result;


// let nome;
// let cognome;
// let citta;
// let eta;
// let eta_di_pensione = 70;


function enterdata() {
    let nome = document.getElementById('nome').value;
    // document.getElementById('nome1').innerHTML = nome;
    let cognome = document.getElementById('cognome').value;
    // document.getElementById('cognome1').innerHTML = cognome;
    let citta = document.getElementById('citta').value;
    // document.getElementById('citta1').innerHTML = citta;
    let eta = document.getElementById('eta').value;
//     document.getElementById('eta1').innerHTML = eta;
    stampautente(nome, cognome, citta, eta);
}

function stampautente(nome, cognome, citta, eta ) {
    document.getElementById('nome1').innerHTML = nome;
    document.getElementById('cognome1').innerHTML = cognome;
    document.getElementById('citta1').innerHTML = citta;
    document.getElementById('eta1').innerHTML = eta;
    let eta_pensione = pensioncalc(eta);
    document.getElementById('pensione').innerHTML = eta_pensione;
}


// let pensione =  subtract(eta_di_pensione,eta)
// console.log(pensione);

function pensioncalc(eta) {
    let pensione = 70 - eta;
    return pensione;
}


// let pensione =  subtract(eta)
// console.log(pensione);





// document.getElementById('pensione').innerHTML = pensione;
// document.getElementById('risposta').innerHTML = risposta;


function add() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (+num1) + (+num2);
    stampavalore(result);

}

function subtract() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (num1) - (num2);
    stampavalore(result);
}

function multiply() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (num1) * (num2);
        stampavalore(result);
}

function divide() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num1  == 0 || num2 == 0){
    var result = 'You inserted 0';
}
    else {
    var result = (num1) / (num2);
    }

    stampavalore(result);
}

function stampavalore(risultato) {
    document.getElementById('risposta').innerHTML = "Il risultato e "+ risultato;
}

