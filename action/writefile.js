const fs = require('fs');
const HTMLTemplate = require('../modules/HTMLTemplate');
const pureslide = require('../modules/pureslide');
const styleTag = require('../modules/styleTag');
const elementScript = require('../modules/elementScript');

// styleTag : 3개 매개변수, 각각 슬라이드의 배경색, 문자열입력
//* Html 템플릿 : 3개의 매개변수
//* 1. styleTag함수
//* 2. elmentScript문자열 
//* 3. pureslide 문자열

// 단, 색을 지정할 땐, 오타가 허용되지 않는다.


// ? 아하 이게 콜백지옥이구나
// ? 작성법이 어렵고, if문으로 타입 선언도 하지 않아서 안정성이 매우 떨어진다. 더 나은 개선점은??



const fileInfo = [
  {
    name : "index.html",
    content : HTMLTemplate(styleTag("red","blue","yellow"), elementScript ,pureslide)
  },
  {
    name : "sub.html",
    content : HTMLTemplate(styleTag("purple","gray","green"), elementScript ,pureslide)
  } 
];

for(let i =0; i<fileInfo.length; i++){
  
  fs.writeFile(fileInfo[i].name, fileInfo[i].content, (err) => {
    if(err) {
      console.error("에러발생");
    } else {
      console.log('바르게 작동됩니다.');
    }
  });
};

console.log(fileInfo.length);
// 파일을 생성하는.. 실행만 하는 파일인 writefile.js