"use strict";
console.log("test");
console.log("x");
let x = 0;
const output = document.getElementById("nrm");
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
// change number
function chgn(n) {
    x = x + n;
    output.textContent = x.toString();
}
