document.getElementById("button").addEventListener("click", init);

const plnPln = 1.0;
const usdUsd = 1.0;
const eurEur = 1.0;
const usdPln = 3.45;
const plnUsd = 0.29;
const plnEur = 0.24;
const eurPln = 4.15;
const usdEur = 1.20;
const eurUsd = 0.83;
var choosenCurrencyFrom = document.getElementById("sel-opt");
var choosenCurrencyTo = document.getElementById("sel-opt2");

var showResult = document.querySelector(".result");

function init(e) {
    e.preventDefault();
    var input = document.getElementById("your-val").value;
    var number = Number(input);
    validation(number)
}

function validation(elem) {
    if (elem > 0) {
        calculate(elem);
    } else {
        showResult.textContent = "Value must be higher than 0."
    }
}

function calculate(givenValue) {
    var currencyFrom = choosenCurrencyFrom.value;
    var currencyTo = choosenCurrencyTo.value;
    var answer;
    const pln = "PLN";
    const usd = "USD";
    const eur = "EUR";

    if (currencyFrom === pln && currencyTo === usd) {
        answer = givenValue * plnUsd;
    } else if (currencyFrom === pln && currencyTo === eur) {
        answer = givenValue * plnEur;
    } else if (currencyFrom === pln && currencyTo === pln) {
        answer = givenValue * plnPln;
    } else if (currencyFrom === usd && currencyTo === pln) {
        answer = givenValue * usdPln;
    } else if (currencyFrom === usd && currencyTo === eur) {
        answer = givenValue * usdEur;
    } else if (currencyFrom === usd && currencyTo === usd) {
        answer = givenValue * usdUsd;
    } else if (currencyFrom === eur && currencyTo === pln) {
        answer = givenValue * eurPln;
    } else if (currencyFrom === eur && currencyTo === usd) {
        answer = givenValue * eurUsd;
    } else if (currencyFrom === eur && currencyTo === eur) {
        answer = givenValue * eurEur;
    }

    showResult.textContent = `${givenValue} ${currencyFrom} = ${answer.toFixed(2)} ${currencyTo}`;
}