// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


var bomb = [];
var attempts = [];
var maxAttempts = 84;
// maxAttempts = 5;

// scelta della difficoltà
var choseDifficulty;
choseDifficulty = parseInt(prompt("Scegli la difficoltà: \n 0 - facile\n 1 - media\n 2 - difficile"))

var difficulty = 0;
if (choseDifficulty == 0) {
    difficulty = 100;
    maxAttempts = 84;
} else if (choseDifficulty == 1) {
    difficulty = 80;
    maxAttempts = 64;
} else if (choseDifficulty == 2) {
    difficulty = 50;
    maxAttempts = 34;
}



// serve funzione per creare le bombe
while (bomb.length < 16) {
    var randomNumber = createRandom(1, difficulty);

    if (!inArray(randomNumber, bomb)) {
        bomb.push(randomNumber);
    }
}
console.log("BOMBE", bomb);
//  /serve funzione per creare le bombe

// utente inizia il gioco
var gameOver = false;

while (attempts.length < maxAttempts && gameOver == false) {
    
    var userNumber;
    do {
        if (choseDifficulty == 0) {
            userNumber = parseInt(prompt("Inserisci un numero a tua scelta tra 1 e 100"));
        }else if (choseDifficulty == 1) {
            userNumber = parseInt(prompt("Inserisci un numero a tua scelta tra 1 e 80"));
        } else if (choseDifficulty == 2) {
            userNumber = parseInt(prompt("Inserisci un numero a tua scelta tra 1 e 50"));
        }
    } while(isNaN(userNumber) || userNumber < 1 || userNumber > difficulty);
    
    // se l'utente perde
    if (inArray(userNumber, bomb)) {
        gameOver = true;
        alert("GAME OVER\n Hai totalizzato: " + attempts.length + " punti");
        
    } else if (!inArray(userNumber, attempts)) {
        attempts.push(userNumber);
    }
    console.log(userNumber, attempts.length);
}

// se l'utente vince
if (attempts.length == maxAttempts) {
    alert("CONGRATULAZIONI\n Hai totalizzato: " + attempts.length + " punti");
}
console.log(attempts);
// /se l'utente vince

// /utente inizia il gioco

// ------------------FUNCTIONS---------------------
// funzione per generare un numero
function createRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// controllo se è nell'array
function inArray (element, array) {

    for (var i = 0; i < array.length; i++) {
        // console.log("Iterazione", i);

        if (element == array[i]) {
            return true;
        }

    }
    return false;

}
// /------------------FUNCTIONS---------------------