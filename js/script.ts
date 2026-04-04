console.log("test")
function nrm(event: Event){
	event.preventDefault();
	const input = document.getElementById("numb") as HTMLInputElement | null;
	const output = document.getElementById("nrm")

	if (input && output){
		const x = input.value
		output.innerText = x
	}
}

