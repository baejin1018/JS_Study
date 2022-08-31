//객체나 배열을 변수로 분해하여 할당

/* const arr = ["a", "b"];

let [v1, v2] = arr;
console.log(v1, v2);

const arr2 = ["a", "b", "c", "d"];
let [value1, value2, ...restValues] = arr2;
console.log(value1, value2);
console.log(restValues);*/
//======================================
//객체
/*function getInfo() {
  return {
    name: "a",
    price: 1000,
  };
}
let { name, price } = getInfo();
console.log(name, price);*/

/*
const user = {
  id: 123,
  name: { first: "bae", second: "jinyoung" },
  age: 18,
};

let { name, age } = user;
let { first, second } = name;
console.log(name, age);
console.log(first, second);
*/
//===================================

//함수 파라미터
const user = {
  id: 123,
  name: { first: "bae", second: "jinyoung" },
  age: 18,
};

function printName({ name }) {
  console.log(name);
}
