console.log('JS OK!');
/* TRACCIA:
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo


BONUS:
Stampare i risultati in pagina

SUPER BONUS:
Usare il DOM per raccogliere dati dagli utenti negli esercizi che lo richiedono!
(quindi usare i tag input  e i button, invece dei prompt) */

// * Recupero gli elementi in pagina
const snack = document.getElementById('snack');

// # IF/ELSE
// * Chiedo all'utente di inserire un numero pari
let number = parseInt(prompt('Inserisci un numero pari' , '4'));

let message = 'Ops, Avevi inserito un numero dispari, <br> perciò lo abbiamo cambiato per te.'

if (number % 2 !== 0) {
    number = number + 1;
    message;
    console.log(message);
} else {
    message = 'Bravo, hai inserito un numero pari';
    console.log(message);
}

// * Stampo in pagina
snack.innerHTML = `Il numero pari è: ${number} <br> ${message}`;