// // even numbers in array
// let a=[12,34,21,5,31,30];
// for(let i=0; i<a.length; i++) {
//     if(a[i]%2==0) {
//         console.log(a[i]);
//     }
// }

// // largest in array
// let a=[12,34,21,5,31,30];
// let max=a[0];
// for(let i=0; i<a.length; i++) {
//     if(a[i]>max) {
//         max=a[i];
//     }
// }
// console.log(max);


// // 
// function gender() {
//     const allUsers = [{
//         firstname: "Abhi",
//         gender: "Male"
//     }, {
//         firstname: "Rahul",
//         gender: "Male"
//     }, {
//         firstname: "Aadya",
//         gender: "Female"
//     }]

//     for(let i=0 ;i<allUsers.length; i++) {
//         if(allUsers[i]["gender"]=="Male") {
//             console.log(allUsers[i]["firstname"]);
//         }
//     }
// }
// gender();


// // function to find sum 
// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(10,20));



// Callback Functions
// function sum(num1,num2, callback) {
//     let result=num1+num2;
//     callback(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is: "+data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is: "+data);
// }
// const ans = sum(2, 4, displayResultPassive)




//Callback Example 2
// function calculator(a, b, callback) {
//     console.log(callback(a,b));
// }

// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     return a / b;
// }
// calculator(2,4, sum);


//setTimeout & setInterval Example
// function greet() {
//     console.log("Hello World");
// }
// setTimeout(greet, 3*1000);
// setInterval(greet, 2000);



//Async functions

// function findSum(n) {
//     let ans = 0;
//     for (let i=0; i<=n; i++) {
//         ans += i;
//     }
//     return ans;
// }
// function findSumTill100() {
//     console.log(findSum(100));
//   }

// setTimeout(findSumTill100, 1000)
// console.log("Hello World"); 

