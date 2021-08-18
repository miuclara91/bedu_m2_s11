// Don't alter this function
const processAction = (i, callback) => {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
};

// Mi versión
const triggerActions = (count) => {  
  // Primero hay que convertir cada iteración solicitada en count en una promesa
  // Sin embargo, hay que tener un variable tipo array para ingresarlas y usar después Promise.all

  let promises = [];
  for (let i = 1; i <= count; i++) {       
      promises.push(new Promise (resolve => processAction(i, resolve)));          
    }  

  Promise.all(promises).then(value => value.forEach(promise => console.log(promise)));
};

triggerActions(5);
