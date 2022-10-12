var id = "kwah"
var pw = "hoon"
//  user의 id와 pw를 받아와야함
var user_id = prompt("아이디는?", "");
var user_pw = prompt("비밀번호는?", "");

// user_id와 id가 같은지 확인
if(id == user_id){
  //만약에 같다면, pw도 같은지
  if (pw == user_pw){
    document.write(user_id + "님 반갑습니다.");
  }else {
    // alert = 경고창
    alert ("비밀번호가 일치하지 않습니다.");
    // 그냥 넘어가면 안되고, reload를 시켜야한다.
    location.reload();
  }
}else{
  alert("아이디가 일치하지 않습니다.");
  // 그냥 넘어가면 안되고, reload를 시켜야한다.
    location.reload();
  }