/*Algoritmo para invertir un string utilizando una función:*/
function invertirString(cadena: string): string {
    let resultado = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
      resultado += cadena[i];
    }
    return resultado;
  }
  
  console.log(invertirString("Hola mundo")); // Resultado: "odnum aloH"