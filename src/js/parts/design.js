function design(){
	console.log('design');
	document.body.addEventListener('click', e => {
		if (e.target.tagName == 'BUTTON' && e.target.classList.contains('button-design')) {
			console.log(e.target);
			showPopupDesign();
		}
	});

	//popup design
	//let btnsDesign         = document.getElementsByClassName('button-design');
	let btnsPopupClose     = document.querySelectorAll('.popup-close');//X
	
	let popupDesignOverlay = document.querySelector('.popup-design');//overlay
	
    
    
	//closing popup by clicking on overlay
	popupDesignOverlay.addEventListener('click', hidePopupModal);
	

	//Функции закрытия модальных окон
	function hidePopupModal(e){
		console.log('modal design closed');
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-design')){
			popupDesignOverlay.style.display = 'none';
			document.body.style.overflow = '';
		}			
	}

			
	
	
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
		let popupDesignModal = document.querySelector('.popup-design');
		popupDesignModal.style.display = 'block';
		
		document.body.style.overflow = 'hidden';
	}
	let popupOk    = document.querySelector('.popup-ok'),
					popupError = document.querySelector('.popup-error'),
					nameDF     = document.querySelector('#nameDF'),
     commentDF  = document.querySelector('#commentDF'),
     phoneDF    = document.querySelector('.phoneDF'),
					emailDF    = document.querySelector('#emailDF'),
					
     designForm = document.forms[0],
	
	    formDFInput = document.querySelectorAll("input, textarea");
	

	let hidePopupModalSuccess = e => {
		console.log('modal success closed');
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-ok')){
			popupOk.style.display = 'none';
			document.body.style.overflow = '';
		}	
	}

	let hidePopupModalError = e => {
		console.log('modal error closed');
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-error')){
			popupError.style.display = 'none';
			document.body.style.overflow = '';
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
					phoneDF.addEventListener("input", mask, false)
	    nameDF.addEventListener('input', allowRusWords);
	    commentDF.addEventListener('input', allowRusSentences);
	    emailDF.addEventListener('blur', allowEmail);

	//Скрипт к форме дизайн портрета
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Недостаточно данных";

	let statusMessageDF = document.createElement("div");
	statusMessageDF.classList.add("status");
let formDataDF = new FormData(designForm);

	designForm.addEventListener("submit", function(e) {
			e.preventDefault();
			designForm.appendChild(statusMessageDF);
			//AJAX for contact form
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");
			request.setRequestHeader(
					"Content-Type",
					"application/x-www-form-urlencoded"
			);
			request.send(formDataDF);
			
			request.onreadystatechange = function() {
					if (request.status === 200 && request.status < 300) {
								
									statusMessage.innerHTML = message.success;
									//можно  добавлять контент
									popupDesignOverlay.style.display = 'none';
									popupOk.style.display = 'block';
							} else {
									contentDF.innerHTML = message.failure;
									popupDesignOverlay.style.display = 'none';
									popupError.style.display = 'block';
							}
			};
			for (let i = 0; i < formDFInput.length; i++) {
					formDFInput[i].value = ""; // ощищаем поля ввода
			}
	});
	

					
     designForm = document.forms[0],
	
	    formDFInput = document.querySelectorAll("input, textarea");
	

	

	
	
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


	

	

	designForm.addEventListener("submit", function(e) {
			e.preventDefault();
			designForm.appendChild(statusMessageDF);
			//AJAX for contact form
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");
			request.setRequestHeader(
					"Content-Type",
					"application/x-www-form-urlencoded"
			);
			request.send(formDataDF);
			
			request.onreadystatechange = function() {
					if (request.status === 200 && request.status < 300) {
								
									statusMessage.innerHTML = message.success;
									//можно  добавлять контент
									popupDesignOverlay.style.display = 'none';
									popupOk.style.display = 'block';
							} else {
									contentDF.innerHTML = message.failure;
									popupDesignOverlay.style.display = 'none';
									popupError.style.display = 'block';
							}
			};
			for (let i = 0; i < formDFInput.length; i++) {
					formDFInput[i].value = ""; // ощищаем поля ввода
			}
	});
	phoneDF.addEventListener("input", mask, false);
	nameDF.addEventListener('input', allowRusWords);
	commentDF.addEventListener('input', allowRusSentences);
	emailDF.addEventListener('blur', allowEmail);
	popupOk.addEventListener('click', hidePopupModalSuccess);
	popupError.addEventListener('click', hidePopupModalError);
}

export default  design;