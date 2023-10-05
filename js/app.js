// # How much does my ticket cost?

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// - chiedere quanti km deve fare e salvare il dato in una variabile.
const distance = prompt('Quanti chilometri devi percorrere?');
console.log(distance, 'Km');

// - chiedere quanti anni ha il passeggero e salvare il dato in una variabile.
const age = prompt('Quanti anni hai?');
console.log(age, 'anni');

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - prezzo biglietto * 0.21€
basePrice = parseFloat(distance) * 0.21;
console.log(`Il prezzo base del biglietto è di: ${basePrice}€`);

// va applicato uno sconto del 20% per i minorenni
// - prezzo del biglietto * 0.2
let discount = 0;

if (age <= 18) {
  discount = basePrice * 0.2;
} else if (age >= 65) {
  discount = basePrice * 0.4;
}

console.log(`Lo sconto è di: ${discount}€`);
// va applicato uno sconto del 40% per gli over 65.
// - prezzo del biglietto * 0.4

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
finalPrice = basePrice - discount;
// console.log(finalPrice);
// Questo richiederà un minimo di ricerca.
// Formule:
// prezzo base = numero km _ prezzo per ogni km
// sconto = prezzo base _ entità sconto / 100
// prezzo scontato = prezzo base - sconto
ticketPrice = document.querySelector('#ticket-price');

ticketPrice.innerHTML = `${finalPrice.toFixed(2)}€`;
console.log(`Il prezzo del tuo biglietto è di: ${finalPrice}€`);
