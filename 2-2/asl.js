/*function hello(){
    return //자동으로 ;이 붙어 밑에 코드블록이 생략된다
    {
        message:'hello'
    }
}*/

/*function hello(){
    return{
        message:'hello'
    }
}

console.log(hello())*/

//---------------------

/* const str = "Hello";
const message = "^^ "+ str
[0] + [1];
console.log(message);*/

//위 코드는 아래 코드처럼 해석되어 작동한다
/*
const str = "Hello";
const message = "^^ " + str[0] + [1];
console.log(message);
*/
