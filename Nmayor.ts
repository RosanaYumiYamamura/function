/*Algoritmo para encontrar el número mayor en un arreglo de números utilizando una función:*/
function encontrarMayor(numeros: number[]): number {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
    return mayor;
  }
  
  console.log(encontrarMayor([5, 10, 2, 8, 3])); // Resultado: 10