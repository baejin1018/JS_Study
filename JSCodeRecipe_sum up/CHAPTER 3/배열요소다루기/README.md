# 배열 요소 다루기

<br>

- # forEach

> ### 구문 : 배열 . forEach (콜백함수)

<br>

### `forEach()` : 주어진 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행

```js
const array = ["딸기", "귤", "사과"];

array.forEach((value, index) => {
  console.log(index, value); // 0 "딸기" , 1 "귤" , 2 "사과" 순으로 출력
});
```

<br>

- # for...of

> ### 구문 : for (const 요소 of 배열)

<br>

### `for...of` : 반복가능한 객체를 순회할 수있도록 하는 반복문

```js
const iterable = ["가", "나", "다"];

for (const value of iterable) {
  console.log(value); // 가, 나, 다
}
```

<br><br>

# 배열 요소 추가

- # unshift
  > ### 구문 : 배열.unshift( 요소1 , 요소2 , ...)

<br>

### `unshift` : 배열의 첫 위치에 요소를 추가

```js
const array1 = ["사과", "귤"];
arry1.unshift("바나나"); // 바나나를 배열 첫 위치에 추가
console.log(array1); //결과 ["바나나", 사과", "귤"];
```

<br><br>

- # push
  > ### 구문 : 배열.push( 요소1 , 요소2 , ...)

<br>

### `push` : 배열의 마지막 위치에 요소를 추가

```js
const array1 = ["사과", "귤"];
arry1.push("바나나"); // 바나나를 배열 마지막 위치에 추가
console.log(array1); //결과 [ "사과", "귤" ,"바나나" ];
```

<br><br>

# 배열요소 삭제

- # shift
  > ### 구문 : 배열.shift ( )

<br>

### `shift` : 배열의 첫 위치에 요소를 삭제

```js
const array1 = ["사과", "귤", "바나나"];
const shiftedValue = array1.shift(); //첫위치의 요소 삭제
console.log(shiftedValue);
console.log(array1); //결과 [ "귤" ,"바나나" ];
```

<br><br>

- # pop
  > ### 구문 : 배열.pop ( )

<br>

### `pop` : 배열의 마지막 위치에 요소를 삭제

```js
const array1 = ["사과", "귤", "바나나"];
const poppedValue = array1.pop(); //마지막 위치의 요소 삭제
console.log(poppedValue);
console.log(array1); //결과 [ "사과", "귤" ];
```

<br><br>

# 배열요소 변환

- # splice
  > ### 구문 : 배열.splice (위치 , 추출개수, 요소1, 요소2,...)

<br>

### `splice` : 배열의 첫 위치에 요소를 삭제

```js
const array1 = ["사과", "귤"];
array1.splice(1, 0, "바나나"); //인덱스 1의 위치에서 0개의 요소를 삭제하고 바나나를 추가함
console.log(array1); //결과 [ "사과" ,"바나나" ,"귤"];
```

<br><br>

# 배열 결합

- # concat
  > ### 구문 : 배열.concat (배열2, 배열3,...)

<br>

### `concat` : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다

```js
const array1 = ["곰", "사자"];
const array3 = ["여우"];
const array3 = array1.concat(array2);
console.log(array3); // 결과 : ["곰", "사자", "여우"]
```

### `[...배열,...배열2]` : 이렇게도 사용 가능

```js
const array1 = ["곰", "사자"];
const array3 = ["여우"];
const array3 = [...array1, ...array2];
console.log(array3); // 결과 : ["곰", "사자", "여우"]
```

<br><br>

- # join
  > ### 구문 : 배열.join (결합 문자열)

<br>

### `join` : 배열의 요소를 결합해 문자열로 출력, 결합하는 요소사이에 문자열을 지정

```js
const elements = ["Fire", "Air", "Water"];

console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join("")); // "FireAirWater"
console.log(elements.join("-")); // "Fire-Air-Water"
```

<br><br>

# 배열 요소 검색

- # indexOf
  > ### 구문 : 배열.indexOf(검색데이터,[시작위치])

<br>

### `indexOf` : 요소의 인덱스 위치 검색하기
