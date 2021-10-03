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

### `indexOf` : 요소의 인덱스 위치 검색하기

```js
[1, 2, 3, 4, 5, 4, 3, 2].indexOf(4); //3
```

<br><br>

- # lastIndexOf
  > ### 구문 : 배열.lastIndexOf(검색데이터,[시작위치])

### `lastIndexOf` : 뒷부분 부터 요소의 인덱스 위치 검색하기

```js
[1, 2, 3, 4, 5, 4, 3, 2].lastIndexOf(4); //5
```

<br><br>

- # includes
  > ### 구문 : 배열.includes(검색데이터,[시작위치])

### `includes` : 요소가 배열에 포함하는지 안하는지 여부확인하기

```js
[1, 2, 3, 4, 5, 4, 3, 2].includes(4); //true
[1, 2, 3, 4, 5, 4, 3, 2].includes(0); //false
```

<br><br>

- # find
  > ### 구문 : 배열.find(콜백함수)

### 콜백함수 : ( [요소] , [인덱스] , [기존배열] ) => 진릿값

- 요소를 확인하고 진리값을 반환

### `find` : 콜백함수 조건에 맞는 첫 요소를 찾는다

```js
const myArray = ["곰", "사자", "여우", "원숭이"];

const targetUser = myArray.find((element) => element === "사자");

console.log(targetUser); //결과 : '사과'
```

<br><br>

# 배열요소 역순 정렬하기

- # reverse
  > ### 구문 : 배열.reverse()

### `reverse` : 배열을 역순으로 정렬

```js
const array = [1, 3, 5];
array.reverse();
console.log(array); //결과 : [5,3,1]
```

<br><br>

# 배열요소 정렬 방법 지정하기

- # sort

  > ### 구문 : 배열.sort( [ 비교함수 ] )

  ### `sort` : 배열을 비교함수로 정렬하기

  - ( 비교함수 ) 반환값 < 0 : a,b의 순서대로 정렬
  - ( 비교함수 ) 반환값 = 0 : 정렬 순서의 변화 없음
  - ( 비교함수 ) 반환값 > 0 : b,a의 순서대로 정렬

  ```js
  const array = [1, 2, 3, 4, 5];

  array.sort((a, b) => {
    //a가 b 보다 작으면 a,b 순서로 정렬
    if (a < b) {
      return 1;
    }
    //a와 b가 같으면 정렬 순서 변화없음
    if (a === b) {
      return 0;
    }
    //a가 b보다 크면 b,a 순서로 정렬
    if (a > b) {
      return -1;
    }
  });

  console.log(array); //[5,4,3,2,1]
  ```

<br><br>

- # localeCompare

  > ### 구문 : 문자열1 . localeCompare(문자열2)

  ### 대소문자 구별을 위해서는 `sort` 대신 `localeCompare`을 사용

  ### `sort`를 사용 하면 Orange가 apple 보다 앞에 오게 된다.

  ```js
  const arr2['grape', 'Orange', 'apple];
  arr2.sort((a,b) => a.localeCompare(b));
  console.log(arr2); //결과 ['apple', 'grape', 'Orange']
  ```

  <br><br>

# 배열요소를 추출하여 새 배열 만들기

- # map

  > ### 구문 : 배열.map(콜백함수)

  ### `map()`은 배열에서 요소를 추출하여 새로운 배열을 생성한다

  ```js
  const idList = [4, 10, 20];

  const userIdList = idList.map((value, index) => `userid_${value}`);
  console.log(userIdList); // 결과 ["userid_1_3","userid_2_8","userid_3_12",]
  ```

  <br><br>

# 조건을 만족하는 배열요소를 추출하여 새 배열 만들기

- # filter

  > ### 구문 : 배열.filter(콜백함수)

  ### `filter()`는 콜백함수 조건에 맞는 요소를 추출하여 새로운 배열을 생성한다

  ```js
  const newArr = [10, 20, 30, 40].filter((value) => value >= 30);
  //newArr에서 값이 30이상인수만 새로운배열로 생성
  console.log(newArr); //[30,40]
  ```
