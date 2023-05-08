const fs = require('fs');
const path = require('path');

const filePath = './03-files-in-folder/secret-folder/';

fs.readdir(filePath, (err, data) => {
  for (let file of data) {
    fs.stat(filePath + file, (err, stats) => {
      if (!stats.isDirectory()) {
        console.log(`${file.split('.')[0]} - ${path.extname(file).replace('.', '')} - ${stats.size / 1000}kb`)
      }
    })
  }
});