// fetch("https://jsonplaceholder.typicode.com/posts").then(result=>result.json()).then(result=>{
//     result.forEach(post => {
//         console.log("*****************");
//         console.log(post);
//     });
// })

// async function getAllPost(){
//     let data=await fetch("https://jsonplaceholder.typicode.com/posts");
//     let posts=await data.json();
//     console.log(posts);
// }

$(function(){
    $.ajax({
        type:"Get",
        url:"https://jsonplaceholder.typicode.com/posts",
        success:function(res){
            console.log(res);
        }
    })
})

// getAllPost();

// let arr=[10,20,30];

// setTimeout(()=>{
//     console.log("timeout")
// },2000)

// setInterval(() => {
//     console.log("interval");
// }, 1000);

// function printValue(){
//     setTimeout(() => {
//         arr.forEach(i=>{
//             console.log(i);
//         })
//     }, 1000);
// }


// setValue();

// function setValue(){
//     setTimeout(() => {
//         arr.push(40);
//         printValue();
//     }, 2000);
// }

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         try {
//             arr.push(40);
//             resolve();
//         } catch (error) {
//             reject("Some error occur...")
//         }
//     }, 2000);
// }).then(result=>{
//     printValue();
// }).catch(e=>{
//     console.error(e)
// })

// let p1=new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
//     return result * 2;
  
//   }).then(function(result) {
//     return result * 2;
  
//   }).then(function(result) {
//     return result * 2;
//   });

// let p2=Promise.reject("p2");

// let p3=Promise.resolve("p3");

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// })

// Promise.race([p1,p2]).then(res=>{
//     console.log(res);
// })

