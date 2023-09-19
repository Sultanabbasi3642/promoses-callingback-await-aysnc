// async function test() {
//     console.log("1");
//     console.log("2");
//     console.log("3");
// }

// console.log("4");
// test();
//  https://jsonplaceholder.typicode.com/posts
async function url() {
    console.log("please wait while your URL is loading");
    console.log((await fetch("https://jsonplaceholder.typicode.com/posts")).json())
    console.log("here is your data");
    
}
console.log("Welcome to our website");
let Data=url()
console.log("Read and enjoy");
Data.then((Fetcheddata)=>{
console.log("Here is your Fethced data:",Fetcheddata);
}).catch((err)=>{
    console.log("oh oh sorry got error",err);
    
})




