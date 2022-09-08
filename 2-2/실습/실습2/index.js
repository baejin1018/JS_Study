function check() {
  const query = 'input[name="dessert"]:checked';
  const sexCheckBox = document.querySelectorAll(query);
  console.log(sexCheckBox);
  if (sexCheckBox.length == 0) {
    alert("성별을 선택 주세요");
    return false;
  }
  return false;
  //   if(sexCheckBox)
}
