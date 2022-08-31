/*
function test(value) {
  return new Promise((resolve, reject) => {
    resolve("ok");
  });
}

async function runTest() {
  const result = await test(1);
  console.log(result);
}

runTest();
*/

function test(value) {
  return new Promise((resolve, reject) => {
    if (value >= 0) resolve("ok");
    else reject("ng");
  });
}

async function runTest() {
  try {
    const result = await test(-1);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runTest();
