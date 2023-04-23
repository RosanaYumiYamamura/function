/*Algoritmo para calcular el factorial de un número utilizando una función recursiva:*/
function factorial(numero: number): number {
    if (numero === 0) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  
  console.log(factorial(5)); // Resultado: 120