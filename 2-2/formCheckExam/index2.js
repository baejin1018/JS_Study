function checkForm() {
  const name = document.getElementById("상호");
  const businessNum = document.getElementById("사업자등록번호");
  const phoneNum = document.getElementById("대표전화");
  const account = document.getElementById("거래처ID");
  const pw = document.getElementById("비밀번호");
  const pwCheck = document.getElementById("pwCheck");
  const classification = document.getElementById("classification");
  // const save = document.getElementById("save");
  // const selected = document.querySelector('input[name="personInfo"]:checked');
  const none = document.getElementsByTagName("p");
  const formInfo = [
    name,
    businessNum,
    phoneNum,
    account,
    pw,
    // classification,
    // selected,
  ];
  console.log(formInfo);

  const check = {
    false(tag, name, i) {
      none[i].className = "none";
      return false;
    },
    true(x, j, i) {
      none[i].className = "ok";
      return true;
    },
  };

  const checkResult = formInfo.map((item, i) =>
    check[Boolean(item.value)](item, item.id, i)
  );

  console.log("CK", checkResult);

  return !checkResult.includes(false);
}
