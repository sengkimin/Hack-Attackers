const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

function negative() {
  display.value = -1 * display.value;
}

function percentage() {
  display.value = display.value / 100;
}

function del() {
  var input = document.getElementById("display");
  input.value = input.value.substring(0, input.value.length - 1);
}

function square() {
  if (display.value) {
    display.value = Math.pow(display.value, 2);
  }
}

function cube() {
    if (display.value) {
      display.value = Math.pow(display.value,3);
    }
  }

function squareRoot() {
  if (display.value) {
    display.value = Math.sqrt(display.value);
  }
}

function cubeRoot() {
  if (display.value) {
    display.value = Math.cbrt(display.value);
  }
}



