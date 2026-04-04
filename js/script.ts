console.log("test")
console.log("x")
let x: number = 0; 
const output = document.getElementById("nrm")!
//numer main
function nrm(event: Event){
	event.preventDefault();
	const input = document.getElementById("numb") as HTMLInputElement | null;
	if (input && output){
		x = Number(input.value)
		output.textContent = x.toString()
		console.log(x)
	}
}
// change number
function chgn(n :number){
	x = x + n
	output.textContent = x.toString()
}
