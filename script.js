let display = document.getElementById('display');

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        // Using eval() is simple for a basic calculator but be aware of security risks in real applications
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
