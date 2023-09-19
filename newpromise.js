"use strict";
function carbuying() {
    console.log(" I am going to buy a car!");
    let car = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am on my way to buy car");
            resolve("I am in the garage and picked my fav car");
        }, 5000);
    });
    return car;
}
;
function lyligari() {
    console.log("Now my next plan is to give dinner to my friends");
    let dinner = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("On the way for dinner");
            resolve("We had done our dinner");
        }, 2000);
    });
    return dinner;
}
;
function ournextmission() {
    let mission = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ab ma ghar walo ko ghuamana");
            reject("Petrol bau mhnga jay");
        }, 2000);
    });
    return mission;
}
let abc = carbuying();
abc.then((JJ) => {
    console.log("Our response when we buy car...", JJ);
    return lyligari();
})
    .then((BB) => {
    console.log("Dinner has been done....", BB);
    return ournextmission();
}).catch((mission) => {
    console.log("ghar walo ko film...", mission);
});
