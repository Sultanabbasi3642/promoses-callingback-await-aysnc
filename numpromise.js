"use strict";
function numberissue(a) {
    let num = new Promise((resolve, reject) => {
        if (a < 15) {
            resolve("this is great");
        }
        else if (a > 15) {
            reject("you are wrong");
        }
        else {
            console.error("error");
        }
    });
    return num;
}
let QQ = require("prompt-sync")();
let arsal = numberissue(QQ("please enter your number.."));
arsal.then((text) => {
    console.log("meraaa...", text);
}).catch((text) => {
    console.log("gggg..", text);
});
