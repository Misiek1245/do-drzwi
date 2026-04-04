"use strict";
console.log("test");
function nrm() {
    const input = document.getElementById("numb");
    const output = document.getElementById("nrm");
    if (input && output) {
        const x = input.value;
        output.innerText = x;
    }
}
