function check() {
  const idInput = document.getElementById("userid");
  const brithdayInput = document.getElementById("brithday");
  const passwordInput = document.getElementById("password");
  const passwordInput2 = document.getElementById("password2");

  if (idInput.value == "") {
    alert("아이디를 입력하세요");
    return false;
  }
  if (brithdayInput.value.length != 6 || isNaN(brithdayInput.value)) {
    alert("올바른 생년월일을 입력하세요");
    return false;
  }
  if (passwordInput.value < 4) {
    alert("비밀번호는 4글자이상 입력하세요");
    return false;
  }
  if (passwordInput.value != passwordInput2.value) {
    alert("비밀번호가 일치하지 않습니다");
    return false;
  }
  return true;
}
