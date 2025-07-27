const numberValue = document.getElementById("numberValue");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");
let temp;

function convert() {
    result.textContent = "";
    errorMessage.textContent = "";
    temp = Number(numberValue.value);

    if (isNaN(temp)) {
        errorMessage.textContent = "Please enter a valid number.";
        result.textContent = "";
    } else if (fahrenheit.checked) {
        result.textContent = ((temp - 32) * 5/9).toFixed(2) + " °C";
    } else if (celsius.checked) {
        result.textContent = (temp * 9/5 + 32).toFixed(2) + " °F";
    } else {
        errorMessage.textContent = "Please select a conversion option.";
        result.textContent = "";
    }
}