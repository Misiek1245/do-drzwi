console.log("test")
function nrm(){
	const input = document.getElementById("numb") as HTMLInputElement | null;
	const output = document.getElementById("nrm")

	if (input && output){
		const x = input.value
		output.innerText = x
	}
}

