const elementScript =`
// body 세팅
const body = document.body;
console.dir(body);
body.style.width = "100vw";
body.style.height = "100vh";
body.className = "flex-center";

// window 작성
let windowDiv = document.createElement('div');
windowDiv.setAttribute("id", "window")
windowDiv.style.position = "relative";
windowDiv.style.width = "700px";
windowDiv.style.height = "400px";
windowDiv.style.overflow = "hidden";
body.prepend(windowDiv);

// ulTag 작성 및 세팅
let ulTag = document.createElement('ul');
ulTag.setAttribute("id", "slideUl");
windowDiv.prepend(ulTag);
const slideUl = document.getElementById('slideUl');
ulTag.style.width  = "700px"
ulTag.style.position = "absolute"
ulTag.style.top = "0"
ulTag.style.left = "0"
console.log(slideUl);



// li 태그 3개 생성
for(i=0; i<3; i++){
  let someTag = document.createElement('li');
  let appendC = ulTag.appendChild(someTag);
  appendC.setAttribute("id", `+"`slide${i}`"+`);
}
const li = document.querySelectorAll("li");
console.log(li);

// li 스타일링
li.forEach((element, index) => {
  element.style.listStyle = "none";
  element.style.width  = "700px";
  element.style.height  = "400px";
  element.textContent  = index+1+"번 슬라이드";
  element.style.fontSize = "32px";
  element.style.lineHeight = "400px";
  element.style.textAlign = "center";
});
`
module.exports = elementScript;
// console.log(elementScript);