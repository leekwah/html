var price1 = prompt("버스비", "3000");
var price2 = prompt("점심", "6000");
var price3 = prompt("음료", "3000");
var total = Number(price1) + Number(price2) + Number(price3);
var cal = (total - 10000);
var result = total > 10000 ? cal + "원 초과" : "돈 관리 잘 했어요!";
document.write(result);