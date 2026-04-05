"use strict";
console.log("test");
console.log("x");
let x = 0;
let multi = 1;
const numbers = [];
const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
let result = document.getElementById("result");
const output = document.getElementById("nrm");
function sort() {
    const imgg = document.querySelector("#sort img");
    if (!imgg)
        return;
    if (multi == 1) {
        imgg.src = "img/sort-up.png";
        multi = -1;
    }
    else {
        imgg.src = "img/sort-down.png";
        multi = 1;
    }
}
//numer main
function nrm(event) {
    event.preventDefault();
    const input = document.getElementById("numb");
    if (input && output) {
        x = Number(input.value);
        output.textContent = x.toString();
        console.log(x);
    }
}
function addn() {
    numbers[x] = x;
    x = x + multi;
    output.textContent = x.toString();
    console.log(numbers);
}
function chgn(n) {
    x = x + n;
    output.textContent = x.toString();
    console.log(x);
}
function deln() {
    numbers[x] = 0;
    x = x + multi;
    output.textContent = x.toString();
    console.log(numbers);
}
function c() {
    location.reload();
}
function end() {
    main1.style.display = "none";
    main2.style.display = "flex";
    for (let index = 0; index <= numbers.length; index++) {
        if (numbers[index] != 0 && numbers[index] != undefined) {
            result.textContent += numbers[index] + " ,";
        }
    }
}
