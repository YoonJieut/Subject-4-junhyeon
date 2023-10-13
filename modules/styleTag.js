// 함수로 배경 바꾸기
// ** 첫 번째 매개변수는 slide 1번의 색
// ** 두 번째 매개변수는 slide 2번의 색
// ** 세 번째 매개변수는 slide 3번의 색

const styleTag = (fir,sec,thr)=>{
return`
<style>
*{
  padding: 0;
  margin :0;
  box-sizing: border-box;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
}
#slide0{
  background-color: ${fir};
}
#slide1{
  background-color: ${sec};
}
#slide2{
  background-color: ${thr};
}
</style>
`
};
// console.log(styleTag("red","blue","yellow"))
module.exports = styleTag;