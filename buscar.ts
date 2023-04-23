/*Algoritmo para buscar un elemento en un arreglo utilizando una función:*/
function buscarElemento(arreglo: any[], elemento: any): boolean {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === elemento) {
        return true;
      }
    }
    return false;
  }
  
  console.log(buscarElemento(["perro", "gato", "conejo"], "gato")); // Resultado: true