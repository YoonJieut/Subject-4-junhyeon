
// ! 첫 요소 삭제 및 뒤로 이동
const pureSlide = `
//움직이는 로직
let topMove= (height) => {
  let temp = 0;
  let topMoving = setInterval(()=>{
    if(temp > -height) {
      temp = temp -5;
      slideUl.style.top = temp+"px";
    } else {
      clearInterval(topMoving)
    }
  }, 0.5)
}

// ! 첫 요소 삭제 및 뒤로 이동
let appnedSomething = ()=>{
  let remove1st = slideUl.removeChild(slideUl.children[0]);
  slideUl.appendChild(remove1st);
  slideUl.style.top = 0;
}


//최종 조립
setInterval(()=>{
  topMove(400);
  setTimeout(()=>{
    appnedSomething();
  },500);
}, 5000)
`
module.exports = pureSlide;

// console.log(pureSlide);