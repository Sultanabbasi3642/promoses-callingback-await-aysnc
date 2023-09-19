"use strict";
function userbuyproduct(cb) {
    console.log("arsal has come to a online shopping store");
    setTimeout(() => {
        console.log("add headphone too cart ");
        cb("product loading....");
    }, 5000);
}
function callbackfunc(text) {
    setTimeout(() => {
        console.log("jfdhgfcjg");
    }, 1000);
    console.log("that was website response", text);
}
userbuyproduct(callbackfunc);
