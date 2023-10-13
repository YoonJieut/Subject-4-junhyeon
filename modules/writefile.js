const fs = require('fs');
const HTMLTemplate = require('./HTMLTemplate');


fs.writeFile(`index.html`, HTMLTemplate, (err) => {
  if(err) {
    console.error("에러발생");
  } else {
    console.log('바르게 작동됩니다.');
  }
});

// 파일을 생성하는.. 실행만 하는 파일인 writefile.js