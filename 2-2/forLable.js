/*
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i + "," + j); //내부 for문만 break
    if (j == 2) break;
  }
}
*/

//라벨 이용
//중첩되있는 포문을 한번에 종료하기 위해 사용
/*
//라벨
outer: for (let i = 0; i < 3; i++) {
  //라벨
  inner: for (let j = 0; j < 5; j++) {
    console.log(i + "," + j);
    if (j == 2) break outer;
  }
}
*/
//continue 라벨은 for 문에서만 사용가능
myBlock: {
  let i = 0;
  console.log(i);
  if (i == 0) break myBlock;
  console.log("Dead code"); //작동안함
}
