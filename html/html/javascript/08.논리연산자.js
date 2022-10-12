//비교연산자와 논리연산자가 같이 들어갔다. 
var a = 10;
var b = 20;
var m = 30;
var n = 40;
var result;
 // ||는 or 연산자 이다. (하나라도 True면, True가 된다. 모두 False여야지 False가 된다.)
result = a > b || b >= m || m > m; // False || False || False
document.write(result + "<br>"); // False
result = a > b || b >= m || m <= n; // False || False || True
document.write(result + "<br>"); // True
// &&은 and 연산자 이다. (하나라도 False면, False이다. 모두 True여야지 True가 된다.)
result = a <= b && b >= m && m <= m; // True && False && True
document.write(result + "<br>"); // False
result = a <= b && b <= m && m <= m; // True && True && True
document.write(result + "<br>"); // True
// !은 not이다.
result = !(a>b) // !False => True
document.write(result + "<br>"); // True