// When the "click me" button is clicked, change the background color of the body, the color name text, and the color flipper title to a random color

// Element vars
const title = document.querySelector(".title");
const color = document.getElementById("color");
const body = document.body;
let elementsToChange = [title, color, body];
const button = document.querySelector(".button");

// An array for creating a hexcode value
const hexcodeDigits = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get random number in a specified range
function randomNumber(s, e) {
  return Math.floor(Math.random() * e) + s;
}

// Create a new, random hexcode
function createHexcode() {
  let newHexcode = ['#'];
  for (let i = 0; i < 6; i++) {
    const randomDigit = hexcodeDigits[randomNumber(0, hexcodeDigits.length)];
    newHexcode.push(randomDigit);
  }
  return newHexcode.join("");
}

// Change the colors on the page
function changeColors(color) {
  elementsToChange.forEach(element => {
    if (element.nodeName === "BODY") {
      element.style.backgroundColor = color;
    } else {
      element.style.color = color;
    }
    if (element.nodeName === "SPAN") {
      element.textContent = color;
    }
  });
}

// Add functionality to the button
button.addEventListener("click", () => {
  changeColors(createHexcode());
});
