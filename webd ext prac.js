
function convertTemp() {

    // Get Celsius value from input field
    let celsius = document.getElementById("celsius").value;

    // Check if input is empty
    if (celsius.trim() === "") {
        document.getElementById("result").innerHTML =
            "⚠ Please enter a temperature!";
        return;
    }

    // Convert input to number
    celsius = parseFloat(celsius);

    // Check if input is a valid number
    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML =
            "⚠ Please enter a valid number!";
        return;
    }

    // Celsius to Fahrenheit formula
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Display result
    document.getElementById("result").innerHTML =
        `✨ ${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

// Optional: Convert automatically when user types
document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("celsius");

    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            convertTemp();
        }
    });

});