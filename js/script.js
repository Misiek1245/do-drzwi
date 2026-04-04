"use strict";
console.log("test");
function nrm(event) {
    event.preventDefault();
    const input = document.getElementById("numb");
    const output = document.getElementById("nrm");
    if (input && output) {
        const x = input.value;
        output.innerText = x;
    }
}
