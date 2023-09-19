"use strict";
// async function test() {
//     console.log("1");
//     console.log("2");
//     console.log("3");
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log("4");
// test();
//  https://jsonplaceholder.typicode.com/posts
function url() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("please wait while your URL is loading");
        console.log((yield fetch("https://jsonplaceholder.typicode.com/posts")).json());
        console.log("here is your data");
    });
}
console.log("Welcome to our website");
let Data = url();
console.log("Read and enjoy");
Data.then((Fetcheddata) => {
    console.log("Here is your Fethced data:", Fetcheddata);
}).catch((err) => {
    console.log("oh oh sorry got error", err);
});
