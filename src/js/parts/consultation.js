function consultation(){
	
	let giftModal = document.querySelector('.popup-gift'),
	
	consForm = document.getElementById('consForm'),//form consultation
	allInputs = consForm.elements,
	nameConsForm = document.getElementById('nameConsForm'),
	phoneConsForm = document.getElementById('phoneConsForm'),
	popupDesignOverlay = document.querySelector('.popup-design'),//overlay
	btnsPopupClose     = document.querySelectorAll('.popup-close'),
	popupConsultation = document.querySelector('.popup-consultation');//overlay
	
	document.body.addEventListener('click', e => {
		if (e.target.tagName == 'BUTTON' && e.target.classList.contains('button-consultation')) {
			console.log(e.target);
			showPopupConsultation();
		}
	});
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

	popupConsultation.addEventListener('click', hidePopupModalConsultation);
	function hidePopupModalConsultation(e) {
		
		if(e.target.classList.contains('popup-consultation') || e.target.classList.contains('popup-close')){
			popupConsultation.style.display = 'none';
			document.body.style.overflow = '';
		}			
	}
	
	for(let i = 0; i < btnsPopupClose.length; i++){
		let btnPopupClose = btnsPopupClose[i];
		btnPopupClose.addEventListener('click', hidePopupModalConsultation);
		clearTimeout(timerId);	
	}
	function showPopupConsultation(){
			popupConsultation.style.display = 'block';
			
			document.body.style.overflow = 'hidden';
			
	}
	let timerId = setTimeout(() => {
		openModal();
}, 60000);
	
function openModal() {
	let computedStyleCons = window.getComputedStyle(popupConsultation).display,
					computedStyleGift = window.getComputedStyle(giftModal).display,
					computedStyleDesign = window.getComputedStyle(popupDesignOverlay).display;
	if (computedStyleCons == 'none' && computedStyleGift == 'none' && computedStyleDesign == 'none') {
		popupConsultation.style.display = 'block';
					document.body.style.overflow = 'hidden';
	}
}

	



	consForm.addEventListener("submit", function(e) {
		e.preventDefault();

let formDataCons = new FormData(consForm);
let request = new XMLHttpRequest();
		request.open("POST", "./server.php");
		request.setRequestHeader(
				"Content-Type",
				"application/x-www-form-urlencoded"
		);
		request.send(formDataCons);

		let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Недостаточно данных";



		let div = document.createElement('div');
	div.classList.add('status');
	
	div.style.textAlign = 'center';
	consForm.appendChild(div);
	function submitMessage(text){
		div.innerHTML = text;
		div.style.textAlign = 'center';
		setTimeout(function(){
			div.remove();
			popupConsultation.style.display = 'none';
			document.body.style.overflow = '';
		}, 3000);
	}
	
	request.onreadystatechange = function() {
		if (request.status === 200 && request.status < 300) {
						submitMessage(message.success);
				} else {
					submitMessage(message.failure);
				}
};
clearInputs();
});
phoneConsForm.addEventListener("input", mask, false);

nameConsForm.addEventListener('input', allowRusWords);
}
export default  consultation;