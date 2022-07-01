var a = 10;
var b = 20;
var c = 10;
var f = "20";
var result;

result = a > b;
document.write(result + "<br>") // false
result = a < b;
document.write(result + "<br>") // true
result = a <= b;
document.write(result + "<br>")  // true
result = b == f; // b is equl f
document.write(result + "<br>") //true (자료형은 무시) 
result = b === f; // 
document.write(result + "<br>") // false (자료형까지 따졌을 때)
result = a != b; // a is not b
document.write(result + "<br>") // true