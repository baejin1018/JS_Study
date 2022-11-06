const form = document.getElementsByTagName("form");

const onClickImm = () => {
  submitActioc("즉시등록");
};

const onClickSave = () => {
  submitActioc("임시저장");
};

const submitActioc = (message) => {
  if (checkForm()) {
    const result = confirm(`${message} 하시겠습니까?`);
    if (result) {
      alert("저장되었습니다.");
    } else {
      alert("취소되었습니다.");
      return true;
    }
    form[0].submit();
  }
};

const changeBNum = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{2,3})(\d{2,4})(\d{5})$/, `$1-$2-$3`);
};

function checkForm() {
  const name = document.getElementById("상호");
  const businessNum = document.getElementById("사업자등록번호");
  const phoneNum = document.getElementById("대표전화");
  const account = document.getElementById("거래처ID");
  const pw = document.getElementById("비밀번호");
  const pwCheck = document.getElementById("pwCheck");
  const selected = document.querySelector('input[name="personInfo"]:checked');
  const none = document.getElementsByTagName("p");
  const classification = document.getElementById("classification");
  const classificationValue = classification.options[
    classification.selectedIndex
  ].value
    ? { name: "classification" }
    : undefined;

  const formInfo = [
    name,
    businessNum,
    phoneNum,
    account,
    pw,
    pwCheck,
    classificationValue,
    selected,
  ];

  const setClassOk = (i) => {
    none[i].className = "ok";
    return true;
  };

  const setClassNone = (i) => {
    none[i].className = "none";
    return false;
  };

  const setEvent = (item, i, event) => {
    item.addEventListener("change", (e) => event(e, i));
  };

  const firstCheck = (item, i) => {
    return item.value ? setClassOk(i) : setClassNone(i);
  };
  const checkEvent = (e, i) => {
    e.target.value.length != 0 ? setClassOk(i) : setClassNone(i);
  };

  const onChangePwCheck = (e) => {
    e.target.value == pw.value ? setClassOk(5) : setClassNone(5);
  };

  const checkPassword = (i) => {
    if ((pwCheck.value !== pw.value) | (pwCheck.value == "")) {
      return setClassNone(i);
    } else {
      return setClassOk(i);
    }
  };

  const check = {
    same(item, i) {
      setEvent(item, i, checkEvent);
      return firstCheck(item, i);
    },
    pwCheck(item, i) {
      setEvent(item, i, onChangePwCheck);
      return checkPassword(i);
    },
    undefined(_, i) {
      return setClassNone(i);
    },
    classification(_, i) {
      return setClassOk(i);
    },
    personInfo(item, i) {
      if ((item.value == "undefined") | item) {
        return setClassNone(i);
      } else return setClassOk(i);
    },
  };

  const checkResult = formInfo.map((item, i) => {
    return check[item?.name](item, i);
  });

  return !checkResult.includes(false);
}
