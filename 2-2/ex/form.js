function check() {
  const mutual = document.getElementById("mutual");
  const username = document.getElementById("username");
  const number = document.getElementById("number");
  const phoneNumber = document.getElementById("phoneNumber");
  const id = document.getElementById("id");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  if (mutual.value.length == 0) {
    alert("상호명을 입력하세요.");
    return false;
  }
  if (username.value.length == 0) {
    alert("대표자를 입력하세요.");
    return false;
  }
  if (number.value.length == 0) {
    alert("사업자 등록 번호를 입력하세요.");
    return false;
  }
  if (phoneNumber.value.length == 0) {
    alert("대표전화를 입력하세요.");
    return false;
  }
  if (id.value.length == 0) {
    alert("거래서 ID를 입력하세요.");
    return false;
  }
  if (password.value.length < 6) {
    alert("비밀번호는 6글자 이상 입력하세요");
    return false;
  }
  if (password2.value != password.value) {
    alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    return false;
  }

  const personalQuery = 'input[name="personal"]:checked';
  const personal = document.querySelector(personalQuery);
  if (personal == null) {
    alert("개인 정보 동의여부를 선택해주세요.");
    return false;
  }

  const registerQuery = 'input[name="register"]:checked';
  const register = document.querySelector(registerQuery);
  console.log("r", register);
  if (register == null) {
    alert("처리 방법을 선택해주세요.");
    return false;
  } else if (register.value == "submit") {
    alert("즉시 등록되었습니다.");
    return false;
  } else if (register.value == "submit2") {
    alert("임시 저장되었습니다.");
    return false;
  }
  return false;
}

//   function check(){
//     const genderQuery = 'input[name="gender"]:checked';
//     const gender = document.querySelector(genderQuery);
//     if(gender==null){
//         alert("성별을 선택해주세요.");
//         return false;
//     }

//     const itemQuery = 'input[name="item"]:checked';
//     const items = document.querySelectorAll(itemQuery);
//     if(items.length==0){
//         alert("신청항목을 선택해주세요.");
//         return false;
//     } else {
//         alert(`${items.length}개 신청합니다.`);
//     }
//     return true;
// }
