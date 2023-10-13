const fs = require('fs');
const HTMLTemplate = require('./HTMLTemplate');
const pureslide = require('./pureslide');
const styleTag = require('./styleTag');
const elementScript = require('./elementScript');

// styleTag : 3개 매개변수, 각각 슬라이드의 배경색, 문자열입력
//* Html 템플릿 : 3개의 매개변수
//* 1. styleTag함수
//* 2. elmentScript문자열 
//* 3. pureslide 문자열


const fileName = ["index.html", "sub.html"];
fs.writeFile(`index.html`, HTMLTemplate(styleTag("red","blue","yellow"), elementScript ,pureslide), (err) => {
  if(err) {
    console.error("에러발생");
  } else {
    console.log('바르게 작동됩니다.');
  }
});

// 파일을 생성하는.. 실행만 하는 파일인 writefile.js