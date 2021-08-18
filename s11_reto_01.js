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
    let newArr = [];
     promises.forEach(promise => promise.then(result => newArr.push(result)))
    resolve( newArr);
    // let newProms = promises.map((prom) => {
    //   prom.then((value) => console.log(value));
    // });
    // resolve(newProms);
   

  
  /* let prom1 = Promise.resolve(promises[0]);
    prom1.then(value => console.log(value));

    let prom2 = Promise.resolve(promises[1]);
    prom2.then(value => console.log(value));

    let prom3 = Promise.resolve(promises[2]);
    prom3.then(value => console.log(value)); 

    let newProms = promises.map((prom) => {
      prom = Promise.resolve(prom);      
      prom.then((value) => console.log(value));
    });
         
    resolve(newProms); */
  });
  }


/* function promiseAll(promises) {
  return new Promise((resolve, reject) => {
      let results = [];
    let pending = promises.length;
    for (let i = 0; i < promises.length; i++) {
      console.log("pendin for " + pending)
      promises[i]
        .then((result) => {
          results[i] = result;
          pending--;
          console.log("pendin then "+ result + " " + pending)
          if (pending === 0) resolve(results);
        })
        .catch(reject);
        
    }
    if (promises.length === 0) resolve(results);
  });
}
 */

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
