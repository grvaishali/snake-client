const connect = require('./client');
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on("data", function (data) {
    if (data === '\u0003') {
      process.exit();
    }
  });
  stdin.resume();
  return stdin;
}

const handleUserInput = function () {

}

setupInput();