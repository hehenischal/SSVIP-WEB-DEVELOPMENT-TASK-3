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

        let result;

        if (fromUnit === "celsius") {
            if (toUnit === "fahrenheit") {
                result = (temperature * 9/5) + 32;
            } else if (toUnit === "kelvin") {
                result = temperature + 273.15;
            } else if (toUnit === "rankine") {
                result = (temperature + 273.15) * 9/5;
            } else {
                result = temperature;
            }
        } else if (fromUnit === "fahrenheit") {
            if (toUnit === "celsius") {
                result = (temperature - 32) * 5/9;
            } else if (toUnit === "kelvin") {
                result = (temperature + 459.67) * 5/9;
            } else if (toUnit === "rankine") {
                result = temperature + 459.67;
            } else {
                result = temperature;
            }
        } else if (fromUnit === "kelvin") {
            if (toUnit === "celsius") {
                result = temperature - 273.15;
            } else if (toUnit === "fahrenheit") {
                result = (temperature * 9/5) - 459.67;
            } else if (toUnit === "rankine") {
                result = temperature * 9/5;
            } else {
                result = temperature;
            }
        } else if (fromUnit === "rankine") {
            if (toUnit === "celsius") {
                result = (temperature - 491.67) * 5/9;
            } else if (toUnit === "fahrenheit") {
                result = temperature - 459.67;
            } else if (toUnit === "kelvin") {
                result = (temperature * 5/9);
            } else {
                result = temperature;
            }
        }

        resultSpan.textContent = result.toFixed(2);
    });
});
