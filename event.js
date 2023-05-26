//window.onload = alert("안녕하세요!");
//window.click = alert("클릭")

const btn = document.querySelector("button");
const bttn = document.querySelector("input")
btn.onclick = () => {
  document.body.style.backgroundColor = "black";
}
bttn.addEventListener("click", function(){
  document.body.style.backgroundColor = "white"
})
// mouse event : click dbclick mousedown mousemove mouseover mouseout mouseup
// keyboard event : keydown keypress keyup
// form event : blur change focus reset submit