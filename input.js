let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    connection.write('Move: up');
  }

  if (data === 'a') {
    connection.write('Move: left');
  }

  if (data === 's') {
    connection.write('Move: down');
  }

  if (data === 'd') {
    connection.write('Move: right');
  }

  if (data === 'q') {
    connection.write('Say: FUN');
  }
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on("data", handleUserInput)
  stdin.resume();
  return stdin;
}

module.exports = { setupInput }