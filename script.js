const display = document.getElementById("display");  
 
// Append characters to the display
function appendToDisplay(input) { //input parameter means
    if (display.value === "Error") display.value = ""; // Reset error message if button clicked
    display.value += input; //=== means strict equality operator in JS compares both data type and value
}
//.value is built in property allows you to get the value a user typed and/or update nput
// Clear the display
function clearDisplay() {
    display.value = ""; //makes the screen clear again
}
//alert(message) displays message in a popup
// Perform the calculation
function calculate() {
    try {
        display.value = eval(display.value); // Evaluates the expression input values are alwats toresd as strings in html
    } catch (error) { //so if this is an error, do this
        display.value = "Error"; // Show error for invalid expressions
    }
}

// Handle keyboard input
//document.addEventListener(the type of event to lsten for , function called when the event happens, useCapture); syntax
document.addEventListener("keydown", function (event) {
    const key = event.key; //when key is entered , JS generates an event object
    //.key property of this object stores the exact key the user pressed as a string.
  
    if (/[\d+\-*/.]/.test(key)) { //\d = any digit 1-9
        //.test(key) checks if the key pressed is a valid opertor
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1); //removes the last character in the display
    } else if (key === "Escape") {
        clearDisplay();
    }
});
