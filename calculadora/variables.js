let num1 = 5;
let num2 = 6;

let suma = num1 + num2;
let resta = num1 - num2;
let div = num1 / num2;
let mult = num1 + num2;
let pot = num1 ** num2;

let operacion = "resta";
let resultado;

/* if (operacion === suma) {
    resultado = suma
  } else if (operacion === resta) {
  resultado = resta
  } else if (operacion === div) {
    resultado = div
  } else if (operacion === mult) {
    resultado = mult
} else { resultado = "Operacion no valida"} */

switch (operacion) {
  case "suma":
    resultado = suma;
    break;
  case "resta":
    resultado = resta;
    break;
  case "div":
    resultado = div;
    break;
  case "mult":
    resultado = mult;
    break;
  case "pot":
    resultado = pot;
    break;
}

console.log(resultado);
