function form(){
	console.log('form');
	let popupOk    = document.querySelector('.popup-ok'),
					popupError = document.querySelector('.popup-error'),
	    mainForm = document.getElementById('mainForm'),
	    allInputs = mainForm.elements,
	    nameMainForm = document.getElementById('nameMainForm'),
	    phoneMainForm = document.getElementById('phoneMainForm'),
	    emailMainForm = document.getElementById('emailMainForm'),
	    textMainForm = document.getElementById('textMainForm');
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
let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Недостаточно данных";

	let statusMessage = document.createElement("div");
	statusMessage.classList.add("status");
let formDataMainForm = new FormData(mainForm);
mainForm.addEventListener("submit", function(e) {
	e.preventDefault();
	mainForm.appendChild(statusMessage);
	
	let request = new XMLHttpRequest();
	request.open("POST", "./server.php");
	request.setRequestHeader(
			"Content-Type",
			"application/x-www-form-urlencoded"
	);
	request.send(formDataMainForm);
	
	request.onreadystatechange = function() {
			if (request.status === 200 && request.status < 300) {
							popupOk.style.display = 'block';
					} else {
							popupError.style.display = 'block';
					}
	};
	clearInputs();
});
					phoneMainForm.addEventListener("input", mask, false)
	    nameMainForm.addEventListener('input', allowRusWords);
	    textMainForm.addEventListener('input', allowRusSentences);
	    emailMainForm.addEventListener('blur', allowEmail);




}
export default  form;