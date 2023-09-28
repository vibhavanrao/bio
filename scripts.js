function convertTemperature() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusInput = document.getElementById("celsiusInput");

    // Get the values from the input fields
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(fahrenheit)) {
        // Convert Fahrenheit to Celsius
        const convertedCelsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = convertedCelsius.toFixed(5);
    } 
    else if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const convertedFahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = convertedFahrenheit.toFixed(5);
    }
    else {
        alert("Please enter a valid temperature.");
    }
}
function reset() {
    // Get the input fields by their IDs
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusInput = document.getElementById("celsiusInput");

    // Reset the input values to empty strings
    fahrenheitInput.value = "";
    celsiusInput.value = "";
}

