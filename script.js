// script.js

let display = document.getElementById("display");
const body = document.body;

function press(key) {
    display.value += key;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("dark-mode");
}

// Allow keyboard input
document.addEventListener("keydown", function (e) {
    const key = e.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        press(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
