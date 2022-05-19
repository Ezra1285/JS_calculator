var screen = document.getElementById("activeScreen");
var answerScreen = document.getElementById("answerScreen");

function callOne() {
  screen.innerHTML += "1";
}
function callTwo() {
  screen.innerHTML += "2";
}
function callThree() {
  screen.innerHTML += "3";
}
function callFour() {
  screen.innerHTML += "4";
}
function callFive() {
  screen.innerHTML += "5";
}
function callSix() {
  screen.innerHTML += "6";
}
function callSeven() {
  screen.innerHTML += "7";
}
function callEight() {
  screen.innerHTML += "8";
}
function callNine() {
  screen.innerHTML += "9";
}
function callZero() {
  screen.innerHTML += "0";
}

function addDot() {
  screen.innerHTML += ".";
}
function remainder() {
  screen.innerHTML += "%";
}
function divison() {
  screen.innerHTML += "/";
}
function multiplication() {
  screen.innerHTML += "x";
}
function subtraction() {
  screen.innerHTML += "-";
}
function addition() {
  screen.innerHTML += "+";
}

function clearEverything() {
  screen.innerHTML = " ";
  answerScreen.innerHTML = "Ans = 0";
}

function clearMostRecent() {
  let screenString = String(screen.innerText);
  screenString = screenString.substring(0, screenString.length - 1);
  screen.innerHTML = screenString;
}

function calculateEquation() {
  let isFirstEquation = true;
  let screenString = String(screen.innerText);
  let length = screenString.length;
  let equationTotal = 0;

  for (let i = 0; i < length; i++) {
    let numberOne = "";
    let numberTwo = "";

    if (i > 1 && isFirstEquation == false) {
      if (screenString[i] == "+") {
        let k = i;
        do {
          k++;
          numberTwo += screenString[k];
        } while (range(0, 9).includes(parseInt(screenString[k + 1])));
        console.log("Numbber1: " + numberOne + "     number2: " + numberTwo);
        equationTotal = doAddition(equationTotal, numberTwo);
      } else if (screenString[i] == "-") {
        let k = i;
        do {
          k++;
          numberTwo += screenString[k];
        } while (range(0, 9).includes(parseInt(screenString[k + 1])));
        console.log("Numbber1: " + numberOne + "     number2: " + numberTwo);
        equationTotal = doSubtraction(equationTotal, numberTwo);
      } else if (screenString[i] == "x") {
      } else if (screenString[i] == "/") {
      } else if (screenString[i] == "%") {
      } else {
        continue;
      }
    } else {
      if (screenString[i] == "+") {
        isFirstEquation = false;
        let j = i;
        let k = i;
        do {
          j--;
          numberOne += screenString[j];
        } while (range(0, 9).includes(parseInt(screenString[j - 1])));
        do {
          k++;
          numberTwo += screenString[k];
        } while (range(0, 9).includes(parseInt(screenString[k + 1])));

        numberOne = reverseString(numberOne);
        console.log("Numbber1: " + numberOne + "     number2: " + numberTwo);
        equationTotal = doAddition(numberOne, numberTwo);
      } else if (screenString[i] == "-") {
        isFirstEquation = false;
        let j = i;
        let k = i;
        do {
          j--;
          numberOne += screenString[j];
        } while (range(0, 9).includes(parseInt(screenString[j - 1])));
        do {
          k++;
          numberTwo += screenString[k];
        } while (range(0, 9).includes(parseInt(screenString[k + 1])));

        numberOne = reverseString(numberOne);
        console.log("Numbber1: " + numberOne + "     number2: " + numberTwo);
        equationTotal = doSubtraction(numberOne, numberTwo);
      } else if (screenString[i] == "x") {
      } else if (screenString[i] == "/") {
      } else if (screenString[i] == "%") {
      } else {
        continue;
      }
    }
  }

  writeAnswerToScreen(equationTotal);
}

function doSubtraction(firstNumber, secondNumber) {
  let num1 = parseInt(firstNumber);
  let num2 = parseInt(secondNumber);
  let total = num1 - num2;
  console.log("Total: " + total);
  return total;
}

function doAddition(firstNumber, secondNumber) {
  let num1 = parseInt(firstNumber);
  let num2 = parseInt(secondNumber);
  let total = num1 + num2;
  console.log("Total: " + total);
  return total;
}

function range(start, end) {
  /* generate a range : [start, start+1, ..., end-1, end] */
  var len = end - start + 1;
  var a = new Array(len);
  for (let i = 0; i < len; i++) a[i] = start + i;
  return a;
}

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function writeAnswerToScreen(total) {
  let totalAsString = String(total);
  let answerString = String(answerScreen.innerText);
  answerString = answerString.substring(0, answerString.length - 2);
  answerString += " " + totalAsString;
  answerScreen.innerHTML = answerString;
}
