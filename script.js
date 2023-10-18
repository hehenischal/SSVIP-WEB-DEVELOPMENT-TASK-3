document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultSpan = document.getElementById("result");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;

        // Convert all inputs to Kelvin
        let temperatureInKelvin;
        if (fromUnit === "celsius") {
            temperatureInKelvin = temperature + 273.15;
        } else if (fromUnit === "fahrenheit") {
            temperatureInKelvin = (temperature + 459.67) * 5/9;
        } else if (fromUnit === "rankine") {
            temperatureInKelvin = temperature * 5/9;
        } else {
            temperatureInKelvin = temperature;
        }

        // Convert from Kelvin to the desired unit
        let result;
        if (toUnit === "celsius") {
            result = temperatureInKelvin - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (temperatureInKelvin * 9/5) - 459.67;
        } else if (toUnit === "rankine") {
            result = temperatureInKelvin * 9/5;
        } else {
            result = temperatureInKelvin;
        }

        resultSpan.textContent = result.toFixed(2);
    });
});
