Cuando vas a declarar una promesa, usas resolve() o reject().

El uso del then() y del catch() es exclusivo de promesas.
then() ejecuta el promise y el resultado que regrese el resolve, el then() lo atrapa y es el que lo va a pasar a la función que se declaró en el then(). Y el catch va atrapar lo que el reject haya devuetlo.