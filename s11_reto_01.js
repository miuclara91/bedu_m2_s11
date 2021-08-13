/* Función que devuelve el valor del input después de 1 segundo */
function soon(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 1000);
  });
}

/* Aquí se puede visualizar primero la promesa pendiente y luego su resolución */
// console.log(soon(20).then((result) => console.log(result)));

/* Aquí se puede visualizar la resolución de la promesa con .then */
// soon(20).then((result) => console.log(result));

 function promiseAll(promises) {
  return new Promise((resolve, reject) => { 

    // let newProms = promises.map(prom =>{
    //     prom.then(value => console.log(value))
    // })

      
    promises[0].then(value => console.log(value));
    promises[1].then(value => console.log(value));
    promises[2].then(value => console.log(value));


    // reject(error);
  });
}

promiseAll([soon(1), soon(2), soon(3)]).then((results) => {
    console.log("Expected result [1, 2, 3]: ", results);
  });

// Test cases
// promiseAll([]).then((results) => {
//   console.log("Expected result []: ", results);
// });



// promiseAll([soon(1), Promise.reject("X"), soon(3)])
//   .then((results) => {
//     console.log("We should not get here");
//   })
//   .catch((error) => {
//     console.log("Expected error X: ", error);
//   });
