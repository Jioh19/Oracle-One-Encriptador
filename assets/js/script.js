function encriptar() {
	result = '';
	input = document.querySelector('#input').value;
	for (let i = 0; i < input.length; i++) {
		switch (input[i]) {
			case 'a':
				result += 'ai';
				break;
			case 'e':
				result += 'enter';
				break;
			case 'i':
				result += 'imes';
				break;
			case 'o':
				result += 'ober';
				break;
			case 'u':
				result += 'ufat';
        break;
			default:
				result += input[i];
		}
	}
	console.log(result);
	showOutput(result);
}

function showOutput(result) {
	output = document.querySelector('.output');
	output.classList.remove('hidden');
	empty = document.querySelector('.empty');
	empty.classList.add('hidden');
	textArea = document.querySelector('#output');
	textArea.innerHTML = result;
}

function desencriptar() {
	input = document.querySelector('#input').value;
	input = input.replaceAll('ai', 'a');
	input = input.replaceAll('enter', 'e');
	input = input.replaceAll('imes', 'i');
	input = input.replaceAll('ober', 'o');
	input = input.replaceAll('ufat', 'u');
	console.log(input);
	showOutput(input);
}

function copiar() {
	copy = document.querySelector('#output');
	copy.select();
	copy.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copy.value);
	alert("Texto copiado: " + copy.value);
}