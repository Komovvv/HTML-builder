const fs = require('fs');

const read = fs.ReadStream('./01-read-file/text.txt');

read.on('data', (chunk) => {
  console.log(chunk.toString());
})