const fs = require('fs');

const originalPath = './04-copy-directory/files/';
const copyPath = './04-copy-directory/files-copy/';

fs.mkdir(copyPath, (err) => {})

fs.readdir(originalPath, (err, files) => {
  for (let file of files) {
    fs.copyFile(originalPath + file, copyPath + file, (err) => {
    });
  }
});
