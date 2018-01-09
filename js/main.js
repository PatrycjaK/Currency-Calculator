document.getElementById("button").addEventListener("click", init);

var rates = {
    PLNPLN: 1.0,
    USDUSD: 1.0,
    EUREUR: 1.0,
    USDPLN: 3.45,
    PLNUSD: 0.29,
    PLNEUR: 0.24,
    EURPLN: 4.15,
    USDEUR: 1.20,
    EURUSD: 0.83,
}

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

    if (currencyFrom && currencyTo) {
        answer = givenValue * rates[currencyFrom + currencyTo];
    }

    showResult.textContent = `${givenValue} ${currencyFrom} = ${answer.toFixed(2)} ${currencyTo}`;
}