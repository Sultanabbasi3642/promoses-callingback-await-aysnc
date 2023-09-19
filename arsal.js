"use strict";
function userbuyproduct1(cb) {
    console.log("arsal has come to a online shopping store");
    setTimeout(() => {
        console.log("add headphone too cart ");
        cb("product loading....");
    }, 2000);
}
function userbuyproductcallbackfunc(text) {
    console.log(text);
    maketea(maketeacallback);
}
;
// userbuyproduct1(userbuyproductcallbackfunc);
function maketea(cb) {
    console.log("milk and water is add");
    setTimeout(() => {
        console.log("adding milk and water");
        cb("tea is ready");
    }, 2000);
}
function maketeacallback(text) {
    console.log("making tea", text);
    arsalissue(calbackarsal);
}
function arsalissue(cb) {
    setTimeout(() => {
        console.log("ma phas gya");
        cb("bijli ni aondi");
    }, 4000);
}
function calbackarsal(text) {
    console.log("mera issue", text);
}
userbuyproduct1(userbuyproductcallbackfunc);
