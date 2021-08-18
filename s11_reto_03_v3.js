// Don't alter this function
const processAction = (i, callback) => {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
};

// Otra versión
const triggerActions = (count) => {
  const actions = [];
  let aux = 1;
  while(aux <=count){
    actions.push(new Promise(resolve => processAction(aux, resolve)));
    aux++;
  }
  Promise.all(actions).then(console.log);
};

triggerActions(5);
