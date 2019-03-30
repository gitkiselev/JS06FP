function consultation(){
	console.log('consultation');
	let giftModal = document.querySelector('.popup-gift'),
	form = document.querySelector('.form'),
	allInputs = form.elements,
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
		console.log('hide design or consultation');
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
form.addEventListener("submit", function(e) {
	e.preventDefault();
	designForm.appendChild(statusMessageDF);
	//AJAX for contact form
	let request = new XMLHttpRequest();
	request.open("POST", "./server.php");
	request.setRequestHeader(
			"Content-Type",
			"application/x-www-form-urlencoded"
	);
	request.send(formDataDF);
	
	request.onreadystatechange = function() {
		if (request.status === 200 && request.status < 300) {
						popupOk.style.display = 'block';
				} else {
						popupError.style.display = 'block';
				}
};
	clearInputs();
});

phoneConsForm.addEventListener("input", mask, false);
	nameConsForm.addEventListener('input', allowRusWords);




}
export default  consultation;