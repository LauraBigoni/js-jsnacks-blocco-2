console.log('JS OK!');
/* TRACCIA:
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

BONUS:
Stampare i risultati in pagina

SUPER BONUS:
Usare il DOM per raccogliere dati dagli utenti negli esercizi che lo richiedono!
(quindi usare i tag input  e i button, invece dei prompt)
Buon lavoro e a domani! */

// Recupero gli elementi in pagina
const snack = document.getElementById('snack1');

// # FOR
let sum = 0;
for (let x = 0; x < 5; x++) {
    const number = parseInt(prompt('Inserisci un numero' , '5'));
    sum += number;
    console.log(number);
}
console.log(sum);


// # WHILE
/* let x = 0;
let sum = 0;
while (x < 5) {
    const number = parseInt(prompt('Inserisci un numero' , '5'));
    sum += number;
    console.log(number);
    x++;
}
console.log(sum);
*/

// Stampo in pagina
snack.innerText = `La somma dei numeri da te inseriti è: ${sum}`;