 function Aceptar() {
    const datos = document.getElementById('datos').value.split(',').map(Number);
    const buscarValor = parseInt (document.getElementById('busqueda').value)
    
    const resultados = document.getElementById('Resultados');
    resultados.innerHTML = '';

    resultados.innerHTML+= `<p>DatosOrginales:[${datos}] </p>`
    
    const secuentialSearchResult = busquedaSecuencial([...datos], buscarValor);
    mostrarResultado(resultados, `Búsqueda Secuencial de ${buscarValor}:`, secuentialSearchResult);

    const datosOrdenados = bubbleSort([...datos])

    const binarySearchResult = busquedaBinaria([...datosOrdenados], buscarValor);
    mostrarResultado(resultados, `Búsqueda Binaria de ${buscarValor}:`, binarySearchResult);

    const OrdenBurbuja = bubbleSort([...datos]);
    mostrarResultado(resultados, 'Ordenamiento Burbuja:', OrdenBurbuja);



   // Realizar búsqueda binaria (para esto, los datos deben estar ordenados)
  
    function mostrarResultado(container, nombreOrdenamiento, datosOrdenados) {
      container.innerHTML += `<p>${nombreOrdenamiento} [${datosOrdenados}]</p>`;
    }
    function bubbleSort(arr) {
      const len = arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    }
    

        function busquedaSecuencial(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === valor) {
        return `El valor ${valor} fue encontrado en la posición ${i}.`;
      }
    }
    return `El valor ${valor} no fue encontrado en el array.`;
  }
  
  // Función de búsqueda binaria
  function busquedaBinaria(arr, valor) {
    let inicio = 0;
    let fin = arr.length - 1;
    
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2);
      if (arr[medio] === valor) {
        return `El valor ${valor} fue encontrado en la posición ${medio}.`;
      } else if (arr[medio] < valor) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
    return `El valor ${valor} no fue encontrado en el array.`;
  }
}