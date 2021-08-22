const age = parseInt(prompt("How old are you?"));
    
if(isNaN(age) || age <0){/* isNaN 값이 숫자면 false 숫자가 아니면 true, || or연산자 둘중 한개라도 조건에 맞으면 true*/
    console.log("Please write a real positive number");
}
else if(age<18){
    console.log("You are too young!");
}
else if(age >= 18 && age <= 50){/*&& and 연산자 둘다 조건에 맞으면 true*/ 
    console.log("You can drink!");
}
else if(age > 50 && age <= 80){
    console.log("You should exercise");
}
else if(age >80){
    console.log("You can do whatever you want");
}