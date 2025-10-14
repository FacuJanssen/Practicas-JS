let num1 = 5;
let num2 = 6;

let suma = num1 + num2;
let resta = num1 - num2;
let div = num1 / num2;
let mult = num1 + num2;

let operacion = "suma";
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
    resultado = num1 + num2;
    break;
  case "resta":
    resultado = num1 - num2;
    break;
  case "div":
    resultado = num1 / num2;
    break;
  case "mult":
    resultado = num1 + num2;
    break;
}

console.log(resultado);
