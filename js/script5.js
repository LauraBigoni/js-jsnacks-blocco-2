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
do {
    let num = Math.floor(Math.random() * 100 );
    lista1.push(num);
} while (lista1.length < itemLista1);

do {
    let num = Math.floor(Math.random() * 100 );
    lista2.push(num);
} while (lista2.length < itemLista2)
console.log(lista1 ,lista2);

// Calcolo la differenza
if (lista2.length > lista1.length ) {
console.log('lista 1 più piccola');
do {
    let num = Math.floor(Math.random() * 100 );
    lista1.push(num);
} while (lista1.length < lista2.length); 


} else if ( lista1.length > lista2.length ) {
console.log('lista 2 più piccola');
do {
    let num = Math.floor(Math.random() * 100 );
    lista2.push(num);
} while (lista2.length < lista1.length);


} else {
console.log('lista 1 e 2 sono uguali');
}

console.log(lista1);
console.log(lista2);

// Stampo in pagina
snack.innerHTML = `Lista1: ${lista1} <br> Lista2: ${lista2}`;