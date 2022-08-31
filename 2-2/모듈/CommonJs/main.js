//require 문구를 이용해 필요한 모듈을 불러온다
const data = require("./obj");
const util = require("./each");

console.log(data);
data.sayHello();

console.log(util.message);
util.hello(data.user);
util.bye();
