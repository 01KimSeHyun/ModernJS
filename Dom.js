// 돔이란 자바스크립트 같은 프로그래밍 언어로, 웹 문서에 접근하고 제어할 수 있도록 웹문서를 체계적으로 정리하는 방법
/*let q = document.querySelector("p")
let p = document.querySelectorAll("p")
q.innerHTML = "<h3>변경</h3>"
q.onclick = () => {
  q.style.backgroundColor = "black";
  q.style.color = "white";
  p[1].classList.add("clicked")
}

let a = document.forms
let b = document.forms[0].elements
let c = b[0].elements
console.log(b)
console.log(c)

*/

console.log(document.testForm.subject)
console.log(document.testForm.subject[0])

var a = document.querySelectorAll("input[name='mailing']:checked")
console.log(a)