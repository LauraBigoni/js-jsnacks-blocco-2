console.log('JS OK!');
/* TRACCIA:
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari

BONUS:
Stampare i risultati in pagina

SUPER BONUS:
Usare il DOM per raccogliere dati dagli utenti negli esercizi che lo richiedono!
(quindi usare i tag input  e i button, invece dei prompt) */

// Recupero gli elementi in pagina
const snack = document.getElementById('snack');

// # WHILE
// * Creo un array
const num = 10;
const insieme = [];
let sum = 0;

// * Creo elementi randomici
let y = 0;
while (y < num) {
    let randNum = Math.floor(Math.random() * 100) +1;
    insieme.push(randNum);
    y++;
    
    // * Sommo gli elementi che sono in posizione dispari
    if (y % 2 != 0) {
    sum += randNum;
    }
}

console.log(insieme)
console.log(sum);

// * Stampo in pagina
snack.innerHTML = `I numeri sorteggiati sono: ${insieme} <br> La somma dei numeri in posizione dispari è: ${sum}`;