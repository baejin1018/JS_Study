# let

var의 단점을 보완하기 위해 ES6에서 새로운 변수 선언 키워드인 let과 const를 도입했다

## let의 특징

- ### 변수 중복 선언금지

  let키워드로 이름이 같은 변수를 중벅선언하면 문법에러가 발생한다

  ```js
  let foo = 123;
  //중복허용 안함
  let foo = 1; //SystaxError : Identifier 'foo' has already been declared
  ```

- ### 블록레벨 스코프
  let키워드는 모든 코드블록을 스코프로 인정하는 블록 레벨스코프를 따른다
  ```js
  let foo = 1; //전역변수
  {
    let foo = 2; //지역변수
    let bar = 3; //지역변수
  }
  console.log(foo); //1
  console.log(bar); //RefereceError: bar is not defined
  ```
- ### 변수 호이스팅

  let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것 처럼 동작한다

  ```js
  console.log(foo); //RefereceError: foo is not defined
  let foo;
  ```

  let 키워드로 선언한 변수는 `선언단계`와 `초기화 단계`가 분리되어 진행된다  
   런타임 이전에 암묵적으로 선언단계가 미리 실행되지만 초기화 단계는 변수선언문에 도달했을때 실행된다 그래서 let키워드로 선언한 변수는 스코프의 시작시점부터 초기화 시작 시점까지 변수를 참조할 수 없는 구간인 `일시적 사각지대`가 생긴다

  ```js
  //런타임이전에 선언단게가 실행됨
  //초기화 이전의 일시적 사각지대에서는 변수 참조 불가능
  console.log(foo); //RefereceError: foo is not defined

  let foo; //초기화 단계 실행
  console.log(foo); //undefined

  foo = 1; //할당단계 실행
  console.log(foo); //1
  ```

  이것만 보면 호이스팅이 발생하지 않는것 처럼보이지만 그렇지 않다

  ```js
  let x = 1; //전역변수
  {
    //호이스팅이 발생하지 않았다면 전역변수 x를 참조해 1이 나와야함
    console.log(foo); ////RefereceError: foo is not defined
    let x = 2; //지역변수
  }
  ```

  위 예제를 통해 호이스팅이 발생한다는 것을 알수 있다

- ### 전역 객체와 let
  let으로 선언한 전역 변수는 전역객체의 프로퍼티가 아니다  
   let 전역 변수는 보이지 않는 개념적인블록 내에 존재하게 된다
  ```js
  let x = 1;
  //let const 키워드로 선언한 전역변수는 전역 객체 window의 프로퍼티가 아니다
  console.log(window.x); //undefined
  console.log(x); //1
  ```
