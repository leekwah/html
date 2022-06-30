// 변수라는 게 먼저 들어감 = var로 선언한다.
// 입력받는 것 prompt 뒤에 0은 default value(기본 입력 값)
var age = prompt("당신의 나이는 몇 살입니까?", "0");
// 20살 이상인지 확인 조건문
if(age>=20) {
  // console이 아닌 body에 출력을 하려면 document.write를 적어야한다.
  document.write("당신은 성인입니다.");
} else {
  document.write("당신은 미성년자입니다." + "<br>");
}

document.write("책에\"자바스크립트 대소문자를 구분해야 합니다.\"라고 나와 있다." + "<br>") //escape 문
document.write('책에"자바스크립트 대소문자를 구분해야 합니다."라고 나와 있다.') // 이것도 가능하다.