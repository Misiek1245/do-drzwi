console.log("test")
console.log("x")
let x: number = 0; 
let multi: number =1
const numbers :number[] = []
const output = document.getElementById("nrm")!
function sort(){
	const imgg = document.querySelector("#sort img") as HTMLImageElement | null
	if (!imgg) return
	if (multi == 1){
	imgg.src ="../img/sort-up.png"
	multi = -1
	}else {
	imgg.src ="../img/sort-down.png"
	multi = 1
	}
}
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
	x = x + n*multi
	output.textContent = x.toString()
	console.log(x)
}
function deln() {
	numbers[x] = 0	
}
function c() {
	location.reload()
}
