
// ! 첫 요소 삭제 및 뒤로 이동
// ! 단 slideUl을 선언

let appnedSomething = ()=>{
  let remove1st = slideUl.removeChild(slideUl.children[0]);
  slideUl.appendChild(remove1st);
  slideUl.style.left = 0; // 초기화 작업
}

// * 스르륵 height 만큼, 위로 이동하는 것
let topMove= (height) => {
  let temp = 0;
  let topMoving = setInterval(()=>{
    if(temp > -height) {
      temp = temp -7;
      slideUl.style.top = temp+"px";
    } else {
      clearInterval(topMoving)
    }
  }, 0.5)
}
// 최종 조립 
  setInterval(()=>{
    topMove(700);
    setTimeout(()=>{
      appnedSomething();
    },1000);
  }, 5000)

module.exports = slideLogic;