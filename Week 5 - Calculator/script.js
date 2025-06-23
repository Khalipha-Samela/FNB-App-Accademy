var currentExpression = "";

// Handle digit and decimal input
function digitBtnPressed(button) {
  currentExpression += button;
  updateDisplay();
}

// Handle operator input
function operatorBtnPressed(operator) {
  var lastChar = currentExpression.slice(-1);
  if ("+-*/".includes(lastChar)) {
    // Replace the last operator if user presses another operator
    currentExpression = currentExpression.slice(0, -1);
  }
  currentExpression += operator;
  updateDisplay();
}

// Clear all input
function acBtnPressed() {
  currentExpression = "";
  updateDisplay();
}

// Delete last character (like CE)
function clearEntry() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

// Calculate result
function equalsBtnPressed() {
  try {
    var result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (e) {
    currentExpression = "Error";
    updateDisplay();
    setTimeout(() => {
      currentExpression = "";
      updateDisplay();
    }, 1000);
  }
}

// Update the input box display
function updateDisplay() {
  document.getElementById("inputBox").value = currentExpression;
}

// Handle keyboard input
document.addEventListener("keydown", function (event) {
  var key = event.key;

  if (!isNaN(key) || key === "." || key === "00") {
    digitBtnPressed(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    operatorBtnPressed(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    equalsBtnPressed();
  } else if (key === "Backspace") {
    clearEntry();
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    acBtnPressed();
  }
});
