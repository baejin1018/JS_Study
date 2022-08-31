//for in vs for of
//for in은 세부항목을 string으로 변환후 iteration
//for of 는 세부항목을 iteration

const arr = [1, 3, 5, 7, 9];
console.log("for in");
for (let i in arr) {
  console.log(i + 0);
}

console.log("for of");
for (let i of arr) {
  console.log(i + 0);
}
