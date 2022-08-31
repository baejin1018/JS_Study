const obj = {
    id:1,
    arr:[1,2,3]
}
console.log(obj)

Object.defineProperty(ob,'value',{
    configurable:false,
    enumerable:true,
    value:'aa'
})