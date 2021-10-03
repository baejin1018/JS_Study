const calculator ={
    add: function(a,b){
       return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    mul: function(a,b){
        return a*b;
    },
    pow:function(a,b){
        return a**b;
    }
};

const plusResult = calculator.add(5,3);
const minusResult = calculator.minus(plusResult,10);
const divideResult = calculator.divide(minusResult,2);
const mulResult = calculator.mul(divideResult,plusResult);
const powResult = calculator.pow(plusResult,minusResult);

