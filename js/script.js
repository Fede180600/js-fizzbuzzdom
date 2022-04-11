//Scrivi un programma che stampi in console i numeri da 1 a 100. Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
const containerWrapper = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    
    //Definire se è multiplo di 3, di 5 o di 3 e 5.
    let myMultiple = i;

    if (i % 3 === 0) {
        myMultiple  = "Fizz";
    }

    if (i % 5 === 0) {
        myMultiple = "Buzz";
    }

    if (i % 15 === 0) {
        myMultiple = "FizzBuzz";
    }

    // 2. Stampo i numeri nella pagina all'interno del box
    containerWrapper.innerHTML += `<div class="box ${myMultiple}">${myMultiple}</div>`;
}


