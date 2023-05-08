const fs = require('fs');
const path = require('path');


const stylesPath = './05-merge-styles/styles/';
const projectPath = './05-merge-styles/project-dist/';

const writeStream = fs.createWriteStream(projectPath + 'bundle.css');

fs.readdir(stylesPath, (err, files) => {
  for (let file of files) {
    if (path.extname(file) === '.css') {
      fs.createReadStream(stylesPath + file).on('data', (chunk) => {
        writeStream.write(chunk);
      })
    }
  }
});