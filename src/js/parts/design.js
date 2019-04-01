function design(){
	console.log('design');

	document.body.addEventListener('click', e => {
		if (e.target.tagName == 'BUTTON' && e.target.classList.contains('button-design')) {
			console.log(e.target);
			showPopupDesign();
		}
	});


	let btnsPopupClose     = document.querySelectorAll('.popup-close'),
					popupDesignOverlay = document.querySelector('.popup-design');
					
	//Функции закрытия модальных окон
	function hidePopupModal(e){
		
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-design')){
			popupDesignOverlay.style.display = 'none';
			document.body.style.overflow = '';
		}	
	}
    
    
	//closing popup by clicking on overlay
	popupDesignOverlay.addEventListener('click', hidePopupModal);
	
	
//closing by clicking on the button "X"
	for(let i = 0; i < btnsPopupClose.length; i++){
		let btnPopupClose = btnsPopupClose[i];
		btnPopupClose.addEventListener('click', hidePopupModal);
		
	}




	function showPopupDesign(){
		let popupsDialog = document.querySelectorAll('.popup-dialog');
		for(let i = 0; i < popupsDialog.length; i++){
			let popupDialog = popupsDialog[i];
			popupDialog.style.display = 'block';
		}
		popupDesignOverlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}



	//let popupOk    = document.querySelector('.popup-ok'),
					//popupError = document.querySelector('.popup-error'),
					let nameDF     = document.querySelector('#nameDF'),
     commentDF  = document.querySelector('#commentDF'),
     phoneDF    = document.querySelector('.phoneDF'),
					emailDF    = document.querySelector('#emailDF'),
					
     designForm = document.getElementById('myform'),
	
					
					formDFInput = designForm.elements;
					let clearInputs = () => {
						for (let i = 0; i < formDFInput.length; i++) {
							let input = formDFInput[i];
							input.value = '';
						}
					}

	// let hidePopupModalSuccess = e => {
	// 	console.log('modal success closed');
	// 	if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-ok')){
	// 		popupOk.style.display = 'none';
	// 		document.body.style.overflow = '';
	// 	}	
	// }

	// let hidePopupModalError = e => {
	// 	console.log('modal error closed');
	// 	if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-error')){
	// 		popupError.style.display = 'none';
	// 		document.body.style.overflow = '';
	// 	}	
	// }
	
	
		
	
	
					
	//Скрипт к форме дизайн портрета
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Недостаточно данных";


	let divDesign = document.createElement('div');
	divDesign.classList.add('status1');
	
	divDesign.style.textAlign = 'center';

	
	

	designForm.addEventListener("submit", function(e) {
			e.preventDefault();
		
let formDataDF = new FormData(designForm);
			
			let request = new XMLHttpRequest();
			request.open("POST", "./server.php");
			request.setRequestHeader(
					"Content-Type",
					"application/x-www-form-urlencoded"
			);
			request.send(formDataDF);
			let message = new Object();
			message.loading = "Загрузка...";
			message.success = "Спасибо! Скоро мы с вами свяжемся";
			message.failure = "Недостаточно данных";
			let div = document.createElement('div');
	div.classList.add('status');
	
	div.style.textAlign = 'center';
	designForm.appendChild(div);
	function submitMessage(text){
		div.innerHTML = text;
		div.style.textAlign = 'center';
		
		setTimeout(function(){
			div.remove();
			popupDesignOverlay.style.display = 'none';
			document.body.style.overflow = '';
		}, 5000);
		
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
	

	
	function allowRusWords(){
	
		let regexp = /[^А-ЯЁ\s][^\s]/igm;
		this.value = this.value.replace(regexp, '');
	}
	function allowRusSentences(){
		
		let regexp = /[^А-ЯЁ\s,\.!?][^\s]/igm;
		this.value = this.value.replace(regexp, '');
	}
	function allowEmail(){
		
		let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
		
		if(this.value.match(regexp)){
			return true;
		} else {
			
			let mes = document.createElement('div');
			mes.innerHTML = 'Неверный email';
			popupDesignOverlay.appendChild(mes);
			
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

	phoneDF.addEventListener("input", mask, false);
	nameDF.addEventListener('input', allowRusWords);
	commentDF.addEventListener('input', allowRusSentences);
	emailDF.addEventListener('blur', allowEmail);
	//popupOk.addEventListener('click', hidePopupModalSuccess);
	//popupError.addEventListener('click', hidePopupModalError);
}

export default  design;