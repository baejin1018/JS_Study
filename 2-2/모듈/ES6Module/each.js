//항목을 하나씩 export

const message = "Util module";

const hello = (user) => {
  console.log(`hi ${user}`);
};
const bye = () => {
  console.log("bye");
};

export { message, hello, bye };
