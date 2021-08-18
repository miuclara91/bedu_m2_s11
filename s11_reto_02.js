async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "Hello World";
}

function log() {
  /* Opción 1 */
  //  wait().then(value => console.log(value));

  /* Opción 2 */
  wait().then(console.log);
}

log();
