const studenti = ["Luca", "Giorgio", "Patrik"];

studenti.push("Fabrizio");
studenti.push("Matteo");
studenti.push("Sonia");
studenti.push("Marco");

// console.log( studenti[0] );
// console.log( studenti[1] );
// console.log( studenti[2] );
// console.log( studenti[3] );
// console.log( studenti[4] );
// console.log( studenti[5] );

let lista = document.getElementById("listaStudenti");

for (let c = 0; c < 7; c++) {
    // console.log( studenti[c] );

    lista.innerHTML += `<li>${ studenti[c] }</li>`;

}

let boxStudenti = document.getElementById("boxStudenti");

for (let c = 0; c < studenti.length; c++) {

    const studenteCorrente = studenti[c];
    
    boxStudenti.innerHTML += `<div>${ studenteCorrente }</div>`;
}

let numeri = [12, 246, 642, 77, 49, 43, 12, 55, 66];

for (let c = 0; c < numeri.length; c++) {

    const num = numeri[c];
    if(num % 2 == 0) { //Solo per i numeri pari (dividendo per due abbiamo resto 0)
        console.log("Numero", num); //stampa il numero in console
    }

}