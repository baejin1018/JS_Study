# const

const 키워드는 상수를 선언하기 위해 사용한다  
const는 대부분 let과 동일하다

## const가 let과 다른점

- ### 선언과 초기화
  const키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야한다
  ```js
  const foo = 1;
  const bar; // SyntaxError: Missing initializer in const declration
  ```
- ### 재할당 금지
  var 과 let은 재할당이 자유롭지만 `const 키워드로 선언된 변수는 재할당이 금지된다`
  ```js
  const foo = 1;
  f = 2; //TypeError : Assigment to constant variable
  ```
- ### 상수
  const 키워드로 선언한 변수에 원시값을 할당하면 경우 값을 변경할수 없다  
   `상순느 재할당이 금지된 변수`를 말한다  
   상수의 이름은 대문자로 선언하고 \_로 구분해 스네이크 케이스로 표현한다
- ### const 키워드와 객체

  `const키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다`  
   원시 값은 재할당 없이 변경할수 있는 방법이 없지만 객체는 재할당 없이 값을 변경할수 있기 떄문이다

  ```js
  const person = {
    name: "Bae",
  };

  person.name = "Kim";

  console.log(person); //{name: "Kim"}
  ```

  이를 통해 const키워드는 재할당을 금지 할뿐 불변을 의미하지 않는다는것을 알 수 있다
