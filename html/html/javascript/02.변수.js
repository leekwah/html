//변수에 없는 값은 null 과 undefined 두 개가 있다. 정의되지 않은 undeifined으로 출력된다. 변수의 값을 2개 넣으면, 마지막 값만 기억된다.
var box;
box = 100;
box = 30;
//변수 선언방법 2번쨰
var pencil = 20;
//변수명은 string이 아니기에 그냥 적으면 된다.
document.write(box + " / " + typeof(box) + "<br>");
document.write(pencil + " / " + typeof(pencil) + "<br>")
var js = "javascript";
var strnum = "100" //string형식으로 
// JSP로 게시판을 짤 때, tag를 쓸 수도 있음
var tag = "<h1>String / String</h1>"
document.write(js + " / " + typeof(js) + "<br>");
document.write(strnum + " / " + typeof(strnum) + "<br>");
document.write(tag);

var s = 100;
var t = Number("100"); // String data를 Number로 바꾸는 방법
document.write(s + " / " + typeof(s) + "<br>");
document.write(t + " / " + typeof(t) + "<br>");

var a = true;
var b = false;
var c = 100>=10;
var d = Boolean(null);
document.write(a + " / " + typeof(a) + "<br>");
document.write(b + " / " + typeof(b) + "<br>");
document.write(c + " / " + typeof(c) + "<br>");
document.write(d + " / " + typeof(d) + "<br>");

var num2 = 100;
var str2 = "자바스크립트";
document.write(num2 + " / " + typeof(num2) + "<br>")
document.write(str2 + " / " + typeof(str2) + "<br>")