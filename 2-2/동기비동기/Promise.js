/*
function test(value) {
  return new Promise((resolve, reject) => {
    if (value >= 0) resolve("Ok");
    else reject("error");
  });
}

test(1)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  */

function test(value) {
  return new Promise((resolve, reject) => {
    if (value >= 0) resolve("Ok");
    else reject("error");
  });
}

function test2(value) {
  return new Promise((resolve) => {
    console.log("test2" + value);
    resolve("finish");
  });
}

function test3(value) {
  console.log(value);
}

test(1)
  .then(test2)
  .then(test3)
  .catch((error) => {
    console.log(error);
  });
