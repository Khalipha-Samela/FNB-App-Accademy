const display = document.querySelector(".value");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((button) => {
  button.onclick = () => {
    const value = button.dataset.button;

    if (value === "C") {
      // Clear everything
      currentInput = "";
    } else if (value === "CE") {
      // Clear last character
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch (err) {
        currentInput = "Error";
      }
    } else {
      // Append number/operator
      currentInput += value;
    }

    display.value = currentInput;
  };
});
