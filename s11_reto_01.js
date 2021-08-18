/* Función que devuelve el valor del param después de 1 segundo */
function soon(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 1000);
  });
}

/* Aquí se puede visualizar primero la promesa pendiente y luego su resolución */
console.log(soon(20).then((result) => console.log(result)));

/* Aquí se puede visualizar la resolución de la promesa con .then */
soon(20).then((result) => console.log(result));

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Creamos un array vacío donde estarán las promesas resueltas o rechazadas
    let newArr = [];

    // Asignamos una variable con la cantidad de promesas que se envíen
    let pending = promises.length;

    promises.forEach((promise) =>
    // .then() no resuelve en sí la promesa, sino que una vez que se resuelva ejecutará la siguiente función,
    // si llega haber un error entrará en el .catch()
      promise.then((result) => {
        newArr.push(result);
        // Cuando se resuelve, restamos una promesa menos
        pending--;

        // Y ponemos una condición cuando todas las promesas fueron resueltas para resolver ahora sí todo el array de promesas
        if (pending === 0) resolve(newArr);        
      }).catch(reject)
    );

    // En caso de que se envíe un array vacío, caerá en la siguiente condición
    if (promises.length === 0) resolve(newArr);
  });
}

promiseAll([soon(1), soon(2), soon(3)]).then((results) => {
  console.log("Expected result [1, 2, 3]: ", results);
});

// Test cases
promiseAll([]).then((results) => {
  console.log("Expected result []: ", results);
});

promiseAll([soon(1), Promise.reject("X"), soon(3)])
  .then((results) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    console.log("Expected error X: ", error);
  });
