// 증감연산자는 JAVA에서도 똑같이 쓰인다.
var num1 = 10;
var num2 = 20;
var num3 = 30;
var result;
num1--;
document.write(num1 + "<br>"); // 9

num1++;
document.write(num1 + "<br>"); // 10

result = num2++; // 원래 21이어야하지만, 대입 후 1이 증가하게 되기 때문에 20이 나온다. 
// result : 20, numb2++는 21
document.write(result + "<br>"); // numb2는 21이 된상태

result = ++num2; // num2가 21이 된상태, 앞에 ++를 붙이면, 증가한 상태로 대입시키므로 22가 나온다.
document.write(result + "<br>"); //

result = ++num3; // 먼저 증가 후, 대입시키기에 31로 result가 나온다.
document.write(result + "<br>"); //
