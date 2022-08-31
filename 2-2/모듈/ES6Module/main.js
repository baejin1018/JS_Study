//import 문구를 이용해 필요한 모듈을 불러온다

import obj from "./obj.js";
import { message, hello, bye } from "./each.js";

console.log(obj);
obj.sayHello();

console.log(message);
hello(obj.user);
bye();
