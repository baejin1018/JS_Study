//Array
//대괄호로 정의, 순서를 가지는 데이터 집합, 가변의 길이 가짐

/*
const arr = [1, 2, 3, 4];
console.log(arr);

console.log(arr[0]); //index를 이용한 접근

arr.push(5); //마지막위치에 5추가
console.log(arr);

arr.pop(); //마지막 항목 삭제
console.log(arr);

const value = arr.splice(1, 2); //1번부터 2개 삭제
console.log("removed", value);
console.log(arr);
*/

// 배열 복사
//shallow copy : 객체의 참조만 복사
/*
const arr=[1,2,3,4];
const arr2 = arr;
arr2.pop();
console.log(arr);
*/

//Deep copy : 같은 값을 가지는 새로운 Array를 생성
// array만 있을경우 slice 로 가능
/*
const arr= [1,2,3,4]
const arr2 = arr.slice;
arr2.pop();
console.log(arr);
console.log(arr2);
*/

//Set

const set = new Set([1, 2, 3]); //배열로 초기화 가능
set.add(1); //중복되는 값 -> 값안들어감
set.add(4);
console.log(set);
const obj = {value:1}; //객체도 넣을수 있음