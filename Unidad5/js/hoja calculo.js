  function Desendente() {
    const cantidadVariables = parseInt(document.getElementById('cantidadVariables').value);
    const datos = document.getElementById('datos').value.split(',').map(Number);
  
    // Validar que la cantidad de datos coincida con la cantidad especificada
    if (datos.length !== cantidadVariables) {
      alert('La cantidad de datos ingresados no coincide con la cantidad especificada.');
      return;
    }
  
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
  
    resultadosDiv.innerHTML += `<p>Datos Originales: [${datos}]</p>`;
  
    // Realizar los diferentes tipos de ordenamiento
    const bubbleSorted = bubbleSort([...datos]);
    mostrarResultado(resultadosDiv, 'Ordenamiento Burbuja:', bubbleSorted);
  
    const exchangeSorted = exchangeSort([...datos]);
    mostrarResultado(resultadosDiv, 'Ordenamiento de Intercambio:', exchangeSorted);
  
    const mergeSorted = mergeSort([...datos]);
    mostrarResultado(resultadosDiv, 'Ordenamiento Mezcla Directa:', mergeSorted);
  
    const quickSorted = quickSort([...datos]);
    mostrarResultado(resultadosDiv, 'Ordenamiento QuickSort:', quickSorted);
  
    const shellSorted = shellSort([...datos]);
    mostrarResultado(resultadosDiv, 'Ordenamiento ShellSort:', shellSorted);
  }
  
  function mostrarResultado(container, nombreOrdenamiento, datosOrdenados) {
    container.innerHTML += `<p>${nombreOrdenamiento} [${datosOrdenados}]</p>`;
  }
  
  function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  function exchangeSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] < arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] > right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  function shellSort(arr) {
    const len = arr.length;
    for (let gap = Math.floor(len / 2); gap < 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        const temp = arr[i];
        let j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];
        }
        arr[j] = temp;
      }
    }
    return arr;
  }
  