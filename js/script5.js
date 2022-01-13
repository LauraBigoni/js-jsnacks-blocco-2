console.log('JS OK!');
/* TRACCIA:
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro

BONUS:
Stampare i risultati in pagina

SUPER BONUS:
Usare il DOM per raccogliere dati dagli utenti negli esercizi che lo richiedono!
(quindi usare i tag input  e i button, invece dei prompt)
Buon lavoro e a domani! */

// Recupero gli elementi in pagina
const snack = document.getElementById('snack5');

// # WHILE
// Creo due array
const lista1 = [];
const lista2 = [];

const itemLista1 = Math.floor(Math.random() * 10 );
const itemLista2 = Math.floor(Math.random() * 10 );
console.log(itemLista1 , itemLista2);

// Randomizzo la lunghezza degli array
let x = 0;

do {
    let num = Math.floor(Math.random() * 100 );
    lista1.push(num);
    x++;
} while (x < itemLista1.length);

do {
    let num = Math.floor(Math.random() * 100 );
    lista2.push(num);
    x++;
} while (x < itemLista2.length)

// Calcolo la differenza
const diff = itemLista1 - itemLista2;
console.log(diff);

let i =0;
let negativeDiff = Math.abs(diff) ;

if (diff < 0 ) {
console.log('lista 1 più piccola');
do {
    let num = Math.floor(Math.random() * 100 );
    lista1.push(num);
    i++;
} while (i < negativeDiff);    
} else if ( diff > 0 ) {
console.log('lista 2 più piccola');
do {
    let num = Math.floor(Math.random() * 100 );
    lista2.push(num);
    i++;
} while (i < negativeDiff);
} else {
console.log('lista 1 e 2 sono uguali');
}

console.log(lista1);
console.log(lista2);

// Stampo in pagina
snack.innerHTML = `Lista1: ${lista1} <br> Lista2: ${lista2}`;