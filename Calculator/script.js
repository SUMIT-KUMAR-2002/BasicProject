const result = document.getElementById("result");
function clearDisplay() {
  result.value = "";
}

function appendToDisplay(value) {
  result.value += value;
}

function calculate() {
  if (result.value) {
    let calculatedValue = eval(result.value);
    if (!isNaN(calculatedValue)) {
      result.value = calculatedValue;
    } else {
      result.value = "Error";
    }
  } 
}


document.querySelectorAll("input[type='button']").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    button.classList.add("active");
    
    setTimeout(() => button.classList.remove("active"), 100);

    if (value === "c") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      appendToDisplay(value);
    }
  });
});
