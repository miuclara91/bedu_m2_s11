// Don't alter this function
const processAction = (i, callback) => {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
};

// Otra versión
const triggerActions = (count) => {
  let actions = (i) =>{
      if (i <= count){
          processAction(i, (callback) =>{
              console.log(callback);
              actions(i +1);
          })
      }
  }

  actions(1);
};

triggerActions(5);
