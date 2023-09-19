"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carMaintenance1() {
    console.log("I leave my car at 9 in workshop");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Car is fixed...");
            resolve("Your car is ready");
        }, 5000);
    });
    return result;
}
function pickDress1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Dress is ready");
            resolve("pick your dress");
        }, 1000);
    });
    return promise;
}
let mechanicResponse = carMaintenance1();
mechanicResponse.
    then((text) => {
    console.log("Mechanic Response...", text);
    return pickDress1();
})
    .then((text) => {
    console.log("Laundry Response...", text);
})
    .catch((err) => {
    console.log("Error", err);
});
