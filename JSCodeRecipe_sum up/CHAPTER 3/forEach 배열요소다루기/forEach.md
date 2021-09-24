# forEach

### 구문 : 배열 . forEach (콜백함수)

<br>

### `forEach()` : 주어진 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행

```js
const array = ["딸기", "귤", "사과"];

array.forEach((value, index) =>{
    console.log(index, value); // 0 "딸기" , 1 "귤" , 2 "사과" 순으로 출력
});
```