const fs = require('fs');
const path = require('path');

const projectPath = './06-build-page/project-dist/';
const htmlPath = './06-build-page/components/';
const stylesPath = './06-build-page/styles/';
const assetsPath = './06-build-page/assets/';

const readStreamTemp = fs.createReadStream('./06-build-page/template.html');
const writeStreamHtml = fs.createWriteStream(projectPath + 'index.html');
const writeStreamStyle = fs.createWriteStream(projectPath + 'style.css');



fs.mkdir(projectPath, (err) => {
  readStreamTemp.on('data', (chunk) => {
    fs.readFile(htmlPath + 'header.html', 'utf-8', (err, data) => {
      let tempH = chunk.toString().replace('{{header}}', data);
      fs.readFile(htmlPath + 'articles.html', 'utf-8', (err, data) => {
        let tempHA = tempH.replace('{{articles}}', data)
        fs.readFile(htmlPath + 'footer.html', 'utf-8', (err, data) => {
          let tempHAF = tempHA.replace('{{footer}}', data)
          writeStreamHtml.write(tempHAF);
        })
      })
    })
  })
});

fs.readdir(stylesPath, (err, files) => {
  for (let file of files) {
    if (path.extname(file) === '.css') {
      fs.createReadStream(stylesPath + file).on('data', (chunk) => {
        writeStreamStyle.write(chunk);
      })
    }
  }
});

fs.mkdir(projectPath + 'assets/', (err) => {});

fs.readdir(assetsPath, (err, folders) => {
  for (let folder of folders) {
    fs.readdir(assetsPath + folder, (err, files) => {
      fs.mkdir(projectPath + 'assets/' + folder, (err) => {
        fs.copyFile(projectPath + 'assets/' + folder, (err) => {})
      });
    })
  }
});


// readStreamTemp.pipe(writeStream);


