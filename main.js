// Declare Variabels
// Dark & Light Mode Variables
let button = document.querySelector("button");
let body = document.querySelector("body");
let lightSpan = document.querySelector(".light");
let darkSpan = document.querySelector(".dark");
let calculator = document.querySelector(".calculator");

// Calculation Variables
let display = document.querySelector(".display");
let buttons = Array.from(
  document.querySelectorAll(".calculator > div:not(:first-child)")
);

// Dark & Light Function
button.onclick = function () {
  body.classList.toggle("dark-background");
  darkSpan.classList.toggle("one-opacity");
  lightSpan.classList.toggle("zero-opacity");
  display.classList.toggle("grey-text");
  calculator.classList.toggle("calculator-background");
  // if (body.classList.contains("dark-background")) {

  // }
};

// Caculator Buttons Manipulation
buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "DEL":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
