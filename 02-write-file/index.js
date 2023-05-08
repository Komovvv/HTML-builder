const fs = require('fs');
const readline = require('readline');
const writeStream = fs.createWriteStream('./02-write-file/text.txt');

const rl = readline.createInterface(
  process.stdin, process.stdout);

rl.write('Hello there!' + '\n');

rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close();
    writeStream.close();
    console.log('Goodbye!');
  } else {
    writeStream.write(input + '\n');
  }
});
