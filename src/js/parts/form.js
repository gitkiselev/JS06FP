function form(){
	console.log('form');
	let mainForm = document.getElementsByName('form')[2];
	let allInputs = mainForm.getElementsByName('input');
	let nameMainForm = document.getElementById('nameMainForm');
	let phoneMainForm = document.getElementById('phoneMainForm');
	let emailMainForm = document.getElementById('emailMainForm');
	let textMainForm = document.getElementById('textMainForm');
	let clearInputs = () => {
		for (let i = 0; i < allInputs.length; i++) {
			let input = allInputs[i];
			input.value = '';
		}
	}
	function allowRusWords(){
		console.log('typing name');
		let regexp = /[^А-ЯЁ\s][^\s]/igm;
		this.value = this.value.replace(regexp, '');
	}
	function allowRusSentences(){
		console.log('typing comment');
		let regexp = /[^А-ЯЁ\s,\.!?][^\s]/igm;
		this.value = this.value.replace(regexp, '');
	}
	function allowEmail(){
		console.log('typing email');
		let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
		
		if(this.value.match(regexp)){
			return true;
		} else {
			alert('Неверный email');
			let mes = document.createElement('div');
			mes.innerHTML = 'Неверный email';
			popupDesignOverlay.appendChild(mes);
			//this.value = '';
			return false;

		}
	}

	function setCursorPosition(pos, elem) {
		elem.focus();
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		else if (elem.createTextRange) {
						var range = elem.createTextRange();
						range.collapse(true);
						range.moveEnd("character", pos);
						range.moveStart("character", pos);
						range.select()
		}
}

function mask() {
		var matrix = this.defaultValue,
						i = 0,
						def = matrix.replace(/\D/g, ""),
						val = this.value.replace(/\D/g, "");
						def.length >= val.length && (val = def);
		matrix = matrix.replace(/[_\d]/g, function(a) {
						return val.charAt(i++) || "_"
		});
		this.value = matrix;
		i = matrix.lastIndexOf(val.substr(-1));
		i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
		setCursorPosition(i, this)
}
					phoneMainForm.addEventListener("input", mask, false)
	    nameMainForm.addEventListener('input', allowRusWords);
	    textMainForm.addEventListener('input', allowRusSentences);
	    emailMainForm.addEventListener('blur', allowEmail);




}
export default  form;