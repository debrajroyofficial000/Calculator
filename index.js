let equation = "";

function getResult(eq) {
  let newString = "";
  let i = 0;
  while (i < eq.length) {
    if (eq[i] === "+" || eq[i] === "-" || eq[i] === "*" || eq[i] === "/") {
      newString = newString + "," + eq[i] + ",";
    } else {
      newString += eq[i];
    }
    i++;
  }

  let eqArray = newString.split(",");

  let j = 1;
  let result = eqArray[0];
  while (j < eqArray.length) {
    switch (eqArray[j]) {
      case "+":
        result = Number(result) + Number(eqArray[j + 1]);
        break;
      case "-":
        result = Number(result) - Number(eqArray[j + 1]);
        break;
      case "*":
        result = Number(result) * Number(eqArray[j + 1]);
        break;
      case "/":
        result = Number(result) / Number(eqArray[j + 1]);
        break;

      default:
        break;
    }
    j += 2;
  }

  document.getElementById("viewEquation").textContent = result;
}

function showEquation(eq) {
  document.getElementById("viewEquation").textContent = eq;
}

function handleClick(e) {
  const value = e.target.textContent;

  if (value === "=") {
    if (equation) {
      getResult(equation);
    }
  } else if (value === "AC") {
    document.getElementById("viewEquation").textContent = 0;
    equation = "";
  } else {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (
        equation[equation.length - 1] !== "+" &&
        equation[equation.length - 1] !== "-" &&
        equation[equation.length - 1] !== "*" &&
        equation[equation.length - 1] !== "/"
      ) {
        equation += value;
        showEquation(equation);
      }
    } else {
      equation += value;
      showEquation(equation);
    }
  }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => button.addEventListener("click", handleClick));
