const calculadora = (num1, num2, operacion) => {
  let resultado;

  if (operacion === "+") {
    return (resultado = num1 + num2);
  } else if (operacion === "-") {
    return (resultado = num1 - num2);
  } else if (operacion === "/") {
    return (resultado = num1 / num2);
  } else if (operacion === "*") {
    return (resultado = num1 * num2);
  } else {
    return "Operacion no valida";
  }
};

console.log(calculadora(5, 6, "+"));
