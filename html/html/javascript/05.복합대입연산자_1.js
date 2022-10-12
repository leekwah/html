// 대입연산자, 복합대입연산자
var num1 = 10;
var num2 = 3;

num1 += num2 // num1 = num1(10) + numb2(3) 
// 더해질 때, 오른쪽값이 왼쪽으로 더해진다고 생각하면 된다.
document.write(num1 + "<br>") // 13
// 계속 밑으로 상속된다고 생각하면 된다.
num1 -= num2 // num1 = num1(13) - numb2(3) 
document.write(num1 + "<br>") // 10
num1 *= num2 // num1 = num1(10) * numb2(3) 
document.write(num1 + "<br>") // 30
num1 /= num2 // num1 = num1(30) / numb2(3)
document.write(num1 + "<br>") // 10
num1 %= num2 // num1 = num1(30) % numb2(3)
document.write(num1 + "<br>") // 1
