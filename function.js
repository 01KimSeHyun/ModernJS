//익명 함수

//case 1: 변수에 할당
let sum = function(a, b){
  return a + b;
}
let sum2 = (a, b) => {return a + b;}
console.log(`함수 실행 결과 ${sum(10,20)}`)
//case 2: 즉시 실행 함수

/*(function(a, b){
  let sum = a + b;
  console.log(`함수 실행 결과 ${sum}`)
}(100, 200));
*/
//return function 생략
let hi = function(){
  return '안녕하세요?';
}
let hi2 = () => { return '안녕하세요?'; }
let hi3 = () => '안녕하세요?';
let hi4 = user => console.log(`${user}님 안녕하세요!`)

// callback function
const btn = document.querySelector("button");

function display(){
  alert("클릭했습니다.");
}

btn.addEventListener("click", display)

// use callback methods
function getData(callback){
  let userName = prompt("이름을 입력하세요");
  let userAge = prompt("나이를 입력하세요");
  callback(userName, userAge);
}
function showData(name, age){
  alert(`안녕하세요 ${name}님. 나이가 ${age}살이군요.`);
}
//getData(showData)

//function change
let init = () =>{
  return function(a, b){
    return a - b > 0 ? a - b : b - a;
  }
}
//alert(`${init()(30,40)}`)

//spread syntax
fruit = ["apple", "banana", "grape"];
console.log(fruit[0], fruit[1], ...fruit)

// timer function
function greeting() {
  console.log("안녕하세요!");
}
let timer = setInterval(greeting, 2000);
clearInterval(timer)
setTimeout(() => {
  console.log("안녕하세요!?");
}, 3000)