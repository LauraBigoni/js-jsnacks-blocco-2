console.log('JS OK!');
/* TRACCIA:
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari

BONUS:
Stampare i risultati in pagina

SUPER BONUS:
Usare il DOM per raccogliere dati dagli utenti negli esercizi che lo richiedono!
(quindi usare i tag input  e i button, invece dei prompt)
Buon lavoro e a domani! */

// Recupero gli elementi in pagina
const snack = document.getElementById('snack4');

// # WHILE
// Creo un array
const num = 10;
const insieme = [];

// Sommo gli elementi in posizione dispari
let y = 0;
while (0 < num) {
    let randNum = Math.floor(Math.random() * 100) +1;
    insieme.push(randNum);
    y++;
}