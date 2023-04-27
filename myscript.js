// imposto la data per il conto alla rovescia

let countDownDate = new Date("April 28, 2023 09:30:00").getTime();

// faccio scorrere il conto alla rovescia di 1 secondo alla volta

let countDown = setInterval(function () {

    // aggiungo data e ora di oggi
    let now = new Date().getTime();

    // inserisco la distanza tra oggi e il giorno del conto alla rovescia
    let distance = countDownDate - now;

}, 1000);




