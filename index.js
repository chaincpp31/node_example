var var1 = "some variable";
let var2;
const var3="";

// const arr =[1,5,2,2,3,3,6];
// const dd= arr[2];
// console.log(dd);

// let result = 5+5;
// result+=10;
// console.log(result);
// let first = 2;
// let secon = 5;
// // first+=5;
// console.log((first +=5)>= 10);
// console.log(first);
// console.log(typeof first);
// console.log(typeof undefined)
// const arr=[1,2,3,4]
// const arr2=[2110,21021,12310,3231]
// const arr3=[...arr,...arr2]
// console.log(arr3)
// const arr = [1,2,3,4,5]
// const num1 = [0]
// const num2 = [1]

// const [num1,num2]=arr;
// console.log(num1)

// const arr = [1,2,3,4]
// const obj = {key1: 100 ,key2:200 , key3:300}

// for (const a in obj){
//     console.log(a)
// }
// for (const b of obj){
//     console.log(b)
// }

// let sum = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(sum());

// const func = param => {}
// function func(param) {}

// const multiply5=(num = 1) => num *5
// console.log(multiply5());

// function someFunc(...param){
//     console.log(param)
// }

// someFunc(1,2,3,4)
// someFunc(1,2,3)
// someFunc(1)

// const timeout =1000;
// setTimeout(() => {
//     console.log("dkclksdlksdklcml")
// }, timeout)

// function someFunction(name, callback =() => undefined){
//     if (typeof callback !== "function") return;
//         const String = "Hello" + name
//         callback(String);
// }
//     someFunction("chain",function(String){})

// function Donutshop(){
//     const buy =() => {}
//     return {buy}
// }
// const donutshop=Donutshop()
// donutshop.buy()
const someFunction = () => new Promise((resolve, reject)=>{
    resolve("aaaaaaaaaaaaaaaaaa")
    reject("bbbbbbbbbbbbbbb")
});
someFunction()
.then((value)=>{
    console.log(value);
})
.catch((value)=>{
    console.log(value);
}
)
.finally (()=>{

})