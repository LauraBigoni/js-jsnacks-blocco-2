console.log('JS OK!');
/* TRACCIA:
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

BONUS:
Stampare i risultati in pagina

SUPER BONUS:
Usare il DOM per raccogliere dati dagli utenti negli esercizi che lo richiedono!
(quindi usare i tag input  e i button, invece dei prompt)
Buon lavoro e a domani! */

// Recupero gli elementi in pagina
const snack = document.getElementById('snack3');

// Creo gli Array
const fakeInvites = [];
const firstNames = [' Laura', ' Davide', ' Adriana', ' Marco', ' Sasha'];
const lastNames = [' Imbimbo', ' Pitanza', ' Bettini', ' Nicodemo', ' Bigoni'];

console.log(fakeInvites , firstNames , lastNames);

// Creo un generatore casuale per pescare i nomi dagli array
while (fakeInvites.length < 3) {
    const randNum1 = Math.floor(Math.random() * firstNames.length);
    const randNum2 = Math.floor(Math.random() * lastNames.length);
    console.log(randNum1 , randNum2);

    // Associo i randomizzatori ai due array
    const firstName = firstNames[randNum1];
    const lastName = lastNames[randNum2];

    // Aggiungo i risultati dei randomizzatori in una costante
    const fakePerson = `${firstName} ${lastName}`;
    console.log(fakePerson);
    
    // Controllo che se nel caso ci fossero nomi duplicati non vengano inseriti in lista
    if (!fakeInvites.includes(fakePerson)) {
    fakeInvites.push(fakePerson);
    }
}

console.log(fakeInvites);

// Stampo in pagina
snack.innerText = `Gli invitati di Gatsby sono: ${fakeInvites}`;