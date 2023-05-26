//function scope case 1:
//var는 javascript 최상위 객체 window에 저장
//let const script에서만 사용
var hi = "hello"; 

//전역 스코프
function greeting(){
  console.log(hi); //전역 스코프 사용
}
greeting();

//function scope case 2:
function change(){
  hi = "bye";
}
console.log(hi);
change();
console.log(hi);

//scope error case:

const factor = 5;
function calc(){
  return num * factor;
}
const num = 10;
let result = calc();
document.write(`result : ${result}`);