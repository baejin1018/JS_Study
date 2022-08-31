//

function op(obj) {
  obj.prop = "porp";
  console.log(obj);
}

let obj = {
  id: 1,
};

console.log(obj);
op(obj);
console.log(obj);
