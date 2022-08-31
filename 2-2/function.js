//함수는 일급 객체이다
//함수의 매개변수 또는 반환값이 될 수 있다

function add(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function excutor(type) {
  if (type == "add") return add;
  else return sub;
}

const f = excutor("add");
console.log(f(1, 2));
