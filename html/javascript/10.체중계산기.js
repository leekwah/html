var yourName = prompt("당신의 이름은?", "");
var height = prompt("당신의 신장은?", "0");
var weight = prompt("당신의 몸무게는?", "00");

//+-5는 오차범위를 지정해 주기 위해서 계산한다.
var normal_weight = (height - 100) * 0.9;
var result = weight >= normal_weight -5 && weight <= normal_weight + 5;

result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
document.write(yourName + "님은" + result)