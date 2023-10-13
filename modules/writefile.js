const fs = require('fs');

  let template = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
  </head>
  <body>
    <h1>나는 슬라이드</h1>
  </body>
  </html>
  `;

// console.log(fileList);
// console.log(fileList.length);

fs.writeFile(`../index.html`, template, (err) => {
  if(err) {
    console.error("에러발생");
  }
});