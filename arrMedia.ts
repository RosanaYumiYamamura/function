/*Algoritmo para calcular la media de un arreglo de números utilizando una función:*/
function calcularMedia(numeros: number[]): number {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }
  
  console.log(calcularMedia([5, 10, 2, 8, 3])); // Resultado: 5.6