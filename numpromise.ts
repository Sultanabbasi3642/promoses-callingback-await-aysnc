function numberissue(a:number){
    let num : Promise<string>=new Promise((resolve, reject) => {
        
if ( a< 15){
    resolve("this is great")
}
else if(a > 15){
    reject("you are wrong")
    
}
else{console.error("error");
}
    })

return num
}
let QQ=require("prompt-sync")()
let arsal = numberissue(QQ("please enter your number.."))
arsal.then((text:string)=>{
    console.log("meraaa...",text);

}).catch((text:string)=>{
    console.log("gggg..",text);
    
})








